export const projects = [
  {
    slug: "madreema-foundation",
    title: "MADREEMA FOUNDATION",
    date: "October 2025",
    tags: "Logo & Web Design",
    align: "right",
    year: "2025",
    category: "Brand Identity & Web",
    description:
      "A visual identity and digital presence for Madreema Foundation — an institution devoted to art, education, and remembrance. Defined by clarity, restraint, and considered silence.",
    challenge:
      "To create an identity of permanence without symbolism, and elegance without excess. The foundation required an expression that could hold meaning quietly, across print, space, and screen.",
    solution:
      "A handwritten logotype balanced by an editorial typographic system and generous white space. The website was designed as a calm, structured surface — allowing art, purpose, and content to exist without interruption.",
    deliverables: [
      "Logo & Visual Identity",
      "Brand Guidelines",
      "Website Design",
    ],
    images: ["/images/madreema_img1.png", "/images/madreema_img2.png"],
  },
  {
    slug: "halo-mind",
    title: "HALO MIND",
    date: "October 2025",
    tags: "Web Design & Developpement",
    align: "right",
    year: "2025",
    category: "Web Design & Development",
    description:
      "Halo Mind is a mental wellness platform designed for clarity and calm. The site needed to communicate trust and approachability without feeling clinical or sterile.",
    url: "https://productivity-app-six-phi.vercel.app/",
    challenge:
      "Mental health products often default to either cold medical aesthetics or overly soft pastels. Halo Mind needed a third path — warm, intelligent, and genuinely human.",
    solution:
      "A light editorial layout built around generous whitespace and Libre Baskerville for warmth. Interactions are intentionally slow and unhurried, mirroring the product's ethos.",
    deliverables: ["Web Design", "Front-end Development", "Motion Design"],
    images: ["/images/halomind_img1.png", "/images/halomind_img2.png"],
  },
  {
    slug: "svea-vaccin",
    title: "SVEA VACCIN",
    date: "February 2026",
    tags: "Web Design & Developpement",
    align: "right",
    year: "2026",
    category: "Web Design & Development",
    description:
      "Svea Vaccin is a Swedish healthcare provider offering travel vaccines and health consultations. The redesign focused on reducing friction and building confidence in the booking flow.",
    challenge:
      "Healthcare websites are often burdened with information architecture that serves the organisation, not the patient. The goal was to flip that — put the user's journey first.",
    solution:
      "A clean, scannable content hierarchy with a redesigned flow that gets users to their appointment in under three clicks. Clinical precision without clinical coldness.",
    deliverables: ["UX Strategy", "Web Design", "Wordpress Development"],
    images: ["/images/sveavaccin_img1.png", "/images/sveavaccin_img2.png"],
  },
  {
    slug: "a-collective",
    title: "A COLLECTIVE",
    date: "April 2025",
    tags: "Brand Strategy, Web Design & Development",
    align: "right",
    year: "2025",
    category: "Community Platform & Co-Working",
    description:
      "A Collective is a co-working studio and community platform created to bring people together. With members from diverse backgrounds and a wide range of expertise, everyone can find their own place within the community — whether you are looking for new collaborators, lifelong friends, or someone to exchange ideas with.",
    challenge:
      "The challenge was to build a brand and digital presence that reflects the diversity of the community while remaining clear and cohesive. The platform needed to communicate both professionalism and warmth — a space for networking, co-working, and activities such as yoga — while also standing out on social media.",
    solution:
      "We developed an inclusive and dynamic visual identity that mirrors the breadth of people and skills within A Collective. The digital platform was designed to feel alive and welcoming, with a strong focus on community and interaction. Through a clear social media strategy, we highlight the studio’s unique concept and strengthen its online presence to attract new members.",
    deliverables: [
      "Brand Identity",
      "Website Design & Development",
      "Social Media Strategy",
      "Content & Community Concept",
    ],
    images: ["/images/acollective_img1.png", "/images/acollective_img2.png"],
  },
  {
    slug: "blg-entertainement",
    title: "BLG ENTERTAINEMENT",
    date: "October 2025",
    tags: "Artistic Direction",
    align: "right",
    year: "2025",
    category: "Artistic Direction",
    description:
      "Artistic direction for BLG Entertainment — a European music house moving between shadow and spotlight. A study in presence across stage, screen, and silence.",
    challenge:
      "From intimate club rituals to festival-scale spectacle, BLG exists in constant contrast. The identity had to remain sovereign — composed, unmistakable — across every terrain.",
    solution:
      "A distilled visual language built on precision and restraint. Monumental typography, disciplined contrast, and intentional void. Designed to command a screen. Designed to inhabit a stage.",
    deliverables: [
      "Visual Direction",
      "Campaign Design",
      "Social & Print Assets",
    ],
    images: ["/images/blg_img1.gif", "/images/blg_img2.png"],
  },
  {
    slug: "blg-entertainement",
    title: "PRISJAKT",
    date: "April 2025",
    tags: "App Redisign",
    align: "right",
    year: "2025",
    category: "Artistic Direction",
    description:
      "Artistic direction for BLG Entertainment — a European music house moving between shadow and spotlight. A study in presence across stage, screen, and silence.",
    challenge:
      "From intimate club rituals to festival-scale spectacle, BLG exists in constant contrast. The identity had to remain sovereign — composed, unmistakable — across every terrain.",
    solution:
      "A distilled visual language built on precision and restraint. Monumental typography, disciplined contrast, and intentional void. Designed to command a screen. Designed to inhabit a stage.",
    deliverables: [
      "Visual Direction",
      "Campaign Design",
      "Social & Print Assets",
    ],
    images: ["/images/blg_img1.gif", "/images/blg_img2.png"],
  },
  {
    slug: "blg-entertainement",
    title: "POKEDEX EXPLORER",
    date: "April 2025",
    tags: "Web Design & Developpement",
    align: "right",
    year: "2025",
    category: "Artistic Direction",
    description:
      "Artistic direction for BLG Entertainment — a European music house moving between shadow and spotlight. A study in presence across stage, screen, and silence.",
    challenge:
      "From intimate club rituals to festival-scale spectacle, BLG exists in constant contrast. The identity had to remain sovereign — composed, unmistakable — across every terrain.",
    solution:
      "A distilled visual language built on precision and restraint. Monumental typography, disciplined contrast, and intentional void. Designed to command a screen. Designed to inhabit a stage.",
    deliverables: [
      "Visual Direction",
      "Campaign Design",
      "Social & Print Assets",
    ],
    images: ["/images/blg_img1.gif", "/images/blg_img2.png"],
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
export const getAdjacentProject = (slug) => {
  const index = projects.findIndex((p) => p.slug === slug);
  return projects[(index + 1) % projects.length];
};
