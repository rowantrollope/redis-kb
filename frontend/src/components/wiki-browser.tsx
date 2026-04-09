"use client";

import { useEffect, useMemo, useState } from "react";

import type { ReactNode } from "react";

import type { WikiDoc } from "@/app/page";

type WikiBrowserProps = {
  docs: WikiDoc[];
  initialSelectedPath: string;
};

type ChatMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  time: string;
};

type DocKind = "overview" | "index" | "log" | "topic" | "note" | "runbook" | "page";

type TopicGroup = {
  slug: string;
  label: string;
  digest: WikiDoc | null;
  notes: WikiDoc[];
  sourceCount: number;
  summary: string;
};

const TOPIC_ORDER = [
  "operations",
  "performance",
  "resilience",
  "persistence",
  "cluster",
  "security",
  "sentinels",
  "troubleshooting",
];

function formatTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function titleCase(value: string) {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function normalizeDocTitle(title: string) {
  return title.replace(/\s+Digest$/i, "").trim();
}

function getDocKind(doc: WikiDoc): DocKind {
  if (doc.relPath === "wiki/overview.md") {
    return "overview";
  }
  if (doc.relPath === "wiki/index.md") {
    return "index";
  }
  if (doc.relPath === "wiki/log.md") {
    return "log";
  }

  const match = doc.relPath.match(/^wiki\/pages\/([^/]+)\/([^/]+)\.md$/);
  if (!match) {
    return "page";
  }

  const [, topic, slug] = match;
  if (topic === "runbooks") {
    return "runbook";
  }
  if (slug === `${topic}-digest`) {
    return "topic";
  }
  return "note";
}

function getTopicSlug(doc: WikiDoc) {
  const match = doc.relPath.match(/^wiki\/pages\/([^/]+)\//);
  return match?.[1] ?? null;
}

function getTopicLabel(doc: WikiDoc, slug: string) {
  if (getDocKind(doc) === "topic") {
    return normalizeDocTitle(doc.title);
  }
  return titleCase(slug);
}

function getDocEyebrow(doc: WikiDoc) {
  const kind = getDocKind(doc);
  if (kind === "overview") {
    return "Overview";
  }
  if (kind === "index") {
    return "Index";
  }
  if (kind === "log") {
    return "Change Log";
  }
  if (kind === "topic") {
    return "Topic Hub";
  }
  if (kind === "note") {
    return "Operational Note";
  }
  if (kind === "runbook") {
    return "Runbook";
  }
  return "Page";
}

function getDocContext(doc: WikiDoc) {
  const topic = getTopicSlug(doc);
  if (!topic || topic === "runbooks") {
    return null;
  }
  return titleCase(topic);
}

function inlineNodes(
  text: string,
  docsByTitle: Map<string, WikiDoc>,
  docsByPath: Map<string, WikiDoc>,
  onSelectDoc: (path: string) => void,
): ReactNode[] {
  const pattern =
    /\[\[([^[\]]+)\]\]|\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(pattern)) {
    const matchIndex = match.index ?? 0;
    if (matchIndex > lastIndex) {
      parts.push(text.slice(lastIndex, matchIndex));
    }

    const [, wikiTarget, linkLabel, linkHref, code, bold, italic] = match;

    if (wikiTarget) {
      const doc = docsByTitle.get(wikiTarget.toLowerCase());
      if (doc) {
        parts.push(
          <button
            key={`${wikiTarget}-${matchIndex}`}
            type="button"
            className="wikilink"
            onClick={() => onSelectDoc(doc.relPath)}
          >
            {wikiTarget}
          </button>,
        );
      } else {
        parts.push(`[[${wikiTarget}]]`);
      }
    } else if (linkLabel && linkHref) {
      const doc = docsByPath.get(linkHref);
      if (doc) {
        parts.push(
          <button
            key={`${linkHref}-${matchIndex}`}
            type="button"
            className="wikilink"
            onClick={() => onSelectDoc(doc.relPath)}
          >
            {linkLabel}
          </button>,
        );
      } else {
        parts.push(
          <a
            key={`${linkHref}-${matchIndex}`}
            href={linkHref}
            target={linkHref.startsWith("http") ? "_blank" : undefined}
            rel={linkHref.startsWith("http") ? "noreferrer" : undefined}
          >
            {linkLabel}
          </a>,
        );
      }
    } else if (code) {
      parts.push(<code key={`${code}-${matchIndex}`}>{code}</code>);
    } else if (bold) {
      parts.push(<strong key={`${bold}-${matchIndex}`}>{bold}</strong>);
    } else if (italic) {
      parts.push(<em key={`${italic}-${matchIndex}`}>{italic}</em>);
    }

    lastIndex = matchIndex + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

function extractSections(content: string) {
  let mainBody = content.trim();
  let takeaways: string | null = null;
  let seeAlso: string[] = [];

  const takeawaysMatch = mainBody.match(/^##\s*Key Takeaways\s*\n([\s\S]*?)(?=\n##\s|\n---|\Z)/m);
  if (takeawaysMatch) {
    takeaways = takeawaysMatch[1].trim();
    mainBody = mainBody.replace(takeawaysMatch[0], "").trim();
  }

  const seeAlsoMatch = mainBody.match(/^##\s*See Also\s*\n([\s\S]*?)(?=\n##\s|\n---|\Z)/m);
  if (seeAlsoMatch) {
    seeAlso = seeAlsoMatch[1]
      .split("\n")
      .map((line) => line.replace(/^[-*]\s+/, "").trim())
      .filter(Boolean);
    mainBody = mainBody.replace(seeAlsoMatch[0], "").trim();
  }

  return { mainBody, takeaways, seeAlso };
}

function renderMarkdown(
  markdown: string,
  docsByTitle: Map<string, WikiDoc>,
  docsByPath: Map<string, WikiDoc>,
  onSelectDoc: (path: string) => void,
) {
  const lines = markdown.split("\n");
  const blocks: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const raw = lines[index];
    const line = raw.trim();

    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const language = line.slice(3).trim();
      const codeLines: string[] = [];
      index += 1;

      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }

      index += 1;
      blocks.push(
        <pre key={`pre-${index}`}>
          <code className={language ? `language-${language}` : undefined}>{codeLines.join("\n")}</code>
        </pre>,
      );
      continue;
    }

    const heading = raw.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      const depth = heading[1].length;
      const text = heading[2].trim();
      index += 1;

      if (depth === 1) {
        blocks.push(<h1 key={`h1-${index}`}>{text}</h1>);
      } else if (depth === 2) {
        blocks.push(<h2 key={`h2-${index}`}>{text}</h2>);
      } else if (depth === 3) {
        blocks.push(<h3 key={`h3-${index}`}>{text}</h3>);
      } else {
        blocks.push(<h4 key={`h4-${index}`}>{text}</h4>);
      }
      continue;
    }

    if (line === "---") {
      blocks.push(<hr key={`hr-${index}`} />);
      index += 1;
      continue;
    }

    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("> ")) {
        quoteLines.push(lines[index].trim().slice(2));
        index += 1;
      }

      blocks.push(
        <blockquote key={`blockquote-${index}`}>
          <p>{inlineNodes(quoteLines.join(" "), docsByTitle, docsByPath, onSelectDoc)}</p>
        </blockquote>,
      );
      continue;
    }

    if (line.startsWith("- ")) {
      const items: ReactNode[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(
          <li key={`ul-${index}`}>
            {inlineNodes(lines[index].trim().slice(2), docsByTitle, docsByPath, onSelectDoc)}
          </li>,
        );
        index += 1;
      }

      blocks.push(<ul key={`ul-wrap-${index}`}>{items}</ul>);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: ReactNode[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(
          <li key={`ol-${index}`}>
            {inlineNodes(lines[index].trim().replace(/^\d+\.\s+/, ""), docsByTitle, docsByPath, onSelectDoc)}
          </li>,
        );
        index += 1;
      }

      blocks.push(<ol key={`ol-wrap-${index}`}>{items}</ol>);
      continue;
    }

    const paragraph = [line];
    index += 1;

    while (index < lines.length) {
      const next = lines[index].trim();
      if (
        !next ||
        next.startsWith("```") ||
        next.startsWith("> ") ||
        next.startsWith("- ") ||
        /^\d+\.\s+/.test(next) ||
        /^#{1,4}\s+/.test(next) ||
        next === "---"
      ) {
        break;
      }
      paragraph.push(next);
      index += 1;
    }

    blocks.push(
      <p key={`p-${index}`}>
        {inlineNodes(paragraph.join(" "), docsByTitle, docsByPath, onSelectDoc)}
      </p>,
    );
  }

  return blocks;
}

