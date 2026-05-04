const state = {
  lang: localStorage.getItem("caseReportLang") || "en",
  filter: "all",
  openPatterns: new Set(),
};

const copy = {
  en: {},
  ne: {},
  hi: {},
};

const records = [];
const patterns = [];
const villageFacts = [];
const interpretations = [];

Object.assign(copy.en, {
  title: "NB Case Evidence Report",
  hero: {
    eyebrow: "Pattern shown by letters, Samaj records, police complaints, and later civic petitions",
    title: "Tilak's refusal to divide the property kept provoking NB into repeated conflict.",
    copy: "This offline report now organizes 32 records from 05-07-2015 to 29-10-2025 in clean date order, then separates undated supporting letters so the pattern can be read without confusion.",
    note: "Property title is still disputed. This report does not decide ownership. It focuses on what is shown in written records: refusal to settle, repeated threats, failed mediation, recurring utilities conflict, and repeated institutional outreach by NB.",
  },
  stats: {
    recordsValue: "32",
    recordsLabel: "Records in file",
    datedValue: "22",
    datedLabel: "Dated records",
    institutionsValue: "5",
    institutionsLabel: "Channels used",
    spanValue: "2015-2025",
    spanLabel: "Time span",
  },
  nav: {
    background: "Background",
    mediation: "Mediation Wall",
    timeline: "Chronology",
    support: "Undated support",
    patterns: "Pattern analysis",
    verbal: "Verbal abuse",
    incidents: "Physical incidents",
    asks: "NB's requests",
  },
  background: {
    eyebrow: "Background",
    title: "The dispute began with a living arrangement that never settled into a final partition.",
    copy1: "Nar Bahadur Bishwakarma and Tilak Bishwakarma are brothers from the same family property line. NB's account says Tilak had earlier agreed to move to a designated place so the ancestral-house position could be settled, but that understanding never became a lasting division on the ground.",
    copy2: "Once that understanding broke down, the conflict moved from family argument into written complaints. The record now shows repeated approaches to party leaders, Bishwakarma Samaj, police, court-linked proceedings, and later even Gram Panchayat over electricity and water cuts.",
    note: "NB's notes also acknowledge a later stick incident during a death-ceremony conflict that went to court and was closed. Even with that context, the wider paper trail still shows NB repeatedly choosing written escalation and third-party intervention.",
  },
  wall: {
    eyebrow: "Mediation Wall",
    title: "The strongest institutional pattern is simple: NB kept asking for a process, and the process kept breaking at Tilak's refusal.",
    intro: "This section is the cleanest explanation for police review because it traces not one quarrel, but the failure of every formal peace route.",
    calloutLabel: "Central reading of the record",
    calloutTitle: "Every formal path to peace was blocked, then the conflict rolled outward.",
    calloutCopy: "The Samaj decision remains the key institutional document. It records that NB accepted direction, while Tilak did not. Later letters show that even after pushing the dispute toward police, a durable settlement still never arrived.",
    calloutQuote: "Key point: the Samaj record says NB agreed to direction, but Tilak remained adamant and would not settle through that forum.",
    steps: [
      { title: "NB asked outsiders to intervene.", body: "The file begins with a written appeal for mediation rather than retaliation." },
      { title: "Bishwakarma Samaj held repeated sessions.", body: "Multiple letters show NB returning to the Samaj to ask for a peaceful living arrangement." },
      { title: "NB accepted community direction.", body: "The Samaj decision records that NB agreed to abide by the direction linked to late Khadka Bahadur's word." },
      { title: "Tilak refused to settle through Samaj.", body: "The same decision says Tilak remained adamant and pushed the matter away from that forum." },
      { title: "Samaj stepped back and sent the matter outward.", body: "Later letters show Samaj forwarding the conflict to police because it could not secure peace itself." },
      { title: "Police, court, and later civic petitions still did not close the pattern.", body: "The record continues into police complaints, Section 107 CrPC papers, and a 2025 Gram Panchayat petition." },
    ],
  },
});

Object.assign(copy.en, {
  timeline: {
    eyebrow: "Chronological record",
    title: "Dated records sorted from earliest to latest",
    intro: "The main timeline below uses records with a visible date or month-year. Letters without a reliable date are moved to the supporting section so the chronology stays clean.",
    coverageLabel: "Strict date order",
    coverageCopy: "Visible dates run from 05-07-2015 through 29-10-2025.",
    filters: {
      all: "All",
      violence: "Violence",
      samaj: "Samaj",
      police: "Police",
      legal: "Legal",
      civic: "Civic",
    },
    status: "Showing {visible} of {total} dated records",
  },
  support: {
    eyebrow: "Undated supporting records",
    title: "Important letters kept outside the strict date line",
    intro: "These documents deepen the pattern analysis, but the scan does not show a reliable full date. Keeping them here preserves chronology without discarding evidence.",
  },
  patterns: {
    eyebrow: "Pattern analysis",
    title: "The record clusters into repeatable behaviors, not isolated incidents.",
    intro: "Each block below argues one pattern, places the scanned letters directly beside it, and points to the separate fact and interpretation layers where needed.",
    viewAll: "View all related letters",
    hideAll: "Hide related letters",
    groups: {
      refusal: {
        label: "Pattern 1",
        title: "Refusal to divide and refusal to settle",
        body1: "Multiple letters, plus the Samaj decision and the 1986 confirmation letter, point to the same claim: there was a designated arrangement, and Tilak kept refusing to settle into it.",
        body2: "This is the backbone of the case. The village-facts section then adds the surrounding picture of continuous occupation, family-based blocking arguments, and responsibility being pushed onto the next generation.",
      },
      utilities: {
        label: "Pattern 2",
        title: "Displacement, water, electricity, and everyday pressure",
        body1: "The conflict repeatedly reaches into habitability: who can stay home, who can build, whether the water source is disturbed, and whether electricity remains connected.",
        body2: "That makes the dispute more than a paper partition issue. It becomes a lived pressure campaign, and the village-facts section helps explain the atmosphere of intimidation around it.",
      },
      outreach: {
        label: "Pattern 3",
        title: "NB keeps building a paper trail",
        body1: "Across years and institutions, NB repeatedly writes instead of going silent. The accumulation of letters is itself evidence of repeated good-faith outreach.",
        body2: "Party leaders, Samaj, police, court-linked process, and Gram Panchayat all appear because the earlier channels did not close the matter. That outward movement is reinforced again in the village-facts section.",
      },
      escalation: {
        label: "Pattern 4",
        title: "Threats escalate from words to injury, witnesses, and legal control",
        body1: "Later records involve physical confrontation, slingshot injury, next-generation involvement, and Section 107 CrPC papers for both parties.",
        body2: "The 2024 and 2025 records show that even after court-linked process, the conflict continued to renew itself. The interpretation section keeps motive-heavy reading separate from the factual layer.",
      },
    },
  },
  verbal: {
    eyebrow: "Verbal abuse record",
    title: "Reported language from NB's working notes",
    intro: "These lines come from working notes rather than from every scanned letter. They are kept here because they help explain the provocation pattern NB says he faced repeatedly.",
    quotes: [
      "I will slap you.",
      "I will hit you.",
      "I will hit you with the stick.",
      "You're a slave of Bhutia.",
      "You're a leftover eater of Bhutia.",
      "You don't have brains.",
      "There is a black mad dog roaming around, and I will hit him.",
      "I have people coming to take you to jail.",
    ],
  },
  incidents: {
    eyebrow: "Key physical incidents",
    title: "The record keeps returning to bodily risk.",
    intro: "This list condenses the strongest physical episodes mentioned across the dated record and later notes.",
    note: "The 2025 Bamphok incident is note-backed rather than part of the earlier 2015-2024 scanned record set.",
    closing: "Tilak fled police. There is a witness.",
    items: [
      "2015 construction conflict: foundation lines were allegedly destroyed, threats were made, and stones were reportedly thrown.",
      "02-12-2015: NB says he was attacked and chased from home, forcing him to stay with in-laws.",
      "04-07-2017: NB says building stones placed in the front-yard area were thrown away.",
      "26-09-2021: NB's complaint says Roshan moved into the confrontation after stone throwing and tried to assault Aarati.",
      "12-11-2022 / received 14-11-2022: a police-stamped complaint says NB was hit in the chest with a slingshot stone while cutting trees.",
      "2025 note-backed account: NB says Tilak tried to hit him with a Bamphok in a public area, police came, a witness existed, and Tilak fled.",
    ],
  },
  asks: {
    eyebrow: "What NB is asking for",
    title: "NB's requested outcome stays narrow and practical.",
    intro: "These four requests come directly from the working summary file and remain the clearest closing statement of what NB says he wants.",
    items: [
      "Tilak should build at the designated place and leave the present house position as it is.",
      "Tilak should stop antagonizing NB.",
      "Tilak should stop dehumanizing and threatening NB.",
      "Tilak should stop physically abusing NB.",
    ],
    closing: "The paper trail is clear. The pattern is clear. Action is overdue.",
  },
  footer: "This report opens directly under file:// and keeps all scans local to the same folder so the evidence package remains portable.",
  metaLabels: { writer: "Writer", source: "Source" },
  buttonClose: "Close",
  tags: {
    violence: "Violence",
    samaj: "Samaj",
    police: "Police",
    legal: "Legal",
    civic: "Civic",
    mediation: "Mediation",
    utilities: "Utilities",
    displacement: "Displacement",
    stamped: "Stamped",
    warning: "Warning",
    signatures: "Signatures",
    history: "Historical claim",
    resolution: "Resolution request",
    harassment: "Harassment",
    injury: "Injury",
    court: "Court",
  },
  noDate: "No reliable visible date",
});

Object.assign(copy.ne, {
  title: "एनबी केस प्रमाण प्रतिवेदन",
  hero: {
    eyebrow: "पत्रहरू, समाजका अभिलेख, प्रहरी उजुरी र पछिल्ला स्थानीय निवेदनहरूले देखाएको ढाँचा",
    title: "सम्पत्ति नबाँड्ने टिलकको अडानले NB लाई बारम्बार टकरावतर्फ धकेल्यो।",
    copy: "यो अफलाइन प्रतिवेदनले 05-07-2015 देखि 29-10-2025 सम्मका 32 वटा अभिलेखलाई सफा मितिक्रममा राख्छ र मिति नदेखिएका सहायक पत्रहरूलाई छुट्टै राखेर ढाँचा स्पष्ट देखाउँछ।",
    note: "जग्गाको कानुनी स्वामित्व अझै विवादित छ। यो प्रतिवेदनले स्वामित्वको फैसला गर्दैन। यसले लिखित प्रमाणमा देखिएको कुरा मात्र जोड दिन्छ: मिलाउन अस्वीकार, बारम्बार धम्की, असफल मध्यस्थता, पानी-बिजुलीको झगडा, र NB द्वारा गरिएको निरन्तर संस्थागत पहल।",
  },
  stats: {
    recordsValue: "32",
    recordsLabel: "फाइलका अभिलेख",
    datedValue: "22",
    datedLabel: "मिति भएका अभिलेख",
    institutionsValue: "5",
    institutionsLabel: "पुगेका माध्यम",
    spanValue: "2015-2025",
    spanLabel: "समय दायरा",
  },
  nav: {
    background: "पृष्ठभूमि",
    mediation: "मध्यस्थता अवरोध",
    timeline: "कालक्रम",
    support: "मिति नभएका पत्र",
    patterns: "ढाँचा विश्लेषण",
    verbal: "मौखिक दुर्व्यवहार",
    incidents: "शारीरिक घटना",
    asks: "NB का मागहरू",
  },
  background: {
    eyebrow: "पृष्ठभूमि",
    title: "झगडाको जड एउटा बसोबासको समझदारी थियो, जुन अन्तिम विभाजनमा रूपान्तरण भएन।",
    copy1: "नर बहादुर बिश्वकर्मा र टिलक बिश्वकर्मा एउटै पारिवारिक सम्पत्तिसँग जोडिएका दाजुभाइ हुन्। NB को कथन अनुसार टिलकले पहिल्यै तोकिएको ठाउँमा सरेर बस्ने र पुरानो घरको स्थान मिलाउने सहमति दिएको थियो, तर त्यो सहमति जमिनमा स्थायी विभाजनमा बदलिन सकेन।",
    copy2: "त्यो समझदारी भत्किएपछि झगडा घरभित्रको विवादमा सीमित रहेन। अभिलेखले देखाउँछन् कि NB ले पार्टी नेता, बिश्वकर्मा समाज, प्रहरी, अदालत-सम्बद्ध प्रक्रिया र पछि ग्राम पञ्चायतसम्म लिखित रूपमा पुगेर मद्दत मागिरहे।",
    note: "NB का नोटहरूले दाहसंस्कार सम्बन्धी विवादमा पछि भएको लठ्ठी प्रकरण पनि स्वीकार गर्छन्, जुन अदालतमा गएर बन्द भयो। त्यस सन्दर्भका बावजुद, ठूलो लिखित श्रृंखलाले NB ले बारम्बार तेस्रो पक्ष र लिखित प्रक्रिया रोजेको देखाउँछ।",
  },
  wall: {
    eyebrow: "मध्यस्थता अवरोध",
    title: "सबैभन्दा स्पष्ट संस्थागत ढाँचा यही हो: NB ले प्रक्रिया खोजे, तर प्रक्रिया टिलकको अस्वीकारमै अड्कियो।",
    intro: "प्रहरी वा कानुनी समीक्षा गर्दा यो भाग सबैभन्दा उपयोगी हुन्छ, किनकि यसले एउटै झगडा होइन, शान्तिका सबै औपचारिक बाटा कसरी असफल भए भनेर देखाउँछ।",
    calloutLabel: "केन्द्रीय निष्कर्ष",
    calloutTitle: "शान्तिको हरेक औपचारिक बाटो रोकियो, त्यसपछि झगडा बाहिरतिर फैलियो।",
    calloutCopy: "समाजको निर्णय यस फाइलको मुख्य संस्थागत कागज हो। त्यसमा NB ले निर्देशन मानेको तर टिलक नमानेको उल्लेख छ। पछिल्ला पत्रहरूले समाजबाट प्रहरीले र प्रहरीबाट कानुनी प्रक्रियातिर गएको बाटो पनि अन्तिम समाधानसम्म नपुगेको देखाउँछन्।",
    calloutQuote: "मुख्य बुँदा: समाजको निर्णयमा NB निर्देशन मान्न तयार थियो, तर टिलक अडानमै रहेर सोही मंचबाट मिलाप हुन दिएन।",
    steps: [
      { title: "NB ले बाह्य हस्तक्षेप मागे।", body: "फाइलको सुरुवात प्रतिशोधबाट होइन, लिखित मध्यस्थताबाट हुन्छ।" },
      { title: "बिश्वकर्मा समाजले पटक-पटक बैठक राख्यो।", body: "अनेक पत्रहरूले NB शान्तिपूर्ण बसोबासको समाधान खोज्दै समाजकहाँ फर्किरहेकै देखाउँछन्।" },
      { title: "NB ले समुदायको निर्देशन मान्न सहमति जनायो।", body: "समाजको निर्णयले NB ले दिवंगत खड्का बहादुरको भनाइअनुसार चल्ने सहमति दिएको भन्छ।" },
      { title: "टिलक समाजमार्फत मिल्न तयार भएन।", body: "उही निर्णयले टिलक अडानमै रहेर समाजीय मेलमिलाप अस्वीकार गरेको देखाउँछ।" },
      { title: "समाजले जिम्मेवारी हटायो र मुद्दा बाहिर पठायो।", body: "पछिल्ला पत्रहरूले समाजले आफैं समाधान गर्न नसकेर प्रहरीतर्फ पठाएको देखाउँछन्।" },
      { title: "प्रहरी, अदालत र स्थानीय निवेदनपछि पनि ढाँचा बन्द भएन।", body: "फाइल Section 107 CrPC र 2025 को ग्राम पञ्चायत निवेदनसम्म जान्छ, तर समस्या फेरि दोहोरिन्छ।" },
    ],
  },
  timeline: {
    eyebrow: "कालक्रमिक अभिलेख",
    title: "मिति देखिएका कागजहरू पुरानोदेखि नयाँसम्म",
    intro: "मुख्य टाइमलाइनमा दिन-महिना-वर्ष वा कम्तीमा महिना-वर्ष देखिएका कागजहरू राखिएका छन्। मिति नदेखिने कागजहरू अलग राखिएका छन् ताकि क्रम स्पष्ट रहोस्।",
    coverageLabel: "कडा मितिक्रम",
    coverageCopy: "देखिने मितिहरू 05-07-2015 देखि 29-10-2025 सम्म फैलिएका छन्।",
    filters: {
      all: "सबै",
      violence: "हिंसा",
      samaj: "समाज",
      police: "प्रहरी",
      legal: "कानुनी",
      civic: "स्थानीय",
    },
    status: "{total} मध्ये {visible} मिति भएका अभिलेख देखाइँदै",
  },
  support: {
    eyebrow: "मिति नभएका सहायक कागज",
    title: "कडा कालक्रमबाहिर राखिएका तर महत्वपूर्ण पत्रहरू",
    intro: "यी कागजहरूले ढाँचा बुझ्न मद्दत गर्छन्, तर स्क्यानमा भरपर्दो पूरा मिति देखिँदैन। त्यसैले कालक्रम बिगार्न नदिई यहाँ राखिएका छन्।",
  },
  patterns: {
    eyebrow: "ढाँचा विश्लेषण",
    title: "अभिलेखले एकपटकको झगडा होइन, दोहोरिने व्यवहार देखाउँछन्।",
    intro: "तलका प्रत्येक ब्लकले एउटा ढाँचा देखाउँछ, सम्बन्धित पत्रहरू सिधै राख्छ, र आवश्यक ठाउँमा छुट्टै तथ्य तथा व्याख्या भागतर्फ संकेत गर्छ।",
    viewAll: "सम्बन्धित सबै पत्र हेर्नुहोस्",
    hideAll: "थप पत्र लुकाउनुहोस्",
    groups: {
      refusal: {
        label: "ढाँचा 1",
        title: "विभाजन अस्वीकार र मेलमिलाप अस्वीकार",
        body1: "धेरै पत्र, समाजको निर्णय र 1986 को पुष्टि-पत्र एउटै दाबी तर्फ इशारा गर्छन्: तोकिएको व्यवस्था थियो, तर टिलकले त्यसलाई अन्तिम रूप दिन मानिरहेनन्।",
        body2: "यही मुख्य जड हो। गाउँ-समर्थित बुँदाले पुरानो घरको निरन्तर कब्जा, परिवारलाई अघि सारेर रोक्ने तर्क, र अर्को पुस्तातर्फ जिम्मेवारी सार्ने ढाँचा थप देखाउँछ।",
      },
      utilities: {
        label: "ढाँचा 2",
        title: "बसोबास, पानी, बिजुली र दैनिक दबाब",
        body1: "यो विवाद बारम्बार बसोबासकै क्षमतामा पुग्छ: को घरमा बस्ने, को बनाउने, पानीको लाइन कस्तो रहने, बिजुली जोडिएको छ कि छैन।",
        body2: "यसले झगडालाई कागजी भागबन्डाको मात्र मुद्दा नराखी दैनिक जीवनमाथिको दबाबमा बदलिदिन्छ। गाउँ-समर्थित भागले यसको वरिपरिको डर र दबाबको वातावरण पनि थप स्पष्ट बनाउँछ।",
      },
      outreach: {
        label: "ढाँचा 3",
        title: "NB ले निरन्तर कागजी प्रमाण बनाइरहे",
        body1: "जतिसुकै विवाद भए पनि एउटा कुरा स्पष्ट छ: NB ले बारम्बार लिखित रूपमा संस्था खोजे। यो पत्रहरूको जमघट आफैंमा राम्रो नीयतको प्रमाण हो।",
        body2: "पार्टी नेता, समाज, प्रहरी, अदालत-सम्बद्ध प्रक्रिया र ग्राम पञ्चायतसम्म पुग्नु अघिल्ला माध्यम असफल भएको संकेत हो। यो बाहिरतर्फ सर्दै जाने क्रम गाउँ-समर्थित भागमा पनि बलियोसँग प्रतिध्वनित हुन्छ।",
      },
      escalation: {
        label: "ढाँचा 4",
        title: "धम्की शब्दबाट चोट, साक्षी र कानुनी नियन्त्रणसम्म पुग्यो",
        body1: "पछिल्ला कागजहरूमा शारीरिक झडप, गुलेलीबाट चोट, अर्को पुस्तासमेत संलग्नता र Section 107 CrPC का कागजहरू देखिन्छन्।",
        body2: "2024 र 2025 का कागजहरूले अदालत-सम्बद्ध प्रक्रिया पछि पनि विवाद फेरि जन्मिरहेको देखाउँछन्। उद्देश्यबारे पर्ने दाबीलाई तथ्यसँग नमिसाइ व्याख्या भागमा छुट्टै राखिएको छ।",
      },
    },
  },
});

