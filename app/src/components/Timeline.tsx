import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { recordsData, Language } from "@/data/caseReportData";
import { Calendar, FileText, Tag, X } from "lucide-react";

export function Timeline({ lang }: { lang: Language }) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const headings = {
    en: { eyebrow: "Chronology", title: "The Dated Record", body: "Visible dates run from July 2015 through October 2025. This timeline uses records with a clear date or month-year." },
    ne: { eyebrow: "कालक्रम", title: "मिति भएका अभिलेख", body: "जुलाई २०१५ देखि अक्टोबर २०२५ सम्मका मिति देखिन्छन्। यस टाइमलाइनमा स्पष्ट मिति भएका अभिलेखहरू समावेश छन्।" },
    hi: { eyebrow: "कालक्रम", title: "दिनांकित रिकॉर्ड", body: "जुलाई 2015 से अक्टूबर 2025 तक की तारीखें दिखाई देती हैं। इस टाइमलाइन में स्पष्ट तारीख वाले रिकॉर्ड शामिल हैं।" },
  };
  const h = headings[lang];

  return (
    <>
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm text-[#d4af37] uppercase tracking-widest mb-4">{h.eyebrow}</h2>
            <h3 className="text-4xl font-bold text-white mb-6">{h.title}</h3>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">{h.body}</p>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-neutral-800 -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {recordsData.map((record, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={record.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col md:flex-row gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className={`w-full md:w-1/2 ${isEven ? "md:pl-12" : "md:pr-12"}`}>
                      <div className="glass-panel p-8 rounded-2xl relative group transition-all duration-300 hover:border-[#d4af37]/30 hover:bg-[#1a1a1a]">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-neutral-800 text-sm text-neutral-400 mb-6">
                          <Calendar className="w-4 h-4 text-[#d4af37]" />
                          <span>{record.dateLabel}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                          {record.title[lang]}
                        </h4>
                        <p className="text-neutral-400 leading-relaxed mb-6">{record.summary[lang]}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-6">
                          <div className="flex items-center gap-1.5">
                            <FileText className="w-4 h-4" />
                            <span>{record.meta[lang]}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {record.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 rounded-md bg-neutral-900 text-neutral-400 text-xs uppercase tracking-wider flex items-center gap-1">
                              <Tag className="w-3 h-3" />
                              {tag}
                            </span>
                          ))}
                        </div>
                        {record.images && record.images.length > 0 && (
                          <div className="grid grid-cols-2 gap-2 mt-4 pt-6 border-t border-neutral-800/50">
                            {record.images.map((img, i) => (
                              <button
                                key={i}
                                onClick={() => setLightboxImg(img.src)}
                                className="relative aspect-video overflow-hidden rounded border border-neutral-800 hover:border-[#d4af37] transition-all group/img"
                              >
                                <img
                                  src={img.src}
                                  alt={record.title[lang]}
                                  className="object-cover w-full h-full opacity-60 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-500"
                                  loading="lazy"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 mt-8 hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-[#050505] border-2 border-[#d4af37] z-10 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                      <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
                    </div>
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-[#d4af37] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={lightboxImg}
              alt="Evidence Scan"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-neutral-800"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
