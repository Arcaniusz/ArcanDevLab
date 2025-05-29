// Company logos data
const companyLogos = [
  { name: "MatixHol", logo: "assets/matix-logo.svg", url: "https://matixhol.nl" },
  { name: "MatixHol", logo: "assets/matix-logo.svg", url: "https://matixhol.nl" },
  { name: "MatixHol", logo: "assets/matix-logo.svg", url: "https://matixhol.nl" },
  { name: "MatixHol", logo: "assets/matix-logo.svg", url: "https://matixhol.nl" },
  { name: "MatixHol", logo: "assets/matix-logo.svg", url: "https://matixhol.nl" },
  { name: "MatixHol", logo: "assets/matix-logo.svg", url: "https://matixhol.nl" },
  { name: "MatixHol", logo: "assets/matix-logo.svg", url: "https://matixhol.nl" },
  { name: "MatixHol", logo: "assets/matix-logo.svg", url: "https://matixhol.nl" },
  { name: "MatixHol", logo: "assets/matix-logo.svg", url: "https://matixhol.nl" },
];

// UI Styles data
const uiStyles = [
  {
    title: "Corporate Professional",
    description: "Clean, professional design perfect for business and corporate websites",
    image: "https://pixabay.com/get/g30b5c97bf2fd4a843de6e4f9d26bdff8a70298bac86b0675b82720cb984e2f93829526539578a9f47ce002a54913278d68e407c2b83fb58e5604f69412f5d0b3_1280.png",
    style: "corporate",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    accent: "text-blue-600",
    features: ["Professional Layout", "Trust Elements", "Clear Navigation", "Business-focused"]
  },
  {
    title: "Modern SaaS",
    description: "Contemporary design for software and technology companies",
    image: "https://pixabay.com/get/gc516babc20ace14d9ccf042ac30b9683fb81d76c6afe8f5ed68c1538c5154474d8ca3e19a7d27f1de9b821474d9b43126fe8a2c7ae260ff8c26dba0691980100_1280.jpg",
    style: "saas",
    backgroundColor: "bg-gray-50",
    textColor: "text-gray-900",
    accent: "text-indigo-600",
    features: ["Clean Interface", "Feature Showcase", "Pricing Tables", "Call-to-Action Focus"]
  },
  {
    title: "E-commerce Store",
    description: "Optimized design for online stores and product showcases",
    image: "https://pixabay.com/get/ga2c909d2a0cf3cc213913840e07304735cde760cef00abd31768130155ecbe56bb3ca42d7a31aa6fbd21b6a8c56dc1268b09a6ebf013a68f09c9b5f3c34fa440_1280.jpg",
    style: "ecommerce",
    backgroundColor: "bg-orange-50",
    textColor: "text-gray-900",
    accent: "text-orange-600",
    features: ["Product Grid", "Shopping Cart", "Reviews Section", "Checkout Flow"]
  },
  {
    title: "Creative Portfolio",
    description: "Artistic and creative design for portfolios and creative agencies",
    image: "https://pixabay.com/get/gde59f3987ae14e663f0084ad3928a24b63d71984ed0996b0ea759152025b5bc479ecc62829732d341cd60270d6facaa658fbde72b048c53e1b81c63f7fbcdd64_1280.jpg",
    style: "creative",
    backgroundColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    textColor: "text-gray-900",
    accent: "text-purple-600",
    features: ["Visual Gallery", "Creative Layouts", "Artistic Elements", "Bold Typography"]
  },
  {
    title: "Dark Professional",
    description: "Elegant dark theme for modern professionals and tech companies",
    image: "https://pixabay.com/get/gbed5424bbaf419856a65c9b9251458c46410c663015d8b744f617e5357a8305ebebe983fbad7cf09253e872a749b7ca617293e4d6222e6060f563d9fb3f82a41_1280.jpg",
    style: "dark",
    backgroundColor: "bg-gray-900",
    textColor: "text-white",
    accent: "text-blue-400",
    features: ["Dark Theme", "Premium Feel", "Subtle Animations", "Modern Typography"]
  },
  {
    title: "Medical & Healthcare",
    description: "Professional and trustworthy design for healthcare websites",
    image: "https://pixabay.com/get/ge84a358d723a937e2e3858146b67c80513ad53fc03e989593ec3c0add9eabd41bcc7dafe21fb953e4260ab24dd95d949a3a82febee0bdcebd01b8fd3a7fe19a1_1280.jpg",
    style: "medical",
    backgroundColor: "bg-blue-50",
    textColor: "text-gray-900",
    accent: "text-blue-700",
    features: ["Clean Design", "Trust Indicators", "Appointment System", "Medical Forms"]
  },
  {
    title: "Restaurant & Food",
    description: "Appetizing design perfect for restaurants and food businesses",
    image: "https://pixabay.com/get/g0c3f6faa7e226dbcb5bbf7300f6e85c5a122c6361f44fa447411c0828382e74b10234063898ff31f7ac532a258d14f2e54712ab64e5c42e02bf694dd8bb501b4_1280.jpg",
    style: "restaurant",
    backgroundColor: "bg-amber-50",
    textColor: "text-gray-900",
    accent: "text-amber-700",
    features: ["Menu Display", "Photo Gallery", "Reservation System", "Location Info"]
  },
  {
    title: "Agency & Consulting",
    description: "Professional design for agencies and consulting firms",
    image: "https://pixabay.com/get/ge5fb6a46908625376a22655eec354369a5e73db5b43bfa32c1b21b236998034ba82eedae6080988f9fd30ba399dd268e687aa060530b7d279487f29707f9f428_1280.jpg",
    style: "agency",
    backgroundColor: "bg-slate-50",
    textColor: "text-gray-900",
    accent: "text-slate-700",
    features: ["Team Showcase", "Case Studies", "Service Pages", "Client Testimonials"]
  }
];

// FAQ data
const faqData = [
  { questionKey: "faq_question_1", answerKey: "faq_answer_1" },
  { questionKey: "faq_question_2", answerKey: "faq_answer_2" },
  { questionKey: "faq_question_3", answerKey: "faq_answer_3" },
  { questionKey: "faq_question_4", answerKey: "faq_answer_4" },
  { questionKey: "faq_question_5", answerKey: "faq_answer_5" },
  { questionKey: "faq_question_6", answerKey: "faq_answer_6" },
  { questionKey: "faq_question_7", answerKey: "faq_answer_7" },
  { questionKey: "faq_question_8", answerKey: "faq_answer_8" },
  { questionKey: "faq_question_9", answerKey: "faq_answer_9" },
  { questionKey: "faq_question_10", answerKey: "faq_answer_10" },
  { questionKey: "faq_question_11", answerKey: "faq_answer_11" },
  { questionKey: "faq_question_12", answerKey: "faq_answer_12" },
];