Object.assign(copy.ne, {
  verbal: {
    eyebrow: "मौखिक दुर्व्यवहार",
    title: "NB का कार्य-नोटहरूमा उल्लेखित भाषा",
    intro: "यी लाइनहरू प्रत्यक्ष सबै स्क्यान गरिएका पत्रबाट होइन, कार्य-नोटहरूबाट लिइएका हुन्। NB ले भनेअनुसार दोहोरिने उक्साहट बुझ्न यिनलाई यहाँ राखिएको छ।",
    quotes: [
      "म तँलाई चड्काउँछु।",
      "म तँलाई हान्छु।",
      "म तँलाई लठ्ठीले हान्छु।",
      "तँ भुटियाको नोकर होस्।",
      "तँ भुटियाको जुठो खाने मान्छे होस्।",
      "तँसँग दिमाग छैन।",
      "एउटा कालो पागल कुकुर हिँडिरहेको छ, म त्यसलाई हान्छु।",
      "तँलाई जेल लैजान मान्छे बोलाएको छु।",
    ],
  },
  incidents: {
    eyebrow: "मुख्य शारीरिक घटना",
    title: "अभिलेख बारम्बार शरीरमा जोखिम पुगेको ठाउँमा फर्किन्छ।",
    intro: "मिति भएका कागज र पछिल्ला नोटहरूमा आएको मुख्य शारीरिक घटनालाई यहाँ छोटकरीमा राखिएको छ।",
    note: "2025 को बाँफोक घटना पहिलेका 2015-2024 स्क्यान अभिलेखको भाग नभई पछिल्लो नोटमा आधारित छ।",
    closing: "टिलक प्रहरीबाट भागे। साक्षी थियो।",
    items: [
      "2015 निर्माण विवाद: नापेको धागो नष्ट गरियो, धम्की दिइयो, र ढुंगा फालिएको भनियो।",
      "02-12-2015: NB का अनुसार आक्रमण गरेर घरबाट निकालियो र उनी ससुराली बस्न बाध्य भए।",
      "04-07-2017: NB का अनुसार घर बनाउन राखिएका ढुंगाहरू आँगनबाट फालियो।",
      "26-09-2021: NB को उजुरी अनुसार ढुंगा फालिसकेपछि रोशन विवादमा आएर आरतीलाई आक्रमण गर्न खोजे।",
      "12-11-2022 / 14-11-2022 दर्ता: प्रहरी-छाप भएको उजुरीले रूख काट्ने बेला गुलेलीको ढुंगाले छातीमा लागेको भन्छ।",
      "2025 को नोट-आधारित विवरण: NB ले सार्वजनिक ठाउँमा बाँफोकले हान्न खोजिएको, प्रहरी आएको, साक्षी रहेको र टिलक भागेको बताएका छन्।",
    ],
  },
  asks: {
    eyebrow: "NB का मागहरू",
    title: "NB ले मागेको समाधान साँघुरो, व्यावहारिक र दोहोरिएको छ।",
    intro: "यी चार मागहरू कार्य-सारांश फाइलबाट सिधै लिइएका हुन् र NB ले चाहेको अन्तिम परिणामलाई सबैभन्दा स्पष्ट रूपमा देखाउँछन्।",
    items: [
      "टिलक तोकिएको ठाउँमा घर बनाऊन् र हालको घरको स्थान जस्ताको तस्तै छोडून्।",
      "टिलकले NB लाई उक्स्याउन बन्द गरून्।",
      "टिलकले NB लाई अमानवीय व्यवहार र धम्की दिन बन्द गरून्।",
      "टिलकले NB माथि शारीरिक दुर्व्यवहार बन्द गरून्।",
    ],
    closing: "कागजी प्रमाण स्पष्ट छ। ढाँचा स्पष्ट छ। कारबाही ढिलो भइसकेको छ।",
  },
  footer: "यो प्रतिवेदन file:// बाट सिधै खुल्छ र सबै स्क्यान एउटै फोल्डरमै राख्छ, जसले प्रमाणको प्याकेज सजिलै सार्न मिल्छ।",
  metaLabels: { writer: "लेखक", source: "स्रोत" },
  buttonClose: "बन्द गर्नुहोस्",
  tags: {
    violence: "हिंसा",
    samaj: "समाज",
    police: "प्रहरी",
    legal: "कानुनी",
    civic: "स्थानीय",
    mediation: "मध्यस्थता",
    utilities: "पानी/बिजुली",
    displacement: "घरबाट विस्थापन",
    stamped: "छाप भएको",
    warning: "चेतावनी",
    signatures: "हस्ताक्षर",
    history: "ऐतिहासिक दाबी",
    resolution: "निर्णय माग",
    harassment: "उत्पीडन",
    injury: "चोट",
    court: "अदालत",
  },
  noDate: "भरपर्दो मिति नदेखिएको",
});

Object.assign(copy.hi, {
  title: "एनबी केस साक्ष्य प्रतिवेदन",
  hero: {
    eyebrow: "पत्रों, समाज के अभिलेखों, पुलिस शिकायतों और बाद की स्थानीय अर्जियों से दिखता हुआ पैटर्न",
    title: "संपत्ति न बांटने की तिलक की जिद ने NB को बार-बार टकराव की स्थिति में धकेला।",
    copy: "यह ऑफलाइन प्रतिवेदन 05-07-2015 से 29-10-2025 तक के 32 अभिलेखों को साफ तारीख क्रम में रखता है और बिना साफ तारीख वाले सहायक पत्रों को अलग दिखाता है ताकि पैटर्न समझने में भ्रम न रहे।",
    note: "जमीन के कानूनी स्वामित्व पर विवाद अभी भी है। यह प्रतिवेदन स्वामित्व तय नहीं करता। यह केवल लिखित रिकॉर्ड में दिखने वाले पैटर्न पर केंद्रित है: समझौता न करना, बार-बार धमकी, असफल मध्यस्थता, पानी-बिजली का विवाद, और NB की लगातार संस्थागत पहल।",
  },
  stats: {
    recordsValue: "32",
    recordsLabel: "फाइल के अभिलेख",
    datedValue: "22",
    datedLabel: "तारीख वाले अभिलेख",
    institutionsValue: "5",
    institutionsLabel: "अपनाए गए माध्यम",
    spanValue: "2015-2025",
    spanLabel: "समय सीमा",
  },
  nav: {
    background: "पृष्ठभूमि",
    mediation: "मध्यस्थता अवरोध",
    timeline: "कालक्रम",
    support: "बिना तारीख समर्थन",
    patterns: "पैटर्न विश्लेषण",
    verbal: "मौखिक दुर्व्यवहार",
    incidents: "शारीरिक घटनाएं",
    asks: "NB की मांगें",
  },
  background: {
    eyebrow: "पृष्ठभूमि",
    title: "विवाद की जड़ एक रहने की समझ थी, जो अंतिम बंटवारे में नहीं बदली।",
    copy1: "नर बहादुर बिश्वकर्मा और तिलक बिश्वकर्मा एक ही पारिवारिक संपत्ति-रेखा से जुड़े भाई हैं। NB के अनुसार तिलक ने पहले तय जगह पर जाकर बसने की सहमति दी थी ताकि पैतृक घर की स्थिति सुलझ सके, लेकिन वह समझ जमीन पर स्थायी बंटवारे में नहीं बदली।",
    copy2: "जब वह समझ टूट गई, मामला घरेलू विवाद से बाहर निकल गया। रिकॉर्ड दिखाता है कि NB ने पार्टी नेताओं, बिश्वकर्मा समाज, पुलिस, अदालत-सम्बद्ध प्रक्रिया और बाद में ग्राम पंचायत तक लिखित रूप में मदद मांगी।",
    note: "NB के नोट यह भी मानते हैं कि दाह-संस्कार विवाद के दौरान बाद में एक लाठी-प्रकरण हुआ जो अदालत जाकर बंद हुआ। फिर भी बड़े लिखित रिकॉर्ड से यही दिखता है कि NB बार-बार तीसरे पक्ष और लिखित प्रक्रिया की ओर गया।",
  },
  wall: {
    eyebrow: "मध्यस्थता अवरोध",
    title: "सबसे साफ संस्थागत पैटर्न यह है: NB प्रक्रिया चाहता रहा, लेकिन प्रक्रिया तिलक की असहमति पर अटकती रही।",
    intro: "पुलिस या कानूनी समीक्षा के लिए यह भाग सबसे साफ है, क्योंकि यह केवल एक झगड़ा नहीं बल्कि शांति के हर औपचारिक रास्ते की विफलता दिखाता है।",
    calloutLabel: "केंद्रीय निष्कर्ष",
    calloutTitle: "शांति का हर औपचारिक रास्ता रुका, और फिर विवाद बाहर फैलता गया।",
    calloutCopy: "समाज का निर्णय इस फाइल का मुख्य संस्थागत दस्तावेज़ है। उसमें दर्ज है कि NB ने दिशा मान ली थी, जबकि तिलक नहीं माना। बाद के पत्र दिखाते हैं कि समाज से पुलिस और पुलिस से कानूनी प्रक्रिया तक जाने पर भी टिकाऊ समाधान नहीं आया।",
    calloutQuote: "मुख्य बिंदु: समाज के रिकॉर्ड के अनुसार NB दिशा मानने को तैयार था, लेकिन तिलक अड़ा रहा और उसी मंच पर समझौता नहीं होने दिया।",
    steps: [
      { title: "NB ने बाहरी हस्तक्षेप मांगा।", body: "फाइल की शुरुआत प्रतिशोध से नहीं, लिखित मध्यस्थता की मांग से होती है।" },
      { title: "बिश्वकर्मा समाज ने कई बैठकें कीं।", body: "कई पत्र दिखाते हैं कि NB शांतिपूर्ण रहने की व्यवस्था के लिए बार-बार समाज के पास गया।" },
      { title: "NB ने सामुदायिक दिशा मानने की सहमति दी।", body: "समाज के निर्णय में दर्ज है कि NB दिवंगत खड्का बहादुर से जुड़ी दिशा मानने को तैयार था।" },
      { title: "तिलक समाज के माध्यम से नहीं माना।", body: "उसी निर्णय में तिलक के अड़े रहने और समाज के स्तर पर समाधान न मानने की बात दर्ज है।" },
      { title: "समाज पीछे हटा और मामला बाहर भेजा।", body: "बाद के पत्र दिखाते हैं कि समाज ने खुद समाधान न कर पाने पर मामला पुलिस तक भेजा।" },
      { title: "पुलिस, अदालत और स्थानीय अर्जी के बाद भी पैटर्न बंद नहीं हुआ।", body: "फाइल Section 107 CrPC और 2025 की ग्राम पंचायत अर्जी तक जाती है, फिर भी विवाद लौटता है।" },
    ],
  },
  timeline: {
    eyebrow: "कालानुक्रमिक अभिलेख",
    title: "तारीख वाले दस्तावेज़ सबसे पुराने से सबसे नए तक",
    intro: "मुख्य टाइमलाइन में वही रिकॉर्ड रखे गए हैं जिनमें स्पष्ट तारीख या कम-से-कम महीना-वर्ष दिखता है। बिना भरोसेमंद तारीख वाले कागज अलग रखे गए हैं ताकि क्रम साफ रहे।",
    coverageLabel: "कड़ा तारीख क्रम",
    coverageCopy: "दिखने वाली तारीखें 05-07-2015 से 29-10-2025 तक फैली हैं।",
    filters: {
      all: "सभी",
      violence: "हिंसा",
      samaj: "समाज",
      police: "पुलिस",
      legal: "कानूनी",
      civic: "स्थानीय",
    },
    status: "{total} में से {visible} तारीख वाले अभिलेख दिख रहे हैं",
  },
  support: {
    eyebrow: "बिना तारीख वाले सहायक रिकॉर्ड",
    title: "महत्वपूर्ण पत्र जिन्हें कड़े कालक्रम से बाहर रखा गया है",
    intro: "ये दस्तावेज़ पैटर्न समझने में जरूरी हैं, लेकिन स्कैन पर भरोसेमंद पूरी तारीख दिखाई नहीं देती। इसलिए इन्हें अलग रखा गया है।",
  },
  patterns: {
    eyebrow: "पैटर्न विश्लेषण",
    title: "रिकॉर्ड एक बार की लड़ाई नहीं, बल्कि दोहराए गए व्यवहार दिखाता है।",
    intro: "नीचे हर ब्लॉक एक पैटर्न सामने रखता है, उसी के पास संबंधित पत्र दिखाता है, और जहां ज़रूरी हो वहां अलग तथ्य और व्याख्या वाले हिस्सों की ओर संकेत करता है।",
    viewAll: "सभी संबंधित पत्र देखें",
    hideAll: "अतिरिक्त पत्र छिपाएं",
    groups: {
      refusal: {
        label: "पैटर्न 1",
        title: "बंटवारा न करना और समझौता न करना",
        body1: "कई पत्र, समाज का निर्णय और 1986 पुष्टि-पत्र एक ही दावे की ओर इशारा करते हैं: एक तय व्यवस्था थी, लेकिन तिलक उसे अंतिम रूप देने के लिए तैयार नहीं रहा।",
        body2: "यही मामले की रीढ़ है। गांव-समर्थित बिंदु फिर लगातार कब्ज़े, परिवार-आधारित रोकने वाले तर्क, और अगली पीढ़ी की ओर जिम्मेदारी धकेले जाने वाली तस्वीर जोड़ते हैं।",
      },
      utilities: {
        label: "पैटर्न 2",
        title: "रहना, पानी, बिजली और रोजमर्रा का दबाव",
        body1: "विवाद बार-बार रहने की क्षमता तक पहुंचता है: कौन घर में रहेगा, कौन बनाएगा, पानी की लाइन के साथ क्या होगा, और बिजली चलेगी या नहीं।",
        body2: "इससे मामला केवल कागजी बंटवारे का नहीं रहता, बल्कि रोजमर्रा के दबाव का बन जाता है। गांव-समर्थित भाग इसके आसपास के डर और दबाव वाले माहौल को भी जोड़ता है।",
      },
      outreach: {
        label: "पैटर्न 3",
        title: "NB लगातार लिखित रिकॉर्ड बनाता रहा",
        body1: "विवाद कुछ भी रहा हो, एक बात साफ है: NB बार-बार लिखित रूप में संस्था तक गया। पत्रों का यह संचय अपने आप में सद्भावनापूर्ण पहल का प्रमाण है।",
        body2: "पार्टी नेता, समाज, पुलिस, अदालत-सम्बद्ध प्रक्रिया और ग्राम पंचायत तक पहुंचना बताता है कि पहले के रास्ते काम नहीं कर रहे थे। बाहर की ओर बढ़ता यह क्रम गांव-समर्थित भाग में भी दोहराया गया दिखाई देता है।",
      },
      escalation: {
        label: "पैटर्न 4",
        title: "धमकी शब्दों से चोट, गवाह और कानूनी नियंत्रण तक पहुंची",
        body1: "बाद के रिकॉर्ड में शारीरिक टकराव, गुलेल से चोट, अगली पीढ़ी की भागीदारी और Section 107 CrPC के कागज दिखाई देते हैं।",
        body2: "2024 और 2025 के दस्तावेज़ दिखाते हैं कि अदालत-सम्बद्ध प्रक्रिया के बाद भी विवाद फिर लौट आया। उद्देश्य से जुड़ी पढ़ाई को तथ्य से अलग रखते हुए व्याख्या वाले हिस्से में रखा गया है।",
      },
    },
  },
});

