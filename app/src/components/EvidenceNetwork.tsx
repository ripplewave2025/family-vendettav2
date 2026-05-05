"use client";

import { motion } from "framer-motion";
import { Language } from "@/data/caseReportData";
import { useMemo, useState } from "react";

type ActorRole = "accused" | "victim" | "witness" | "mediator" | "authority";

interface Actor {
  id: string;
  label: Record<Language, string>;
  role: ActorRole;
}

interface Edge {
  from: string;
  to: string;
  label: Record<Language, string>;
  weight?: number;
}

const ACTORS: Actor[] = [
  { id: "tilak",   label: { en: "Tilak Bishwakarma",       ne: "टिलक बिश्वकर्मा",         hi: "तिलक बिश्वकर्मा" },         role: "accused"   },
  { id: "nb",      label: { en: "Nar Bahadur (NB)",        ne: "नर बहादुर (NB)",          hi: "नर बहादुर (NB)" },          role: "victim"    },
  { id: "aarati",  label: { en: "Aarati (NB's wife)",      ne: "आरती (NB की पत्नी)",      hi: "आरती (NB की पत्नी)" },      role: "victim"    },
  { id: "khadka",  label: { en: "Late Khadka Bdr.",        ne: "स्व. खड्क बहादुर",        hi: "स्व. खड्का बहादुर" },        role: "accused"   },
  { id: "roshan",  label: { en: "Roshan Vishwakarma",      ne: "रोशन बिश्वकर्मा",          hi: "रोशन बिश्वकर्मा" },         role: "accused"   },
  { id: "ritesh",  label: { en: "Ritesh",                  ne: "रितेश",                   hi: "रितेश" },                  role: "accused"   },
  { id: "samaj",   label: { en: "Bishwakarma Samaj",       ne: "बिश्वकर्मा समाज",          hi: "बिश्वकर्मा समाज" },          role: "mediator"  },
  { id: "police",  label: { en: "Rangli-Rangliot Police",  ne: "रंगली-रंगलियोट प्रहरी",   hi: "रंगली-रंगलियोट पुलिस" },     role: "authority" },
  { id: "court",   label: { en: "Magistrate's Court",      ne: "न्यायाधीशको अदालत",       hi: "मजिस्ट्रेट कोर्ट" },         role: "authority" },
  { id: "village", label: { en: "18 villagers (witnesses)",ne: "१८ गाउँले (साक्षी)",      hi: "18 ग्रामीण (गवाह)" },        role: "witness"   },
];

const EDGES: Edge[] = [
  { from: "tilak", to: "nb",     label: { en: "Death threats, caste insults, assault",     ne: "मृत्युको धम्की, जातीय गाली, आक्रमण",         hi: "मौत की धमकी, जातीय गाली, हमला" }, weight: 3 },
  { from: "tilak", to: "aarati", label: { en: "Stones at house",                            ne: "घरमा ढुंगा",                                  hi: "घर पर पत्थर" } },
  { from: "khadka",to: "nb",     label: { en: "Joined trespass 02-12-2015",                 ne: "०२-१२-२०१५ को घर प्रवेशमा साथ",             hi: "02-12-2015 के अतिक्रमण में साथ" } },
  { from: "roshan",to: "aarati", label: { en: "Assault attempt 26-09-2021",                 ne: "२६-०९-२०२१ आक्रमण प्रयास",                  hi: "26-09-2021 हमले का प्रयास" } },
  { from: "ritesh",to: "nb",     label: { en: "Threw building stones, threats",             ne: "निर्माण ढुंगा फाल्ने, धम्की",                hi: "निर्माण पत्थर फेंका, धमकी" } },
  { from: "nb",    to: "samaj",  label: { en: "10+ written appeals",                        ne: "१०+ लिखित निवेदन",                         hi: "10+ लिखित अपील" }, weight: 2 },
  { from: "nb",    to: "police", label: { en: "8+ complaints",                              ne: "८+ उजुरी",                                  hi: "8+ शिकायतें" }, weight: 2 },
  { from: "samaj", to: "police", label: { en: "Forwarded the matter twice",                 ne: "दुई पटक मामिला पठायो",                      hi: "दो बार मामला भेजा" } },
  { from: "police",to: "court",  label: { en: "Sec 107 CrPC referral",                      ne: "धारा १०७ CrPC रेफरल",                      hi: "धारा 107 CrPC रेफरल" } },
  { from: "village",to: "nb",    label: { en: "18 signatures · water-source letter",        ne: "१८ हस्ताक्षर · पानी पत्र",                  hi: "18 हस्ताक्षर · पानी पत्र" } },
];

const ROLE_COLOR: Record<ActorRole, string> = {
  accused:   "#a63c3c",
  victim:    "#d4af37",
  witness:   "#a4742e",
  mediator:  "#466c3a",
  authority: "#2e6d95",
};

const ROLE_LABEL: Record<ActorRole, Record<Language, string>> = {
  accused:   { en: "Named in complaints", ne: "उजुरीमा नामित",       hi: "शिकायतों में नामित" },
  victim:    { en: "Complainant",         ne: "उजुरकर्ता",           hi: "शिकायतकर्ता" },
  witness:   { en: "Witnesses",           ne: "साक्षी",              hi: "गवाह" },
  mediator:  { en: "Community mediator",  ne: "सामुदायिक मध्यस्थ",   hi: "सामुदायिक मध्यस्थ" },
  authority: { en: "Statutory authority", ne: "वैधानिक निकाय",       hi: "वैधानिक संस्था" },
};

