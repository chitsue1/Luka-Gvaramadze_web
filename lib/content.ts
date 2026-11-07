// All site copy lives here. Edit text in one place; both languages stay in sync.

export type Lang = "en" | "ka";

export const CONTACT = {
  email: "lgvaramadze3@gmail.com",
  github: "https://github.com/chitsue1",
  linkedin: "https://www.linkedin.com/in/luka-gvaramadze-65bbb63a0/",
  formspree: "https://formspree.io/f/mzdpnblr",
};

type Link = { label: string; href: string };

export type Project = {
  id: string;
  name: string;
  year: string;
  kind: string;
  summary: string;
  built: string[];
  learned: string;
  stack: string[];
  links: Link[];
};

type Copy = {
  nav: { work: string; about: string; contact: string; switchTo: string };
  hero: { nameNative: string; nameLatin: string; statement: string; status: string; ctaWork: string; ctaContact: string };
  work: { title: string; intro: string; built: string; learned: string; stack: string };
  projects: Project[];
  lab: { title: string; items: { name: string; note: string; href?: string }[] };
  about: { title: string; paragraphs: string[]; howTitle: string; how: { title: string; body: string }[] };
  stack: { title: string; groups: { name: string; items: string }[] };
  education: { title: string; items: { name: string; detail: string }[]; languagesTitle: string; languages: string };
  contact: { title: string; body: string; name: string; email: string; message: string; send: string; sending: string; sent: string; error: string };
  footer: string;
};