Object.assign(copy.hi, {
  verbal: {
    eyebrow: "मौखिक दुर्व्यवहार",
    title: "NB के कार्य-नोट में दर्ज भाषा",
    intro: "ये पंक्तियां हर स्कैन किए गए पत्र से नहीं, बल्कि कार्य-नोट से ली गई हैं। इन्हें यहां इसलिए रखा गया है क्योंकि ये NB के अनुसार लगातार होने वाली उकसाहट को समझाती हैं।",
    quotes: [
      "मैं तुम्हें थप्पड़ मारूंगा।",
      "मैं तुम्हें मारूंगा।",
      "मैं तुम्हें डंडे से मारूंगा।",
      "तुम भुटिया के नौकर हो।",
      "तुम भुटिया का जूठा खाने वाले हो।",
      "तुम्हारे पास दिमाग नहीं है।",
      "एक काला पागल कुत्ता घूम रहा है, मैं उसे मारूंगा।",
      "तुम्हें जेल ले जाने के लिए लोग बुला रखे हैं।",
    ],
  },
  incidents: {
    eyebrow: "मुख्य शारीरिक घटनाएं",
    title: "रिकॉर्ड बार-बार शारीरिक जोखिम पर लौटता है।",
    intro: "तारीख वाले रिकॉर्ड और बाद के नोटों में दर्ज सबसे मजबूत शारीरिक घटनाओं का यह संक्षिप्त सार है।",
    note: "2025 का बाँफोक प्रसंग पहले के 2015-2024 स्कैन रिकॉर्ड का हिस्सा नहीं, बल्कि बाद के नोट पर आधारित है।",
    closing: "तिलक पुलिस से भाग गया। गवाह मौजूद था।",
    items: [
      "2015 निर्माण विवाद: नाप की लाइनें बिगाड़ी गईं, धमकी दी गई, और पत्थर फेंके जाने का आरोप है।",
      "02-12-2015: NB के अनुसार हमला कर घर से निकाला गया और उन्हें ससुराल में रहना पड़ा।",
      "04-07-2017: NB के अनुसार निर्माण के लिए रखे पत्थर आंगन से फेंक दिए गए।",
      "26-09-2021: NB की शिकायत के अनुसार पत्थरबाजी के बाद रोशन विवाद में आकर आरती पर हमला करने की कोशिश करता है।",
      "12-11-2022 / 14-11-2022 प्राप्ति: पुलिस-मुहर वाली शिकायत के अनुसार पेड़ काटते समय गुलेल का पत्थर NB की छाती पर लगा।",
      "2025 नोट-आधारित विवरण: NB के अनुसार सार्वजनिक जगह पर बाँफोक से मारने की कोशिश हुई, पुलिस आई, गवाह था, और तिलक भाग गया।",
    ],
  },
  asks: {
    eyebrow: "NB की मांगें",
    title: "NB की मांगी हुई राहत सीमित, व्यावहारिक और बार-बार दोहराई गई है।",
    intro: "ये चार मांगें कार्य-सारांश फाइल से सीधे ली गई हैं और NB के अनुसार वांछित अंतिम परिणाम को सबसे साफ रूप में दिखाती हैं।",
    items: [
      "तिलक तय जगह पर घर बनाए और वर्तमान घर की स्थिति जैसी है वैसी छोड़े।",
      "तिलक NB को उकसाना बंद करे।",
      "तिलक NB को अमानवीय भाषा और धमकी देना बंद करे।",
      "तिलक NB पर शारीरिक दुर्व्यवहार बंद करे।",
    ],
    closing: "कागजी रिकॉर्ड साफ है। पैटर्न साफ है। कार्रवाई अब देर से हो रही है।",
  },
  footer: "यह प्रतिवेदन file:// से सीधे खुलता है और सभी स्कैन एक ही फोल्डर में रखता है ताकि साक्ष्य-पैकेज आसानी से ले जाया जा सके।",
  metaLabels: { writer: "लेखक", source: "स्रोत" },
  buttonClose: "बंद करें",
  tags: {
    violence: "हिंसा",
    samaj: "समाज",
    police: "पुलिस",
    legal: "कानूनी",
    civic: "स्थानीय",
    mediation: "मध्यस्थता",
    utilities: "पानी/बिजली",
    displacement: "विस्थापन",
    stamped: "मुहरयुक्त",
    warning: "चेतावनी",
    signatures: "हस्ताक्षर",
    history: "ऐतिहासिक दावा",
    resolution: "निर्णय की मांग",
    harassment: "उत्पीड़न",
    injury: "चोट",
    court: "अदालत",
  },
  noDate: "भरोसेमंद तारीख दिखाई नहीं देती",
});

copy.en.nav.village = "Village facts";
copy.en.nav.interpretation = "Interpretation";
copy.en.village = {
  eyebrow: "Village-corroborated facts",
  title: "What the village is described as already knowing about the pattern",
  intro: "These points are kept outside the dated timeline on purpose. They do not all come from one scanned letter, but they are presented here because they are described as locally known, difficult to deny in the village, or strongly echoed by the longer record.",
  legendTitle: "How to read this section",
  groups: {
    refusal: {
      label: "Group A",
      title: "Refusal to settle",
      intro: "This group centers on occupation of the ancestral home, blocked partition, and repeated resistance to practical settlement.",
    },
    provocation: {
      label: "Group B",
      title: "Provocation and intimidation",
      intro: "This group gathers the behaviors villagers are said to recognize around words, posture, weapons, and repeated attempts to trigger reaction.",
    },
    escalation: {
      label: "Group C",
      title: "Escalation beyond mediation",
      intro: "This group focuses on how the conflict keeps moving away from community settlement and toward police, court, injury, and retaliation.",
    },
  },
};
copy.en.interpretation = {
  eyebrow: "NB's reading of the pattern",
  title: "Motive claims stay here, not in the factual layer",
  intro: "The points below are included because they explain how NB reads the overall pattern. They are not presented as settled fact or court finding.",
};
copy.en.tiers = {
  document: { label: "Document-backed", lead: "Shown in the letter, recorded in the complaint, or stated in the Samaj decision." },
  community: { label: "Community-corroborated", lead: "Described as known in the village and difficult for villagers to deny." },
  note: { label: "NB note-backed", lead: "Reported in NB's notes rather than in a standalone signed document." },
  interpretation: { label: "NB interpretation", lead: "NB's reading of the pattern rather than settled fact." },
};
copy.en.patterns.links = {
  facts: "See village-corroborated facts",
  interpretation: "See NB's reading of the pattern",
};

copy.ne.nav.village = "गाउँलेले नकार्न नसक्ने बुँदा";
copy.ne.nav.interpretation = "NB को व्याख्या";
copy.ne.village = {
  eyebrow: "गाउँलेले सजिलै ननकार्ने बुँदा",
  title: "गाउँमा पहिलेबाटै चिनिएको भनिएको ढाँचा",
  intro: "यी बुँदाहरूलाई जानाजानी मुख्य मितिक्रम बाहिर राखिएको छ। यी सबै एउटै स्क्यान गरिएको पत्रबाट आएका होइनन्, तर स्थानीय रूपमा थाहा भएको, गाउँलेले सजिलै ननकार्ने, वा लामो अभिलेखले बलियोसँग प्रतिध्वनित गर्ने दाबीका रूपमा यहाँ राखिएका छन्।",
  legendTitle: "यो भाग कसरी पढ्ने",
  groups: {
    refusal: {
      label: "समूह A",
      title: "मिलाप र बसोबासको अस्वीकार",
      intro: "यो समूह पुरानो घरको कब्जा, रोकिने भागबण्डा, र व्यावहारिक समाधानबाट टाढा राखिने व्यवहारमा केन्द्रित छ।",
    },
    provocation: {
      label: "समूह B",
      title: "उक्साहट र डर देखाउने व्यवहार",
      intro: "यो समूह गाउँमा चिनिने भनिएका शब्द, हाउभाउ, हतियार बोक्ने आदत, र प्रतिक्रिया निकाल्ने ढाँचालाई जम्मा गर्छ।",
    },
    escalation: {
      label: "समूह C",
      title: "मध्यस्थताभन्दा परको बढ्दो टकराव",
      intro: "यो समूहले विवाद कसरी समुदायीय मिलापबाट टाढा गई प्रहरी, अदालत, चोट र प्रतिकारतर्फ सर्दै जान्छ भन्ने देखाउँछ।",
    },
  },
};
copy.ne.interpretation = {
  eyebrow: "NB को व्याख्या",
  title: "उद्देश्यसम्बन्धी दाबीलाई तथ्यको तहमा नराखी यहाँ राखिएको छ",
  intro: "तलका बुँदाहरू NB ले समग्र ढाँचा कसरी बुझेका छन् भन्ने रूपमा राखिएका हुन्। यी अन्तिम सत्य वा अदालतको निष्कर्षका रूपमा प्रस्तुत गरिएका छैनन्।",
};
copy.ne.tiers = {
  document: { label: "कागजले समर्थन गरेको", lead: "पत्र, उजुरी वा समाजको निर्णयमा देखिएको।" },
  community: { label: "गाउँलेले पुष्टि गर्न सक्ने", lead: "गाउँमा थाहा भएको र सजिलै ननकारिने रूपमा वर्णन गरिएको।" },
  note: { label: "NB का नोटमा आधारित", lead: "अलग हस्ताक्षरित कागजभन्दा NB का नोटमा आएको।" },
  interpretation: { label: "NB को व्याख्या", lead: "NB ले ढाँचा बुझ्ने तरिका, अन्तिम तथ्य होइन।" },
};
copy.ne.patterns.links = {
  facts: "गाउँलेले नकार्न नसक्ने बुँदा हेर्नुहोस्",
  interpretation: "NB को व्याख्या हेर्नुहोस्",
};

copy.hi.nav.village = "गांव-समर्थित बिंदु";
copy.hi.nav.interpretation = "NB की व्याख्या";
copy.hi.village = {
  eyebrow: "गांव में आसानी से न नकारी जाने वाली बातें",
  title: "वह पैटर्न जिसे गांव में पहले से जाना-पहचाना बताया जा रहा है",
  intro: "इन बिंदुओं को जानबूझकर मुख्य तारीख-क्रम से बाहर रखा गया है। ये सभी एक ही स्कैन किए गए पत्र से नहीं आते, लेकिन इन्हें यहां इसलिए रखा गया है क्योंकि इन्हें स्थानीय रूप से जाना हुआ, गांव में मुश्किल से नकारा जा सकने वाला, या लंबे रिकॉर्ड से मजबूती से मेल खाने वाला बताया गया है।",
  legendTitle: "इस भाग को कैसे पढ़ें",
  groups: {
    refusal: {
      label: "समूह A",
      title: "समझौते और रहने की व्यवस्था से इंकार",
      intro: "यह समूह पैतृक घर के कब्ज़े, रुके हुए बंटवारे और व्यावहारिक समाधान से बचने के पैटर्न पर केंद्रित है।",
    },
    provocation: {
      label: "समूह B",
      title: "उकसाहट और डराने का व्यवहार",
      intro: "यह समूह उन बातों को जोड़ता है जिन्हें गांव में शब्द, हावभाव, हथियार-जैसी मौजूदगी और प्रतिक्रिया निकलवाने की आदत के रूप में पहचाना जाता है।",
    },
    escalation: {
      label: "समूह C",
      title: "मध्यस्थता से आगे बढ़ता टकराव",
      intro: "यह समूह दिखाता है कि विवाद कैसे सामुदायिक समझौते से हटकर पुलिस, अदालत, चोट और प्रतिशोध की ओर जाता है।",
    },
  },
};
copy.hi.interpretation = {
  eyebrow: "NB की व्याख्या",
  title: "उद्देश्य-संबंधी दावे तथ्य वाले हिस्से से अलग रखे गए हैं",
  intro: "नीचे दिए गए बिंदु इस रूप में रखे गए हैं कि NB पूरे पैटर्न को कैसे पढ़ता है। इन्हें अंतिम सत्य या अदालत की पुष्टि के रूप में पेश नहीं किया गया है।",
};
copy.hi.tiers = {
  document: { label: "दस्तावेज़-समर्थित", lead: "पत्र, शिकायत या समाज के निर्णय में दिखा हुआ।" },
  community: { label: "समुदाय-समर्थित", lead: "गांव में जाना हुआ और आसानी से न नकारा जा सकने वाला बताया गया।" },
  note: { label: "NB-नोट आधारित", lead: "अलग हस्ताक्षरित दस्तावेज़ के बजाय NB के नोट में रिपोर्ट किया गया।" },
  interpretation: { label: "NB की व्याख्या", lead: "NB की पढ़ाई, न कि अंतिम स्थापित तथ्य।" },
};
copy.hi.patterns.links = {
  facts: "गांव-समर्थित बिंदु देखें",
  interpretation: "NB की व्याख्या देखें",
};

copy.en.incidents.note = "The 2025 Bamphok account and the April 2026 stone exchange are note-backed rather than part of the earlier signed letter series.";
copy.en.incidents.items.push(
  "April 2026 note-backed account: while NB was fixing a water pipe, Tilak is said to have thrown a stone first, NB returned and threw a stone back, and Tilak's daughter was accidentally hit."
);