function scorePassage(passage: string, terms: string[]) {
  const lower = passage.toLowerCase();
  return terms.reduce((score, term) => {
    if (!lower.includes(term)) {
      return score;
    }
    return score + (lower.split(term).length - 1);
  }, 0);
}

function buildLocalAnswer(query: string, doc: WikiDoc) {
  const terms = query
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((term) => term.length > 2);

  if (terms.length === 0 || /summary|summarize|overview|what.*about|gist/.test(query.toLowerCase())) {
    return `Here’s the short version of "${doc.title}":\n\n${doc.excerpt || "This page is short, so the main value is in reading it directly."}`;
  }

  const passages = doc.content
    .split(/\n\s*\n/)
    .map((passage) => passage.replace(/^#+\s+/gm, "").trim())
    .filter(Boolean);

  const matches = passages
    .map((passage) => ({ passage, score: scorePassage(passage, terms) }))
    .filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, 3);

  if (matches.length === 0) {
    return `I couldn't find a direct match for that in ${doc.title}. Try terms from the page title, headings, or tags.`;
  }

  return `From ${doc.title}:\n\n${matches
    .map((item) => `- ${item.passage.replace(/\s+/g, " ").slice(0, 260)}`)
    .join("\n")}`;
}

function fileMatchesQuery(doc: WikiDoc, query: string): boolean {
  const needle = query.trim().toLowerCase();
  if (!needle) {
    return true;
  }

  return [doc.title, doc.relPath, doc.excerpt, doc.content, doc.rawContent, doc.tags.join(" ")]
    .join(" ")
    .toLowerCase()
    .includes(needle);
}

function sortByTopicOrder(left: string, right: string) {
  const leftIndex = TOPIC_ORDER.indexOf(left);
  const rightIndex = TOPIC_ORDER.indexOf(right);
  if (leftIndex === -1 && rightIndex === -1) {
    return left.localeCompare(right);
  }
  if (leftIndex === -1) {
    return 1;
  }
  if (rightIndex === -1) {
    return -1;
  }
  return leftIndex - rightIndex;
}

export function WikiBrowser({ docs, initialSelectedPath }: WikiBrowserProps) {
  const [selectedPath, setSelectedPath] = useState(initialSelectedPath);
  const [query, setQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [viewMode, setViewMode] = useState<"rendered" | "source">("rendered");
  const [openTopics, setOpenTopics] = useState<Set<string>>(
    () => new Set(["operations", "performance", "resilience"]),
  );

  const docsByTitle = useMemo(() => new Map(docs.map((doc) => [doc.title.toLowerCase(), doc])), [docs]);
  const docsByPath = useMemo(() => new Map(docs.map((doc) => [doc.relPath, doc])), [docs]);

  useEffect(() => {
    const applyHash = () => {
      const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (hash && docsByPath.has(hash)) {
        setSelectedPath(hash);
      }
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [docsByPath]);

  const selectedDoc = docsByPath.get(selectedPath) ?? docsByPath.get(initialSelectedPath) ?? docs[0];

  useEffect(() => {
    setChatMessages([
      {
        id: `system-${selectedDoc.relPath}`,
        role: "system",
        content: "New wiki page loaded — chat reset",
        time: formatTime(),
      },
    ]);
  }, [selectedDoc.relPath]);

  const startDocs = useMemo(() => {
    const order = ["wiki/overview.md", "wiki/index.md", "wiki/log.md"];
    return order
      .map((path) => docsByPath.get(path))
      .filter((doc): doc is WikiDoc => Boolean(doc));
  }, [docsByPath]);

  const runbooks = useMemo(() => {
    return docs
      .filter((doc) => getDocKind(doc) === "runbook")
      .sort((left, right) => left.title.localeCompare(right.title));
  }, [docs]);

  const topicGroups = useMemo(() => {
    const groups = new Map<string, TopicGroup>();

    for (const doc of docs) {
      const kind = getDocKind(doc);
      const slug = getTopicSlug(doc);

      if (!slug || slug === "runbooks" || (kind !== "topic" && kind !== "note")) {
        continue;
      }

      const current = groups.get(slug) ?? {
        slug,
        label: getTopicLabel(doc, slug),
        digest: null,
        notes: [],
        sourceCount: 0,
        summary: "",
      };

      if (kind === "topic") {
        current.digest = doc;
        current.label = getTopicLabel(doc, slug);
        current.sourceCount = doc.sourceCount ?? current.sourceCount;
        current.summary = doc.excerpt || current.summary;
      } else {
        current.notes.push(doc);
      }

      groups.set(slug, current);
    }

    return [...groups.values()]
      .map((group) => ({
        ...group,
        notes: group.notes.sort((left, right) => left.title.localeCompare(right.title)),
      }))
      .sort((left, right) => sortByTopicOrder(left.slug, right.slug));
  }, [docs]);

  const queryText = query.trim().toLowerCase();
  const matchingDocs = useMemo(() => {
    if (!queryText) {
      return [];
    }
    return docs.filter((doc) => fileMatchesQuery(doc, queryText));
  }, [docs, queryText]);

  const searchGroups = useMemo(() => {
    if (!queryText) {
      return null;
    }

    return {
      core: matchingDocs.filter((doc) => ["overview", "index", "log", "page"].includes(getDocKind(doc))),
      topics: matchingDocs.filter((doc) => getDocKind(doc) === "topic"),
      notes: matchingDocs.filter((doc) => getDocKind(doc) === "note"),
      runbooks: matchingDocs.filter((doc) => getDocKind(doc) === "runbook"),
    };
  }, [matchingDocs, queryText]);

  const effectiveOpenTopics = useMemo(() => {
    if (!queryText) {
      return openTopics;
    }

    const matchingSlugs = new Set<string>();
    for (const doc of matchingDocs) {
      const slug = getTopicSlug(doc);
      if (slug && slug !== "runbooks") {
        matchingSlugs.add(slug);
      }
    }
    return matchingSlugs;
  }, [matchingDocs, openTopics, queryText]);

  const { mainBody, takeaways, seeAlso } = extractSections(selectedDoc.content);
  const relatedNames = [...new Set([...seeAlso, ...selectedDoc.relatedTitles])];

  const handleSelectDoc = (path: string) => {
    setSelectedPath(path);
    window.location.hash = encodeURIComponent(path);
    setSidebarOpen(false);
  };

  const handleToggleTopic = (slug: string) => {
    setOpenTopics((current) => {
      const next = new Set(current);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
  };

  const handleSendChat = () => {
    const text = chatInput.trim();
    if (!text) {
      return;
    }

    setChatMessages((messages) => [
      ...messages,
      { id: `user-${Date.now()}`, role: "user", content: text, time: formatTime() },
      {
        id: `assistant-${Date.now() + 1}`,
        role: "assistant",
        content: buildLocalAnswer(text, selectedDoc),
        time: formatTime(),
      },
    ]);
    setChatInput("");
  };

  const selectedEyebrow = getDocEyebrow(selectedDoc);
  const selectedContext = getDocContext(selectedDoc);

  return (
    <>
      <div className="topbar">
        <button
          className="hamburger"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setSidebarOpen((open) => !open)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </button>
        <span className="topbar-logo">Redis KB</span>
      </div>

      <div className={`chat-panel ${chatOpen ? "open" : ""}`} id="chatPanel">
        <div className="chat-panel-header">
          <div className="chat-panel-header-row">
            <div>
              <div className="chat-panel-header-title">Ask about this page</div>
              <div className="chat-panel-header-article">{selectedDoc.title}</div>
            </div>
            <button type="button" className="chat-close-btn" onClick={() => setChatOpen(false)} aria-label="Close chat">
              ×
            </button>
          </div>
        </div>

        <div className="chat-messages">
          {chatMessages.map((message) => (
            <div key={message.id} className={`chat-message ${message.role}`}>
              <div className="chat-bubble chat-bubble-text">{message.content}</div>
              {message.role !== "system" ? <div className="chat-timestamp">{message.time}</div> : null}
            </div>
          ))}
        </div>

        <div className="chat-input-area">
          <textarea
            className="chat-textarea"
            placeholder="Ask a question about this topic…"
            rows={1}
            value={chatInput}
            onChange={(event) => setChatInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                handleSendChat();
              }
            }}
          />
          <button type="button" className="chat-send-btn" onClick={handleSendChat}>
            Send
          </button>
        </div>
      </div>

      <button
        type="button"
        className={`chat-toggle-btn ${chatOpen ? "panel-open" : ""}`}
        onClick={() => setChatOpen((open) => !open)}
      >
        {chatOpen ? "Close" : "Ask AI"}
      </button>

      <div className="layout">
        <div className={`overlay ${sidebarOpen ? "visible" : ""}`} onClick={() => setSidebarOpen(false)} aria-hidden="true" />

        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="sidebar-header">
            <button className="sidebar-logo" type="button" onClick={() => handleSelectDoc(initialSelectedPath)}>
              <div className="sidebar-logo-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 3h4v4H3V3zm6 0h4v4h-4V3zM3 9h4v4H3V9zm6 2h1v1h1v-1h1v-1h-1V9h-1v1H9v1z" fill="white" />
                </svg>
              </div>
              <span className="sidebar-logo-text">Redis KB</span>
            </button>

            <button
              type="button"
              className="sidebar-pill-link"
              onClick={() => {
                const logDoc = docsByPath.get("wiki/log.md");
                if (logDoc) {
                  handleSelectDoc(logDoc.relPath);
                }
              }}
            >
              <span className="sidebar-pill-dot" />
              What&apos;s New
            </button>

            <div className="search-wrap">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                className="search-input"
                type="text"
                placeholder="Search topics, notes, runbooks..."
                autoComplete="off"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>

          <nav className="sidebar-nav">
            {queryText ? (
              <>
                <div className="nav-search-summary">
                  {matchingDocs.length} result{matchingDocs.length === 1 ? "" : "s"}
                </div>

                {searchGroups && searchGroups.core.length > 0 ? (
                  <>
                    <div className="nav-section">Start Here</div>
                    {searchGroups.core.map((doc) => (
                      <button
                        key={doc.relPath}
                        type="button"
                        className={`nav-home-link ${selectedDoc.relPath === doc.relPath ? "active" : ""}`}
                        onClick={() => handleSelectDoc(doc.relPath)}
                      >
                        <span className="nav-home-label">{doc.title}</span>
                        <span className="nav-home-meta">{getDocEyebrow(doc)}</span>
                      </button>
                    ))}
                  </>
                ) : null}

                {searchGroups && searchGroups.topics.length > 0 ? (
                  <>
                    <div className="nav-section">Topic Hubs</div>
                    {searchGroups.topics.map((doc) => (
                      <button
                        key={doc.relPath}
                        type="button"
                        className={`nav-home-link ${selectedDoc.relPath === doc.relPath ? "active" : ""}`}
                        onClick={() => handleSelectDoc(doc.relPath)}
                      >
                        <span className="nav-home-label">{normalizeDocTitle(doc.title)}</span>
                        <span className="nav-home-meta">
                          {doc.sourceCount ? `${doc.sourceCount} sources` : "Topic hub"}
                        </span>
                      </button>
                    ))}
                  </>
                ) : null}

                {searchGroups && searchGroups.notes.length > 0 ? (
                  <>
                    <div className="nav-section">Operational Notes</div>
                    {searchGroups.notes.map((doc) => (
                      <button
                        key={doc.relPath}
                        type="button"
                        className={`nav-home-link ${selectedDoc.relPath === doc.relPath ? "active" : ""}`}
                        onClick={() => handleSelectDoc(doc.relPath)}
                      >
                        <span className="nav-home-label">{doc.title}</span>
                        <span className="nav-home-meta">{getDocContext(doc) ?? "Note"}</span>
                      </button>
                    ))}
                  </>
                ) : null}

                {searchGroups && searchGroups.runbooks.length > 0 ? (
                  <>
                    <div className="nav-section">Runbooks</div>
                    {searchGroups.runbooks.map((doc) => (
                      <button
                        key={doc.relPath}
                        type="button"
                        className={`nav-home-link ${selectedDoc.relPath === doc.relPath ? "active" : ""}`}
                        onClick={() => handleSelectDoc(doc.relPath)}
                      >
                        <span className="nav-home-label">{doc.title}</span>
                        <span className="nav-home-meta">Runbook</span>
                      </button>
                    ))}
                  </>
                ) : null}

                {matchingDocs.length === 0 ? <div className="nav-empty">No matching wiki pages.</div> : null}
              </>
            ) : (
              <>
                <div className="nav-section">Start Here</div>
                <div className="nav-home-grid">
                  {startDocs.map((doc) => (
                    <button
                      key={doc.relPath}
                      type="button"
                      className={`nav-home-card ${selectedDoc.relPath === doc.relPath ? "active" : ""}`}
                      onClick={() => handleSelectDoc(doc.relPath)}
                    >
                      <span className="nav-home-card-kicker">{getDocEyebrow(doc)}</span>
                      <span className="nav-home-card-title">{doc.title}</span>
                      <span className="nav-home-card-copy">{doc.excerpt}</span>
                    </button>
                  ))}
                </div>

                <div className="nav-section">Topic Hubs</div>
                {topicGroups.map((group) => {
                  const digest = group.digest;
                  const isSelected = digest ? selectedDoc.relPath === digest.relPath : false;
                  const isOpen = effectiveOpenTopics.has(group.slug);

                  return (
                    <div key={group.slug} className={`nav-hub ${isOpen ? "open" : ""}`}>
                      {digest ? (
                        <button
                          type="button"
                          className={`nav-hub-link ${isSelected ? "active" : ""}`}
                          onClick={() => handleSelectDoc(digest.relPath)}
                        >
                          <span className="nav-hub-main">
                            <span className="nav-hub-title">{group.label}</span>
                            <span className="nav-hub-summary">{group.summary}</span>
                          </span>
                          <span className="nav-hub-badge">
                            {group.sourceCount > 0 ? `${group.sourceCount}` : "Hub"}
                          </span>
                        </button>
                      ) : null}

                      {group.notes.length > 0 ? (
                        <>
                          <button type="button" className="nav-hub-toggle" onClick={() => handleToggleTopic(group.slug)}>
                            <span>Supporting pages</span>
                            <span className={`nav-hub-chevron ${isOpen ? "open" : ""}`}>›</span>
                          </button>

                          {isOpen ? (
                            <div className="nav-hub-body">
                              {group.notes.map((note) => (
                                <button
                                  key={note.relPath}
                                  type="button"
                                  className={`nav-article ${selectedDoc.relPath === note.relPath ? "active" : ""}`}
                                  onClick={() => handleSelectDoc(note.relPath)}
                                >
                                  {note.title}
                                </button>
                              ))}
                            </div>
                          ) : null}
                        </>
                      ) : null}
                    </div>
                  );
                })}

                <div className="nav-section">Runbooks</div>
                {runbooks.map((doc) => (
                  <button
                    key={doc.relPath}
                    type="button"
                    className={`nav-home-link ${selectedDoc.relPath === doc.relPath ? "active" : ""}`}
                    onClick={() => handleSelectDoc(doc.relPath)}
                  >
                    <span className="nav-home-label">{doc.title}</span>
                    <span className="nav-home-meta">Runbook</span>
                  </button>
                ))}
              </>
            )}
          </nav>
        </aside>

        <main className={`main ${chatOpen ? "chat-open" : ""}`} id="mainContent">
          <div className="content-wrap">
            <div className="article-header">
              <div className="article-kicker-row">
                <span className="article-kicker">{selectedEyebrow}</span>
                {selectedContext ? <span className="article-kicker-divider">/</span> : null}
                {selectedContext ? <span className="article-kicker-context">{selectedContext}</span> : null}
              </div>

              {selectedDoc.tags.length > 0 || selectedDoc.lastUpdated || selectedDoc.sourceCount ? (
                <div className="article-meta">
                  {selectedDoc.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                  {selectedDoc.sourceCount ? <span className="article-count">{selectedDoc.sourceCount} sources</span> : null}
                  {selectedDoc.lastUpdated ? <span className="article-date">Updated {selectedDoc.lastUpdated}</span> : null}
                </div>
              ) : null}

              <h1 className="article-title">{selectedDoc.title}</h1>
              <p className="article-subtitle">{selectedDoc.relPath}</p>

              <div className="view-toggle">
                <button
                  type="button"
                  className={`view-toggle-btn ${viewMode === "rendered" ? "active" : ""}`}
                  onClick={() => setViewMode("rendered")}
                >
                  Rendered
                </button>
                <button
                  type="button"
                  className={`view-toggle-btn ${viewMode === "source" ? "active" : ""}`}
                  onClick={() => setViewMode("source")}
                >
                  Markdown
                </button>
              </div>
            </div>

            <div className="article-body">
              {viewMode === "rendered" ? (
                <>
                  {renderMarkdown(mainBody, docsByTitle, docsByPath, handleSelectDoc)}

                  {takeaways ? (
                    <div className="callout-takeaways">
                      <div className="callout-title">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.1L6 8l-2.78 1.56.53-3.1L1.5 4.27l3.11-.45L6 1z"
                            fill="currentColor"
                          />
                        </svg>
                        Key Takeaways
                      </div>
                      {renderMarkdown(takeaways, docsByTitle, docsByPath, handleSelectDoc)}
                    </div>
                  ) : null}

                  {relatedNames.length > 0 ? (
                    <div className="see-also-section">
                      <div className="see-also-title">See Also</div>
                      <div className="see-also-grid">
                        {relatedNames.map((name) => {
                          const cleanName = name.replace(/\[\[|\]\]/g, "").trim();
                          const article = docsByTitle.get(cleanName.toLowerCase());

                          return (
                            <button
                              key={cleanName}
                              type="button"
                              className="see-also-card"
                              onClick={() => {
                                if (article) {
                                  handleSelectDoc(article.relPath);
                                }
                              }}
                            >
                              <div className="see-also-card-icon">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                  <path d="M2 3h10v8H2V3zm2 2h6M4 7h4" stroke="#0075de" strokeWidth="1.25" strokeLinecap="round" />
                                </svg>
                              </div>
                              <span>{article?.title ?? cleanName}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </>
              ) : (
                <pre className="raw-file-view">
                  <code>{selectedDoc.rawContent}</code>
                </pre>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
