"use client";

import { useLang } from "@/context/LanguageContext";
import { Language } from "@/data/caseReportData";

const COPY: Record<Language, { line1: string; line2: string; line3: string }> = {
  en: {
    line1: "Personal record of complaints already filed with statutory authorities — Bishwakarma Samaj, Rangli-Rangliot Police Station, Gram Panchayat, and the Magistrate's Court (Section 107 CrPC).",
    line2: "All claims on this site are sourced to dated documents reproduced as exhibits. This is not a publication, not a media outlet, and not legal advice.",
    line3: "Names of family members not directly named in filed police records are shown only by initials.",
  },
  ne: {
    line1: "यो साइट कानुनी निकायहरूमा पहिले नै दर्ता भइसकेका उजुरीहरूको व्यक्तिगत अभिलेख हो — बिश्वकर्मा समाज, रंगली-रंगलियोट प्रहरी चौकी, ग्राम पञ्चायत र न्यायाधीशको अदालत (धारा १०७ CrPC)।",
    line2: "यहाँ राखिएका सबै कुरा मिति भएका कागजातहरूमा आधारित छन्, जुन प्रदर्शनीका रूपमा यहाँ राखिएका छन्। यो प्रकाशन, सञ्चार माध्यम वा कानुनी सल्लाह होइन।",
    line3: "प्रहरी अभिलेखमा सिधै नाम नआएका परिवारका सदस्यहरूका नाम केवल आद्याक्षरमा देखाइएका छन्।",
  },
  hi: {
    line1: "यह साइट उन शिकायतों का व्यक्तिगत रिकॉर्ड है जो पहले से ही वैधानिक संस्थाओं — बिश्वकर्मा समाज, रंगली-रंगलियोट पुलिस स्टेशन, ग्राम पंचायत और मजिस्ट्रेट कोर्ट (धारा 107 CrPC) — में दर्ज की जा चुकी हैं।",
    line2: "इस साइट के सभी दावे दिनांकित दस्तावेजों पर आधारित हैं जो प्रदर्शनी के रूप में यहां दिए गए हैं। यह कोई प्रकाशन, मीडिया आउटलेट या कानूनी सलाह नहीं है।",
    line3: "जिन परिवार सदस्यों का नाम सीधे पुलिस रिकॉर्ड में नहीं है, उनके नाम केवल आद्याक्षर में दिखाए गए हैं।",
  },
};

export function DisclaimerFooter() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <footer className="border-t border-neutral-900 px-6 py-10 mt-12 bg-black/60">
      <div className="max-w-4xl mx-auto text-center text-neutral-500 text-xs leading-relaxed space-y-2">
        <p>{c.line1}</p>
        <p>{c.line2}</p>
        <p className="text-neutral-600">{c.line3}</p>
      </div>
    </footer>
  );
}
