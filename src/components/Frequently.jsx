import React, { useState } from "react";

const faqData = {
  All: [
    {
      question: "अपने विद्यालय का संक्षिप्त विवरण लिखिए।",
      answer:
        "[बाबा बी.के स्कूल] एक प्रतिष्ठित शैक्षणिक संस्थान है जो प्राथमिक (कक्षा 1) से इंटरमीडिएट (कक्षा 12) तक गुणवत्तापूर्ण शिक्षा प्रदान करता है। हमारा उद्देश्य एक ऐसा समग्र शैक्षिक वातावरण प्रदान करना है जो अकादमिक उत्कृष्टता, नैतिक मूल्यों, अनुशासन और छात्रों के सर्वांगीण विकास को बढ़ावा दे।",
    },
    {
      question: "अपने विद्यालय का प्राथमिक से इंटरमीडिएट स्तर तक संक्षिप्त विवरण दीजिए।",
      answer:
        "[बाबा बी.के स्कूल] एक प्रसिद्ध शैक्षणिक संस्थान है जो प्राथमिक (कक्षा 1) से इंटरमीडिएट (कक्षा 12) तक समग्र शिक्षा प्रदान करता है। विद्यालय अकादमिक उत्कृष्टता, चरित्र निर्माण और छात्रों के सर्वांगीण विकास के प्रति प्रतिबद्ध है। अनुभवी शिक्षकों, आधुनिक कक्षाओं, समृद्ध पुस्तकालय, कंप्यूटर और विज्ञान प्रयोगशालाओं तथा विभिन्न सह-पाठ्यक्रम गतिविधियों के साथ, यह एक संतुलित शैक्षणिक वातावरण प्रदान करता है। यहाँ न केवल पढ़ाई पर बल दिया जाता है, बल्कि अनुशासन, रचनात्मकता, नेतृत्व और सामाजिक जिम्मेदारी को भी विकसित किया जाता है। नियमित कार्यशालाएँ, खेलकूद और सांस्कृतिक कार्यक्रम छात्रों के समग्र विकास में सहायक होते हैं। विद्यालय का उद्देश्य आत्मविश्वासी, सक्षम और जिम्मेदार नागरिक तैयार करना है।",
    },
    {
      question: "अपने विद्यालय का 100–150 शब्दों में विवरण दीजिए।",
      answer:
        "[बाबा बी.के स्कूल] एक प्रमुख शैक्षणिक संस्थान है जो प्राथमिक (कक्षा 1) से इंटरमीडिएट (कक्षा 12) तक गुणवत्तापूर्ण शिक्षा प्रदान करने के लिए समर्पित है। हमारा मिशन एक ऐसा पोषणकारी और प्रेरक वातावरण बनाना है जो अकादमिक उत्कृष्टता, चरित्र निर्माण और समग्र विकास को बढ़ावा देता है। अनुभवी शिक्षकों की टीम द्वारा हम ऐसा पाठ्यक्रम प्रदान करते हैं जो केवल अकादमिक उपलब्धि पर ही नहीं बल्कि जीवन कौशल, रचनात्मकता और नेतृत्व विकास पर भी ध्यान केंद्रित करता है। हमारे अत्याधुनिक संसाधनों में आधुनिक कक्षाएँ, उन्नत प्रयोगशालाएँ, समृद्ध पुस्तकालय और सह-पाठ्यक्रम गतिविधियों के व्यापक अवसर शामिल हैं। हम अपने छात्रों में अनुशासन, सम्मान और सामाजिक जिम्मेदारी जैसे मूल्यों को विकसित करने में विश्वास रखते हैं। कार्यशालाओं, खेल प्रतियोगिताओं और सांस्कृतिक कार्यक्रमों के माध्यम से हम उन्हें भविष्य की चुनौतियों का सामना करने के लिए तैयार करते हैं।",
    },
    {
      question: "अपने विद्यालय की मुख्य विशेषताओं को उजागर करते हुए एक अनुच्छेद लिखिए।",
      answer:
        "[बाबा बी.के स्कूल] एक प्रतिष्ठित संस्थान है जो गुणवत्तापूर्ण शिक्षा के साथ-साथ मूल्यों और अनुशासन की मजबूत नींव प्रदान करने पर केंद्रित है। विद्यालय में स्मार्ट कक्षाएँ, सुव्यवस्थित प्रयोगशालाएँ, समृद्ध पुस्तकालय और विशाल खेल मैदान उपलब्ध हैं, जो शैक्षणिक और सह-पाठ्यक्रम गतिविधियों का संतुलन सुनिश्चित करते हैं। हमारे समर्पित और योग्य शिक्षक छात्रों में जिज्ञासा और रचनात्मकता को प्रोत्साहित करते हैं। नियमित सांस्कृतिक कार्यक्रम, खेलकूद प्रतियोगिताएँ और कार्यशालाएँ छात्रों के सर्वांगीण विकास में सहायक हैं। विद्यालय डिजिटल लर्निंग और व्यक्तित्व विकास पर भी विशेष ध्यान देता है, जिससे यहाँ के छात्र न केवल परीक्षाओं के लिए बल्कि जीवन के लिए भी तैयार होते हैं।",
    },
  ],
  General: [
    {
      question: "आपके विद्यालय की विशेषताएँ क्या हैं?",
      answer:
        "बाबा बी.के स्कूल अपनी व्यापक शिक्षा प्रणाली के लिए जाना जाता है जो केवल अकादमिक ज्ञान तक सीमित नहीं है। विद्यालय की प्रमुख विशेषताओं में कक्षाओं में आधुनिक तकनीक का समावेश शामिल है, जिससे अध्ययन अधिक रोचक और इंटरैक्टिव बनता है। हमारे पास अत्याधुनिक विज्ञान और कंप्यूटर प्रयोगशालाएँ हैं, जो छात्रों को व्यावहारिक अनुभव प्रदान करती हैं। इसके अतिरिक्त, पुस्तकालय में अकादमिक और मनोरंजन की पुस्तकों का बड़ा संग्रह है, जिससे पठन-पाठन की आदत को बढ़ावा मिलता है।",
    },
  ],
  "Pricing & Licenses": [
    {
      question: "आपके विद्यालय में छात्रों के लिए कौन-कौन सी सुविधाएँ उपलब्ध हैं?",
      answer:
        "[बाबा बी.के स्कूल] छात्रों को एक समग्र शैक्षणिक अनुभव देने के लिए अनेक आधुनिक सुविधाएँ प्रदान करता है। विद्यालय में स्मार्ट कक्षाएँ हैं जो तकनीक के माध्यम से अध्ययन को अधिक प्रभावी और रोचक बनाती हैं। विज्ञान और कंप्यूटर प्रयोगशालाएँ व्यावहारिक शिक्षा को बढ़ावा देती हैं। हमारा पुस्तकालय अनेक पुस्तकों, पत्रिकाओं और ऑनलाइन संसाधनों से समृद्ध है। खेलकूद के लिए फुटबॉल, बास्केटबॉल, क्रिकेट आदि के लिए विस्तृत मैदान उपलब्ध हैं। कला और संगीत कक्षाएँ भी उपलब्ध हैं जहाँ छात्र अपनी रचनात्मकता को अभिव्यक्त कर सकते हैं। इसके अलावा, विद्यालय परिवहन सुविधा और नियमित स्वास्थ्य जांच की सेवाएँ भी प्रदान करता है, ताकि छात्रों का संपूर्ण विकास सुनिश्चित किया जा सके। हम शैक्षणिक उत्कृष्टता के साथ-साथ भावनात्मक और शारीरिक विकास पर भी ध्यान केंद्रित करते हैं।",
    },
    {
      question: "आपके विद्यालय का समग्र वातावरण कैसा है?",
      answer:
        "[बाबा बी.के स्कूल] का समग्र वातावरण गर्मजोशी, प्रोत्साहन और बौद्धिक उत्तेजना से भरपूर है। यहाँ छात्रों को सम्मानित और प्रेरित महसूस कराया जाता है ताकि वे अपना सर्वोत्तम प्रदर्शन कर सकें। विद्यालय छात्रों और शिक्षकों के बीच आपसी सम्मान की संस्कृति को बढ़ावा देता है, जिससे हर छात्र के अकादमिक और व्यक्तिगत विकास को सहयोग मिलता है।",
    },
  ],
  "Support & Updates": [
    {
      question: "क्या भविष्य में अपडेट्स का लाभ मिलेगा?",
      answer:
        "यहाँ का शैक्षणिक वातावरण भी बहुत पोषणकारी है, जिसमें योग्य और समर्पित शिक्षक छात्रों को न केवल पढ़ाई में बल्कि जीवन कौशल के निर्माण में भी मार्गदर्शन करते हैं। खेलकूद, कला और सांस्कृतिक गतिविधियाँ अकादमिक शिक्षा के साथ-साथ रचनात्मकता, टीमवर्क और नेतृत्व कौशल को भी विकसित करती हैं।",
    },
    {
      question: "आपके विद्यालय में किस प्रकार का शिक्षण वातावरण प्रदान किया जाता है?",
      answer:
        "हाँ, 6 महीने तक नि:शुल्क सहायता प्रदान की जाती है।",
    },
  ],
};

const Frequently = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-2">अक्सर पूछे जाने वाले प्रश्न <div className="w-full flex justify-start mb-6">
        <svg className="w-32 h-6 text-red-500" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path d="M0,10 C25,20 75,0 100,10" fill="none" stroke="currentColor" stroke-width="2" />
        </svg>
      </div></h2>
      <p className="text-gray-600 mb-6">
        बाबा बी.के स्कूल से जुड़े सामान्य प्रश्नों के उत्तर।
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {Object.keys(faqData).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full border ${selectedTab === tab
                ? "bg-[#54BD95] text-white"
                : "bg-white text-black"
              }`}
            onClick={() => {
              setSelectedTab(tab);
              setOpenIndex(null);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Questions & Answers */}
      <div className="space-y-4">
        {faqData[selectedTab].map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-blue-50 px-6 py-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{item.question}</h4>
                <span className="text-xl font-bold">{isOpen ? "-" : "+"}</span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 transform ${isOpen ? "translate-x-0 opacity-100 max-h-[1000px]" : "-translate-x-full opacity-0 max-h-0"
                  }`}
              >
                <p className="text-gray-700 mt-2">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Frequently;
