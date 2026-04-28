"use client";

import { motion } from "framer-motion";
import { CopyDataWall } from "@/data/caseReportData"; // Note: will need to define type or just use any

export function MediationWall({ data }: { data: any }) {
  return (
    <section className="py-24 px-6 relative z-10 bg-[#0a0a0a] border-y border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-[#d4af37] uppercase tracking-widest mb-4">{data.eyebrow}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            {data.title}
          </h3>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            {data.intro}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {data.steps.map((step: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-xl flex gap-6 items-start"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center text-sm text-[#d4af37] font-bold shrink-0">
                    {i + 1}
                  </div>
                  {i !== data.steps.length - 1 && (
                    <div className="w-px h-full bg-neutral-800" />
                  )}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-neutral-400 leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="sticky top-24 glass-panel p-8 rounded-2xl border-t-4 border-[#d4af37] bg-gradient-to-b from-[#1a1505] to-transparent"
            >
              <p className="text-xs text-[#d4af37] uppercase tracking-widest font-bold mb-4">
                Central reading of the record
              </p>
              <h4 className="text-2xl font-bold text-white mb-4 leading-tight">
                Every formal path to peace was blocked, then the conflict rolled outward.
              </h4>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                The Samaj decision remains the key institutional document. It records that NB accepted direction, while Tilak did not. Later letters show that even after pushing the dispute toward police, a durable settlement still never arrived.
              </p>
              <div className="p-4 bg-[#050505] border border-neutral-800 rounded-lg">
                <p className="text-[#d4af37] italic text-sm">
                  "Key point: the Samaj record says NB agreed to direction, but Tilak remained adamant and would not settle through that forum."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
