import { readFileSync, readdirSync } from "fs";
import path from "path";

import { SearchPanel } from "@/components/search-panel";

export type WikiDoc = {
  id: string;
  title: string;
  excerpt: string;
  relPath: string;
};

function collectDocs(): WikiDoc[] {
  const wikiRoot = path.join(process.cwd(), "..", "wiki");
  const pageRoots = [
    path.join(wikiRoot, "overview.md"),
    path.join(wikiRoot, "index.md"),
    path.join(wikiRoot, "log.md"),
  ];

  const digestsRoot = path.join(wikiRoot, "pages");
  const categories = readdirSync(digestsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  for (const category of categories) {
    const fullCategoryPath = path.join(digestsRoot, category);
    const docs = readdirSync(fullCategoryPath)
      .filter((name) => name.endsWith(".md"))
      .map((name) => path.join(fullCategoryPath, name));
    pageRoots.push(...docs);
  }

  return pageRoots.map((filePath) => {
    const raw = readFileSync(filePath, "utf8");
    const cleaned = raw
      .replace(/^---[\s\S]*?---/m, "")
      .split("\n")
      .filter((line) => !line.startsWith("#"))
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
    const title = raw.match(/^#\s+(.+)$/m)?.[1] ?? path.basename(filePath, ".md");

    return {
      id: path.basename(filePath, ".md"),
      title,
      excerpt: cleaned.slice(0, 320),
      relPath: path.relative(path.join(process.cwd(), ".."), filePath),
    };
  });
}

export default function Home() {
  const docs = collectDocs();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10">
        <header className="rounded-xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
          <p className="text-sm uppercase tracking-widest text-emerald-300">Redis LLM Wiki</p>
          <h1 className="mt-2 text-3xl font-semibold">Redis SRE Knowledge Base</h1>
          <p className="mt-3 max-w-3xl text-slate-300">
            Local-first operational knowledge system for Redis setup, scaling, troubleshooting, and resilience engineering.
            This frontend provides lightweight search over compiled wiki pages.
          </p>
        </header>

        <SearchPanel docs={docs} />
      </div>
    </main>
  );
}
