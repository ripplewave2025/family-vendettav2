"use client";

import "./print.css";
import { useLang } from "@/context/LanguageContext";
import { ALL_EXHIBITS, exhibitLabelFor } from "@/data/exhibits";
import { BRIEF_COPY, PRIMARY_TO_CHANNEL } from "@/data/briefCopy";
import { Printer } from "lucide-react";

const ACK_ITEMS = [
  {
    when: {
      en: "During the death ceremony of NB's brother",
      ne: "NB का दाजुको मृत्यु संस्कारको क्रममा",
      hi: "NB के भाई के मृत्यु संस्कार के दौरान",
    },
    head: {
      en: "NB struck Tilak with a stick.",
      ne: "NB ले टिलकलाई लाठीले हानेका थिए।",
      hi: "NB ने तिलक को लाठी से मारा।",
    },
    body: {
      en: "Tilak had paid the Pandit ₹150 to leave NB's brother's death ceremony and shouted caste-religious abuses. NB lost composure and struck Tilak. The matter went to court and NB paid compensation.",
      ne: "टिलकले NB का दाजुको मृत्यु संस्कारबाट पण्डितलाई १५० रुपैयाँ दिएर भगाएका थिए र जात-धार्मिक गाली गरेका थिए। NB संयम गुमाएर टिलकलाई हाने। मामिला अदालतमा गयो र NB ले क्षतिपूर्ति तिरे।",
      hi: "तिलक ने पंडित को 150 रुपये देकर NB के भाई के मृत्यु संस्कार से भगाया था और जाति-धार्मिक गालियां दीं। NB ने संयम खोकर तिलक को मारा। मामला अदालत गया और NB ने मुआवज़ा दिया।",
    },
  },
  {
    when: {
      en: "On occasion, when provoked",
      ne: "कुनै कुनै बेला, उक्साइँदा",
      hi: "कभी-कभी, उकसाने पर",
    },
    head: {
      en: "NB has used harsh language.",
      ne: "NB ले कडा शब्द प्रयोग गरेका छन्।",
      hi: "NB ने कठोर शब्दों का प्रयोग किया है।",
    },
    body: {
      en: "Under sustained provocation NB has used slang. The case being made concerns Tilak's threats and physical conduct, not language exchanged in arguments.",
      ne: "निरन्तर उक्साइएको अवस्थामा NB ले अपशब्द प्रयोग गरेका छन्। यो मुद्दा टिलकका धम्की र शारीरिक व्यवहारबारे हो, झगडामा बोलिएका शब्दबारे होइन।",
      hi: "लगातार उकसाने पर NB ने अपशब्द प्रयोग किए हैं। यह मामला तिलक की धमकियों और शारीरिक व्यवहार के बारे में है, बहस में बोले गए शब्दों के बारे में नहीं।",
    },
  },
  {
    when: {
      en: "April 2026 — pending police follow-up after the election",
      ne: "अप्रिल २०२६ — निर्वाचनपछि प्रहरी अनुसन्धान बाँकी",
      hi: "अप्रैल 2026 — चुनाव के बाद पुलिस जांच लंबित",
    },
    head: {
      en: "NB threw a stone in response; Tilak's daughter was unintentionally hit.",
      ne: "NB ले प्रतिक्रियामा ढुंगा हाने; टिलककी छोरीलाई अनजानमै लाग्यो।",
      hi: "NB ने जवाब में पत्थर फेंका; तिलक की बेटी को अनजाने में लग गया।",
    },
    body: {
      en: "While NB was repairing a water pipe below Tilak's house, Tilak threw stones first and shouted caste insults from a small window. NB returned home and threw a stone back at Tilak's house; it accidentally struck Tilak's daughter. NB regrets the unintended injury and is willing to apologise and compensate her.",
      ne: "NB ले टिलकको घरमुनि पाइप मर्मत गर्दा टिलकले पहिले ढुंगा हाने र सानो झ्यालबाट जातीय गाली गरे। NB घर फर्केर टिलकको घरतिर ढुंगा फालेका थिए, जुन दुर्घटनावश टिलककी छोरीलाई लाग्यो। NB अनिच्छित चोटप्रति खेद व्यक्त गर्छन् र छोरीलाई माफीनामा र क्षतिपूर्ति दिन तयार छन्।",
      hi: "NB तिलक के घर के नीचे पाइप ठीक कर रहे थे, तिलक ने पहले पत्थर फेंका और छोटी खिड़की से जातीय गालियां दीं। NB ने वापस तिलक के घर की ओर पत्थर फेंका, जो अनजाने में बेटी को लगा। NB अनचाही चोट के लिए खेद व्यक्त करते हैं और माफीनामा व मुआवज़ा देने को तैयार हैं।",
    },
  },
] as const;

