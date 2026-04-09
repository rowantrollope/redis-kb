"use client";

import { useMemo, useState } from "react";

import type { WikiDoc } from "@/app/page";

type SearchPanelProps = {
  docs: WikiDoc[];
};

export function SearchPanel({ docs }: SearchPanelProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) {
      return docs;
    }

    return docs.filter((doc) => `${doc.title} ${doc.excerpt}`.toLowerCase().includes(needle));
  }, [docs, query]);

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
      <div className="flex flex-col gap-3">
        <label htmlFor="search" className="text-sm font-medium text-slate-200">
          Search wiki documents
        </label>
        <input
          id="search"
          placeholder="Try: sentinel failover, memory optimization, latency"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-emerald-400 transition focus:ring"
        />
      </div>

      <div className="mt-5 grid gap-3">
        {filtered.map((doc) => (
          <article key={doc.id} className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
            <h2 className="text-lg font-semibold text-emerald-300">{doc.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{doc.excerpt || "No excerpt available yet."}</p>
            <p className="mt-3 font-mono text-xs text-slate-400">{doc.relPath}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