copy.ne.incidents.note = "2025 को बाँफोक घटना र अप्रिल 2026 को ढुंगा फ्याँकाफ्याँक पछिल्ला नोटमा आधारित हुन्; यी पुरानै हस्ताक्षरित पत्र-श्रृंखलाको भाग होइनन्।";
copy.ne.incidents.items.push(
  "अप्रिल 2026 को नोट-आधारित विवरण: NB पानीको पाइप मिलाउँदै गर्दा टिलकले पहिले ढुंगा फाले, त्यसपछि NB फर्केर ढुंगा फाले, र टिलककी छोरी अनजानमै लागिन्।"
);

copy.hi.incidents.note = "2025 का बाँफोक विवरण और अप्रैल 2026 का पत्थर-आदान-प्रदान बाद के नोट पर आधारित हैं; ये पुरानी हस्ताक्षरित पत्र-श्रृंखला का हिस्सा नहीं हैं।";
copy.hi.incidents.items.push(
  "अप्रैल 2026 का नोट-आधारित विवरण: जब NB पानी की पाइप ठीक कर रहा था तब तिलक ने पहले पत्थर फेंका, फिर NB ने लौटकर पत्थर फेंका, और तिलक की बेटी को गलती से चोट लगी।"
);

records.push(
  {
    id: "r1",
    no: 1,
    sortDate: "2015-07-05",
    dateLabel: "05-07-2015",
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma to party leaders",
      ne: "नर बहादुर बिश्वकर्माद्वारा पार्टी नेताहरूलाई",
      hi: "नर बहादुर बिश्वकर्मा द्वारा पार्टी नेताओं को",
    },
    primary: "samaj",
    types: ["samaj"],
    tags: ["samaj", "mediation"],
    title: {
      en: "First written request for outside mediation",
      ne: "बाह्य मध्यस्थताको पहिलो लिखित निवेदन",
      hi: "बाहरी मध्यस्थता की पहली लिखित मांग",
    },
    summary: {
      en: "NB asks party leaders to intervene before the land dispute worsens. The written record begins with process, not retaliation.",
      ne: "जग्गाको विवाद बढ्नुअघि NB ले पार्टी नेताहरूलाई हस्तक्षेप गर्न आग्रह गर्छन्। लिखित अभिलेख प्रतिशोधबाट होइन, प्रक्रियाबाट सुरु हुन्छ।",
      hi: "भूमि विवाद बढ़ने से पहले NB पार्टी नेताओं से हस्तक्षेप मांगता है। लिखित रिकॉर्ड प्रतिशोध से नहीं, प्रक्रिया से शुरू होता है।",
    },
    images: [{ src: "05-07-2015-GJMM-House.jpg" }],
  },
  {
    id: "r2",
    no: 2,
    sortDate: "2015-11-23",
    dateLabel: "23-11-2015",
    metaLabel: "source",
    meta: {
      en: "Complaint about house-building conflict",
      ne: "घर बनाउने क्रममा भएको विवादसम्बन्धी उजुरी",
      hi: "घर बनाने के दौरान हुए विवाद की शिकायत",
    },
    primary: "violence",
    types: ["violence", "police"],
    tags: ["violence", "police", "utilities", "stamped"],
    title: {
      en: "Construction conflict turns into threat and water-cut allegations",
      ne: "निर्माणको विवाद धम्की र पानी काटिएको आरोपसम्म पुग्छ",
      hi: "निर्माण विवाद धमकी और पानी काटने के आरोप तक पहुंचता है",
    },
    summary: {
      en: "The complaint says foundation lines were destroyed, threats were made, stones were thrown, and drinking water was cut while NB was trying to build.",
      ne: "NB ले निर्माण गर्न खोज्दा नापेको धागो भत्काइयो, धम्की दिइयो, ढुंगा फालियो र पिउने पानी काटियो भन्ने उजुरीमा उल्लेख छ।",
      hi: "शिकायत में कहा गया है कि NB के निर्माण प्रयास के दौरान नाप की लाइनें बिगाड़ी गईं, धमकी दी गई, पत्थर फेंके गए और पीने का पानी काटा गया।",
    },
    images: [{ src: "Conflict_while_making_house_stamped_23-11-2015.jpg" }],
  },
  {
    id: "r3",
    no: 3,
    sortDate: "2015-11-17",
    dateLabel: "17-11-2015",
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma to Bishwakarma Samaj",
      ne: "नर बहादुर बिश्वकर्माद्वारा बिश्वकर्मा समाजलाई",
      hi: "नर बहादुर बिश्वकर्मा द्वारा बिश्वकर्मा समाज को",
    },
    primary: "samaj",
    types: ["samaj", "violence"],
    tags: ["samaj", "utilities"],
    title: {
      en: "Electricity cut complaint sent to the Samaj",
      ne: "बिजुली काटिएको भन्दै समाजलाई दिइएको उजुरी",
      hi: "बिजली काटे जाने की शिकायत समाज को भेजी गई",
    },
    summary: {
      en: "NB says Tilak cut the electricity wire and asks the Samaj either to mediate or to support a police approach.",
      ne: "NB का अनुसार टिलकले बिजुलीको तार काटे, त्यसपछि उनले समाजसँग या त मध्यस्थता या प्रहरीकहाँ जान सहयोग मागे।",
      hi: "NB के अनुसार तिलक ने बिजली की तार काटी, जिसके बाद उसने समाज से या तो मध्यस्थता या पुलिस तक जाने में सहयोग मांगा।",
    },
    images: [{ src: "Tilak_cutting_electiricity_17-11-2015.jpg" }],
  },
  {
    id: "r4",
    no: 4,
    sortDate: "2015-12-02",
    dateLabel: "02-12-2015",
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma to Rangeli Police",
      ne: "नर बहादुर बिश्वकर्माद्वारा रंगेली प्रहरीलाई",
      hi: "नर बहादुर बिश्वकर्मा द्वारा रंगेली पुलिस को",
    },
    primary: "police",
    types: ["police", "violence"],
    tags: ["police", "displacement", "violence"],
    title: {
      en: "NB says he was chased from home",
      ne: "NB ले आफूलाई घरबाट धपाइएको भन्छन्",
      hi: "NB कहता है कि उसे घर से भगा दिया गया",
    },
    summary: {
      en: "The police letter says Tilak and late Khadka Bahadur attacked NB, abused him, and forced him to stay at his in-laws' home.",
      ne: "प्रहरी पत्रमा टिलक र दिवंगत खड्का बहादुरले NB माथि आक्रमण गरी गाली गरेर उनलाई ससुराली बस्न बाध्य पारेको उल्लेख छ।",
      hi: "पुलिस पत्र में कहा गया है कि तिलक और दिवंगत खड्का बहादुर ने NB पर हमला किया, गाली दी और उसे ससुराल में रहने पर मजबूर किया।",
    },
    images: [{ src: "Letter_to_Police_asking_for_help_togoto_ownHome.jpg" }],
  },
  {
    id: "r5",
    no: 5,
    sortDate: "2016-03-03",
    dateLabel: "03-03-2016",
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma to Bishwakarma Samaj",
      ne: "नर बहादुर बिश्वकर्माद्वारा बिश्वकर्मा समाजलाई",
      hi: "नर बहादुर बिश्वकर्मा द्वारा बिश्वकर्मा समाज को",
    },
    primary: "samaj",
    types: ["samaj"],
    tags: ["samaj", "mediation"],
    title: {
      en: "Second plea for mediation while still displaced",
      ne: "अझै विस्थापित अवस्थामै गरिएको दोस्रो मध्यस्थता माग",
      hi: "विस्थापन जारी रहते हुए दूसरी मध्यस्थता मांग",
    },
    summary: {
      en: "NB says he paid the family loan tied to the land, paid taxes, and was still away from home. He asks the Samaj to intervene again.",
      ne: "NB ले जग्गासँग जोडिएको ऋण र कर तिरेको, तर अझै घरबाहिर बस्नुपरेको भन्दै समाजसँग फेरि हस्तक्षेप माग्छन्।",
      hi: "NB कहता है कि उसने जमीन से जुड़ा कर्ज और कर चुकाया, फिर भी घर से बाहर है, इसलिए वह समाज से फिर हस्तक्षेप मांगता है।",
    },
    images: [{ src: "Requesting_mediation_with_samaj_2nd_time_03-03-2016.jpg" }],
  },
  {
    id: "r6",
    no: 6,
    sortDate: null,
    dateLabel: {
      en: "2016 (exact date not visible)",
      ne: "2016 (ठ्याक्कै मिति देखिँदैन)",
      hi: "2016 (सटीक तारीख दिखाई नहीं देती)",
    },
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma seeking mediation to live at home",
      ne: "आफ्नै घरमा बस्न मध्यस्थता माग्दै नर बहादुर बिश्वकर्मा",
      hi: "अपने घर में रहने के लिए मध्यस्थता मांगते हुए नर बहादुर बिश्वकर्मा",
    },
    primary: "samaj",
    types: ["samaj"],
    tags: ["samaj", "mediation", "displacement"],
    title: {
      en: "Request to be allowed to live in his own home",
      ne: "आफ्नै घरमा बस्न दिन मागिएको निवेदन",
      hi: "अपने ही घर में रहने देने की मांग",
    },
    summary: {
      en: "This record keeps the same theme: NB asks for mediated help so he can stay in his own home without confrontation.",
      ne: "यो कागजले उही कुरा दोहोर्‍याउँछ: NB ले झगडाविना आफ्नै घरमा बस्न समाजीय मध्यस्थता मागेका छन्।",
      hi: "यह रिकॉर्ड वही बात दोहराता है: NB अपने घर में बिना टकराव रह सके, इसके लिए मध्यस्थित मदद मांगता है।",
    },
    images: [{ src: "Letter2PAskingmediationToliveInOwnHome.jpg" }],
  },
  {
    id: "r7",
    no: 7,
    sortDate: "2016-03-13",
    dateLabel: "13-03-2016",
    metaLabel: "source",
    meta: {
      en: "Bishwakarma Samaj decision",
      ne: "बिश्वकर्मा समाजको निर्णय",
      hi: "बिश्वकर्मा समाज का निर्णय",
    },
    primary: "samaj",
    types: ["samaj", "legal"],
    tags: ["samaj", "legal", "resolution"],
    title: {
      en: "Samaj records that NB accepted direction and Tilak refused mediation",
      ne: "समाजको निर्णयले NB तयार र टिलक अस्वीकारमा रहेको देखाउँछ",
      hi: "समाज का निर्णय दर्ज करता है कि NB तैयार था और तिलक ने मध्यस्थता नहीं मानी",
    },
    summary: {
      en: "This is the key institutional document: the Samaj says it tried repeatedly, NB agreed to direction, and Tilak remained adamant.",
      ne: "यो मुख्य संस्थागत कागज हो: समाजले पटक-पटक प्रयास गरेको, NB निर्देशन मान्न तयार भएको र टिलक अडानमै रहेको उल्लेख छ।",
      hi: "यह मुख्य संस्थागत दस्तावेज़ है: समाज ने कई कोशिशें कीं, NB दिशा मानने को तैयार था, लेकिन तिलक अड़ा रहा।",
    },
    images: [{ src: "SamajS_decision_13-03-2016.jpg" }],
  },
  {
    id: "r8",
    no: 8,
    sortDate: "2016-06-20",
    dateLabel: "20-06-2016",
    metaLabel: "writer",
    meta: {
      en: "Bishwakarma Samaj to Rangeli Police",
      ne: "बिश्वकर्मा समाजद्वारा रंगेली प्रहरीलाई",
      hi: "बिश्वकर्मा समाज द्वारा रंगेली पुलिस को",
    },
    primary: "samaj",
    types: ["samaj", "police"],
    tags: ["samaj", "police", "resolution"],
    title: {
      en: "Samaj forwards the unresolved case to police",
      ne: "समाजले नसुल्झिएको विवाद प्रहरीतर्फ पठायो",
      hi: "समाज ने अनसुलझा विवाद पुलिस को भेजा",
    },
    summary: {
      en: "The Samaj writes that paper division exists but peace does not, so police intervention is needed.",
      ne: "कागजी बाँडफाँट भए पनि शान्ति नभएको भन्दै समाजले प्रहरी हस्तक्षेप आवश्यक भएको लेख्छ।",
      hi: "समाज लिखता है कि कागजी बंटवारा होने के बाद भी शांति नहीं है, इसलिए पुलिस हस्तक्षेप जरूरी है।",
    },
    images: [{ src: "Letter_from_samaj_to_Police_20-06-2016.jpg" }],
  }
);

patterns.push(
  {
    id: "refusal",
    preview: [
      ["r5", 0],
      ["r7", 0],
      ["r23", 0],
      ["r26", 0],
    ],
    more: [
      ["r1", 0],
      ["r8", 0],
      ["r9", 0],
      ["r25", 0],
      ["r29", 0],
    ],
  },
  {
    id: "utilities",
    preview: [
      ["r2", 0],
      ["r3", 0],
      ["r10", 0],
      ["r18", 0],
    ],
    more: [
      ["r4", 0],
      ["r11", 0],
      ["r24", 0],
      ["r27", 0],
    ],
  },
  {
    id: "outreach",
    preview: [
      ["r1", 0],
      ["r8", 0],
      ["r21", 0],
      ["r27", 0],
    ],
    more: [
      ["r5", 0],
      ["r20", 0],
      ["r23", 0],
      ["r29", 0],
    ],
  },
  {
    id: "escalation",
    preview: [
      ["r14", 0],
      ["r17", 0],
      ["r18", 0],
      ["r22", 0],
    ],
    more: [
      ["r15", 0],
      ["r19", 0],
      ["r24", 0],
      ["r28", 0],
    ],
  }
);