const HEADING: Record<Language, { eyebrow: string; title: string; intro: string }> = {
  en: {
    eyebrow: "Who did what to whom",
    title: "Same actors. Same site. Same techniques.",
    intro: "The defendants, the victims, and the channels NB approached — all in one frame. Hover any line to read the conduct it represents.",
  },
  ne: {
    eyebrow: "कसले कसलाई के गर्‍यो",
    title: "उनै व्यक्तिहरू। उही ठाउँ। उही शैली।",
    intro: "अभियुक्तहरू, पीडितहरू, र NB ले सम्पर्क गरेका माध्यमहरू — सबै एकै फ्रेममा। कुनै रेखामा cursor लानेबित्तिकै त्यसले प्रतिनिधित्व गर्ने व्यवहार देखिनेछ।",
  },
  hi: {
    eyebrow: "किसने किसके साथ क्या किया",
    title: "वही लोग। वही जगह। वही तरीके।",
    intro: "अभियुक्त, पीड़ित, और NB ने जिन माध्यमों से संपर्क किया — सब एक ही फ्रेम में। किसी भी रेखा पर माउस ले जाने पर उसका व्यवहार दिखेगा।",
  },
};

// Static positions on a 600×440 viewBox
const POS: Record<string, { x: number; y: number }> = {
  tilak:   { x: 200, y: 220 },
  nb:      { x: 400, y: 220 },
  aarati:  { x: 470, y: 320 },
  khadka:  { x: 110, y: 320 },
  roshan:  { x: 110, y: 130 },
  ritesh:  { x: 200, y: 70  },
  samaj:   { x: 380, y: 70  },
  police:  { x: 540, y: 130 },
  court:   { x: 540, y: 380 },
  village: { x: 320, y: 380 },
};

export function EvidenceNetwork({ lang }: { lang: Language }) {
  const h = HEADING[lang];
  const [hover, setHover] = useState<number | null>(null);

  const actorMap = useMemo(() => {
    const m = new Map<string, Actor>();
    ACTORS.forEach((a) => m.set(a.id, a));
    return m;
  }, []);

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm text-[#d4af37] uppercase tracking-widest mb-4">{h.eyebrow}</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">{h.title}</h3>
        <p className="text-neutral-400 text-base leading-relaxed mb-10 max-w-3xl">{h.intro}</p>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8 items-start">
          {/* Graph */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl p-4 md:p-6 overflow-hidden"
          >
            <svg viewBox="0 0 640 440" className="w-full h-auto" role="img" aria-label="Actor-incident network">
              <defs>
                <marker id="arrow-evidence" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#666" />
                </marker>
              </defs>

              {/* Edges */}
              {EDGES.map((e, i) => {
                const a = POS[e.from];
                const b = POS[e.to];
                if (!a || !b) return null;
                const isHover = hover === i;
                return (
                  <g
                    key={i}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                    style={{ cursor: "pointer" }}
                  >
                    <line
                      x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                      stroke={isHover ? "#d4af37" : "#3a3a3a"}
                      strokeWidth={isHover ? 2.5 : 1 + (e.weight ?? 1) * 0.6}
                      markerEnd="url(#arrow-evidence)"
                      opacity={hover !== null && !isHover ? 0.25 : 1}
                    />
                  </g>
                );
              })}

              {/* Nodes */}
              {ACTORS.map((a) => {
                const p = POS[a.id];
                if (!p) return null;
                const r = a.role === "victim" || a.role === "accused" ? 22 : 16;
                return (
                  <g key={a.id} transform={`translate(${p.x}, ${p.y})`}>
                    <circle
                      r={r}
                      fill={ROLE_COLOR[a.role]}
                      opacity={0.85}
                      stroke="#0a0a0a"
                      strokeWidth={2}
                    />
                    <text
                      textAnchor="middle"
                      y={r + 14}
                      fontSize="11"
                      fill="#e5e5e5"
                      style={{ pointerEvents: "none" }}
                    >
                      {a.label[lang]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </motion.div>

          {/* Side panel */}
          <div className="space-y-4">
            {/* Legend */}
            <div className="glass-panel rounded-2xl p-5">
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
                {lang === "en" ? "Legend" : lang === "ne" ? "व्याख्या" : "व्याख्या"}
              </p>
              <div className="grid gap-2">
                {(Object.keys(ROLE_COLOR) as ActorRole[]).map((role) => (
                  <div key={role} className="flex items-center gap-3 text-xs">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: ROLE_COLOR[role] }} />
                    <span className="text-neutral-300">{ROLE_LABEL[role][lang]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hover detail */}
            <div className="glass-panel rounded-2xl p-5 min-h-[120px]">
              {hover === null ? (
                <p className="text-sm text-neutral-500 italic">
                  {lang === "en" ? "Hover any connection to read the conduct it represents." : lang === "ne" ? "व्यवहार पढ्न कुनै रेखामा cursor लानुहोस्।" : "किसी भी रेखा पर माउस ले जाएं।"}
                </p>
              ) : (() => {
                const e = EDGES[hover];
                const fromA = actorMap.get(e.from);
                const toA = actorMap.get(e.to);
                return (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#d4af37] mb-2">
                      {fromA?.label[lang]} → {toA?.label[lang]}
                    </p>
                    <p className="text-sm text-neutral-200 leading-relaxed">{e.label[lang]}</p>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
