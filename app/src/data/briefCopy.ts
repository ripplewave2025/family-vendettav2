import { Language } from "./caseReportData";

export interface BriefCopy {
  cover: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stats: { records: string; dated: string; channels: string; span: string;
      recordsLabel: string; datedLabel: string; channelsLabel: string; spanLabel: string };
    contactHead: string;
    contact: string;
  };
  letter: {
    head: string;
    salutation: string;
    body: string[];
    signoff: string;
    signedBy: string;
  };
  procedural: {
    head: string;
    intro: string;
    rows: { channel: string; outcome: string }[];
  };
  ack: {
    head: string;
    intro: string;
  };
  scope: {
    head: string;
    intro: string;
    items: string[];
    note: string;
  };
  index: {
    head: string;
    intro: string;
    colExhibit: string;
    colDate: string;
    colTitle: string;
    colChannel: string;
  };
  exhibitWord: string;
  exhibitMeta: {
    date: string;
    channel: string;
    role: string;
    summary: string;
  };
  printBtn: string;
  exhibitsHead: string;
  disclaimer: string;
}

export const BRIEF_COPY: Record<Language, BriefCopy> = {
  en: {
    cover: {
      eyebrow: "Brief for Counsel — Confidential to recipient advocate",
      title: "In re: Sustained intimidation and obstruction of peaceful possession",
      subtitle: "Complainant: Nar Bahadur Bishwakarma · Lamahatta Village, Ward 16, Darjeeling, West Bengal",
      stats: {
        records: "34", dated: "22", channels: "5", span: "2015–2025",
        recordsLabel: "Documented exhibits",
        datedLabel: "Dated records",
        channelsLabel: "Institutional channels approached",
        spanLabel: "Period covered",
      },
      contactHead: "Point of contact",
      contact: "Upesh Bishwakarma (son of complainant) · upeshb92@gmail.com · WhatsApp on request. Acting on behalf of NB to assist counsel; no fee solicitation.",
    },
    letter: {
      head: "Cover letter to counsel",
      salutation: "Dear Sir / Madam,",
      body: [
        "My father, Nar Bahadur Bishwakarma (NB), aged 59, has for ten years documented in writing a sustained pattern of threats, property interference, and bodily provocation by his elder brother Tilak Bishwakarma. The 34 dated and supporting documents in this brief — letters to party leaders, the Bishwakarma Samaj, the Rangli-Rangliot Police Station, the Magistrate's Court (Section 107 CrPC bond, 31-07-2023), and the Gram Panchayat — together demonstrate that NB has repeatedly chosen written escalation through community and statutory channels, rather than retaliation.",
        "Despite a Section 107 CrPC bond having been imposed on both parties in 2023, the conduct continued — including a witnessed bamphok (heavy blade) incident in 2025 attended by the police at 6th mile, and a 2024 water-source contamination letter signed by 18 villagers.",
        "We seek counsel competent before the Darjeeling magistrate court to assess whether a fresh complaint under the Bharatiya Nyaya Sanhita 2023 — particularly the criminal-intimidation and habitual-offender provisions — is appropriate, and to advise on filing strategy that will not be drawn into the parallel partition question.",
        "We acknowledge openly, on this same brief, three adverse facts about NB's own conduct. Candour is a deliberate choice; we would rather counsel and the Court hear them from us than from the opposing party. They are recorded in the section titled 'What Nar Bahadur acknowledges'.",
        "Materials available on request: original physical letters and police-stamped copies; banglarbhumi land records; the 1986 Samaj-mediated confirmation letter signed by Balaram Chettri and Ganga Bahadur Chettri; access to potential affidavit deponents from the 18 community signatories.",
      ],
      signoff: "Respectfully,",
      signedBy: "Upesh Bishwakarma · for Nar Bahadur Bishwakarma",
    },
    procedural: {
      head: "Procedural history — institutional channels exhausted",
      intro: "NB approached every available non-court forum before this brief was prepared. The progression below is the same one a magistrate values when assessing bona fides.",
      rows: [
        { channel: "Party leaders (2015)", outcome: "First written appeal for mediation. No action." },
        { channel: "Bishwakarma Samaj (2015–2025, multiple sittings)", outcome: "Repeated mediation attempts. Samaj head Ranju issued letters. NB accepted Samaj direction; Tilak refused. Samaj formally withdrew (resolution 13-03-2016) and forwarded the matter to police (20-06-2016, 28-01-2023)." },
        { channel: "Rangli-Rangliot Police Station (2015–2023)", outcome: "Multiple letters and complaints. One stamped complaint (14-11-2022, slingshot injury). Section 107 CrPC papers eventually filed against both parties." },
        { channel: "Magistrate's Court — Section 107 CrPC bond (31-07-2023)", outcome: "Bond imposed on both parties. Tilak's subsequent conduct breached this bond." },
        { channel: "Gram Panchayat (23-04-2025)", outcome: "Petition over electricity and water disconnections of 27-03-2025. Pending." },
      ],
    },
    ack: {
      head: "What Nar Bahadur acknowledges",
      intro: "Three adverse facts about NB's own conduct, recorded here so they cannot be used against him by surprise.",
    },
    scope: {
      head: "Proposed scope of inquiry (for counsel's review)",
      intro: "Subject to counsel's assessment, the documented record appears to support inquiry into the following:",
      items: [
        "Sustained criminal intimidation under BNS 351 — pattern of verbal threats to cause death, hurt, or property damage, documented across multiple letters between 2015 and 2025.",
        "Disobedience of a duly promulgated order (BNS 240) — continuation of conduct after the 31-07-2023 Section 107 CrPC bond.",
        "Voluntarily causing hurt / grievous hurt (BNS 115 / BNS 117) — the 14-11-2022 slingshot-to-chest stamped complaint and the 2025 bamphok incident witnessed by police at 6th mile.",
        "Criminal trespass with intent (BNS 329) — entry into NB's home with a heavy stick on 02-12-2015 causing eight months of displacement to in-laws' home.",
        "Mischief (BNS 324) — destruction of foundation lines (23-11-2015), severance of electricity wire (17-11-2015), recurring water-pipe interference, stones thrown at the construction site (04-07-2017).",
        "Renewed peace-bond proceedings under BNSS 126, with the additional invocation of BNSS 129 / 110 (habitual-offender process) given the prior breach.",
      ],
      note: "These section references reflect our reading of the public record only. The decision on what, if anything, to file rests entirely with engaged counsel. We are not asserting that any of these offences have been judicially established.",
    },
    index: {
      head: "Index of exhibits",
      intro: "Each exhibit is reproduced individually on the pages that follow.",
      colExhibit: "Exhibit",
      colDate: "Date",
      colTitle: "Title",
      colChannel: "Channel",
    },
    exhibitWord: "Exhibit",
    exhibitMeta: {
      date: "Date",
      channel: "Channel",
      role: "Author / source",
      summary: "Summary",
    },
    printBtn: "Print brief / Save as PDF",
    exhibitsHead: "Exhibits",
    disclaimer: "Personal record of complaints filed with statutory authorities. Not a publication. Names of family members not directly named in filed police records appear only by initials in public-facing copy. The legal characterisation in the 'Proposed scope of inquiry' section is provisional and intended for counsel's review.",
  },

  ne: {
    cover: {
      eyebrow: "वकिलका लागि संक्षिप्त विवरण — गोप्य",
      title: "विषय: निरन्तर धम्की र शान्त भोगचलनमा अवरोध",
      subtitle: "उजुरकर्ता: नर बहादुर बिश्वकर्मा · लामाहट्टा गाउँ, वडा १६, दार्जिलिङ, पश्चिम बंगाल",
      stats: {
        records: "३४", dated: "२२", channels: "५", span: "२०१५–२०२५",
        recordsLabel: "अभिलेखित प्रदर्शनी",
        datedLabel: "मिति भएका अभिलेख",
        channelsLabel: "प्रयोग गरिएका संस्थागत माध्यम",
        spanLabel: "अवधि",
      },
      contactHead: "सम्पर्क व्यक्ति",
      contact: "उपेश बिश्वकर्मा (उजुरकर्ताका छोरा) · upeshb92@gmail.com · आवश्यक पर्दा WhatsApp। NB का तर्फबाट वकिललाई सहयोग पुर्‍याउन काम गर्दै; कुनै शुल्क अनुरोध छैन।",
    },
    letter: {
      head: "वकिललाई पत्र",
      salutation: "महोदय / महोदया,",
      body: [
        "मेरा बुबा नर बहादुर बिश्वकर्मा (NB), उमेर ५९, गत दश वर्षदेखि आफ्ना दाजु टिलक बिश्वकर्माबाट लगातार धम्की, सम्पत्तिमा हस्तक्षेप र शारीरिक उक्साउने गरिएको लिखित अभिलेख राख्दै आउनुभएको छ। यस ब्रिफमा रहेका ३४ मिति भएका तथा सहायक कागजातहरू — पार्टी नेताहरू, बिश्वकर्मा समाज, रंगली-रंगलियोट प्रहरी चौकी, न्यायाधीशको अदालत (धारा १०७ CrPC, मिति ३१-०७-२०२३) र ग्राम पञ्चायतलाई पठाइएका पत्रहरू — मिलेर देखाउँछन् कि NB ले प्रतिशोधको सट्टा बारम्बार समुदायिक र वैधानिक माध्यमबाट लिखित रूपमा कुरा उठाउने नै छनोट गर्नुभएको छ।",
        "२०२३ मा दुवै पक्षलाई धारा १०७ CrPC अन्तर्गत बन्धन तोकिएता पनि व्यवहार जारी रह्यो — जसमा २०२५ मा छैठौं माइलमा प्रहरीको उपस्थितिमा भएको बाँपोक (गहिरो धारिलो) घटना र २०२४ को १८ जना गाउँलेहरूको हस्ताक्षरसहितको पानी दूषित गरिएको पत्र समावेश छन्।",
        "हामी दार्जिलिङ न्यायाधीश अदालतमा सक्षम वकिलको खोजीमा छौं जसले भारतीय न्याय संहिता २०२३ अन्तर्गत — विशेष गरी आपराधिक धम्की र अभ्यस्त अपराधी सम्बन्धी प्रावधानहरूमा — नयाँ उजुरी उपयुक्त छ कि छैन भनी मूल्यांकन गरून्, र समानान्तर बाँडफाँड प्रश्नमा फस्न नदिने दर्ता रणनीतिको सल्लाह दिऊन्।",
        "हामी यस ब्रिफमै NB को आफ्नै व्यवहारका तीन प्रतिकूल तथ्यहरू खुला रूपमा स्विकार्छौं। यो इमानदारी सोची-समझी गरिएको छनोट हो; हामी विरोधी पक्षबाट होइन, हामी आफैबाट वकिल र अदालतले सुनुन् भन्ने चाहन्छौं।",
        "अनुरोध हुँदा उपलब्ध सामग्रीहरू: मूल लिखित पत्रहरू र प्रहरी-छाप भएका प्रतिलिपिहरू; बाङलाभूमि जग्गा अभिलेख; १९८६ मा बलराम छेत्री र गंगा बहादुर छेत्रीद्वारा हस्ताक्षरित समाज मध्यस्थताको पुष्टि-पत्र; १८ जना सामुदायिक हस्ताक्षरकर्तामध्ये सम्भावित शपथ-दाताहरूसँगको सम्पर्क।",
      ],
      signoff: "सादर,",
      signedBy: "उपेश बिश्वकर्मा · नर बहादुर बिश्वकर्माको तर्फबाट",
    },
    procedural: {
      head: "प्रक्रियागत इतिहास — संस्थागत माध्यमहरूको थकाई",
      intro: "यो ब्रिफ तयार हुनुअघि NB ले उपलब्ध हरेक गैर-न्यायिक मञ्चसँग सम्पर्क गर्नुभयो। तलको क्रम न्यायाधीशले सद्भावना मूल्यांकन गर्दा महत्त्व दिने उही क्रम हो।",
      rows: [
        { channel: "पार्टी नेताहरू (२०१५)", outcome: "मध्यस्थताका लागि पहिलो लिखित अनुरोध। कुनै कारबाही भएन।" },
        { channel: "बिश्वकर्मा समाज (२०१५–२०२५, धेरै बैठक)", outcome: "बारम्बार मध्यस्थता प्रयास। समाज प्रमुख रञ्जुले पत्रहरू जारी गर्नुभयो। NB ले समाजको निर्देशन माने; टिलकले अस्वीकार गरे। समाजले औपचारिक रूपमा आफूलाई अलग्याउँदै (निर्णय १३-०३-२०१६) मामिला प्रहरीलाई पठायो (२०-०६-२०१६, २८-०१-२०२३)।" },
        { channel: "रंगली-रंगलियोट प्रहरी चौकी (२०१५–२०२३)", outcome: "धेरै पत्र र उजुरीहरू। एउटा छाप लागेको उजुरी (१४-११-२०२२, गुलेलीबाट चोट)। अन्ततः दुवै पक्षलाई धारा १०७ CrPC कागजात।" },
        { channel: "न्यायाधीशको अदालत — धारा १०७ CrPC बन्धन (३१-०७-२०२३)", outcome: "दुवै पक्षलाई बन्धन। टिलकको पछिल्लो व्यवहारले यो बन्धन उल्लंघन गर्‍यो।" },
        { channel: "ग्राम पञ्चायत (२३-०४-२०२५)", outcome: "२७-०३-२०२५ को बिजुली र पानी काटिएकोबारे निवेदन। निर्णय बाँकी।" },
      ],
    },
    ack: {
      head: "नर बहादुरले स्विकार्ने कुराहरू",
      intro: "NB को आफ्नै व्यवहारका तीन प्रतिकूल तथ्यहरू, जसलाई पछि हामीविरुद्ध अचानक प्रयोग गर्न नसकियोस् भनी यहीँ अभिलेख गरिएको छ।",
    },
    scope: {
      head: "अनुसन्धानको प्रस्तावित दायरा (वकिलको पुनरावलोकनका लागि)",
      intro: "वकिलको मूल्यांकनको अधीनमा रहेर, अभिलेखित दस्तावेजले निम्न विषयमा अनुसन्धानलाई समर्थन गर्ने देखिन्छ:",
      items: [
        "BNS ३५१ अन्तर्गत निरन्तर आपराधिक धम्की — २०१५ देखि २०२५ सम्मका धेरै पत्रहरूमा अभिलेखित मृत्यु, चोट वा सम्पत्ति क्षति गर्ने मौखिक धम्कीको ढाँचा।",
        "विधिवत् जारी गरिएको आदेशको अवज्ञा (BNS २४०) — ३१-०७-२०२३ को धारा १०७ CrPC बन्धनपछि व्यवहार जारी रहनु।",
        "स्वेच्छाले चोट / गम्भीर चोट (BNS ११५ / BNS ११७) — १४-११-२०२२ को छातीमा गुलेलीको छाप-उजुरी र २०२५ को छैठौं माइलमा प्रहरी साक्षीसहितको बाँपोक घटना।",
        "अपराधिक प्रवेश (BNS ३२९) — ०२-१२-२०१५ मा NB को घरमा भारी लठ्ठीसहित प्रवेश, जसले गर्दा आठ महिना ससुराली बस्न बाध्य।",
        "द्वेषपूर्ण क्षति (BNS ३२४) — नापको धागो भत्काउने (२३-११-२०१५), बिजुली तार काट्ने (१७-११-२०१५), बारम्बार पानी पाइप अवरोध, निर्माण स्थलमा ढुंगा फाल्ने (०४-०७-२०१७)।",
        "BNSS १२६ अन्तर्गत नवीकृत शान्ति-बन्धन कारबाही, र पहिले उल्लंघनको आधारमा BNSS १२९ / ११० (अभ्यस्त अपराधी प्रक्रिया) को अतिरिक्त प्रयोग।",
      ],
      note: "यी धारा सन्दर्भहरू हाम्रो सार्वजनिक अभिलेख पठनमात्र प्रतिबिम्बित गर्छन्। दर्ता गर्ने वा नगर्ने निर्णय पूर्ण रूपमा नियुक्त वकिलकै अधिकारमा रहन्छ। यी कुनै पनि अपराध न्यायिक रूपमा प्रमाणित भएका छन् भन्ने हाम्रो दाबी होइन।",
    },
    index: {
      head: "प्रदर्शनी सूची",
      intro: "प्रत्येक प्रदर्शनी पछिका पृष्ठहरूमा छुट्टाछुट्टै राखिएको छ।",
      colExhibit: "प्रदर्शनी",
      colDate: "मिति",
      colTitle: "शीर्षक",
      colChannel: "माध्यम",
    },
    exhibitWord: "प्रदर्शनी",
    exhibitMeta: {
      date: "मिति",
      channel: "माध्यम",
      role: "लेखक / स्रोत",
      summary: "सारांश",
    },
    printBtn: "ब्रिफ छाप्नुहोस् / PDF सेभ गर्नुहोस्",
    exhibitsHead: "प्रदर्शनीहरू",
    disclaimer: "वैधानिक निकायहरूमा दर्ता भइसकेका उजुरीहरूको व्यक्तिगत अभिलेख। यो प्रकाशन होइन। प्रहरी अभिलेखमा सिधै नाम नआएका परिवारका सदस्यहरूका नाम सार्वजनिक प्रतिमा केवल आद्याक्षरमा छन्। 'अनुसन्धानको प्रस्तावित दायरा' खण्डको कानुनी व्याख्या अस्थायी हो र वकिलको पुनरावलोकनका लागि मात्र हो।",
  },

  hi: {
    cover: {
      eyebrow: "वकील के लिए संक्षिप्त ब्रीफ — गोपनीय",
      title: "विषय: सतत धमकी और शांतिपूर्ण कब्जे में बाधा",
      subtitle: "शिकायतकर्ता: नर बहादुर बिश्वकर्मा · लामाहट्टा गांव, वार्ड 16, दार्जिलिंग, पश्चिम बंगाल",
      stats: {
        records: "34", dated: "22", channels: "5", span: "2015–2025",
        recordsLabel: "दर्ज प्रदर्शनी",
        datedLabel: "दिनांकित रिकॉर्ड",
        channelsLabel: "उपयोग किए गए संस्थागत माध्यम",
        spanLabel: "अवधि",
      },
      contactHead: "संपर्क व्यक्ति",
      contact: "उपेश बिश्वकर्मा (शिकायतकर्ता के पुत्र) · upeshb92@gmail.com · आवश्यकता होने पर WhatsApp। NB की ओर से वकील की सहायता के लिए कार्य; कोई शुल्क अनुरोध नहीं।",
    },
    letter: {
      head: "वकील को पत्र",
      salutation: "महोदय / महोदया,",
      body: [
        "मेरे पिता नर बहादुर बिश्वकर्मा (NB), उम्र 59, ने पिछले दस वर्षों से अपने बड़े भाई तिलक बिश्वकर्मा द्वारा सतत धमकी, संपत्ति में हस्तक्षेप और शारीरिक उकसावे का लिखित रिकॉर्ड बनाए रखा है। इस ब्रीफ में 34 दिनांकित और सहायक दस्तावेज़ — पार्टी नेताओं, बिश्वकर्मा समाज, रंगली-रंगलियोट पुलिस स्टेशन, मजिस्ट्रेट कोर्ट (धारा 107 CrPC बंधन, 31-07-2023) और ग्राम पंचायत को भेजे गए पत्र — मिलकर दिखाते हैं कि NB ने प्रतिशोध के बजाय बार-बार सामुदायिक और वैधानिक माध्यमों से लिखित रूप में बात उठाने का चयन किया है।",
        "2023 में दोनों पक्षों पर धारा 107 CrPC बंधन लागू होने के बावजूद व्यवहार जारी रहा — जिसमें 2025 में छठे माइल पर पुलिस की उपस्थिति में हुई बाँपोक (भारी धारदार) घटना और 2024 का 18 ग्रामीणों के हस्ताक्षरित पानी दूषण पत्र शामिल हैं।",
        "हम दार्जिलिंग मजिस्ट्रेट कोर्ट में सक्षम वकील की तलाश में हैं जो भारतीय न्याय संहिता 2023 के अंतर्गत — विशेषकर आपराधिक धमकी और अभ्यस्त अपराधी से संबंधित प्रावधानों पर — नई शिकायत उपयुक्त है या नहीं इसका मूल्यांकन करें, और समानांतर बंटवारे के प्रश्न में न खिंचने वाली दर्ज रणनीति की सलाह दें।",
        "हम इस ब्रीफ में ही NB के अपने व्यवहार के तीन प्रतिकूल तथ्य खुले रूप में स्वीकार करते हैं। यह ईमानदारी एक सोच-समझकर लिया गया विकल्प है; हम चाहते हैं कि वकील और अदालत ये बातें विरोधी पक्ष से नहीं, हमसे ही सुनें।",
        "अनुरोध पर उपलब्ध सामग्री: मूल लिखित पत्र और पुलिस-मुहरयुक्त प्रतियां; बंगलाभूमि भूमि रिकॉर्ड; 1986 का बलराम छेत्री और गंगा बहादुर छेत्री द्वारा हस्ताक्षरित समाज मध्यस्थता पुष्टि-पत्र; 18 सामुदायिक हस्ताक्षरकर्ताओं में से संभावित शपथपत्र दाताओं तक पहुंच।",
      ],
      signoff: "सादर,",
      signedBy: "उपेश बिश्वकर्मा · नर बहादुर बिश्वकर्मा की ओर से",
    },
    procedural: {
      head: "प्रक्रियात्मक इतिहास — संस्थागत माध्यमों की थकावट",
      intro: "यह ब्रीफ तैयार होने से पहले NB ने हर उपलब्ध गैर-अदालती मंच से संपर्क किया। नीचे दिया गया क्रम वही है जिसे मजिस्ट्रेट सद्भावना के मूल्यांकन में महत्व देता है।",
      rows: [
        { channel: "पार्टी नेता (2015)", outcome: "मध्यस्थता के लिए पहली लिखित अपील। कोई कार्रवाई नहीं।" },
        { channel: "बिश्वकर्मा समाज (2015–2025, कई बैठकें)", outcome: "बार-बार मध्यस्थता का प्रयास। समाज प्रमुख रंजू ने पत्र जारी किए। NB ने समाज के निर्देश माने; तिलक ने इनकार किया। समाज ने औपचारिक रूप से अलग होकर (निर्णय 13-03-2016) मामला पुलिस को भेजा (20-06-2016, 28-01-2023)।" },
        { channel: "रंगली-रंगलियोट पुलिस स्टेशन (2015–2023)", outcome: "कई पत्र और शिकायतें। एक मुहरयुक्त शिकायत (14-11-2022, गुलेल से चोट)। अंततः दोनों पक्षों के लिए धारा 107 CrPC कागज़ात।" },
        { channel: "मजिस्ट्रेट कोर्ट — धारा 107 CrPC बंधन (31-07-2023)", outcome: "दोनों पक्षों पर बंधन लगा। तिलक के बाद के व्यवहार ने इसका उल्लंघन किया।" },
        { channel: "ग्राम पंचायत (23-04-2025)", outcome: "27-03-2025 को बिजली और पानी काटे जाने पर अर्जी। निर्णय लंबित।" },
      ],
    },
    ack: {
      head: "नर बहादुर जो स्वीकार करते हैं",
      intro: "NB के अपने व्यवहार से जुड़े तीन प्रतिकूल तथ्य, जो यहां दर्ज किए गए हैं ताकि बाद में अचानक हमारे विरुद्ध न उपयोग हो सकें।",
    },
    scope: {
      head: "जांच का प्रस्तावित दायरा (वकील की समीक्षा के लिए)",
      intro: "वकील के मूल्यांकन के अधीन, दर्ज रिकॉर्ड निम्नलिखित विषयों पर जांच का समर्थन करता प्रतीत होता है:",
      items: [
        "BNS 351 के अंतर्गत सतत आपराधिक धमकी — 2015 से 2025 तक के कई पत्रों में दर्ज मृत्यु, चोट या संपत्ति क्षति की मौखिक धमकियों का पैटर्न।",
        "विधिवत जारी आदेश की अवज्ञा (BNS 240) — 31-07-2023 के धारा 107 CrPC बंधन के बाद भी व्यवहार जारी रहना।",
        "स्वेच्छा से चोट / गंभीर चोट (BNS 115 / BNS 117) — 14-11-2022 की छाती पर गुलेल वाली मुहरयुक्त शिकायत और 2025 की छठे माइल पर पुलिस-गवाही वाली बाँपोक घटना।",
        "अपराधिक अतिक्रमण (BNS 329) — 02-12-2015 को NB के घर में भारी लाठी के साथ प्रवेश, जिससे आठ महीने ससुराल में रहना पड़ा।",
        "द्वेषपूर्ण क्षति (BNS 324) — नाप की रेखाएं तोड़ना (23-11-2015), बिजली की तार काटना (17-11-2015), बार-बार पानी के पाइप में बाधा, निर्माण स्थल पर पत्थर फेंकना (04-07-2017)।",
        "BNSS 126 के अंतर्गत नवीकृत शांति-बंधन कार्यवाही, और पूर्व उल्लंघन को देखते हुए BNSS 129 / 110 (अभ्यस्त अपराधी प्रक्रिया) का अतिरिक्त आह्वान।",
      ],
      note: "ये धारा संदर्भ केवल हमारे सार्वजनिक रिकॉर्ड के पठन को दर्शाते हैं। दर्ज करने या न करने का निर्णय पूरी तरह नियुक्त वकील पर है। हम यह दावा नहीं कर रहे कि इनमें से कोई भी अपराध न्यायिक रूप से सिद्ध हो चुका है।",
    },
    index: {
      head: "प्रदर्शनी सूची",
      intro: "प्रत्येक प्रदर्शनी आगे के पन्नों पर अलग-अलग दी गई है।",
      colExhibit: "प्रदर्शनी",
      colDate: "तिथि",
      colTitle: "शीर्षक",
      colChannel: "माध्यम",
    },
    exhibitWord: "प्रदर्शनी",
    exhibitMeta: {
      date: "तिथि",
      channel: "माध्यम",
      role: "लेखक / स्रोत",
      summary: "सारांश",
    },
    printBtn: "ब्रीफ प्रिंट करें / PDF सेव करें",
    exhibitsHead: "प्रदर्शनियां",
    disclaimer: "वैधानिक संस्थानों में दर्ज शिकायतों का व्यक्तिगत रिकॉर्ड। यह प्रकाशन नहीं है। पुलिस रिकॉर्ड में सीधे नाम न आने वाले परिवार सदस्यों के नाम सार्वजनिक प्रति में केवल आद्याक्षरों में हैं। 'जांच का प्रस्तावित दायरा' खंड की कानूनी व्याख्या अस्थायी है और केवल वकील की समीक्षा के लिए है।",
  },
};

export const PRIMARY_TO_CHANNEL: Record<string, Record<Language, string>> = {
  samaj: { en: "Bishwakarma Samaj", ne: "बिश्वकर्मा समाज", hi: "बिश्वकर्मा समाज" },
  police: { en: "Rangli-Rangliot Police Station", ne: "रंगली-रंगलियोट प्रहरी", hi: "रंगली-रंगलियोट पुलिस" },
  legal: { en: "Magistrate's Court", ne: "न्यायाधीशको अदालत", hi: "मजिस्ट्रेट कोर्ट" },
  civic: { en: "Gram Panchayat", ne: "ग्राम पञ्चायत", hi: "ग्राम पंचायत" },
  violence: { en: "Incident report", ne: "घटना उजुरी", hi: "घटना शिकायत" },
  history: { en: "Historical record", ne: "ऐतिहासिक अभिलेख", hi: "ऐतिहासिक रिकॉर्ड" },
};
