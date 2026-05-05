"use client";

import { motion } from "framer-motion";
import { Language, recordsData, undatedRecords } from "@/data/caseReportData";
import { useMemo } from "react";

interface Stage {
  key: string;
  label: Record<Language, string>;
  outcome: Record<Language, string>;
  primaryMatch: string[];   // primary categories that count
  color: string;
  yearsSpan: Record<Language, string>;
}

const STAGES: Stage[] = [
  {
    key: "party",
    label: { en: "Party leaders", ne: "पार्टी नेताहरू", hi: "पार्टी नेता" },
    outcome: { en: "First written appeal · No action taken.", ne: "पहिलो लिखित निवेदन · कुनै कारबाही भएन।", hi: "पहली लिखित अपील · कोई कार्रवाई नहीं।" },
    primaryMatch: [],   // single record (r1) — handled by id below
    color: "#7a6a4f",
    yearsSpan: { en: "2015", ne: "२०१५", hi: "2015" },
  },
  {
    key: "samaj",
    label: { en: "Bishwakarma Samaj", ne: "बिश्वकर्मा समाज", hi: "बिश्वकर्मा समाज" },
    outcome: { en: "Multiple sittings · Tilak refused · Samaj forwarded to police.", ne: "धेरै बैठक · टिलकले अस्वीकार · समाजले प्रहरीलाई पठायो।", hi: "कई बैठकें · तिलक ने इनकार · समाज ने पुलिस को भेजा।" },
    primaryMatch: ["samaj"],
    color: "#a4742e",
    yearsSpan: { en: "2015–2025", ne: "२०१५–२०२५", hi: "2015–2025" },
  },
  {
    key: "police",
    label: { en: "Rangli-Rangliot Police", ne: "रंगली-रंगलियोट प्रहरी", hi: "रंगली-रंगलियोट पुलिस" },
    outcome: { en: "Multiple complaints · One stamped · 'Go to court'.", ne: "धेरै उजुरी · एक छाप लागेको · 'अदालतमा जाऊ' भनियो।", hi: "कई शिकायतें · एक मुहरयुक्त · 'अदालत जाओ'।" },
    primaryMatch: ["police"],
    color: "#2e6d95",
    yearsSpan: { en: "2015–2023", ne: "२०१५–२०२३", hi: "2015–2023" },
  },
  {
    key: "court",
    label: { en: "Magistrate's Court — Sec 107 CrPC", ne: "न्यायाधीशको अदालत — धारा १०७", hi: "मजिस्ट्रेट कोर्ट — धारा 107" },
    outcome: { en: "Bond on both parties (31-07-2023) · Tilak breached.", ne: "दुवै पक्षमा बन्धन (३१-०७-२०२३) · टिलकले उल्लंघन गरे।", hi: "दोनों पक्षों पर बंधन (31-07-2023) · तिलक ने तोड़ा।" },
    primaryMatch: ["legal"],
    color: "#694aa8",
    yearsSpan: { en: "2023", ne: "२०२३", hi: "2023" },
  },
  {
    key: "panchayat",
    label: { en: "Gram Panchayat", ne: "ग्राम पञ्चायत", hi: "ग्राम पंचायत" },
    outcome: { en: "Petition over electricity & water (23-04-2025) · Pending.", ne: "बिजुली र पानीसम्बन्धी निवेदन (२३-०४-२०२५) · निर्णय बाँकी।", hi: "बिजली व पानी की अर्जी (23-04-2025) · लंबित।" },
    primaryMatch: ["civic"],
    color: "#466c3a",
    yearsSpan: { en: "2025", ne: "२०२५", hi: "2025" },
  },
];

const HEADING: Record<Language, { eyebrow: string; title: string; intro: string; recordsLabel: string }> = {
  en: {
    eyebrow: "Exhaustion of remedies",
    title: "Every formal channel was approached. None resolved it.",
    intro: "Indian courts respect a complainant who tried community and statutory channels first. NB tried five before considering anything else.",
    recordsLabel: "records",
  },
  ne: {
    eyebrow: "उपायको थकाई",
    title: "हरेक औपचारिक माध्यमलाई सम्पर्क गरियो। कुनैले समाधान गरेन।",
    intro: "भारतीय अदालतहरूले पहिले समुदायिक र वैधानिक माध्यमहरू प्रयास गरेको उजुरकर्तालाई सम्मान गर्छन्। NB ले अरू केही सोच्नुअघि पाँच वटा प्रयास गरे।",
    recordsLabel: "अभिलेख",
  },
  hi: {
    eyebrow: "उपायों की थकावट",
    title: "हर औपचारिक माध्यम से संपर्क किया। किसी ने समाधान नहीं दिया।",
    intro: "भारतीय अदालतें उस शिकायतकर्ता का सम्मान करती हैं जिसने पहले सामुदायिक और वैधानिक माध्यमों से प्रयास किया हो। NB ने कुछ और सोचने से पहले पांच प्रयास किए।",
    recordsLabel: "रिकॉर्ड",
  },
};

export function MediationFunnel({ lang }: { lang: Language }) {
  const h = HEADING[lang];

  const counts = useMemo(() => {
    const all = [...recordsData, ...undatedRecords];
    const byPrimary: Record<string, number> = {};
    for (const r of all) byPrimary[r.primary] = (byPrimary[r.primary] ?? 0) + 1;
    return byPrimary;
  }, []);

  const stageCounts = STAGES.map((s) => {
    if (s.key === "party") return 1; // r1 specifically
    return s.primaryMatch.reduce((sum, p) => sum + (counts[p] ?? 0), 0);
  });
  const maxCount = Math.max(...stageCounts);

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm text-[#d4af37] uppercase tracking-widest mb-4">{h.eyebrow}</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">{h.title}</h3>
        <p className="text-neutral-400 text-base leading-relaxed mb-12 max-w-3xl">{h.intro}</p>

        <div className="space-y-3">
          {STAGES.map((s, i) => {
            const count = stageCounts[i];
            const widthPct = Math.max(28, (count / maxCount) * 100);
            return (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <div className="flex items-stretch gap-4">
                  {/* Stage marker */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                      style={{ borderColor: s.color, color: s.color }}
                    >
                      {i + 1}
                    </div>
                    {i < STAGES.length - 1 && (
                      <div className="flex-1 w-px bg-neutral-800 mt-1" />
                    )}
                  </div>

                  {/* Bar + content */}
                  <div className="flex-1 pb-2">
                    <div
                      className="rounded-r-2xl rounded-l-md px-5 py-4 border-l-4"
                      style={{
                        borderLeftColor: s.color,
                        background: `linear-gradient(90deg, ${s.color}30 0%, ${s.color}10 ${widthPct}%, transparent ${widthPct}%)`,
                        width: "100%",
                      }}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <h4 className="text-lg font-semibold text-white">{s.label[lang]}</h4>
                        <span className="text-xs text-neutral-400 font-mono">
                          {s.yearsSpan[lang]} · {count} {h.recordsLabel}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-300 leading-relaxed">{s.outcome[lang]}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