export default function BriefPage() {
  const { lang } = useLang();
  const c = BRIEF_COPY[lang];

  return (
    <main className="brief-root">
      <div className="brief-action-bar">
        <button
          type="button"
          className="brief-print-btn"
          onClick={() => typeof window !== "undefined" && window.print()}
        >
          <Printer className="w-4 h-4" />
          {c.printBtn}
        </button>
      </div>

      {/* Page 1 — Cover */}
      <article className="brief-page brief-cover">
        <p className="brief-eyebrow">{c.cover.eyebrow}</p>
        <h1 className="brief-title">{c.cover.title}</h1>
        <p className="meta" style={{ marginTop: 8 }}>{c.cover.subtitle}</p>

        <div className="brief-stat-grid">
          <div className="brief-stat">
            <span className="brief-stat-value">{c.cover.stats.records}</span>
            <span className="brief-stat-label">{c.cover.stats.recordsLabel}</span>
          </div>
          <div className="brief-stat">
            <span className="brief-stat-value">{c.cover.stats.dated}</span>
            <span className="brief-stat-label">{c.cover.stats.datedLabel}</span>
          </div>
          <div className="brief-stat">
            <span className="brief-stat-value">{c.cover.stats.channels}</span>
            <span className="brief-stat-label">{c.cover.stats.channelsLabel}</span>
          </div>
          <div className="brief-stat">
            <span className="brief-stat-value">{c.cover.stats.span}</span>
            <span className="brief-stat-label">{c.cover.stats.spanLabel}</span>
          </div>
        </div>

        <div className="brief-contact">
          <strong>{c.cover.contactHead}:</strong>
          <p style={{ marginTop: 4 }}>{c.cover.contact}</p>
        </div>

        <p className="brief-disc">{c.disclaimer}</p>
      </article>

      {/* Page 2 — Cover letter */}
      <article className="brief-page">
        <h2>{c.letter.head}</h2>
        <p style={{ marginTop: 6 }}>{c.letter.salutation}</p>
        {c.letter.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        <p style={{ marginTop: 24 }}>{c.letter.signoff}</p>
        <p style={{ marginTop: 4 }}><strong>{c.letter.signedBy}</strong></p>
      </article>

      {/* Page 3 — Procedural history */}
      <article className="brief-page">
        <h2>{c.procedural.head}</h2>
        <p>{c.procedural.intro}</p>
        <table className="brief-table" style={{ marginTop: 14 }}>
          <thead>
            <tr>
              <th style={{ width: "30%" }}>{lang === "en" ? "Channel" : lang === "ne" ? "माध्यम" : "माध्यम"}</th>
              <th>{lang === "en" ? "Outcome" : lang === "ne" ? "नतिजा" : "परिणाम"}</th>
            </tr>
          </thead>
          <tbody>
            {c.procedural.rows.map((row, i) => (
              <tr key={i}>
                <td><strong>{row.channel}</strong></td>
                <td>{row.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      {/* Page 4 — Acknowledgements */}
      <article className="brief-page">
        <h2>{c.ack.head}</h2>
        <p>{c.ack.intro}</p>
        <div className="brief-ack-list">
          {ACK_ITEMS.map((item, i) => (
            <div key={i} className="brief-ack-item">
              <p className="ack-when">{item.when[lang]}</p>
              <p className="ack-head">{item.head[lang]}</p>
              <p>{item.body[lang]}</p>
            </div>
          ))}
        </div>
      </article>

      {/* Page 5 — Proposed scope */}
      <article className="brief-page">
        <h2>{c.scope.head}</h2>
        <p>{c.scope.intro}</p>
        <ol>
          {c.scope.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
        <p className="meta" style={{ marginTop: 14, fontStyle: "italic" }}>{c.scope.note}</p>
      </article>

      {/* Page 6 — Index of exhibits */}
      <article className="brief-page">
        <h2>{c.index.head}</h2>
        <p>{c.index.intro}</p>
        <table className="brief-table">
          <thead>
            <tr>
              <th>{c.index.colExhibit}</th>
              <th>{c.index.colDate}</th>
              <th>{c.index.colTitle}</th>
              <th>{c.index.colChannel}</th>
            </tr>
          </thead>
          <tbody>
            {ALL_EXHIBITS.map((ex) => (
              <tr key={ex.label}>
                <td className="exh-label">{ex.label}</td>
                <td className="exh-date">{ex.record.dateLabel}</td>
                <td>{ex.record.title[lang]}</td>
                <td>{PRIMARY_TO_CHANNEL[ex.record.primary]?.[lang] ?? ex.record.primary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      {/* Pages 7+ — One exhibit per page */}
      {ALL_EXHIBITS.map((ex) => {
        const r = ex.record;
        const channel = PRIMARY_TO_CHANNEL[r.primary]?.[lang] ?? r.primary;
        return (
          <article key={ex.label} className="brief-page brief-exhibit">
            <p className="meta" style={{ letterSpacing: "0.18em", textTransform: "uppercase" }}>
              {c.exhibitWord} {ex.label}
            </p>
            <h2 style={{ marginTop: 4, borderBottom: "none", paddingBottom: 0 }}>{r.title[lang]}</h2>
            <dl className="exh-meta">
              <dt>{c.exhibitMeta.date}</dt>
              <dd>{r.dateLabel}</dd>
              <dt>{c.exhibitMeta.channel}</dt>
              <dd>{channel}</dd>
              <dt>{c.exhibitMeta.role}</dt>
              <dd>{r.meta[lang]}</dd>
            </dl>
            <div className="exh-summary">
              <p style={{ margin: 0 }}>{r.summary[lang]}</p>
            </div>
            {r.images.length > 0 && (
              <div className="exh-images">
                {r.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={`${c.exhibitWord} ${ex.label} — ${r.title[lang]}`}
                  />
                ))}
              </div>
            )}
          </article>
        );
      })}
    </main>
  );
}