records.push(
  {
    id: "r23",
    no: 23,
    sortDate: "2023-01-28",
    dateLabel: "28-01-2023",
    metaLabel: "source",
    meta: {
      en: "Samaj letter to police after failed mediation",
      ne: "असफल मध्यस्थतापछि प्रहरीलाई पठाइएको समाजको पत्र",
      hi: "असफल मध्यस्थता के बाद पुलिस को भेजा गया समाज का पत्र",
    },
    primary: "samaj",
    types: ["samaj", "police"],
    tags: ["samaj", "police", "resolution"],
    title: {
      en: "Samaj says a 28-01-2023 mediation attempt failed",
      ne: "28-01-2023 को मध्यस्थता प्रयास असफल भएको समाजको भनाइ",
      hi: "समाज कहता है कि 28-01-2023 की मध्यस्थता कोशिश विफल रही",
    },
    summary: {
      en: "The letter says the Samaj tried to mediate the vendetta between NB and Tilak on 28-01-2023, failed, and therefore asked police to intervene.",
      ne: "पत्रमा 28-01-2023 मा NB र टिलकबीचको वैमनस्य समाजले मिलाउन खोजेको, असफल भएको र त्यसपछि प्रहरी हस्तक्षेप मागिएको उल्लेख छ।",
      hi: "पत्र में कहा गया है कि 28-01-2023 को समाज ने NB और तिलक के बीच का विवाद सुलझाने की कोशिश की, पर असफल रहा और फिर पुलिस हस्तक्षेप मांगा।",
    },
    images: [{ src: "28-01-2023_Samaj_letter_to_Police.jpeg" }],
  },
  {
    id: "r24",
    no: 24,
    sortDate: "2024-07-09",
    dateLabel: "09-07-2024",
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma to Bishwakarma Samaj",
      ne: "नर बहादुर बिश्वकर्माद्वारा बिश्वकर्मा समाजलाई",
      hi: "नर बहादुर बिश्वकर्मा द्वारा बिश्वकर्मा समाज को",
    },
    primary: "samaj",
    types: ["samaj", "violence"],
    tags: ["samaj", "warning", "signatures", "utilities"],
    title: {
      en: "NB says he saw Tilak urinating into the water source and threatening him",
      ne: "NB ले टिलकलाई पानीमा पिसाब गरिरहेको देखेको र फेरि धम्की दिएको भन्छन्",
      hi: "NB कहता है कि उसने तिलक को पानी में पेशाब करते देखा और फिर उसे धमकाया गया",
    },
    summary: {
      en: "NB's letter to the Samaj says he personally saw Tilak urinating into the water, throwing the pipes, and threatening to hit him when NB tried to raise the issue. A second page carries multiple signatures.",
      ne: "NB को समाजलाई दिएको पत्रमा उनले आफ्नै आँखाले टिलकलाई पानीमा पिसाब गरेको, पाइप फालेको र यो कुरा उठाउँदा फेरि हान्ने धम्की दिएको देखेको उल्लेख छ। दोस्रो पृष्ठमा धेरै हस्ताक्षर छन्।",
      hi: "समाज को दिए गए NB के पत्र में कहा गया है कि उसने अपनी आंखों से तिलक को पानी में पेशाब करते, पाइप फेंकते और यह मुद्दा उठाने पर मारने की धमकी देते देखा। दूसरे पृष्ठ पर कई हस्ताक्षर हैं।",
    },
    images: [
      { src: "09-07-2024_pissing_in_water_and_threatening.jpeg" },
      { src: "09-07-2024_pissing_in_water_and_threateningSignatures.jpeg", captionLabel: { en: "Signature page", ne: "हस्ताक्षर भएको पृष्ठ", hi: "हस्ताक्षर वाला पृष्ठ" } },
    ],
  },
  {
    id: "r25",
    no: 25,
    sortDate: null,
    dateLabel: {
      en: "No visible date",
      ne: "मिति देखिँदैन",
      hi: "तारीख दिखाई नहीं देती",
    },
    metaLabel: "writer",
    meta: {
      en: "Undated appeal to Bishwakarma Samaj",
      ne: "बिश्वकर्मा समाजलाई दिइएको मितिविहीन निवेदन",
      hi: "बिश्वकर्मा समाज को दिया गया बिना तारीख का निवेदन",
    },
    primary: "samaj",
    types: ["samaj"],
    tags: ["samaj", "history", "resolution"],
    title: {
      en: "Undated letter retells the loan history and earlier mediated division",
      ne: "मितिविहीन पत्रले ऋणको इतिहास र अघिल्लो मिलाइएको बाँडफाँट दोहोर्‍याउँछ",
      hi: "बिना तारीख का पत्र कर्ज के इतिहास और पुराने मध्यस्थित बंटवारे को दोहराता है",
    },
    summary: {
      en: "NB says his grandfather's loan on the land was later paid by him, and that earlier mediation by Ganga Bahadur Chettri and Balaram Chettri placed Tilak in a designated area before he later refused.",
      ne: "NB ले हजुरबुबाले लिएको ऋण आफूले तिरेको र गंगा बहादुर क्षेत्री तथा बलराम क्षेत्रीको मध्यस्थताले टिलकलाई तोकिएको ठाउँमा राखेको तर पछि उनले अस्वीकार गरेको दाबी गर्छन्।",
      hi: "NB कहता है कि जमीन पर पड़े दादा के कर्ज को उसने चुकाया और गंगा बहादुर छेत्री तथा बलराम छेत्री की मध्यस्थता में तिलक को तय जगह दी गई थी, जिसे उसने बाद में नहीं माना।",
    },
    images: [{ src: "Letter_with_no_date_to_samaj.jpeg" }],
  },
  {
    id: "r26",
    no: 26,
    sortDate: "2023-07-09",
    dateLabel: "09-07-2023",
    metaLabel: "source",
    meta: {
      en: "Confirmation letter signed by Balaram Chettri and Ganga Bahadur",
      ne: "बलराम क्षेत्री र गंगा बहादुरले हस्ताक्षर गरेको पुष्टि-पत्र",
      hi: "बलराम छेत्री और गंगा बहादुर द्वारा हस्ताक्षरित पुष्टि-पत्र",
    },
    primary: "samaj",
    types: ["samaj"],
    tags: ["samaj", "history", "signatures"],
    title: {
      en: "A 2023 letter confirms a 1986 meeting and designated-place understanding",
      ne: "2023 को पत्रले 1986 को बैठक र तोकिएको स्थानको सहमति पुष्टि गर्छ",
      hi: "2023 का पत्र में 1986 की बैठक और तय जगह की समझ की पुष्टि की गई है",
    },
    summary: {
      en: "The letter says that in 1986 a settlement was made and Tilak had agreed to go to the designated place. It carries signatures from Balaram Chettri and Ganga Bahadur.",
      ne: "पत्रमा 1986 मा मिलाप भएको र टिलकले तोकिएको ठाउँमा जाने सहमति दिएको उल्लेख छ। यसमा बलराम क्षेत्री र गंगा बहादुरका हस्ताक्षर छन्।",
      hi: "पत्र में कहा गया है कि 1986 में समझौता हुआ था और तिलक ने तय जगह पर जाने की सहमति दी थी। इस पर बलराम छेत्री और गंगा बहादुर के हस्ताक्षर हैं।",
    },
    images: [{ src: "letter_confirmation_of_1986_meeting.jpeg" }],
  },
  {
    id: "r27",
    no: 27,
    sortDate: "2025-04-23",
    dateLabel: "23-04-2025",
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma to Gram Panchayat",
      ne: "नर बहादुर बिश्वकर्माद्वारा ग्राम पञ्चायतलाई",
      hi: "नर बहादुर बिश्वकर्मा द्वारा ग्राम पंचायत को",
    },
    primary: "civic",
    types: ["civic", "violence"],
    tags: ["civic", "utilities", "warning"],
    title: {
      en: "A 2025 Gram Panchayat letter reports fresh electricity and water cuts",
      ne: "2025 को ग्राम पञ्चायत पत्रमा फेरि बिजुली र पानी काटिएको भनिन्छ",
      hi: "2025 की ग्राम पंचायत अर्जी में फिर बिजली और पानी काटने की बात कही गई है",
    },
    summary: {
      en: "NB says Tilak disconnected electricity on 27 March, cut water as well, and asks Gram Panchayat to intervene in the ongoing pressure around basic utilities.",
      ne: "NB का अनुसार 27 मार्चमा टिलकले बिजुली काटे, पानी पनि रोके, र आधारभूत सुविधा सम्बन्धी निरन्तर दबाबमा ग्राम पञ्चायतको हस्तक्षेप मागिएको छ।",
      hi: "NB के अनुसार 27 मार्च को तिलक ने बिजली काटी, पानी भी रोका, और बुनियादी सुविधाओं पर चल रहे दबाव में ग्राम पंचायत से हस्तक्षेप मांगा गया।",
    },
    images: [{ src: "23-04-2025_electricity_and_water_cut.jpeg" }],
  },
  {
    id: "r28",
    no: 28,
    sortDate: null,
    dateLabel: {
      en: "No visible date",
      ne: "मिति देखिँदैन",
      hi: "तारीख दिखाई नहीं देती",
    },
    metaLabel: "source",
    meta: {
      en: "Undated letter to ward representative",
      ne: "वडा प्रतिनिधिलाई दिइएको मितिविहीन पत्र",
      hi: "वार्ड प्रतिनिधि को दिया गया बिना तारीख का पत्र",
    },
    primary: "civic",
    types: ["civic", "violence"],
    tags: ["civic", "warning", "harassment"],
    title: {
      en: "Undated local letter says Tilak and Ritesh threatened NB from a roof",
      ne: "मितिविहीन स्थानीय पत्रमा टिलक र रितेशले छतबाट फालिदिने धम्की दिएको भनिन्छ",
      hi: "बिना तारीख के स्थानीय पत्र में कहा गया है कि तिलक और रितेश ने छत से फेंकने की धमकी दी",
    },
    summary: {
      en: "The letter to a ward representative says Tilak and Ritesh threatened NB and used words equivalent to 'I will throw you from the roof.'",
      ne: "वडा प्रतिनिधिलाई दिइएको पत्रमा टिलक र रितेशले NB लाई धम्की दिँदै 'तँलाई छतबाट फालिदिन्छु' भन्ने प्रकारको कुरा गरेको उल्लेख छ।",
      hi: "वार्ड प्रतिनिधि को दिए गए पत्र में कहा गया है कि तिलक और रितेश ने NB को धमकाते हुए 'मैं तुम्हें छत से फेंक दूंगा' जैसी बात कही।",
    },
    images: [{ src: "No_date_letter.jpeg" }],
  },
  {
    id: "r29",
    no: 29,
    sortDate: "2025-10-29",
    dateLabel: "29-10-2025",
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma to Bishwakarma Samaj",
      ne: "नर बहादुर बिश्वकर्माद्वारा बिश्वकर्मा समाजलाई",
      hi: "नर बहादुर बिश्वकर्मा द्वारा बिश्वकर्मा समाज को",
    },
    primary: "samaj",
    types: ["samaj", "resolution"],
    tags: ["samaj", "resolution"],
    title: {
      en: "NB asks for the written result of the Samaj meeting",
      ne: "NB ले समाज बैठकको लिखित निष्कर्ष माग्छन्",
      hi: "NB समाज की बैठक का लिखित निष्कर्ष मांगता है",
    },
    summary: {
      en: "The letter asks what decision was made at the meeting and requests a written resolution rather than uncertainty or exclusion.",
      ne: "पत्रमा बैठकमा के निर्णय भयो भन्ने स्पष्ट लिखित जवाफ मागिएको छ, नत्र अनिश्चितता वा बहिष्कारमा नछोड्न आग्रह गरिएको छ।",
      hi: "पत्र में पूछा गया है कि बैठक में क्या निर्णय हुआ और अनिश्चितता या बाहर रखने के बजाय लिखित निर्णय मांगा गया है।",
    },
    images: [{ src: "29-10-2025_letter_asking_for_the_resolutionOfSamaj.jpeg" }],
  }
);

records.push(
  {
    id: "r30",
    no: 30,
    sortDate: "2023-09-27",
    dateLabel: "27-09-2023",
    metaLabel: "source",
    meta: {
      en: "Letter copy from Bishwakarma Samaj — tri-addressed to Samaj, Gram Panchayat, and Police",
      ne: "बिश्वकर्मा समाजबाट प्राप्त पत्रको प्रतिलिपि — समाज, ग्राम पञ्चायत र प्रहरी तिनैलाई",
      hi: "बिश्वकर्मा समाज से मिली पत्र की प्रति — समाज, ग्राम पंचायत और पुलिस तीनों को",
    },
    primary: "violence",
    types: ["violence", "samaj", "police", "civic"],
    tags: ["violence", "samaj", "police", "civic", "harassment"],
    title: {
      en: "Tilak spat on NB and pushed him while he was carrying work materials",
      ne: "काम गर्दै गर्दा NB लाई टिलकले थुक्ने र धकेल्ने",
      hi: "काम के दौरान NB पर तिलक ने थूका और धक्का दिया",
    },
    summary: {
      en: "On 22-09-2023 at 5pm, while NB was working and carrying something, Tilak pushed him, tried to hurt him, and spat on him. The letter, received from the Samaj as a copy, appeals jointly to the Samaj, Gram Panchayat, and Police to resolve the ongoing pattern of harassment.",
      ne: "22-09-2023 को साँझ 5 बजे NB केही बोक्दै काम गर्दै थिए। त्यसबेला टिलकले उनलाई धकेले, हानी गर्ने कोशिस गरे र थुकिदिए। समाजबाट प्रतिलिपिका रूपमा प्राप्त यो पत्र निरन्तर उत्पीडनको समाधानका लागि समाज, ग्राम पञ्चायत र प्रहरी तिनैसमक्ष अपिल गर्दछ।",
      hi: "22-09-2023 को शाम 5 बजे NB काम करते हुए कुछ उठा रहे थे। उस समय तिलक ने उन्हें धक्का दिया, चोट पहुंचाने की कोशिश की और उन पर थूक दिया। समाज से प्रति के रूप में प्राप्त यह पत्र निरंतर उत्पीड़न के समाधान के लिए समाज, ग्राम पंचायत और पुलिस तीनों से अपील करता है।",
    },
    images: [
      { src: "27_09_2023_tilak_assualted_when_NB_was_Carrying_while_working.jpg" },
      { src: "27_09_2023_tilak_assualted_when_NB_was_Carrying_while_working2ndpage.jpg", captionLabel: { en: "Page 2 of assault complaint", ne: "हमला उजुरीको दोस्रो पृष्ठ", hi: "हमले की शिकायत का पृष्ठ 2" } },
    ],
  },
  {
    id: "r31",
    no: 31,
    sortDate: null,
    dateLabel: {
      en: "2016 or later (no reliable visible date)",
      ne: "2016 वा त्यसपछि (भरपर्दो मिति देखिँदैन)",
      hi: "2016 या बाद में (भरोसेमंद तारीख दिखाई नहीं देती)",
    },
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma to Bishwakarma Samaj, Lamahatta Village",
      ne: "नर बहादुर बिश्वकर्माद्वारा बिश्वकर्मा समाज, लामाहट्टा गाउँलाई",
      hi: "नर बहादुर बिश्वकर्मा द्वारा बिश्वकर्मा समाज, लामाहट्टा गांव को",
    },
    primary: "samaj",
    types: ["samaj"],
    tags: ["samaj", "resolution", "harassment"],
    title: {
      en: "NB responds to Samaj over unpaid dues — cites silence during 2016 Andolan and false accusations",
      ne: "NB ले बाँकी बक्यौताबारे समाजलाई जवाफ दिँदै 2016 आन्दोलनमा मौनता र झुटा आरोपहरूको उल्लेख गर्छन्",
      hi: "NB समाज को बकाया के बारे में जवाब देते हुए 2016 आंदोलन में मौन और झूठे आरोपों का उल्लेख करता है",
    },
    summary: {
      en: "NB writes that he was a Founder Member of the Samaj and paid dues regularly for years, but the Samaj stayed silent when his brothers made false accusations, when he was labelled 'anti-party' and 'flag thief' during the 2016 Andolan, and when stones were thrown at his roof with only him and his wife at home. He says being told to 'go tell your own party' eroded his faith in the Samaj, and he cannot decide whether to stay or leave. He asks for a deep discussion and requests that the Samaj not mix itself with political party affairs.",
      ne: "NB लेख्छन् कि उनी समाजका संस्थापक सदस्य थिए र वर्षौंदेखि नियमित बक्यौता तिर्थे, तर आफ्नै दाजुभाइले झुटा आरोप लगाउँदा, 2016 आन्दोलनमा उनलाई 'बिरोधी' र 'झण्डा चोर' भनिँदा, र उनी र उनकी श्रीमती मात्रै घरमा हुँदा छानामा ढुंगा फालिँदा समाज मौन रह्यो। 'आफ्नो पार्टीलाई गएर भन' भन्ने जवाफले समाजप्रतिको उनको विश्वास घट्यो। उनले समाजमा बस्ने वा नबस्ने निर्णय गर्न सकेको छैनन् र गहिरो छलफलका लागि अनुरोध गर्दै समाजलाई राजनीतिक पार्टीसँग नमिसाउन आग्रह गर्छन्।",
      hi: "NB लिखता है कि वह समाज के संस्थापक सदस्य थे और सालों तक नियमित रूप से बकाया देते रहे, लेकिन जब उनके भाइयों ने झूठे आरोप लगाए, 2016 आंदोलन में उन्हें 'विरोधी' और 'झंडा चोर' कहा गया, और जब सिर्फ वे और उनकी पत्नी घर में थे तब छत पर पत्थर फेंके गए, तब समाज चुप रहा। 'अपनी पार्टी को जाकर बताओ' जैसे जवाब से समाज में उनकी आस्था कम हुई। वे तय नहीं कर पा रहे कि समाज में रहें या नहीं, और गहरी चर्चा का अनुरोध करते हुए समाज को राजनीतिक दल से न मिलाने की अपील करते हैं।",
    },
    images: [{ src: "no_dates_letters_to_samaj_which_seems_to_have_been_compromised.jpg" }],
  },
  {
    id: "r32",
    no: 32,
    sortDate: null,
    dateLabel: {
      en: "18-01-20xx (year not fully visible)",
      ne: "18-01-20xx (वर्ष पूरा देखिँदैन)",
      hi: "18-01-20xx (वर्ष पूरी तरह दिखाई नहीं देता)",
    },
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Vishwakarma to Vishwakarma Society (Samaj), Lamahatta Ward No. 16",
      ne: "नर बहादुर बिश्वकर्माद्वारा बिश्वकर्मा समाज, लामाहट्टा वडा नं. 16 लाई",
      hi: "नर बहादुर बिश्वकर्मा द्वारा बिश्वकर्मा समाज, लामाहट्टा वार्ड नं. 16 को",
    },
    primary: "samaj",
    types: ["samaj", "legal"],
    tags: ["samaj", "resolution", "legal"],
    title: {
      en: "NB — senior Samaj member — says Tilak repeatedly refused Samaj direction and no justice was done",
      ne: "NB — समाजका वरिष्ठ सदस्य — टिलकले बारम्बार समाजको निर्देशन मान्न अस्वीकार गरेको र कुनै न्याय नभएको भन्छन्",
      hi: "NB — वरिष्ठ समाज सदस्य — कहते हैं कि तिलक ने बार-बार समाज के निर्देश को मानने से इनकार किया और कोई न्याय नहीं मिला",
    },
    summary: {
      en: "NB identifies himself as son of the late Buddhiman Vishwakarma and a senior Samaj member. He says the land dispute with his elder brother Tilak has been ongoing for many years and recently also involved a tree. Although he repeatedly asked the Samaj for help, Tilak directly violated and ignored the Samaj's directions. After multiple attempts, the Samaj neither expelled Tilak for non-compliance nor expelled NB — and no justice was delivered whatsoever.",
      ne: "NB आफूलाई दिवंगत बुद्धिमान बिश्वकर्माका छोरा र समाजका वरिष्ठ सदस्यका रूपमा चिनाउँछन्। उनले भन्छन् कि जेठा दाजु टिलकसँगको जमिन विवाद वर्षौंदेखि जारी छ, हालैमा रूखको विषयमा पनि झगडा भयो। उनले बारम्बार समाजसँग मद्दत माग्दा पनि टिलकले समाजको निर्देशन सिधै उल्लघंन गरे। धेरै प्रयासपछि पनि समाजले न पालना नगर्ने टिलकलाई निष्कासित गर्यो, न NB लाई — कुनै न्याय भएन।",
      hi: "NB खुद को दिवंगत बुद्धिमान बिश्वकर्मा के बेटे और समाज के वरिष्ठ सदस्य के रूप में परिचित कराते हैं। उनका कहना है कि बड़े भाई तिलक के साथ जमीन का विवाद कई सालों से जारी है और हाल ही में एक पेड़ को लेकर भी झगड़ा हुआ। बार-बार समाज से मदद मांगने के बावजूद तिलक ने समाज के निर्देशों को सीधे तोड़ा। कई कोशिशों के बाद भी समाज ने न तो तिलक को निष्कासित किया न NB को — कोई न्याय नहीं मिला।",
    },
    images: [{ src: "18_01_20___Tilak_refusing_direction_of_Samaj.jpg" }],
  }
);

