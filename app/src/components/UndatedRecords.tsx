"use client";

import { motion } from "framer-motion";
import { undatedRecords } from "@/data/caseReportData";
import { FileText, Clock, Tag } from "lucide-react";

export function UndatedRecords() {
  return (
    <section className="py-24 px-6 relative z-10 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-[#d4af37] uppercase tracking-widest mb-4">Undated Supporting Records</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-3xl mx-auto">
            Important letters kept outside the strict date line
          </h3>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            These documents deepen the pattern analysis, but the scan does not show a reliable full date. Keeping them here preserves chronology without discarding evidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {undatedRecords.map((record, idx) => (
            <motion.div 
              key={record.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl group hover:border-[#d4af37]/30 transition-all flex flex-col h-full"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-neutral-800 text-xs text-neutral-500 mb-4 self-start">
                <Clock className="w-3 h-3" />
                <span>{record.dateLabel}</span>
              </div>
              
              <h4 className="text-lg font-bold text-white mb-3 flex-1">{record.title.en}</h4>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed flex-1">
                {record.summary.en}
              </p>
              
              <div className="mt-auto pt-4 border-t border-neutral-800">
                 <div className="flex flex-wrap gap-2 mb-2">
                    {record.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-neutral-900 text-neutral-500 text-[10px] uppercase tracking-wider flex items-center gap-1">
                        <Tag className="w-2 h-2" />
                        {tag}
                      </span>
                    ))}
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
