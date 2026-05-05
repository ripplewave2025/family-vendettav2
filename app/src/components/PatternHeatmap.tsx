"use client";

import { motion } from "framer-motion";
import { Language, recordsData } from "@/data/caseReportData";
import { useState, useMemo } from "react";

const CATEGORY_META: Record<string, { color: string; label: Record<Language, string> }> = {
  samaj:    { color: "#a4742e", label: { en: "Samaj",     ne: "समाज",       hi: "समाज" } },
  police:   { color: "#2e6d95", label: { en: "Police",    ne: "प्रहरी",     hi: "पुलिस" } },
  violence: { color: "#a63c3c", label: { en: "Incident",  ne: "घटना",       hi: "घटना" } },
  legal:    { color: "#694aa8", label: { en: "Court",     ne: "अदालत",     hi: "अदालत" } },
  civic:    { color: "#466c3a", label: { en: "Panchayat", ne: "पञ्चायत",   hi: "पंचायत" } },
  history:  { color: "#7a6a4f", label: { en: "Historical",ne: "ऐतिहासिक",  hi: "ऐतिहासिक" } },
};

const HEADING: Record<Language, { eyebrow: string; title: string; intro: string; yearLabel: string; recordsLabel: string; legendLabel: string }> = {
  en: {
    eyebrow: "Recurrence",
    title: "The conflict never stops — only the channel changes.",
    intro: "Each cell is one calendar month from 2015 to 2025. Filled cells contain at least one written record; the colour is the channel used. Empty rows do not mean peace — they mean no document was produced that month.",
    yearLabel: "Year",
    recordsLabel: "records",
    legendLabel: "Channel",
  },
  ne: {
    eyebrow: "पुनरावृत्ति",
    title: "विवाद कहिल्यै रोकिएन — केवल माध्यम फेरिँदै गयो।",
    intro: "प्रत्येक कोठाले २०१५ देखि २०२५ सम्मको एक महिना देखाउँछ। भरिएका कोठामा कम्तीमा एउटा लिखित अभिलेख छ; रङले प्रयोग गरिएको माध्यम जनाउँछ। खाली कोठाको अर्थ शान्ति होइन — त्यो महिना कुनै कागजात लेखिएन भन्ने मात्रै हो।",
    yearLabel: "वर्ष",
    recordsLabel: "अभिलेख",
    legendLabel: "माध्यम",
  },
  hi: {
    eyebrow: "पुनरावृत्ति",
    title: "विवाद कभी नहीं रुका — केवल माध्यम बदलता रहा।",
    intro: "हर सेल 2015 से 2025 तक का एक महीना है। भरी हुई सेल में कम से कम एक लिखित रिकॉर्ड है; रंग उपयोग किए गए माध्यम को दर्शाता है। खाली सेल का मतलब शांति नहीं — सिर्फ इतना कि उस महीने कोई दस्तावेज़ नहीं बना।",
    yearLabel: "वर्ष",
    recordsLabel: "रिकॉर्ड",
    legendLabel: "माध्यम",
  },
};

const MONTH_LABELS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

interface Cell {
  count: number;
  primary: string;
  ids: string[];
}

export function PatternHeatmap({ lang }: { lang: Language }) {
  const h = HEADING[lang];
  const [hover, setHover] = useState<{ year: number; month: number } | null>(null);

  const { years, grid, totalsByYear } = useMemo(() => {
    const cells = new Map<string, Cell>();
    for (const r of recordsData) {
      if (!r.sortDate || r.sortDate === "0000") continue;
      const [yStr, mStr] = r.sortDate.split("-");
      const y = Number(yStr);
      const m = Number(mStr) - 1;
      if (Number.isNaN(y) || Number.isNaN(m)) continue;
      const key = `${y}-${m}`;
      const existing = cells.get(key);
      if (existing) {
        existing.count += 1;
        existing.ids.push(r.id);
      } else {
        cells.set(key, { count: 1, primary: r.primary, ids: [r.id] });
      }
    }
    const minYear = 2015;
    const maxYear = 2025;
    const yrs: number[] = [];
    const totalsByYear: Record<number, number> = {};
    for (let y = minYear; y <= maxYear; y++) {
      yrs.push(y);
      totalsByYear[y] = 0;
    }
    cells.forEach((c, key) => {
      const y = Number(key.split("-")[0]);
      totalsByYear[y] = (totalsByYear[y] ?? 0) + c.count;
    });
    return { years: yrs, grid: cells, totalsByYear };
  }, []);

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm text-[#d4af37] uppercase tracking-widest mb-4">{h.eyebrow}</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">{h.title}</h3>
        <p className="text-neutral-400 text-base leading-relaxed mb-10 max-w-3xl">{h.intro}</p>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-6 items-center">
          <span className="text-[11px] uppercase tracking-widest text-neutral-500 mr-2">{h.legendLabel}:</span>
          {Object.entries(CATEGORY_META).map(([key, meta]) => (
            <span key={key} className="flex items-center gap-2 text-xs text-neutral-300">
              <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: meta.color }} />
              {meta.label[lang]}
            </span>
          ))}
        </div>

        {/* Heatmap */}
        <div className="overflow-x-auto -mx-6 px-6">
          <div className="inline-block min-w-full">
            {/* Month axis header */}
            <div className="grid items-center gap-1 mb-2" style={{ gridTemplateColumns: "60px repeat(12, minmax(28px, 1fr)) 60px" }}>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500">{h.yearLabel}</span>
              {MONTH_LABELS.map((m, i) => (
                <span key={i} className="text-[10px] text-neutral-500 text-center">{m}</span>
              ))}
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 text-right">{h.recordsLabel}</span>
            </div>

            {years.map((y) => (
              <motion.div
                key={y}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="grid items-center gap-1 mb-1"
                style={{ gridTemplateColumns: "60px repeat(12, minmax(28px, 1fr)) 60px" }}
              >
                <span className="text-xs font-mono text-neutral-300">{y}</span>
                {MONTH_LABELS.map((_, m) => {
                  const cell = grid.get(`${y}-${m}`);
                  const meta = cell ? CATEGORY_META[cell.primary] : undefined;
                  const isHover = hover?.year === y && hover.month === m;
                  return (
                    <button
                      key={m}
                      type="button"
                      onMouseEnter={() => cell && setHover({ year: y, month: m })}
                      onMouseLeave={() => setHover(null)}
                      onFocus={() => cell && setHover({ year: y, month: m })}
                      onBlur={() => setHover(null)}
                      className={`relative aspect-square rounded-[3px] border transition-all duration-200 ${
                        cell
                          ? "border-transparent cursor-pointer"
                          : "border-neutral-900 bg-[#0a0a0a]"
                      }`}
                      style={{
                        backgroundColor: cell ? meta?.color ?? "#444" : undefined,
                        opacity: cell ? Math.min(0.55 + cell.count * 0.18, 1) : 1,
                        boxShadow: isHover ? "0 0 0 2px #d4af37" : undefined,
                      }}
                      aria-label={cell ? `${y}-${m + 1}: ${cell.count} ${h.recordsLabel}` : undefined}
                    >
                      {cell && cell.count > 1 && (
                        <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-black/80">
                          {cell.count}
                        </span>
                      )}
                    </button>
                  );
                })}
                <span className="text-[11px] text-neutral-400 text-right tabular-nums">{totalsByYear[y] || ""}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
