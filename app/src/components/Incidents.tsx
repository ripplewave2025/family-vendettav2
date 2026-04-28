"use client";

import { motion } from "framer-motion";
import { copyData } from "@/data/caseReportData";
import { AlertTriangle, MessageSquareWarning } from "lucide-react";

export function Incidents() {
  const { en } = copyData;

  return (
    <section className="py-24 px-6 relative z-10 bg-[#0a0a0a] border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Verbal Abuse */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-neutral-900 rounded-lg text-neutral-400">
                <MessageSquareWarning className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Reported Verbal Abuse</h2>
            </div>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              These lines come from working notes rather than from every scanned letter. They help explain the provocation pattern NB says he faced repeatedly.
            </p>
            
            <div className="space-y-3">
              {en.verbal.map((quote, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-4 bg-[#111] border border-neutral-800 rounded-lg border-l-2 border-l-red-900/50"
                >
                  <p className="text-neutral-300 italic">"{quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Physical Incidents */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-900/20 rounded-lg text-red-500">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Physical Incidents</h2>
            </div>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              The record keeps returning to bodily risk. This list condenses the strongest physical episodes mentioned across the dated record and later notes.
            </p>
            
            <div className="relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-red-900/20" />
              <div className="space-y-6">
                {en.incidents.items.map((incident, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-10"
                  >
                    <div className="absolute left-[9px] top-2 w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                    <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                      {incident}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