const projectsEn: Project[] = [
  {
    id: "compas",
    name: "compas.ge",
    year: "2026",
    kind: "AI real-estate platform",
    summary:
      "A property marketplace for Georgia, built to compete with ss.ge and myhome.ge by doing the tedious parts of a listing with AI.",
    built: [
      "Full stack on my own: Next.js 14 frontend, Node.js/Express API, PostgreSQL with Prisma, media on Cloudflare R2.",
      "AI that writes listing descriptions, picks the best cover photo and tags each property automatically.",
      "“Kompasi”, a Georgian-language chatbot that uses Claude tool-use to query the live listings database instead of guessing answers.",
      "Deployed the API on Railway and the frontend on Vercel.",
    ],
    learned:
      "How to give a language model real tools and real data, and how to keep secrets out of a repository for good.",
    stack: ["Next.js 14", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Cloudflare R2", "Claude API", "Railway", "Vercel"],
    links: [{ label: "Visit compas.ge", href: "https://compas.ge" }],
  },
  {
    id: "tradeally",
    name: "TradeAlly",
    year: "2026",
    kind: "AI trading-signal bot",
    summary:
      "A Telegram bot that watches 140 cryptocurrencies and sends Georgian-language trade signals with AI risk checks, sold as a monthly subscription.",
    built: [
      "Market scanner across 140 assets in 12 themed categories, with scalping entry timing and stop-loss logic.",
      "Claude Sonnet reviews every signal for risk; each message includes position sizing based on the 2% rule.",
      "A /backtest command, signal result tracking and automatic win/loss labelling.",
      "Moved subscriptions from a JSON file to a database so nothing is lost on redeploy.",
    ],
    learned:
      "Production debugging: tracing a silent outage to a Python 3.13 dependency conflict and pinning the runtime to fix it.",
    stack: ["Python", "python-telegram-bot", "Claude API", "PostgreSQL", "Railway"],
    links: [],
  },
  {
    id: "vaka",
    name: "vaka.ge",
    year: "2026",
    kind: "AI job board",
    summary:
      "A Georgian job board where AI screens CVs against each vacancy and a smart feed shows candidates the roles that fit them.",
    built: [
      "AI CV screening that ranks applicants for employers.",
      "A personalised job feed for candidates.",
      "Built together with a non-technical co-founder who runs sales and outreach.",
    ],
    learned: "Working with a business partner: turning sales feedback into product decisions quickly.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "LLM API"],
    links: [{ label: "Visit vaka.ge", href: "https://vaka.ge" }],
  },
  {
    id: "kolkheti",
    name: "Kolkheti National Park",
    year: "2025",
    kind: "Website",
    summary: "An informational website for Kolkheti National Park on the Black Sea coast, published on GitHub Pages.",
    built: ["Responsive layout and content structure for visitors planning a trip."],
    learned: "Designing for content first and shipping a static site end to end.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    links: [{ label: "View the site", href: "https://chitsue1.github.io/Kolkheti-Web/" }],
  },
  {
    id: "bassiani",
    name: "Bassiani, reimagined",
    year: "2025",
    kind: "Unofficial concept redesign",
    summary: "A dark, immersive concept site for Tbilisi’s best-known club. A design exercise, not a commissioned project.",
    built: ["Full-screen, atmosphere-first layout with motion used to set the mood."],
    learned: "How far typography and pacing alone can carry a brand.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: [],
  },
];

const projectsKa: Project[] = [
  {
    id: "compas",
    name: "compas.ge",
    year: "2026",
    kind: "AI უძრავი ქონების პლატფორმა",
    summary:
      "უძრავი ქონების პლატფორმა საქართველოსთვის, რომელიც ss.ge-ს და myhome.ge-ს ეჯიბრება: განცხადების დამღლელ ნაწილს AI აკეთებს.",
    built: [
      "მთლიანი სისტემა ავაწყვე მარტომ: Next.js 14 ფრონტენდი, Node.js/Express API, PostgreSQL და Prisma, მედია Cloudflare R2-ზე.",
      "AI წერს განცხადების აღწერას, არჩევს საუკეთესო ქავერ ფოტოს და ავტომატურად ანიჭებს ტეგებს.",
      "„კომპასი“: ქართულენოვანი ჩატბოტი, რომელიც Claude-ის tool-use-ით პირდაპირ ეკითხება განცხადებების ბაზას და პასუხს არ იგონებს.",
      "API გაშვებულია Railway-ზე, ფრონტენდი კი Vercel-ზე.",
    ],
    learned: "როგორ მივცე ენობრივ მოდელს რეალური ინსტრუმენტები და მონაცემები, და როგორ დავიცვა საიდუმლო გასაღებები რეპოზიტორიიდან.",
    stack: projectsEn[0].stack,
    links: [{ label: "compas.ge-ზე გადასვლა", href: "https://compas.ge" }],
  },
  {
    id: "tradeally",
    name: "TradeAlly",
    year: "2026",
    kind: "AI სავაჭრო სიგნალების ბოტი",
    summary:
      "Telegram ბოტი, რომელიც 140 კრიპტოვალუტას აკვირდება და ქართულ ენაზე აგზავნის სიგნალებს AI-ის მიერ შეფასებული რისკით. ხელმისაწვდომია ყოველთვიური გამოწერით.",
    built: [
      "ბაზრის სკანერი 140 აქტივზე 12 თემატურ კატეგორიაში, სკალპინგის შესვლის დროით და stop-loss ლოგიკით.",
      "Claude Sonnet თითოეულ სიგნალს რისკზე ამოწმებს. ყველა შეტყობინებაში მოცემულია პოზიციის ზომა 2%-იანი წესის მიხედვით.",
      "/backtest ბრძანება, სიგნალების შედეგების აღრიცხვა და მოგება/წაგების ავტომატური მონიშვნა.",
      "გამოწერები JSON ფაილიდან მონაცემთა ბაზაში გადავიტანე, რომ ხელახალი გაშვებისას არაფერი დაიკარგოს.",
    ],
    learned: "პროდაქშენში დებაგი: უხმო გათიშვის მიზეზად Python 3.13-ის დამოკიდებულებების კონფლიქტი აღმოჩნდა, ამიტომ runtime-ის ვერსია დავაფიქსირე.",
    stack: projectsEn[1].stack,
    links: [],
  },
  {
    id: "vaka",
    name: "vaka.ge",
    year: "2026",
    kind: "AI დასაქმების პლატფორმა",
    summary: "ქართული ვაკანსიების საიტი, სადაც AI თითოეულ CV-ს ვაკანსიასთან ადარებს, ჭკვიანი ფიდი კი კანდიდატს მისთვის შესაფერის პოზიციებს აჩვენებს.",
    built: [
      "AI-ით CV-ების სკრინინგი, რომელიც დამსაქმებლისთვის კანდიდატებს ალაგებს.",
      "კანდიდატებისთვის პერსონალიზებული ვაკანსიების ფიდი.",
      "ვაშენებ არატექნიკურ თანადამფუძნებელთან ერთად, რომელიც გაყიდვებს და აუთრიჩს უძღვება.",
    ],
    learned: "ბიზნეს-პარტნიორთან მუშაობა: გაყიდვებიდან მიღებული უკუკავშირის სწრაფად გადაქცევა პროდუქტის გადაწყვეტილებებად.",
    stack: projectsEn[2].stack,
    links: [{ label: "vaka.ge-ზე გადასვლა", href: "https://vaka.ge" }],
  },
  {
    id: "kolkheti",
    name: "კოლხეთის ეროვნული პარკი",
    year: "2025",
    kind: "ვებსაიტი",
    summary: "საინფორმაციო საიტი შავი ზღვის სანაპიროზე მდებარე კოლხეთის ეროვნული პარკისთვის. გამოქვეყნებულია GitHub Pages-ზე.",
    built: ["რესპონსიული განლაგება და კონტენტის სტრუქტურა მათთვის, ვინც მოგზაურობას გეგმავს."],
    learned: "დიზაინი, რომელიც კონტენტიდან იწყება, და სტატიკური საიტის თავიდან ბოლომდე გაშვება.",
    stack: projectsEn[3].stack,
    links: [{ label: "საიტის ნახვა", href: "https://chitsue1.github.io/Kolkheti-Web/" }],
  },
  {
    id: "bassiani",
    name: "Bassiani, ხელახლა",
    year: "2025",
    kind: "არაოფიციალური კონცეპტ-რედიზაინი",
    summary: "მუქი, ატმოსფერული კონცეპტ-საიტი თბილისის ყველაზე ცნობილი კლუბისთვის. ეს დიზაინის სავარჯიშოა და არა შეკვეთით შესრულებული სამუშაო.",
    built: ["მთელ ეკრანზე გაშლილი, ატმოსფეროზე აგებული განლაგება, სადაც მოძრაობა განწყობას ქმნის."],
    learned: "რამდენის ტარება შეუძლია ბრენდისთვის მხოლოდ ტიპოგრაფიას და რიტმს.",
    stack: projectsEn[4].stack,
    links: [],
  },
];

export const copy: Record<Lang, Copy> = {
  en: {
    nav: { work: "Work", about: "About", contact: "Contact", switchTo: "ქართ" },
    hero: {
      nameNative: "ლუკა გვარამაძე",
      nameLatin: "Luka Gvaramadze",
      statement:
        "I build AI products end to end, from the database to the chatbot. Full-stack developer in Tbilisi and Informatics student at GTU.",
      status: "Open to internships in Tbilisi or remote",
      ctaWork: "See my work",
      ctaContact: "Get in touch",
    },
    work: {
      title: "Selected work",
      intro: "Products I designed, built and deployed myself, plus two design-led websites.",
      built: "What I built",
      learned: "What I learned",
      stack: "Stack",
    },
    projects: projectsEn,
    lab: {
      title: "Smaller experiments",
      items: [
        { name: "Multilingual chatbot for Olympic.ge", note: "An n8n automation built to learn agent workflows." },
        { name: "Silk & Essence", note: "A product landing page, as a UI study.", href: "/lab/ui-ux-design.html" },
        { name: "My first portfolio", note: "The HTML/CSS site this one replaced.", href: "/lab/index.html" },
      ],
    },
    about: {
      title: "About",
      paragraphs: [
        "I learn by shipping. Over the past year I went from HTML and CSS to running several AI products in production, each one with a real database, real deployment and real users in mind.",
        "Alongside code I run a Georgian-language TikTok channel, ClayChronicles, and I’m working on a sustainable-packaging venture. Both taught me to explain technical ideas simply and to think like the person paying for the product.",
      ],
      howTitle: "How I work",
      how: [
        { title: "Production first", body: "If it isn’t deployed, it isn’t done. I own the path from schema to Vercel." },
        { title: "AI-native workflow", body: "I build with Claude Code and MCP tools daily, and I review what they write." },
        { title: "Product sense", body: "I start from the user’s problem and the business model, then pick the tech." },
      ],
    },
    stack: {
      title: "Toolkit",
      groups: [
        { name: "Frontend", items: "Next.js, React, TypeScript, Tailwind CSS, HTML, CSS" },
        { name: "Backend", items: "Node.js, Express, Python, REST APIs, Telegram bots" },
        { name: "Data", items: "PostgreSQL, Prisma, MySQL, Firebase" },
        { name: "AI", items: "Claude API with tool-use, prompt design, n8n automations" },
        { name: "Delivery", items: "Git and GitHub, Vercel, Railway, Cloudflare R2, Figma" },
      ],
    },
    education: {
      title: "Education",
      items: [
        { name: "Georgian Technical University", detail: "Informatics and Control Systems, in progress" },
        { name: "Digital academy course", detail: "HTML, CSS and JavaScript fundamentals" },
        { name: "UI/UX Design Essentials", detail: "Figma and prototyping" },
      ],
      languagesTitle: "Languages",
      languages: "Georgian (native), English (C1), Russian (B2)",
    },
    contact: {
      title: "Let’s talk",
      body: "Looking for an intern who already ships? Write to me. I reply within a day.",
      name: "Your name",
      email: "Your email",
      message: "Message",
      send: "Send message",
      sending: "Sending…",
      sent: "Message sent. I’ll reply within a day.",
      error: "The message didn’t send. Email me directly instead.",
    },
    footer: "Designed and built by Luka Gvaramadze in Tbilisi.",
  },
  ka: {
    nav: { work: "ნამუშევრები", about: "ჩემს შესახებ", contact: "კონტაქტი", switchTo: "EN" },
    hero: {
      nameNative: "ლუკა გვარამაძე",
      nameLatin: "Luka Gvaramadze",
      statement:
        "ვქმნი AI პროდუქტებს თავიდან ბოლომდე, მონაცემთა ბაზიდან ჩატბოტამდე. ვარ full-stack დეველოპერი თბილისიდან და ვსწავლობ ინფორმატიკას სტუ-ში.",
      status: "ღია ვარ სტაჟირებისთვის თბილისში ან დისტანციურად",
      ctaWork: "ნამუშევრების ნახვა",
      ctaContact: "დამიკავშირდით",
    },
    work: {
      title: "რჩეული ნამუშევრები",
      intro: "პროდუქტები, რომლებიც თავად დავაპროექტე, ავაწყვე და გავუშვი, და ორი დიზაინზე ორიენტირებული საიტი.",
      built: "რა ავაწყვე",
      learned: "რა ვისწავლე",
      stack: "ტექნოლოგიები",
    },
    projects: projectsKa,
    lab: {
      title: "მცირე ექსპერიმენტები",
      items: [
        { name: "მრავალენოვანი ჩატბოტი Olympic.ge-სთვის", note: "n8n ავტომატიზაცია, აგენტური workflow-ების შესასწავლად." },
        { name: "Silk & Essence", note: "პროდუქტის ლენდინგი, UI სავარჯიშო.", href: "/lab/ui-ux-design.html" },
        { name: "ჩემი პირველი პორტფოლიო", note: "HTML/CSS საიტი, რომელიც ამან ჩაანაცვლა.", href: "/lab/index.html" },
      ],
    },
    about: {
      title: "ჩემს შესახებ",
      paragraphs: [
        "ვსწავლობ იმით, რომ ვქმნი და ვუშვებ. ბოლო ერთ წელიწადში HTML-იდან და CSS-იდან რამდენიმე AI პროდუქტამდე მივედი, რომლებიც პროდაქშენში მუშაობს: თითოეულს აქვს რეალური მონაცემთა ბაზა, რეალური დეპლოი და რეალური მომხმარებელი მხედველობაში.",
        "კოდის გარდა ვუძღვები ქართულენოვან TikTok არხს ClayChronicles და ვმუშაობ ეკოლოგიური შეფუთვის ბიზნეს-პროექტზე. ორივემ მასწავლა ტექნიკური იდეების მარტივად ახსნა და იმ ადამიანივით ფიქრი, ვინც პროდუქტში იხდის.",
      ],
      howTitle: "როგორ ვმუშაობ",
      how: [
        { title: "პროდაქშენი პირველ რიგში", body: "თუ გაშვებული არ არის, დასრულებულიც არ არის. სქემიდან Vercel-მდე ყველაფერზე მე ვარ პასუხისმგებელი." },
        { title: "AI-ზე აგებული workflow", body: "ყოველდღე ვმუშაობ Claude Code-ით და MCP ინსტრუმენტებით და ყველაფერს ვამოწმებ, რასაც ისინი წერენ." },
        { title: "პროდუქტზე ფიქრი", body: "ვიწყებ მომხმარებლის პრობლემით და ბიზნეს-მოდელით, ტექნოლოგიას კი ამის შემდეგ ვარჩევ." },
      ],
    },
    stack: {
      title: "ინსტრუმენტები",
      groups: [
        { name: "ფრონტენდი", items: "Next.js, React, TypeScript, Tailwind CSS, HTML, CSS" },
        { name: "ბექენდი", items: "Node.js, Express, Python, REST API, Telegram ბოტები" },
        { name: "მონაცემები", items: "PostgreSQL, Prisma, MySQL, Firebase" },
        { name: "AI", items: "Claude API tool-use-ით, პრომპტების დიზაინი, n8n ავტომატიზაცია" },
        { name: "მიწოდება", items: "Git და GitHub, Vercel, Railway, Cloudflare R2, Figma" },
      ],
    },
    education: {
      title: "განათლება",
      items: [
        { name: "საქართველოს ტექნიკური უნივერსიტეტი", detail: "ინფორმატიკა და მართვის სისტემები, მიმდინარე" },
        { name: "ციფრული აკადემიის კურსი", detail: "HTML, CSS და JavaScript-ის საფუძვლები" },
        { name: "UI/UX Design Essentials", detail: "Figma და პროტოტიპირება" },
      ],
      languagesTitle: "ენები",
      languages: "ქართული (მშობლიური), ინგლისური (C1), რუსული (B2)",
    },
    contact: {
      title: "მოდი, ვისაუბროთ",
      body: "ეძებთ სტაჟიორს, რომელიც უკვე უშვებს პროდუქტებს? მომწერეთ, ერთი დღის განმავლობაში გიპასუხებთ.",
      name: "თქვენი სახელი",
      email: "თქვენი ელ-ფოსტა",
      message: "შეტყობინება",
      send: "შეტყობინების გაგზავნა",
      sending: "იგზავნება…",
      sent: "შეტყობინება გაიგზავნა. ერთი დღის განმავლობაში გიპასუხებთ.",
      error: "შეტყობინება ვერ გაიგზავნა. მომწერეთ პირდაპირ ელ-ფოსტაზე.",
    },
    footer: "დააპროექტა და ააწყო ლუკა გვარამაძემ, თბილისში.",
  },
};
