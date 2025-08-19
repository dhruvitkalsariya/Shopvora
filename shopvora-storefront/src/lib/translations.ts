export type Language = 'en' | 'hi' | 'gu' | 'mr' | 'ta' | 'te'

export interface Translations {
  footer: {
    customerService: string
    about: string
    quickLinks: string
    payment: string
    helpCentre: string
    howToBuy: string
    paymentText: string
    shipping: string
    returnRefund: string
    warrantyPolicy: string
    contactUs: string
    aboutUs: string
    privacyPolicy: string
    sellerCentre: string
    shopMen: string
    shopWomen: string
    shopKids: string
    shopBeautyToys: string
    shopElectronics: string
    shopHomeFurniture: string
    copyright: string
  }
  common: {
    search: string
    cart: string
    account: string
    login: string
    register: string
    logout: string
    home: string
    store: string
    categories: string
    products: string
    checkout: string
    orders: string
    wishlist: string
    settings: string
    profile: string
    addresses: string
    billing: string
    shipping: string
    payment: string
    review: string
    confirm: string
    cancel: string
    save: string
    edit: string
    delete: string
    add: string
    remove: string
    clear: string
    apply: string
    filter: string
    sort: string
    view: string
    close: string
    back: string
    next: string
    previous: string
    submit: string
    loading: string
    error: string
    success: string
    warning: string
    info: string
  }
}

