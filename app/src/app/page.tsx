"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { copyData } from "@/data/caseReportData";
import { copyNe, copyHi } from "@/data/copyTranslations";
import { Timeline } from "@/components/Timeline";
import { MediationWall } from "@/components/MediationWall";
import { UndatedRecords } from "@/components/UndatedRecords";
import { Incidents } from "@/components/Incidents";
import { PatternOfProvocation } from "@/components/PatternOfProvocation";
import { useRef } from "react";
import { FileText, ShieldAlert, Users, Scale, ExternalLink } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

function getCopy(lang: string) {
  if (lang === "ne") return copyNe;
  if (lang === "hi") return copyHi;
  return copyData.en;
}

export default function Home() {
  const { lang } = useLang();
  const t = getCopy(lang);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main ref={containerRef} className="min-h-screen relative pb-32">

      {/* Sticky Full Report Button */}
      <a
        href="/case_report.html"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-5 right-5 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37] text-black text-sm font-bold shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] hover:scale-105 transition-all duration-300"
      >
        <ExternalLink className="w-4 h-4" />
        Full Report
      </a>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl w-full text-center z-10"
        >
          <motion.p
            className="text-[#d4af37] text-sm md:text-base tracking-widest uppercase mb-6 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {t.hero.eyebrow}
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gradient leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            {t.title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            {t.hero.copy}
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: FileText, value: t.stats.recordsValue, label: t.stats.recordsLabel },
              { icon: ShieldAlert, value: t.stats.datedValue, label: t.stats.datedLabel },
              { icon: Users, value: t.stats.institutionsValue, label: t.stats.institutionsLabel },
              { icon: Scale, value: t.stats.spanValue, label: t.stats.spanLabel },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center group hover:bg-[#1a1a1a] transition-colors"
              >
                <stat.icon className="w-6 h-6 text-[#d4af37] mb-3 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-xs text-neutral-500 uppercase tracking-wider text-center">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ y }}>
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neutral-800 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#1a1505] rounded-full blur-[150px]" />
        </motion.div>
      </section>

      {/* Background Context */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-sm text-[#d4af37] uppercase tracking-widest mb-4">{t.background.eyebrow}</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">{t.background.title}</h3>
              <p className="text-neutral-400 text-lg leading-relaxed mb-6">{t.background.copy1}</p>
              <p className="text-neutral-400 text-lg leading-relaxed">{t.background.copy2}</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-[#d4af37]">
              <p className="text-neutral-300 italic leading-relaxed text-lg">"{t.background.note}"</p>
            </div>
          </div>
        </div>
      </section>

      <MediationWall data={t.wall} lang={lang} />
      <PatternOfProvocation lang={lang} />
      <Timeline lang={lang} />
      <UndatedRecords lang={lang} />
      <Incidents lang={lang} />

      {/* Conclusion / Demands */}
      <section className="py-24 px-6 relative z-10 border-t border-neutral-900 mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#d4af37] uppercase tracking-widest mb-4">{t.asks.eyebrow}</h2>
          <h3 className="text-4xl font-bold text-white mb-12">{t.asks.title}</h3>
          <div className="grid gap-4 text-left">
            {t.asks.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-xl flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#d4af37] shrink-0 mt-1">
                  {i + 1}
                </div>
                <p className="text-lg text-neutral-300 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 py-8 border-y border-neutral-900">
            <p className="text-2xl font-medium text-gradient">{t.asks.closing}</p>
          </div>
        </div>
      </section>

      {/* Full Report CTA — Bold Banner */}
      <section className="relative z-10 mt-24 px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.a
            href="/case_report.html"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.015 }}
            className="group relative flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 rounded-3xl overflow-hidden cursor-pointer border border-[#d4af37]/40 hover:border-[#d4af37] transition-all duration-500"
            style={{ background: "linear-gradient(135deg, #1a1200 0%, #0d0d0d 50%, #1a1200 100%)" }}
          >
            {/* Glow effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
              <div className="absolute bottom-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#d4af37]/5 rounded-full blur-3xl group-hover:bg-[#d4af37]/10 transition-all duration-700" />
            </div>

            <div className="relative text-center md:text-left">
              <p className="text-[#d4af37] text-xs uppercase tracking-[0.3em] font-bold mb-3 flex items-center gap-2 justify-center md:justify-start">
                <span className="inline-block w-6 h-px bg-[#d4af37]" />
                Complete Evidence Archive
                <span className="inline-block w-6 h-px bg-[#d4af37]" />
              </p>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors duration-300 leading-tight">
                Open Full Detailed Report
              </h3>
              <p className="text-neutral-400 leading-relaxed max-w-xl">
                34 records · Filterable by category · Letter image lightbox · Pattern analysis · Printable layout · All 3 languages
              </p>
            </div>

            <div className="relative shrink-0 flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full border-2 border-[#d4af37] bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37] transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_50px_rgba(212,175,55,0.6)]">
                <ExternalLink className="w-8 h-8 text-[#d4af37] group-hover:text-black transition-colors duration-300" />
              </div>
              <span className="text-[#d4af37] text-sm font-semibold tracking-wide">View Now</span>
            </div>
          </motion.a>
        </div>
      </section>
    </main>
  );
}
