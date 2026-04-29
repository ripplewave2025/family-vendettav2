"use client";

import { motion } from "framer-motion";
import { Language, copyData } from "@/data/caseReportData";
import { copyNe, copyHi } from "@/data/copyTranslations";
import { Search } from "lucide-react";

export function PatternOfProvocation({ lang }: { lang: Language }) {
  const getCopy = () => {
    switch (lang) {
      case "ne": return copyNe.patterns;
      case "hi": return copyHi.patterns;
      default: return copyData.en.patterns;
    }
  };

  const patterns = getCopy().groups;

  const headings = {
    en: { eyebrow: "Pattern Analysis", title: "A Systematic Campaign of Provocation", body: "The record clusters into repeatable behaviors, not isolated incidents. Each block below highlights one pattern of behavior that was repeated over the years." },
    ne: { eyebrow: "ढाँचा विश्लेषण", title: "उक्साहटको व्यवस्थित अभियान", body: "अभिलेखले एकपटकको झगडा होइन, दोहोरिने व्यवहार देखाउँछन्। तलका प्रत्येक ब्लकले वर्षौंसम्म दोहोरिएको एउटा ढाँचा देखाउँछ।" },
    hi: { eyebrow: "पैटर्न विश्लेषण", title: "उकसाने का व्यवस्थित अभियान", body: "रिकॉर्ड एक बार की लड़ाई नहीं, बल्कि दोहराए गए व्यवहार दिखाता है। नीचे हर ब्लॉक उस पैटर्न को उजागर करता है जो सालों तक दोहराया गया।" },
  };
  const h = headings[lang];

  return (
    <section className="py-24 px-6 relative z-10 bg-neutral-950/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-[#d4af37] uppercase tracking-widest mb-4">{h.eyebrow}</h2>
          <h3 className="text-4xl font-bold text-white mb-6">{h.title}</h3>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">{h.body}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {patterns.map((pattern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl border border-neutral-800/50 hover:border-[#d4af37]/30 transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Search className="w-24 h-24 text-[#d4af37]" />
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#111] text-[#d4af37] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#d4af37]/20">
                {pattern.label}
              </span>
              <h4 className="text-xl font-bold text-white mb-4 relative z-10">{pattern.title}</h4>
              <p className="text-neutral-400 leading-relaxed relative z-10">{pattern.body1}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