const translations: Record<Language, Translations> = {
  en: {
    footer: {
      customerService: "Customer Service",
      about: "About",
      quickLinks: "Quick Links",
      payment: "Payment",
      helpCentre: "Help Centre",
      howToBuy: "How To Buy",
      paymentText: "Payment",
      shipping: "Shipping",
      returnRefund: "Return & Refund",
      warrantyPolicy: "Warranty Policy",
      contactUs: "Contact Us",
      aboutUs: "About Us",
      privacyPolicy: "Privacy Policy",
      sellerCentre: "Seller Centre",
      shopMen: "Shop: Men",
      shopWomen: "Shop: Women",
      shopKids: "Shop: Kids",
      shopBeautyToys: "Shop: Beauty, Toys & More",
      shopElectronics: "Shop: Electronics",
      shopHomeFurniture: "Shop: Home & Furniture",
      copyright: "All rights reserved."
    },
    common: {
      search: "Search",
      cart: "Cart",
      account: "Account",
      login: "Login",
      register: "Register",
      logout: "Logout",
      home: "Home",
      store: "Store",
      categories: "Categories",
      products: "Products",
      checkout: "Checkout",
      orders: "Orders",
      wishlist: "Wishlist",
      settings: "Settings",
      profile: "Profile",
      addresses: "Addresses",
      billing: "Billing",
      shipping: "Shipping",
      payment: "Payment",
      review: "Review",
      confirm: "Confirm",
      cancel: "Cancel",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      add: "Add",
      remove: "Remove",
      clear: "Clear",
      apply: "Apply",
      filter: "Filter",
      sort: "Sort",
      view: "View",
      close: "Close",
      back: "Back",
      next: "Next",
      previous: "Previous",
      submit: "Submit",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      warning: "Warning",
      info: "Info"
    }
  },
  hi: {
    footer: {
      customerService: "ग्राहक सेवा",
      about: "हमारे बारे में",
      quickLinks: "त्वरित लिंक",
      payment: "भुगतान",
      helpCentre: "सहायता केंद्र",
      howToBuy: "कैसे खरीदें",
      paymentText: "भुगतान",
      shipping: "शिपिंग",
      returnRefund: "वापसी और धनवापसी",
      warrantyPolicy: "वारंटी नीति",
      contactUs: "संपर्क करें",
      aboutUs: "हमारे बारे में",
      privacyPolicy: "गोपनीयता नीति",
      sellerCentre: "विक्रेता केंद्र",
      shopMen: "दुकान: पुरुष",
      shopWomen: "दुकान: महिला",
      shopKids: "दुकान: बच्चे",
      shopBeautyToys: "दुकान: सौंदर्य, खिलौने और अधिक",
      shopElectronics: "दुकान: इलेक्ट्रॉनिक्स",
      shopHomeFurniture: "दुकान: घर और फर्नीचर",
      copyright: "सर्वाधिकार सुरक्षित।"
    },
    common: {
      search: "खोज",
      cart: "कार्ट",
      account: "खाता",
      login: "लॉगिन",
      register: "पंजीकरण",
      logout: "लॉगआउट",
      home: "होम",
      store: "स्टोर",
      categories: "श्रेणियां",
      products: "उत्पाद",
      checkout: "चेकआउट",
      orders: "ऑर्डर",
      wishlist: "इच्छा सूची",
      settings: "सेटिंग्स",
      profile: "प्रोफ़ाइल",
      addresses: "पते",
      billing: "बिलिंग",
      shipping: "शिपिंग",
      payment: "भुगतान",
      review: "समीक्षा",
      confirm: "पुष्टि करें",
      cancel: "रद्द करें",
      save: "सहेजें",
      edit: "संपादित करें",
      delete: "हटाएं",
      add: "जोड़ें",
      remove: "हटाएं",
      clear: "साफ़ करें",
      apply: "लागू करें",
      filter: "फ़िल्टर",
      sort: "क्रमबद्ध करें",
      view: "देखें",
      close: "बंद करें",
      back: "वापस",
      next: "अगला",
      previous: "पिछला",
      submit: "सबमिट करें",
      loading: "लोड हो रहा है...",
      error: "त्रुटि",
      success: "सफलता",
      warning: "चेतावनी",
      info: "जानकारी"
    }
  },
  gu: {
    footer: {
      customerService: "ગ્રાહક સેવા",
      about: "અમારા વિશે",
      quickLinks: "ઝડપી લિંક્સ",
      payment: "ચુકવણી",
      helpCentre: "સહાય કેન્દ્ર",
      howToBuy: "કેવી રીતે ખરીદવું",
      paymentText: "ચુકવણી",
      shipping: "શિપિંગ",
      returnRefund: "રિટર્ન અને રિફંડ",
      warrantyPolicy: "વોરંટી પોલિસી",
      contactUs: "અમારો સંપર્ક કરો",
      aboutUs: "અમારા વિશે",
      privacyPolicy: "ગોપનીયતા નીતિ",
      sellerCentre: "વેચનાર કેન્દ્ર",
      shopMen: "દુકાન: પુરુષો",
      shopWomen: "દુકાન: સ્ત્રીઓ",
      shopKids: "દુકાન: બાળકો",
      shopBeautyToys: "દુકાન: સૌંદર્ય, રમકડાં અને વધુ",
      shopElectronics: "દુકાન: ઇલેક્ટ્રોનિક્સ",
      shopHomeFurniture: "દુકાન: ઘર અને ફર્નિચર",
      copyright: "બધા અધિકારો સુરક્ષિત."
    },
    common: {
      search: "શોધ",
      cart: "કાર્ટ",
      account: "એકાઉન્ટ",
      login: "લૉગિન",
      register: "રજિસ્ટર",
      logout: "લૉગઆઉટ",
      home: "હોમ",
      store: "સ્ટોર",
      categories: "શ્રેણીઓ",
      products: "ઉત્પાદનો",
      checkout: "ચેકઆઉટ",
      orders: "ઓર્ડર",
      wishlist: "ઇચ્છા સૂચિ",
      settings: "સેટિંગ્સ",
      profile: "પ્રોફાઇલ",
      addresses: "સરનામાં",
      billing: "બિલિંગ",
      shipping: "શિપિંગ",
      payment: "ચુકવણી",
      review: "સમીક્ષા",
      confirm: "પુષ્ટિ કરો",
      cancel: "રદ કરો",
      save: "સાચવો",
      edit: "સંપાદિત કરો",
      delete: "કાઢી નાખો",
      add: "ઉમેરો",
      remove: "દૂર કરો",
      clear: "સાફ કરો",
      apply: "લાગુ કરો",
      filter: "ફિલ્ટર",
      sort: "ક્રમમાં ગોઠવો",
      view: "જુઓ",
      close: "બંધ કરો",
      back: "પાછળ",
      next: "આગળ",
      previous: "પહેલા",
      submit: "સબમિટ કરો",
      loading: "લોડ થઈ રહ્યું છે...",
      error: "ભૂલ",
      success: "સફળતા",
      warning: "ચેતવણી",
      info: "માહિતી"
    }
  },
  mr: {
    footer: {
      customerService: "ग्राहक सेवा",
      about: "आमच्याबद्दल",
      quickLinks: "त्वरित दुवे",
      payment: "पेमेंट",
      helpCentre: "मदत केंद्र",
      howToBuy: "कसे खरेदी करावी",
      paymentText: "पेमेंट",
      shipping: "शिपिंग",
      returnRefund: "परतावा आणि रिफंड",
      warrantyPolicy: "वॉरंटी धोरण",
      contactUs: "आमच्याशी संपर्क साधा",
      aboutUs: "आमच्याबद्दल",
      privacyPolicy: "गोपनीयता धोरण",
      sellerCentre: "विक्रेता केंद्र",
      shopMen: "दुकान: पुरुष",
      shopWomen: "दुकान: महिला",
      shopKids: "दुकान: मुले",
      shopBeautyToys: "दुकान: सौंदर्य, खेळणी आणि अधिक",
      shopElectronics: "दुकान: इलेक्ट्रॉनिक्स",
      shopHomeFurniture: "दुकान: घर आणि फर्निचर",
      copyright: "सर्व हक्क राखीव."
    },
    common: {
      search: "शोध",
      cart: "कार्ट",
      account: "खाते",
      login: "लॉगिन",
      register: "नोंदणी",
      logout: "लॉगआउट",
      home: "मुख्यपृष्ठ",
      store: "स्टोअर",
      categories: "श्रेणी",
      products: "उत्पादने",
      checkout: "चेकआउट",
      orders: "ऑर्डर",
      wishlist: "इच्छा यादी",
      settings: "सेटिंग्ज",
      profile: "प्रोफाइल",
      addresses: "पत्ते",
      billing: "बिलिंग",
      shipping: "शिपिंग",
      payment: "पेमेंट",
      review: "पुनरावलोकन",
      confirm: "पुष्टी करा",
      cancel: "रद्द करा",
      save: "जतन करा",
      edit: "संपादित करा",
      delete: "काढून टाका",
      add: "जोडा",
      remove: "काढा",
      clear: "साफ करा",
      apply: "लागू करा",
      filter: "फिल्टर",
      sort: "क्रमवारी",
      view: "पहा",
      close: "बंद करा",
      back: "मागे",
      next: "पुढे",
      previous: "मागील",
      submit: "सबमिट करा",
      loading: "लोड होत आहे...",
      error: "त्रुटी",
      success: "यशस्वी",
      warning: "सावधानता",
      info: "माहिती"
    }
  },
  ta: {
    footer: {
      customerService: "வாடிக்கையாளர் சேவை",
      about: "எங்களைப் பற்றி",
      quickLinks: "விரைவு இணைப்புகள்",
      payment: "கட்டணம்",
      helpCentre: "உதவி மையம்",
      howToBuy: "எப்படி வாங்குவது",
      paymentText: "கட்டணம்",
      shipping: "கப்பல்",
      returnRefund: "திரும்பப்பெறுதல் மற்றும் பணத்திருப்பம்",
      warrantyPolicy: "உத்தரவாதக் கொள்கை",
      contactUs: "எங்களை தொடர்பு கொள்ள",
      aboutUs: "எங்களைப் பற்றி",
      privacyPolicy: "தனியுரிமைக் கொள்கை",
      sellerCentre: "விற்பனையாளர் மையம்",
      shopMen: "கடை: ஆண்கள்",
      shopWomen: "கடை: பெண்கள்",
      shopKids: "கடை: குழந்தைகள்",
      shopBeautyToys: "கடை: அழகு, பொம்மைகள் மற்றும் மேலும்",
      shopElectronics: "கடை: மின்னணு",
      shopHomeFurniture: "கடை: வீடு மற்றும் தளபாடங்கள்",
      copyright: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    },
    common: {
      search: "தேடு",
      cart: "கார்ட்",
      account: "கணக்கு",
      login: "உள்நுழைவு",
      register: "பதிவு",
      logout: "வெளியேறு",
      home: "முகப்பு",
      store: "கடை",
      categories: "வகைகள்",
      products: "தயாரிப்புகள்",
      checkout: "செக் அவுட்",
      orders: "ஆர்டர்கள்",
      wishlist: "விருப்பப்பட்டியல்",
      settings: "அமைப்புகள்",
      profile: "சுயவிவரம்",
      addresses: "முகவரிகள்",
      billing: "பில் செய்தல்",
      shipping: "கப்பல்",
      payment: "கட்டணம்",
      review: "மதிப்பாய்வு",
      confirm: "உறுதிப்படுத்து",
      cancel: "ரத்து செய்",
      save: "சேமி",
      edit: "திருத்து",
      delete: "அழி",
      add: "சேர்",
      remove: "நீக்கு",
      clear: "அழி",
      apply: "பயன்படுத்து",
      filter: "வடிப்பான்",
      sort: "வரிசைப்படுத்து",
      view: "காண்க",
      close: "மூடு",
      back: "பின்செல்",
      next: "அடுத்து",
      previous: "முந்தைய",
      submit: "சமர்ப்பி",
      loading: "ஏற்றுகிறது...",
      error: "பிழை",
      success: "வெற்றி",
      warning: "எச்சரிக்கை",
      info: "தகவல்"
    }
  },
  te: {
    footer: {
      customerService: "కస్టమర్ సేవ",
      about: "మా గురించి",
      quickLinks: "త్వరిత లింక్‌లు",
      payment: "చెల్లింపు",
      helpCentre: "సహాయ కేంద్రం",
      howToBuy: "ఎలా కొనాలి",
      paymentText: "చెల్లింపు",
      shipping: "షిప్పింగ్",
      returnRefund: "రిటర్న్ మరియు రీఫండ్",
      warrantyPolicy: "వారంటీ విధానం",
      contactUs: "మమ్మల్ని సంప్రదించండి",
      aboutUs: "మా గురించి",
      privacyPolicy: "గోప్యతా విధానం",
      sellerCentre: "విక్రేత కేంద్రం",
      shopMen: "షాప్: పురుషులు",
      shopWomen: "షాప్: మహిళలు",
      shopKids: "షాప్: పిల్లలు",
      shopBeautyToys: "షాప్: అందం, బొమ్మలు మరియు మరిన్ని",
      shopElectronics: "షాప్: ఎలక్ట్రానిక్స్",
      shopHomeFurniture: "షాప్: ఇల్లు మరియు ఫర్నిచర్",
      copyright: "అన్ని హక్కులు రక్షించబడ్డాయి."
    },
    common: {
      search: "వెతుకు",
      cart: "కార్ట్",
      account: "ఖాతా",
      login: "లాగిన్",
      register: "నమోదు",
      logout: "లాగ్అవుట్",
      home: "హోమ్",
      store: "స్టోర్",
      categories: "వర్గాలు",
      products: "ఉత్పత్తులు",
      checkout: "చెక్అవుట్",
      orders: "ఆర్డర్లు",
      wishlist: "కోరికల జాబితా",
      settings: "సెట్టింగ్‌లు",
      profile: "ప్రొఫైల్",
      addresses: "చిరునామాలు",
      billing: "బిల్లింగ్",
      shipping: "షిప్పింగ్",
      payment: "చెల్లింపు",
      review: "సమీక్ష",
      confirm: "నిర్ధారించండి",
      cancel: "రద్దు",
      save: "సేవ్",
      edit: "ఎడిట్",
      delete: "తొలగించు",
      add: "జోడించు",
      remove: "తొలగించు",
      clear: "క్లియర్",
      apply: "వర్తించు",
      filter: "ఫిల్టర్",
      sort: "క్రమబద్ధం",
      view: "చూడండి",
      close: "మూసివేయి",
      back: "వెనుకకు",
      next: "తదుపరి",
      previous: "మునుపటి",
      submit: "సమర్పించండి",
      loading: "లోడ్ అవుతోంది...",
      error: "లోపం",
      success: "విజయం",
      warning: "హెచ్చరిక",
      info: "సమాచారం"
    }
  }
}

export const getTranslation = (language: Language): Translations => {
  return translations[language] || translations.en
}

export const getLanguageName = (code: Language): string => {
  const languageNames: Record<Language, string> = {
    en: "English",
    hi: "Hindi",
    gu: "Gujarati", 
    mr: "Marathi",
    ta: "Tamil",
    te: "Telugu"
  }
  return languageNames[code] || "English"
}

export const getLanguageCode = (name: string): Language => {
  const languageCodes: Record<string, Language> = {
    "English": "en",
    "Hindi": "hi", 
    "Gujarati": "gu",
    "Marathi": "mr",
    "Tamil": "ta",
    "Telugu": "te"
  }
  return languageCodes[name] || "en"
} 