"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Language } from "@/data/caseReportData";

interface Acknowledgement {
  date: Record<Language, string>;
  title: Record<Language, string>;
  body: Record<Language, string>;
}

const ITEMS: Acknowledgement[] = [
  {
    date: {
      en: "During the death ceremony of NB's brother",
      ne: "NB का दाजुको मृत्यु संस्कारको क्रममा",
      hi: "NB के भाई के मृत्यु संस्कार के दौरान",
    },
    title: {
      en: "NB struck Tilak with a stick.",
      ne: "NB ले टिलकलाई लाठीले हानेका थिए।",
      hi: "NB ने तिलक को लाठी से मारा।",
    },
    body: {
      en: "Tilak had paid the Pandit ₹150 to leave NB's brother's death ceremony and shouted caste-religious abuses at NB. NB lost composure and struck Tilak. The matter went to court and NB paid compensation. NB acknowledges this and does not contest that record.",
      ne: "टिलकले NB का दाजुको मृत्यु संस्कारबाट पण्डितलाई १५० रुपैयाँ दिएर भगाएका थिए र NB लाई जात-धार्मिक गाली गरेका थिए। NB संयम गुमाएर टिलकलाई हाने। मामिला अदालतमा गयो र NB ले क्षतिपूर्ति तिरे। NB यो स्विकार्छन् र अभिलेखमा विवाद गर्दैनन्।",
      hi: "तिलक ने NB के भाई के मृत्यु संस्कार से पंडित को 150 रुपये देकर भगाया था और NB को जाति-धार्मिक गालियां दीं। NB ने संयम खोकर तिलक को मारा। मामला अदालत गया और NB ने मुआवज़ा दिया। NB यह स्वीकार करते हैं और रिकॉर्ड पर विवाद नहीं करते।",
    },
  },
  {
    date: {
      en: "On occasion, when provoked",
      ne: "कुनै कुनै बेला, उक्साइँदा",
      hi: "कभी-कभी, उकसाने पर",
    },
    title: {
      en: "NB has used harsh language.",
      ne: "NB ले कडा शब्द प्रयोग गरेका छन्।",
      hi: "NB ने कठोर शब्दों का प्रयोग किया है।",
    },
    body: {
      en: "NB acknowledges that under sustained provocation he has used slang or harsh words. This is documented honestly here so it cannot be weaponised later. The case being made concerns Tilak's threats and physical conduct, not language exchanged in arguments.",
      ne: "NB स्विकार्छन् कि निरन्तर उक्साइएको अवस्थामा उनले अपशब्द वा कडा भाषा प्रयोग गरेका छन्। यो कुरा इमानदारीसाथ यहाँ अभिलेख गरिएको छ ताकि पछि यसलाई हतियार बनाउन नसकियोस्। यो मुद्दा टिलकका धम्की र शारीरिक व्यवहारबारे हो, झगडामा बोलिएका शब्दबारे होइन।",
      hi: "NB स्वीकार करते हैं कि लगातार उकसाए जाने पर उन्होंने अपशब्दों या कठोर भाषा का प्रयोग किया है। यह बात यहां ईमानदारी से दर्ज की गई है ताकि बाद में इसे हथियार न बनाया जा सके। यह मामला तिलक की धमकियों और शारीरिक व्यवहार के बारे में है, बहस में बोले गए शब्दों के बारे में नहीं।",
    },
  },
  {
    date: {
      en: "April 2026 — pending police follow-up after the election",
      ne: "अप्रिल २०२६ — निर्वाचनपछि प्रहरी अनुसन्धान बाँकी",
      hi: "अप्रैल 2026 — चुनाव के बाद पुलिस जांच लंबित",
    },
    title: {
      en: "NB threw a stone in response; Tilak's daughter was unintentionally hit.",
      ne: "NB ले प्रतिक्रियामा ढुंगा हाने; टिलककी छोरीलाई अनजानमै लाग्यो।",
      hi: "NB ने जवाब में पत्थर फेंका; तिलक की बेटी को अनजाने में लग गया।",
    },
    body: {
      en: "While NB was repairing a water pipe below Tilak's house, Tilak threw stones first and shouted caste insults from a small window. NB returned home, threw a stone back at Tilak's house, and it accidentally struck Tilak's daughter. NB regrets the unintended injury, is willing to apologise to her in writing and to compensate her, and asks that this incident be considered alongside — not separate from — the ten-year pattern of provocation that produced it.",
      ne: "NB ले टिलकको घरमुनि पानी पाइप मर्मत गर्दै थिए। टिलकले पहिले ढुंगा हाने र सानो झ्यालबाट जातीय गाली गरे। NB घर फर्केर टिलकको घरतिर ढुंगा फालेका थिए, जुन दुर्घटनावश टिलककी छोरीलाई लाग्यो। NB अनिच्छित चोटप्रति खेद व्यक्त गर्छन्, छोरीलाई लिखित माफीनामा र क्षतिपूर्ति दिन तयार छन्, र यो घटनालाई दश वर्षको उक्साउने ढाँचाबाट छुट्याउनुपर्छ नभन्ने आग्रह गर्छन्।",
      hi: "NB तिलक के घर के नीचे पानी का पाइप ठीक कर रहे थे। तिलक ने पहले पत्थर फेंका और छोटी खिड़की से जातीय गालियां दीं। NB घर लौटकर तिलक के घर की ओर पत्थर फेंका, जो अनजाने में तिलक की बेटी को लगा। NB अनचाही चोट के लिए खेद व्यक्त करते हैं, बेटी को लिखित माफीनामा और मुआवज़ा देने को तैयार हैं, और अनुरोध करते हैं कि यह घटना दस साल के उकसावे के पैटर्न से अलग नहीं, बल्कि उसी के साथ देखी जाए।",
    },
  },
];

const HEADING: Record<Language, { eyebrow: string; title: string; intro: string }> = {
  en: {
    eyebrow: "Candour",
    title: "What Nar Bahadur acknowledges",
    intro: "A complainant who hides his own conduct loses credibility. NB chooses to record his own difficult moments here, in the same file, on the same day they are read.",
  },
  ne: {
    eyebrow: "इमानदारी",
    title: "नर बहादुरले स्विकार्ने कुराहरू",
    intro: "आफ्नै व्यवहार लुकाउने उजुरकर्ताले विश्वसनीयता गुमाउँछन्। NB आफ्ना कठिन क्षणहरू पनि उही फाइलमा, उही दिनमै अभिलेख राख्न रोज्छन्।",
  },
  hi: {
    eyebrow: "ईमानदारी",
    title: "नर बहादुर जो स्वीकार करते हैं",
    intro: "अपना व्यवहार छिपाने वाला शिकायतकर्ता विश्वसनीयता खो देता है। NB अपने कठिन क्षणों को भी उसी फाइल में, उसी दिन, यहीं दर्ज करना चुनते हैं।",
  },
};

export function AcknowledgementsBlock({ lang }: { lang: Language }) {
  const h = HEADING[lang];

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
          <h2 className="text-sm text-[#d4af37] uppercase tracking-widest">{h.eyebrow}</h2>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">{h.title}</h3>
        <p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-3xl">{h.intro}</p>

        <div className="grid gap-5">
          {ITEMS.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
              className="glass-panel rounded-2xl p-6 md:p-8 border-l-4 border-l-[#d4af37]/70"
            >
              <p className="text-xs uppercase tracking-widest text-[#d4af37]/80 mb-2">{item.date[lang]}</p>
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-3">{item.title[lang]}</h4>
              <p className="text-neutral-300 leading-relaxed">{item.body[lang]}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