records.push(
  {
    id: "r16",
    no: 16,
    sortDate: null,
    dateLabel: {
      en: "Date not visible",
      ne: "मिति देखिँदैन",
      hi: "तारीख दिखाई नहीं देती",
    },
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma requesting investigation",
      ne: "अनुसन्धान माग्दै नर बहादुर बिश्वकर्मा",
      hi: "जांच की मांग करते हुए नर बहादुर बिश्वकर्मा",
    },
    primary: "police",
    types: ["police", "violence"],
    tags: ["police", "harassment"],
    title: {
      en: "Nightly stone throwing is reported as ongoing harassment",
      ne: "राति-राति ढुंगा फालिने कुरा निरन्तर उत्पीडनको रूपमा उठाइन्छ",
      hi: "रात में पत्थर फेंकना लगातार उत्पीड़न के रूप में दर्ज किया गया",
    },
    summary: {
      en: "NB says stones were repeatedly thrown on the roof at night and asks for investigation even though he could not prove the attacker in that letter.",
      ne: "NB का अनुसार राति बारम्बार छानामाथि ढुंगा फालिन्थ्यो र सोही पत्रमा दोषी प्रमाणित गर्न नसके पनि उनले अनुसन्धान मागे।",
      hi: "NB कहता है कि रात में बार-बार छत पर पत्थर फेंके जाते थे और उस पत्र में हमलावर सिद्ध न कर पाने के बावजूद उसने जांच मांगी।",
    },
    images: [{ src: "latenightStoneThrow.jpg" }],
  },
  {
    id: "r17",
    no: 17,
    sortDate: "2021-09-26",
    dateLabel: "26-09-2021",
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma to Rangeli Police",
      ne: "नर बहादुर बिश्वकर्माद्वारा रंगेली प्रहरीलाई",
      hi: "नर बहादुर बिश्वकर्मा द्वारा रंगेली पुलिस को",
    },
    primary: "police",
    types: ["police", "violence"],
    tags: ["police", "violence", "harassment"],
    title: {
      en: "Complaint says Roshan moved into the confrontation after stone throwing",
      ne: "ढुंगा फालिसकेपछि रोशन पनि झडपमा आए भन्ने उजुरी",
      hi: "शिकायत कहती है कि पत्थरबाजी के बाद रोशन भी टकराव में आया",
    },
    summary: {
      en: "NB writes that after stones were thrown, Roshan came forward during the confrontation and tried to assault Aarati.",
      ne: "NB लेख्छन् कि ढुंगा फालिएपछि रोशन विवादमा आए र आरतीमाथि हात हाल्ने प्रयास गरे।",
      hi: "NB लिखता है कि पत्थरबाजी के बाद रोशन आगे आया और आरती पर हमला करने की कोशिश की।",
    },
    images: [{ src: "RoshansCase.jpg" }],
  },
  {
    id: "r18",
    no: 18,
    sortDate: "2022-11-14",
    dateLabel: "12-11-2022 / 14-11-2022",
    metaLabel: "source",
    meta: {
      en: "Stamped police complaint",
      ne: "प्रहरी-छाप भएको उजुरी",
      hi: "पुलिस-मुहर वाली शिकायत",
    },
    primary: "police",
    types: ["police", "violence"],
    tags: ["police", "injury", "stamped"],
    title: {
      en: "Stamped complaint records slingshot injury while cutting trees",
      ne: "रूख काट्दा गुलेलीबाट लागेको चोटको छाप भएको उजुरी",
      hi: "पेड़ काटते समय गुलेल से लगी चोट की मुहरयुक्त शिकायत",
    },
    summary: {
      en: "The complaint says NB was hit in the chest by a slingshot stone while cutting trees on land he says is his own.",
      ne: "उजुरीमा NB ले आफ्नै भनिएको जमिनमा रूख काट्दा गुलेलीको ढुंगाले छातीमा लागेको उल्लेख छ।",
      hi: "शिकायत में कहा गया है कि NB को अपनी बताई गई जमीन पर पेड़ काटते समय गुलेल का पत्थर छाती में लगा।",
    },
    images: [{ src: "Tree_incident_Police_received_stamped_14-11-2022.jpeg" }],
  },
  {
    id: "r19",
    no: 19,
    sortDate: "2022-09-18",
    dateLabel: "18-09-2022",
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma to Bishwakarma Samaj",
      ne: "नर बहादुर बिश्वकर्माद्वारा बिश्वकर्मा समाजलाई",
      hi: "नर बहादुर बिश्वकर्मा द्वारा बिश्वकर्मा समाज को",
    },
    primary: "samaj",
    types: ["samaj", "violence"],
    tags: ["samaj", "warning", "violence"],
    title: {
      en: "NB warns that Tilak is planning to occupy land again",
      ne: "NB ले टिलक फेरि जमिन ओगट्न लागेका छन् भनी चेतावनी दिन्छन्",
      hi: "NB चेतावनी देता है कि तिलक फिर जमीन पर कब्ज़ा करने की तैयारी में है",
    },
    summary: {
      en: "NB writes to the Samaj that he heard Tilak was preparing to take over land again and reopen the conflict on the ground.",
      ne: "NB ले समाजलाई लेखेर टिलक फेरि जमिन कब्जा गर्ने तयारीमा रहेको र विवाद फेरि चर्किने डर व्यक्त गर्छन्।",
      hi: "NB समाज को लिखता है कि उसने सुना है तिलक फिर जमीन लेने की तैयारी कर रहा है और विवाद फिर भड़क सकता है।",
    },
    images: [{ src: "After_Comingtohome_threat_in_OWnhome.jpg" }],
  },
  {
    id: "r20",
    no: 20,
    sortDate: "2022-11-17",
    dateLabel: "17-11-2022",
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma to Bishwakarma Samaj",
      ne: "नर बहादुर बिश्वकर्माद्वारा बिश्वकर्मा समाजलाई",
      hi: "नर बहादुर बिश्वकर्मा द्वारा बिश्वकर्मा समाज को",
    },
    primary: "samaj",
    types: ["samaj"],
    tags: ["samaj", "resolution"],
    title: {
      en: "NB says the Samaj meeting did not happen and asks for action",
      ne: "समाजको बैठक नबस्दा NB ले कारबाही माग्छन्",
      hi: "समाज की बैठक न होने पर NB कार्रवाई मांगता है",
    },
    summary: {
      en: "NB says he waited for the called meeting, nobody from the Samaj came, and he therefore asked for action in writing.",
      ne: "NB ले बोलाइएको बैठकका लागि पर्खे, तर समाजतर्फबाट कोही नआएपछि उनले लिखित रूपमा कारबाही मागे।",
      hi: "NB कहता है कि वह तय बैठक के लिए रुका, लेकिन समाज की ओर से कोई नहीं आया, इसलिए उसने लिखित कार्रवाई मांगी।",
    },
    images: [{ src: "Asking_Samaj_to Take_Action.jpg" }],
  },
  {
    id: "r21",
    no: 21,
    sortDate: "2023-02-01",
    dateLabel: "02-2023",
    metaLabel: "writer",
    meta: {
      en: "Upesh Bishwakarma to Police",
      ne: "उपेश बिश्वकर्माद्वारा प्रहरीलाई",
      hi: "उपेश बिश्वकर्मा द्वारा पुलिस को",
    },
    primary: "police",
    types: ["police", "violence"],
    tags: ["police", "harassment"],
    title: {
      en: "Upesh says harassment continued at public meeting points",
      ne: "उपेशले सार्वजनिक भेटघाट हुने ठाउँमा पनि उत्पीडन जारी रहेको भन्छन्",
      hi: "उपेश कहता है कि सार्वजनिक मिलने-जुलने की जगहों पर भी उत्पीड़न जारी था",
    },
    summary: {
      en: "This letter from NB's son says Tilak kept harassing NB at crossroads and other public encounters.",
      ne: "NB का छोराद्वारा लेखिएको यो पत्रमा टिलकले बाटोघाटो र सार्वजनिक भेटमा पनि NB लाई दुःख दिइरहेको उल्लेख छ।",
      hi: "NB के बेटे द्वारा लिखे गए इस पत्र में कहा गया है कि तिलक चौराहों और सार्वजनिक मुलाकातों पर भी NB को परेशान करता रहा।",
    },
    images: [{ src: "02-2023Letterto_Police.jpeg" }],
  },
  {
    id: "r22",
    no: 22,
    sortDate: "2023-07-31",
    dateLabel: "31-07-2023",
    metaLabel: "source",
    meta: {
      en: "Section 107 CrPC papers for both parties",
      ne: "दुवै पक्षका लागि Section 107 CrPC कागज",
      hi: "दोनों पक्षों के लिए Section 107 CrPC के कागज",
    },
    primary: "legal",
    types: ["legal", "police"],
    tags: ["legal", "court", "police"],
    title: {
      en: "The conflict reaches court-linked preventive action",
      ne: "विवाद अदालत-सम्बद्ध निवारक कारबाहीसम्म पुग्छ",
      hi: "विवाद अदालत-सम्बद्ध निवारक कार्रवाई तक पहुंचता है",
    },
    summary: {
      en: "Section 107 CrPC was issued for both Tilak and NB, showing the dispute had become serious enough for formal preventive action.",
      ne: "Section 107 CrPC दुवै, टिलक र NB, माथि जारी भयो, जसले विवाद औपचारिक निवारक कदमसम्म पुगेको देखाउँछ।",
      hi: "Section 107 CrPC तिलक और NB दोनों पर जारी हुआ, जिससे पता चलता है कि विवाद औपचारिक निवारक कार्रवाई तक पहुंच गया था।",
    },
    images: [
      { src: "sec107CrPC-31-07-2023.jpeg", captionLabel: { en: "Tilak's Section 107 paper", ne: "टिलकको Section 107 कागज", hi: "तिलक का Section 107 कागज" } },
      { src: "sec107CrPC2-31.07.2023.jpeg", captionLabel: { en: "NB's Section 107 paper", ne: "NB को Section 107 कागज", hi: "NB का Section 107 कागज" } },
    ],
  }
);

