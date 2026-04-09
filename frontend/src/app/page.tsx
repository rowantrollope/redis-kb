import { readFileSync, readdirSync } from "fs";
import path from "path";

import { WikiBrowser } from "@/components/wiki-browser";

export type WikiDoc = {
  id: string;
  title: string;
  excerpt: string;
  relPath: string;
  content: string;
  rawContent: string;
  tags: string[];
  lastUpdated: string | null;
  headings: Array<{
    depth: number;
    text: string;
    anchor: string;
  }>;
  relatedTitles: string[];
  wordCount: number;
};

type Frontmatter = {
  title?: string;
  lastUpdated: string | null;
  tags: string[];
  sourceCount: number | null;
};

function titleCase(value: string) {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseFrontmatter(raw: string): { frontmatter: Frontmatter; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) {
    return {
      frontmatter: { lastUpdated: null, tags: [], sourceCount: null },
      content: raw,
    };
  }

  const payload = match[1];
  const content = raw.slice(match[0].length);
  const title = payload.match(/^title:\s*"?(.*?)"?$/m)?.[1];
  const lastUpdated = payload.match(/^last_updated:\s*(.+)$/m)?.[1]?.trim() ?? null;
  const sourceCountMatch = payload.match(/^source_count:\s*(\d+)$/m);
  const tagsMatch = payload.match(/^tags:\s*\[(.*)\]$/m);
  const tags =
    tagsMatch?.[1]
      ?.split(",")
      .map((tag) => tag.trim().replace(/^["']|["']$/g, ""))
      .filter(Boolean) ?? [];

  return {
    frontmatter: {
      title,
      lastUpdated,
      tags,
      sourceCount: sourceCountMatch ? Number(sourceCountMatch[1]) : null,
    },
    content,
  };
}

function walkMarkdownFiles(root: string): string[] {
  return readdirSync(root, { withFileTypes: true })
    .flatMap((entry) => {
      const fullPath = path.join(root, entry.name);
      if (entry.isDirectory()) {
        return walkMarkdownFiles(fullPath);
      }

      return entry.name.endsWith(".md") ? [fullPath] : [];
    })
    .sort();
}

function collectHeadings(content: string, docId: string) {
  const counts = new Map<string, number>();

  return content
    .split("\n")
    .map((line) => line.match(/^(#{1,3})\s+(.+)$/))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => {
      const depth = match[1].length;
      const text = match[2].trim();
      const base = `${docId}-${slugify(text)}`;
      const count = counts.get(base) ?? 0;
      counts.set(base, count + 1);

      return {
        depth,
        text,
        anchor: count === 0 ? base : `${base}-${count + 1}`,
      };
    });
}

function collectDocs(): WikiDoc[] {
  const wikiRoot = path.join(
    /* turbopackIgnore: true */ process.cwd(),
    "..",
    "wiki",
  );
  const docPaths = walkMarkdownFiles(wikiRoot);

  return docPaths.map((filePath) => {
    const raw = readFileSync(filePath, "utf8");
    const { frontmatter, content } = parseFrontmatter(raw);
    const cleaned = content
      .split("\n")
      .filter((line) => !line.startsWith("#"))
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
    const title =
      frontmatter.title ??
      content.match(/^#\s+(.+)$/m)?.[1] ??
      titleCase(path.basename(filePath, ".md"));
    const relPath = path.relative(path.join(process.cwd(), ".."), filePath);
    const relatedTitles = [...content.matchAll(/\[\[([^[\]]+)\]\]/g)].map((match) => match[1]);
    const headings = collectHeadings(content, path.basename(filePath, ".md"));
    const wordCount = content.split(/\s+/).filter(Boolean).length;

    return {
      id: path.basename(filePath, ".md"),
      title,
      excerpt: cleaned.slice(0, 320),
      relPath,
      content,
      rawContent: raw,
      tags: frontmatter.tags,
      lastUpdated: frontmatter.lastUpdated,
      headings,
      relatedTitles,
      wordCount,
    };
  }).sort((left, right) => {
    return left.relPath.localeCompare(right.relPath);
  });
}

export default function Home() {
  const docs = collectDocs();
  const initialSelectedPath = docs.find((doc) => doc.id === "index")?.relPath ?? docs[0]?.relPath ?? "";

  return (
    <main>
      <WikiBrowser docs={docs} initialSelectedPath={initialSelectedPath} />
    </main>
  );
}
