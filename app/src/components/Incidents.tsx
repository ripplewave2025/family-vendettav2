"use client";

import { motion } from "framer-motion";
import { copyData, Language } from "@/data/caseReportData";
import { copyNe, copyHi } from "@/data/copyTranslations";
import { AlertTriangle, MessageSquareWarning } from "lucide-react";

const sectionHeadings = {
  en: { verbal: "Reported Verbal Abuse", verbalBody: "These lines come from working notes rather than from every scanned letter. They help explain the provocation pattern NB says he faced repeatedly.", physical: "Physical Incidents", physicalBody: "The record keeps returning to bodily risk. This list condenses the strongest physical episodes mentioned across the dated record and later notes." },
  ne: { verbal: "रिपोर्ट गरिएको मौखिक दुर्व्यवहार", verbalBody: "यी पङ्क्तिहरू कार्यकारी नोटहरूबाट आएका हुन्, सबै स्क्यान गरिएका पत्रबाट होइन। यिनले NB ले बारम्बार सामना गर्नुपरेको उक्साउने ढाँचा बुझ्न मदत गर्छन्।", physical: "शारीरिक घटनाहरू", physicalBody: "अभिलेख बारम्बार शारीरिक जोखिममा फर्किन्छ। यो सूचीले मिति भएका अभिलेख र पछिका नोटहरूमा उल्लेख गरिएका प्रमुख शारीरिक घटनाहरू संक्षेप गर्छ।" },
  hi: { verbal: "रिपोर्ट किया गया मौखिक दुर्व्यवहार", verbalBody: "ये पंक्तियां कार्यकारी नोट्स से आई हैं, हर स्कैन पत्र से नहीं। ये NB द्वारा बार-बार सामना की गई उकसावे की पैटर्न को समझने में मदद करती हैं।", physical: "शारीरिक घटनाएं", physicalBody: "रिकॉर्ड बार-बार शारीरिक जोखिम पर लौटता है। यह सूची दिनांकित रिकॉर्ड और बाद के नोट्स में उल्लेखित प्रमुख शारीरिक प्रकरणों को संक्षेप करती है।" },
};

function getIncidentCopy(lang: Language) {
  if (lang === "ne") return { verbal: copyNe.verbal, incidents: copyNe.incidents.items };
  if (lang === "hi") return { verbal: copyHi.verbal, incidents: copyHi.incidents.items };
  return { verbal: copyData.en.verbal, incidents: copyData.en.incidents.items };
}

export function Incidents({ lang }: { lang: Language }) {
  const h = sectionHeadings[lang];
  const { verbal, incidents } = getIncidentCopy(lang);

  return (
    <section className="py-24 px-6 relative z-10 bg-[#0a0a0a] border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-neutral-900 rounded-lg text-neutral-400">
                <MessageSquareWarning className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">{h.verbal}</h2>
            </div>
            <p className="text-neutral-400 mb-8 leading-relaxed">{h.verbalBody}</p>
            <div className="space-y-3">
              {verbal.map((quote, idx) => (
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

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-900/20 rounded-lg text-red-500">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">{h.physical}</h2>
            </div>
            <p className="text-neutral-400 mb-8 leading-relaxed">{h.physicalBody}</p>
            <div className="relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-red-900/20" />
              <div className="space-y-6">
                {incidents.map((incident, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-10"
                  >
                    <div className="absolute left-[9px] top-2 w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                    <p className="text-neutral-300 leading-relaxed text-sm md:text-base">{incident}</p>
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
