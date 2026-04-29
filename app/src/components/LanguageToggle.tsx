"use client";

import { useLang } from "@/context/LanguageContext";
import { Language } from "@/data/caseReportData";
import { motion } from "framer-motion";

const OPTIONS: { value: Language; label: string; nativeLabel: string }[] = [
  { value: "en", label: "EN", nativeLabel: "English" },
  { value: "ne", label: "नेपाली", nativeLabel: "Nepali" },
  { value: "hi", label: "हिन्दी", nativeLabel: "Hindi" },
];

export function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div
      className="fixed top-5 right-5 z-[100] flex items-center gap-1 p-1 rounded-full bg-[#111]/80 backdrop-blur-md border border-neutral-800 shadow-lg"
      role="group"
      aria-label="Select language"
    >
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setLang(opt.value)}
          title={opt.nativeLabel}
          className={`relative px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200 focus:outline-none ${
            lang === opt.value
              ? "text-black"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          {lang === opt.value && (
            <motion.div
              layoutId="lang-pill"
              className="absolute inset-0 rounded-full bg-[#d4af37]"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{opt.label}</span>
        </button>
      ))}
    </div>
  );
}