records.push(
  {
    id: "r9",
    no: 9,
    sortDate: null,
    dateLabel: {
      en: "2016 (exact date not visible)",
      ne: "2016 (ठ्याक्कै मिति देखिँदैन)",
      hi: "2016 (सटीक तारीख दिखाई नहीं देती)",
    },
    metaLabel: "writer",
    meta: {
      en: "Samaj-side letter to Rangeli Police via Raju",
      ne: "राजु मार्फत रंगेली प्रहरीलाई पठाइएको समाज-पक्षीय पत्र",
      hi: "राजू के माध्यम से रंगेली पुलिस को भेजा गया समाज-पक्ष का पत्र",
    },
    primary: "samaj",
    types: ["samaj", "police"],
    tags: ["samaj", "police", "resolution"],
    title: {
      en: "A second community route to police says the matter is still not settled",
      ne: "समुदायबाट प्रहरीतर्फको दोस्रो पत्रले पनि विवाद नसुल्झिएको भन्छ",
      hi: "समुदाय की दूसरी पुलिस-चिट्ठी भी बताती है कि मामला अभी सुलझा नहीं",
    },
    summary: {
      en: "This letter says that even after land was divided on paper, the brothers were still not living peacefully.",
      ne: "यो पत्रले कागजमा बाँडफाँट भइसकेपछि पनि दाजुभाइ शान्तिपूर्वक बस्न नसकेको बताउँछ।",
      hi: "यह पत्र कहता है कि कागज पर बंटवारे के बाद भी भाई शांति से नहीं रह पा रहे थे।",
    },
    images: [{ src: "Samaj_to_rangliPolice-2016.jpg" }],
  },
  {
    id: "r10",
    no: 10,
    sortDate: "2016-09-30",
    dateLabel: "30-09-2016",
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma to Rangeli Police",
      ne: "नर बहादुर बिश्वकर्माद्वारा रंगेली प्रहरीलाई",
      hi: "नर बहादुर बिश्वकर्मा द्वारा रंगेली पुलिस को",
    },
    primary: "police",
    types: ["police", "violence"],
    tags: ["police", "violence", "utilities", "displacement"],
    title: {
      en: "NB repeats that he was driven away and says water access was cut",
      ne: "NB फेरि आफू घरबाट हटाइएको र पानी काटिएको कुरा दोहोर्‍याउँछन्",
      hi: "NB फिर कहता है कि उसे हटाया गया और पानी की पहुंच काट दी गई",
    },
    summary: {
      en: "NB states that Tilak came with a heavy stick, kept him away from home, and cut the drinking water source.",
      ne: "NB का अनुसार टिलक भारी लठ्ठीसहित आए, उनलाई घरबाट टाढा राखे र पिउने पानीको स्रोत काटे।",
      hi: "NB के अनुसार तिलक भारी लाठी लेकर आया, उसे घर से दूर रखा और पीने के पानी का स्रोत काट दिया।",
    },
    images: [{ src: "30-09-2016_Away_from_home_watercut.jpg" }],
  },
  {
    id: "r11",
    no: 11,
    sortDate: "2016-10-04",
    dateLabel: "04-10-2016",
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma to Rangeli Police",
      ne: "नर बहादुर बिश्वकर्माद्वारा रंगेली प्रहरीलाई",
      hi: "नर बहादुर बिश्वकर्मा द्वारा रंगेली पुलिस को",
    },
    primary: "police",
    types: ["police"],
    tags: ["police", "displacement"],
    title: {
      en: "Formal police letter says eight months passed without safe return",
      ne: "आठ महिना बित्दा पनि सुरक्षित फर्कन नपाएको औपचारिक प्रहरी पत्र",
      hi: "औपचारिक पुलिस पत्र कहता है कि आठ महीने बाद भी सुरक्षित वापसी नहीं हुई",
    },
    summary: {
      en: "NB writes that months have passed, his sons are away for work, and no forum has yet delivered a workable resolution.",
      ne: "NB लेख्छन् कि महिनौँ बितिसकेको छ, छोराहरू कामका लागि बाहिर छन्, र अहिलेसम्म कुनै मंचले कामलाग्दो समाधान दिएको छैन।",
      hi: "NB लिखता है कि कई महीने बीत गए, उसके बेटे काम के लिए बाहर हैं, और अभी तक किसी मंच ने काम करने लायक समाधान नहीं दिया।",
    },
    images: [{ src: "Lettersto_P_requesting_assistance_to_go_home_04-10-2016.jpeg" }],
  },
  {
    id: "r12",
    no: 12,
    sortDate: null,
    dateLabel: {
      en: "After Jul 2016",
      ne: "जुलाई 2016 पछि",
      hi: "जुलाई 2016 के बाद",
    },
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma to Bishwakarma Samaj",
      ne: "नर बहादुर बिश्वकर्माद्वारा बिश्वकर्मा समाजलाई",
      hi: "नर बहादुर बिश्वकर्मा द्वारा बिश्वकर्मा समाज को",
    },
    primary: "samaj",
    types: ["samaj"],
    tags: ["samaj", "resolution"],
    title: {
      en: "NB says Tilak violated the Samaj terms after NB returned",
      ne: "NB का अनुसार फर्किएपछि पनि टिलकले समाजका सर्त मानेनन्",
      hi: "NB के अनुसार वापसी के बाद भी तिलक ने समाज की शर्तें नहीं मानीं",
    },
    summary: {
      en: "NB says he returned as directed, but peace did not hold and he again asked for a written resolution.",
      ne: "NB ले आफू निर्देशनअनुसार फर्किएको, तर शान्ति कायम नभएको भन्दै फेरि लिखित निर्णय मागेका छन्।",
      hi: "NB कहता है कि वह निर्देश के अनुसार लौटा, लेकिन शांति नहीं रही और उसने फिर लिखित निर्णय मांगा।",
    },
    images: [{ src: "TilakViolationOfSamajTerms.jpg" }],
  },
  {
    id: "r13",
    no: 13,
    sortDate: null,
    dateLabel: {
      en: "2016-2017 period",
      ne: "2016-2017 अवधि",
      hi: "2016-2017 अवधि",
    },
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma to Bishwakarma Samaj",
      ne: "नर बहादुर बिश्वकर्माद्वारा बिश्वकर्मा समाजलाई",
      hi: "नर बहादुर बिश्वकर्मा द्वारा बिश्वकर्मा समाज को",
    },
    primary: "samaj",
    types: ["samaj"],
    tags: ["samaj", "resolution"],
    title: {
      en: "NB asks the Samaj to act after continued violation and pressure",
      ne: "लगातार दबाबपछि NB ले समाजसँग कारबाही माग्छन्",
      hi: "लगातार दबाव के बाद NB समाज से कार्रवाई मांगता है",
    },
    summary: {
      en: "NB says earlier direction did not produce calm and asks the Samaj to act against continued violation and social pressure.",
      ne: "NB ले अघिल्लो निर्देशनले शान्ति नल्याएको र निरन्तर दबाब तथा उल्लङ्घनविरुद्ध समाजले कदम चाल्नुपर्ने बताएका छन्।",
      hi: "NB कहता है कि पहले की दिशा से शांति नहीं आई और समाज को लगातार उल्लंघन व सामाजिक दबाव के खिलाफ कदम उठाना चाहिए।",
    },
    images: [{ src: "Tilak_Violating_terms,AskingtoBoycottFromSamaj.jpg" }],
  },
  {
    id: "r14",
    no: 14,
    sortDate: "2017-07-04",
    dateLabel: "04-07-2017",
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma to Bishwakarma Samaj",
      ne: "नर बहादुर बिश्वकर्माद्वारा बिश्वकर्मा समाजलाई",
      hi: "नर बहादुर बिश्वकर्मा द्वारा बिश्वकर्मा समाज को",
    },
    primary: "samaj",
    types: ["samaj", "violence"],
    tags: ["samaj", "violence"],
    title: {
      en: "Front-yard building material was allegedly thrown away",
      ne: "आँगनमा राखिएको निर्माण सामग्री फालिएको आरोप",
      hi: "आंगन में रखी निर्माण सामग्री फेंके जाने का आरोप",
    },
    summary: {
      en: "NB says stones placed in his own front-yard area for building were thrown away by Tilak and Ritesh.",
      ne: "NB का अनुसार आफ्नै आँगनमा निर्माणका लागि राखिएका ढुंगाहरू टिलक र रितेशले फालिदिए।",
      hi: "NB के अनुसार उसके अपने आंगन में निर्माण के लिए रखे पत्थरों को तिलक और रितेश ने फेंक दिया।",
    },
    images: [{ src: "lettertosamajretaliationinfrontyard04-07-2017_.jpg" }],
  },
  {
    id: "r15",
    no: 15,
    sortDate: null,
    dateLabel: {
      en: "Date not visible",
      ne: "मिति देखिँदैन",
      hi: "तारीख दिखाई नहीं देती",
    },
    metaLabel: "writer",
    meta: {
      en: "Nar Bahadur Bishwakarma to Bishwakarma Samaj",
      ne: "नर बहादुर बिश्वकर्माद्वारा बिश्वकर्मा समाजलाई",
      hi: "नर बहादुर बिश्वकर्मा द्वारा बिश्वकर्मा समाज को",
    },
    primary: "samaj",
    types: ["samaj", "violence", "legal"],
    tags: ["samaj", "violence", "court"],
    title: {
      en: "Death ceremony disruption becomes another conflict point",
      ne: "दाहसंस्कारको बेला पनि झगडा फेरि उस्तै देखिन्छ",
      hi: "दाह-संस्कार के समय भी विवाद फिर उभरता है",
    },
    summary: {
      en: "NB says the priest was turned away during a death ceremony after insults and interference from Tilak's side. Later notes connect the wider incident to a court-closed stick case.",
      ne: "NB का अनुसार दाहसंस्कारका बेला टिलक पक्षको हस्तक्षेप र अपमानपछि पुजारीलाई फर्काइयो। पछिल्ला नोटहरूले यही ठूलो घटनालाई अदालतमा बन्द भएको लठ्ठी प्रकरणसँग जोड्छन्।",
      hi: "NB के अनुसार दाह-संस्कार के समय तिलक की ओर से हस्तक्षेप और अपमान के बाद पुजारी को लौटा दिया गया। बाद के नोट यही बड़े प्रसंग को अदालत में बंद हुए लाठी-प्रकरण से जोड़ते हैं।",
    },
    images: [{ src: "Letter_to_Samaj_while_death_ceromony.jpg" }],
  }
);

villageFacts.push(
  {
    group: "refusal",
    evidenceTier: "document",
    text: {
      en: "Tilak's side does not appear willing to settle through mediation, starting with Tilak himself; this is shown most clearly in the Samaj decision and later mediation-failure letters.",
      ne: "मध्यस्थताबाट मिलाप गर्ने इच्छा टिलकको पक्षमा, विशेष गरी टिलक स्वयंमा, देखिँदैन; यो कुरा समाजको निर्णय र पछिल्ला असफल मध्यस्थता पत्रहरूले सबैभन्दा स्पष्ट देखाउँछन्।",
      hi: "मध्यस्थता के रास्ते समझौता करने की इच्छा तिलक की ओर, खासकर स्वयं तिलक में, दिखाई नहीं देती; यह बात समाज के निर्णय और बाद के विफल-मध्यस्थता पत्रों में सबसे साफ दिखती है।",
    },
  },
  {
    group: "refusal",
    evidenceTier: "document",
    text: {
      en: "The 1986 confirmation letter and later undated support letters are consistent with NB's claim that he wanted to build from the ancestral-home position while Tilak was expected to move to a designated area.",
      ne: "1986 को पुष्टि-पत्र र पछिल्ला मितिविहीन सहायक पत्रहरू NB को यो दाबीसँग मेल खान्छन् कि पुरानो घरको स्थानबाट उनले निर्माण गर्न चाहेका थिए र टिलक तोकिएको ठाउँमा जानुपर्ने थियो।",
      hi: "1986 के पुष्टि-पत्र और बाद के बिना तारीख वाले सहायक पत्र NB के इस दावे से मेल खाते हैं कि वह पैतृक घर की स्थिति से निर्माण करना चाहता था और तिलक को तय जगह पर जाना था।",
    },
  },
  {
    group: "refusal",
    evidenceTier: "community",
    text: {
      en: "Tilak is described as continuously occupying the ancestral home position, which villagers can already see on the ground without needing a fresh letter to explain it.",
      ne: "टिलक पुरानो घरको स्थानमा निरन्तर बसेको कुरा गाउँलेहरूले जमिनमै देख्न सक्ने अवस्था बताइन्छ, जसलाई बुझाउन नयाँ पत्र आवश्यक पर्दैन।",
      hi: "तिलक पैतृक घर की स्थिति पर लगातार रह रहा है, यह ऐसी बात बताई जाती है जिसे गांव वाले जमीन पर देख सकते हैं और जिसके लिए नए पत्र की जरूरत नहीं पड़ती।",
    },
  },
  {
    group: "refusal",
    evidenceTier: "community",
    text: {
      en: "When NB tried to build, Tilak is described as blocking the effort with family-based arguments such as asking where his children would play.",
      ne: "NB ले घर बनाउन खोज्दा टिलकले 'बच्चाहरू कहाँ खेल्ने?' जस्ता पारिवारिक तर्क प्रयोग गरेर रोकेको बताइन्छ।",
      hi: "जब NB ने घर बनाने की कोशिश की, तब तिलक ने 'बच्चे कहां खेलेंगे?' जैसे पारिवारिक तर्कों से उसे रोकने की कोशिश की बताई जाती है।",
    },
  },
  {
    group: "refusal",
    evidenceTier: "community",
    text: {
      en: "Tilak is also described as shifting responsibility toward the next generation, especially Ritesh, instead of closing the dispute directly himself.",
      ne: "टिलकले विवाद आफैं बन्द नगरी अर्को पुस्तातर्फ, विशेष गरी रितेशतर्फ, जिम्मेवारी सार्ने गरेको बताइन्छ।",
      hi: "तिलक के बारे में यह भी कहा जाता है कि वह विवाद को स्वयं बंद करने के बजाय अगली पीढ़ी, खासकर रितेश, की ओर धकेलता है।",
    },
  },
  {
    group: "provocation",
    evidenceTier: "community",
    text: {
      en: "Tilak is described as constantly provoking NB with demeaning words rather than reducing tension when the two sides meet.",
      ne: "दुई पक्ष भेटिँदा तनाव घटाउनुभन्दा टिलकले NB लाई अमानवीय शब्दले उक्साइरहने गरेको बताइन्छ।",
      hi: "जब दोनों पक्ष मिलते हैं तो तनाव कम करने के बजाय तिलक NB को अपमानजनक शब्दों से लगातार उकसाता है, ऐसा बताया जाता है।",
    },
  },
  {
    group: "provocation",
    evidenceTier: "community",
    text: {
      en: "Tilak is described in the village as stubborn, and that reputation fits the longer record of repeated mediation refusal and continuing quarrel.",
      ne: "गाउँमा टिलकलाई अडान नछाड्ने मान्छे भनेर चिनिने बताइन्छ, र त्यो छवि निरन्तर मध्यस्थता अस्वीकार र नरोकिने झगडासँग मेल खान्छ।",
      hi: "गांव में तिलक को हठी माना जाता है, और यह छवि बार-बार मध्यस्थता अस्वीकार करने तथा विवाद जारी रखने वाले लंबे रिकॉर्ड से मेल खाती है।",
    },
  },
  {
    group: "provocation",
    evidenceTier: "community",
    text: {
      en: "Tilak is described as roaming through the village carrying a stick, which contributes to the atmosphere of intimidation even before any direct strike happens.",
      ne: "टिलक गाउँभरि लठ्ठी बोकेर हिँड्ने गरेको बताइन्छ, जसले प्रत्यक्ष प्रहार हुनु अघि नै डरको वातावरण बनाउँछ।",
      hi: "तिलक के बारे में कहा जाता है कि वह गांव में लाठी लेकर घूमता है, जिससे सीधे वार से पहले ही डर का माहौल बनता है।",
    },
  },
  {
    group: "provocation",
    evidenceTier: "note",
    text: {
      en: "NB's notes, together with some dated complaints, describe repeated attempts to hit or threaten him with stone, slingshot, stick, and knife, including one later episode where police arrival caused Tilak to flee.",
      ne: "NB का नोटहरू र केही मितियुक्त उजुरीहरू मिलाएर हेर्दा ढुंगा, गुलेली, लठ्ठी र चक्कुसम्म प्रयोग गरी धम्क्याउने वा हान्ने प्रयास बारम्बार भएको देखाइन्छ, जसमा एउटा पछि प्रहरी आइपुग्दा टिलक भागेको पनि उल्लेख छ।",
      hi: "NB के नोट और कुछ दिनांकित शिकायतों को साथ पढ़ने पर पत्थर, गुलेल, लाठी और चाकू तक के इस्तेमाल से धमकाने या मारने की कई कोशिशों का वर्णन मिलता है, जिसमें एक बाद की घटना में पुलिस आने पर तिलक के भागने की बात भी शामिल है।",
    },
  },
  {
    group: "provocation",
    evidenceTier: "document",
    text: {
      en: "The funeral-pandit incident remains the clearest example of successful provocation in the file: Tilak's side is described as paying the pandit to leave, NB then reacted with the stick, and that case later closed in court.",
      ne: "पण्डित हटाइएको दाहसंस्कार प्रकरण फाइलमा सफल उक्साहटको सबैभन्दा स्पष्ट उदाहरण रहन्छ: टिलकको पक्षले पण्डितलाई फर्काउन पैसा दिएको वर्णन छ, त्यसपछि NB ले लठ्ठी प्रहार गरे, र त्यो मुद्दा पछि अदालतमा बन्द भयो।",
      hi: "पंडित को हटाए जाने वाला दाह-संस्कार प्रसंग फाइल में सफल उकसावे का सबसे साफ उदाहरण है: तिलक की ओर से पंडित को भेजने के लिए पैसे देने का वर्णन है, उसके बाद NB ने लाठी चलाई, और वह मामला बाद में अदालत में बंद हो गया।",
    },
  },
  {
    group: "escalation",
    evidenceTier: "document",
    text: {
      en: "The record repeatedly shows the dispute moving away from Samaj mediation and outward toward police, court-linked action, and other outside forums.",
      ne: "अभिलेखले बारम्बार यो विवाद समाजीय मध्यस्थताबाट टाढा सरी प्रहरी, अदालत-सम्बद्ध कदम र अन्य बाह्य मंचतर्फ सर्दै गएको देखाउँछ।",
      hi: "रिकॉर्ड बार-बार दिखाता है कि विवाद समाजीय मध्यस्थता से हटकर पुलिस, अदालत-सम्बद्ध कार्रवाई और अन्य बाहरी मंचों की ओर जाता गया।",
    },
  },
  {
    group: "escalation",
    evidenceTier: "note",
    text: {
      en: "NB's notes describe at least one later public incident with a witness present and police arrival, after which Tilak is said to have fled instead of closing the matter.",
      ne: "NB का नोटहरूले कम्तीमा एउटा पछि भएको सार्वजनिक घटनामा साक्षी र प्रहरी दुवै पुगेको, र त्यसपछि मुद्दा बन्द गर्नुको सट्टा टिलक भागेको उल्लेख गर्छन्।",
      hi: "NB के नोट कम-से-कम एक बाद की सार्वजनिक घटना का वर्णन करते हैं जिसमें गवाह और पुलिस दोनों पहुंचे, और उसके बाद कहा गया कि तिलक मामले को बंद करने के बजाय भाग गया।",
    },
  },
  {
    group: "escalation",
    evidenceTier: "note",
    text: {
      en: "In April 2026, NB's notes say Tilak first threw a stone while NB was fixing a water pipe, NB came back and threw a stone in return, and Tilak's daughter was accidentally hit. The report keeps this as bilateral escalation, not one-sided blame.",
      ne: "अप्रिल 2026 को NB को नोट अनुसार NB पानीको पाइप मिलाउँदै गर्दा टिलकले पहिले ढुंगा फाले, त्यसपछि NB फर्केर ढुंगा फाले, र टिलककी छोरी अनजानमै लागिन्। प्रतिवेदनले यसलाई एकतर्फी दोष नभई दुवैतर्फको चर्किएको प्रतिक्रिया मानेर राख्छ।",
      hi: "अप्रैल 2026 के NB नोट के अनुसार NB पानी की पाइप ठीक कर रहा था तब तिलक ने पहले पत्थर फेंका, फिर NB लौटकर पत्थर फेंकता है, और तिलक की बेटी को गलती से चोट लगती है। प्रतिवेदन इसे एकतरफा आरोप नहीं बल्कि दोतरफा बढ़ी हुई प्रतिक्रिया के रूप में रखता है।",
    },
  }
);

interpretations.push(
  {
    evidenceTier: "interpretation",
    text: {
      en: "NB's reading of the pattern is that Tilak prefers court pressure and open quarrel over mediated settlement.",
      ne: "NB को बुझाइमा यो ढाँचा टिलकले मध्यस्थताभन्दा अदालततर्फको दबाब र खुला झगडालाई बढी रुचाएको देखाउँछ।",
      hi: "NB की पढ़ाई में यह पैटर्न बताता है कि तिलक मध्यस्थित समझौते से ज्यादा अदालत की ओर जाने वाले दबाव और खुले झगड़े को पसंद करता है।",
    },
  },
  {
    evidenceTier: "interpretation",
    text: {
      en: "NB reads the repeated provocation as an effort to force a legal fight instead of allowing a community settlement to stand.",
      ne: "NB ले बारम्बारको उक्साहटलाई समुदायीय मिलाप बस्न नदिई कानुनी झगडातर्फ धकेल्ने प्रयासका रूपमा पढ्छन्।",
      hi: "NB बार-बार की उकसाहट को इस रूप में पढ़ता है कि समुदाय-आधारित समझौते को टिकने न देकर मामले को कानूनी लड़ाई में धकेला जाए।",
    },
  },
  {
    evidenceTier: "interpretation",
    text: {
      en: "NB also reads the pattern as pushing both sides toward injury, payment, or mutual damage until one side is too worn down to keep resisting.",
      ne: "NB को अर्को पढाइ अनुसार यो ढाँचा दुवै पक्षलाई चोट, जरिवाना वा पारस्परिक क्षतितर्फ धकेल्दै जान्छ, जबसम्म एक पक्ष लड्नै नसक्ने गरी थाक्दैन।",
      hi: "NB की एक और पढ़ाई यह है कि यह पैटर्न दोनों पक्षों को चोट, भुगतान या पारस्परिक नुकसान की ओर धकेलता है, जब तक कि एक पक्ष टूट न जाए।",
    },
  }
);

document.addEventListener("DOMContentLoaded", () => {
  setupEvents();
  renderPage();
  setupScrollSpy();
});

function setupEvents() {
  document.addEventListener("click", (event) => {
    const langButton = event.target.closest(".lang-button");
    if (langButton) {
      state.lang = langButton.dataset.lang;
      localStorage.setItem("caseReportLang", state.lang);
      renderPage();
      return;
    }

    const filterButton = event.target.closest(".filter-button");
    if (filterButton) {
      state.filter = filterButton.dataset.filter || "all";
      renderTimeline();
      return;
    }

    const patternButton = event.target.closest(".pattern-toggle");
    if (patternButton) {
      const patternId = patternButton.dataset.pattern;
      if (state.openPatterns.has(patternId)) {
        state.openPatterns.delete(patternId);
      } else {
        state.openPatterns.add(patternId);
      }
      renderPatterns();
      return;
    }

    const thumb = event.target.closest(".evidence-thumb");
    if (thumb) {
      openLightbox(thumb);
      return;
    }

    if (event.target.id === "lightbox" || event.target.id === "lightbox-close") {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });
}

function renderPage() {
  document.documentElement.lang = state.lang;
  document.title = copy[state.lang].title;
  renderStaticCopy();
  renderMediationSteps();
  renderTimeline();
  renderSupportRecords();
  renderVillageFacts();
  renderPatterns();
  renderInterpretation();
  renderQuotes();
  renderIncidents();
  renderAsks();
  updateLanguageButtons();
}

function renderStaticCopy() {
  const t = copy[state.lang];

  setText("hero-eyebrow", t.hero.eyebrow);
  setText("hero-title", t.hero.title);
  setText("hero-copy", t.hero.copy);
  setText("hero-note", t.hero.note);

  setText("stat-records-value", t.stats.recordsValue);
  setText("stat-records-label", t.stats.recordsLabel);
  setText("stat-dated-value", t.stats.datedValue);
  setText("stat-dated-label", t.stats.datedLabel);
  setText("stat-institutions-value", t.stats.institutionsValue);
  setText("stat-institutions-label", t.stats.institutionsLabel);
  setText("stat-span-value", t.stats.spanValue);
  setText("stat-span-label", t.stats.spanLabel);

  setText("nav-background", t.nav.background);
  setText("nav-mediation", t.nav.mediation);
  setText("nav-timeline", t.nav.timeline);
  setText("nav-support", t.nav.support);
  setText("nav-village", t.nav.village);
  setText("nav-patterns", t.nav.patterns);
  setText("nav-interpretation", t.nav.interpretation);
  setText("nav-verbal", t.nav.verbal);
  setText("nav-incidents", t.nav.incidents);
  setText("nav-asks", t.nav.asks);

  setText("background-eyebrow", t.background.eyebrow);
  setText("background-title", t.background.title);
  setText("background-copy-1", t.background.copy1);
  setText("background-copy-2", t.background.copy2);
  setText("background-note", t.background.note);

  setText("wall-eyebrow", t.wall.eyebrow);
  setText("wall-title", t.wall.title);
  setText("wall-intro", t.wall.intro);
  setText("wall-callout-label", t.wall.calloutLabel);
  setText("wall-callout-title", t.wall.calloutTitle);
  setText("wall-callout-copy", t.wall.calloutCopy);
  setText("wall-callout-quote", t.wall.calloutQuote);

  setText("timeline-eyebrow", t.timeline.eyebrow);
  setText("timeline-title", t.timeline.title);
  setText("timeline-intro", t.timeline.intro);
  setText("timeline-coverage-label", t.timeline.coverageLabel);
  setText("timeline-coverage-copy", t.timeline.coverageCopy);
  setText("filter-all", t.timeline.filters.all);
  setText("filter-violence", t.timeline.filters.violence);
  setText("filter-samaj", t.timeline.filters.samaj);
  setText("filter-police", t.timeline.filters.police);
  setText("filter-legal", t.timeline.filters.legal);
  setText("filter-civic", t.timeline.filters.civic);

  setText("support-eyebrow", t.support.eyebrow);
  setText("support-title", t.support.title);
  setText("support-intro", t.support.intro);

  setText("village-eyebrow", t.village.eyebrow);
  setText("village-title", t.village.title);
  setText("village-intro", t.village.intro);
  setText("tier-legend-title", t.village.legendTitle);

  setText("patterns-eyebrow", t.patterns.eyebrow);
  setText("patterns-title", t.patterns.title);
  setText("patterns-intro", t.patterns.intro);

  setText("interpretation-eyebrow", t.interpretation.eyebrow);
  setText("interpretation-title", t.interpretation.title);
  setText("interpretation-intro", t.interpretation.intro);

  setText("verbal-eyebrow", t.verbal.eyebrow);
  setText("verbal-title", t.verbal.title);
  setText("verbal-intro", t.verbal.intro);

  setText("incidents-eyebrow", t.incidents.eyebrow);
  setText("incidents-title", t.incidents.title);
  setText("incidents-intro", t.incidents.intro);
  setText("incidents-note", t.incidents.note);
  setText("incidents-closing", t.incidents.closing);

  setText("asks-eyebrow", t.asks.eyebrow);
  setText("asks-title", t.asks.title);
  setText("asks-intro", t.asks.intro);
  setText("asks-closing", t.asks.closing);

  setText("footer-copy", t.footer);
  setText("lightbox-close", t.buttonClose);
}

function renderMediationSteps() {
  const t = copy[state.lang];
  const container = document.getElementById("mediation-steps");
  container.innerHTML = t.wall.steps
    .map(
      (step, index) => `
        <li class="wall-step">
          <span class="wall-step-index">${index + 1}</span>
          <div>
            <strong>${escapeHtml(step.title)}</strong>
            <p>${escapeHtml(step.body)}</p>
          </div>
        </li>
      `
    )
    .join("");
}

function renderTimeline() {
  const t = copy[state.lang];
  const dated = getDatedRecords();
  const visible = dated.filter((record) => matchesFilter(record));
  document.getElementById("timeline-list").innerHTML = visible.map((record) => renderRecordCard(record, false)).join("");
  setText("filter-status", t.timeline.status.replace("{visible}", String(visible.length)).replace("{total}", String(dated.length)));

  document.querySelectorAll(".filter-button").forEach((button) => {
    const active = button.dataset.filter === state.filter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderSupportRecords() {
  const container = document.getElementById("support-list");
  container.innerHTML = getSupportRecords().map((record) => renderRecordCard(record, true)).join("");
}

function renderVillageFacts() {
  const t = copy[state.lang];
  const legend = document.getElementById("tier-legend");
  const order = ["document", "community", "note", "interpretation"];

  legend.innerHTML = order
    .map(
      (tier) => `
        <div class="tier-card">
          <span class="tier-badge" data-tier="${tier}">${escapeHtml(t.tiers[tier].label)}</span>
          <p>${escapeHtml(t.tiers[tier].lead)}</p>
        </div>
      `
    )
    .join("");

  const groups = ["refusal", "provocation", "escalation"];
  document.getElementById("village-facts-list").innerHTML = groups
    .map((group) => {
      const info = t.village.groups[group];
      const items = villageFacts.filter((fact) => fact.group === group);
      return `
        <article class="fact-group">
          <div class="fact-group-head">
            <p class="fact-group-label">${escapeHtml(info.label)}</p>
            <h3>${escapeHtml(info.title)}</h3>
            <p>${escapeHtml(info.intro)}</p>
          </div>
          <div class="fact-list">
            ${items.map((item) => renderTieredStatement(item)).join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderPatterns() {
  const t = copy[state.lang];
  const container = document.getElementById("pattern-list");

  container.innerHTML = patterns
    .map((pattern) => {
      const content = t.patterns.groups[pattern.id];
      const expanded = state.openPatterns.has(pattern.id);
      return `
        <article class="pattern-block">
          <div class="pattern-copy">
            <p class="pattern-label">${escapeHtml(content.label)}</p>
            <h3>${escapeHtml(content.title)}</h3>
            <p>${escapeHtml(content.body1)}</p>
            <p>${escapeHtml(content.body2)}</p>
            <div class="pattern-bridge">
              <a href="#village-facts">${escapeHtml(t.patterns.links.facts)}</a>
              ${pattern.id === "refusal" || pattern.id === "outreach" || pattern.id === "escalation" ? `<a href="#interpretation">${escapeHtml(t.patterns.links.interpretation)}</a>` : ""}
            </div>
            <button type="button" class="pattern-toggle" data-pattern="${pattern.id}" aria-expanded="${expanded}">
              ${escapeHtml(expanded ? t.patterns.hideAll : t.patterns.viewAll)}
            </button>
          </div>
          <div class="pattern-preview" data-pattern="${pattern.id}">
            <div class="pattern-grid">
              ${pattern.preview.map(([recordId, imageIndex]) => renderPatternFigure(recordId, imageIndex)).join("")}
            </div>
            <div class="pattern-more" ${expanded ? "" : "hidden"}>
              ${pattern.more.map(([recordId, imageIndex]) => renderPatternFigure(recordId, imageIndex)).join("")}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderInterpretation() {
  document.getElementById("interpretation-list").innerHTML = interpretations
    .map((item) => renderTieredStatement(item, true))
    .join("");
}

function renderQuotes() {
  const t = copy[state.lang];
  document.getElementById("quote-list").innerHTML = t.verbal.quotes
    .map((quote) => `<blockquote>${escapeHtml(quote)}</blockquote>`)
    .join("");
}

function renderIncidents() {
  const t = copy[state.lang];
  document.getElementById("incidents-list").innerHTML = t.incidents.items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
}

function renderAsks() {
  const t = copy[state.lang];
  document.getElementById("asks-list").innerHTML = t.asks.items
    .map((item) => `<li><strong>${escapeHtml(item)}</strong></li>`)
    .join("");
}

function renderTieredStatement(item, interpretationMode = false) {
  const t = copy[state.lang];
  const tier = t.tiers[item.evidenceTier];
  const wrapperClass = interpretationMode ? "interpretation-panel" : "fact-item";
  const rowClass = interpretationMode ? "interpretation-tier-row" : "fact-tier-row";
  const copyClass = interpretationMode ? "interpretation-copy" : "fact-copy";

  return `
    <article class="${wrapperClass}">
      <div class="${rowClass}">
        <span class="tier-badge" data-tier="${item.evidenceTier}">${escapeHtml(tier.label)}</span>
        <span class="tier-lead">${escapeHtml(tier.lead)}</span>
      </div>
      <p class="${copyClass}">${escapeHtml(item.text[state.lang])}</p>
    </article>
  `;
}

function renderRecordCard(record, supportMode) {
  const t = copy[state.lang];
  const dateLabel = typeof record.dateLabel === "string" ? record.dateLabel : record.dateLabel[state.lang];
  const metaLabel = t.metaLabels[record.metaLabel] || t.metaLabels.source;
  const wrapperClass = supportMode ? "support-card timeline-panel" : "timeline-panel";
  const aside = supportMode ? "" : `<div class="timeline-node"><span>R${record.no}</span></div>`;
  const articleClass = supportMode ? "support-card-wrap" : "timeline-card";
  const inlineStyle = supportMode ? `style="--accent:${accentVar(record.primary)}"` : "";

  return `
    <article class="${articleClass}" ${supportMode ? inlineStyle : `data-type="${record.types.join(" ")}" data-primary="${record.primary}"`}>
      ${aside}
      <div class="${wrapperClass}">
        <div class="card-meta">
          <p class="card-date">${escapeHtml(dateLabel)}</p>
          <p class="card-source"><strong>${escapeHtml(metaLabel)}:</strong> ${escapeHtml(record.meta[state.lang])}</p>
        </div>
        <h3>R${record.no}. ${escapeHtml(record.title[state.lang])}</h3>
        <p class="card-summary">${escapeHtml(record.summary[state.lang])}</p>
        <ul class="tag-list">
          ${record.tags.map((tag) => renderTag(tag)).join("")}
        </ul>
        <div class="evidence-grid">
          ${record.images.map((image, index) => renderFigure(record, image, index)).join("")}
        </div>
      </div>
    </article>
  `;
}

function renderPatternFigure(recordId, imageIndex) {
  const record = getRecord(recordId);
  const image = record.images[imageIndex];
  return renderFigure(record, image, imageIndex);
}

function renderFigure(record, image, imageIndex) {
  const title = image.captionLabel ? image.captionLabel[state.lang] : record.title[state.lang];
  const caption = `R${record.no}. ${title}`;
  return `
    <figure class="evidence-card">
      <img class="evidence-thumb" src="${escapeAttribute(image.src)}" alt="${escapeAttribute(caption)}" loading="lazy">
      <figcaption>${escapeHtml(caption)}</figcaption>
    </figure>
  `;
}

function renderTag(tag) {
  const t = copy[state.lang];
  const label = t.tags[tag] || tag;
  const className = ["violence", "samaj", "police", "legal", "civic"].includes(tag) ? `tag-${tag}` : "tag-neutral";
  return `<li class="tag ${className}">${escapeHtml(label)}</li>`;
}

function getDatedRecords() {
  return records
    .filter((record) => record.sortDate)
    .slice()
    .sort((a, b) => (a.sortDate > b.sortDate ? 1 : -1));
}

function getSupportRecords() {
  return records
    .filter((record) => !record.sortDate)
    .slice()
    .sort((a, b) => a.no - b.no);
}

function getRecord(id) {
  return records.find((record) => record.id === id);
}

function matchesFilter(record) {
  return state.filter === "all" || record.types.includes(state.filter);
}

function accentVar(primary) {
  const map = {
    violence: "var(--violence)",
    samaj: "var(--samaj)",
    police: "var(--police)",
    legal: "var(--legal)",
    civic: "var(--civic)",
  };
  return map[primary] || "var(--neutral)";
}

function updateLanguageButtons() {
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });
}

function openLightbox(thumb) {
  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightbox-image");
  const caption = document.getElementById("lightbox-caption");
  image.src = thumb.currentSrc || thumb.src;
  image.alt = thumb.alt;
  caption.textContent = thumb.alt;
  lightbox.hidden = false;
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightbox-image");
  const caption = document.getElementById("lightbox-caption");
  lightbox.hidden = true;
  lightbox.setAttribute("aria-hidden", "true");
  image.removeAttribute("src");
  image.removeAttribute("alt");
  caption.textContent = "";
  document.body.style.overflow = "";
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = value;
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function setupScrollSpy() {
  const links = Array.from(document.querySelectorAll(".section-nav a[href^='#']"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const id = `#${entry.target.id}`;
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === id);
        });
      });
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
