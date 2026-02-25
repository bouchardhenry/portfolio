export const projects = [
  {
    slug: 'madreema-foundation',
    title: 'MADREEMA FOUNDATION',
    date: 'October 2025',
    tags: 'Logo / Web Design',
    align: 'right',
    year: '2025',
    category: 'Brand Identity & Web',
    description:
      'A full visual identity for Madreema Foundation — a cultural nonprofit bridging communities through education and art. The work spans logo design through to a fully designed web presence.',
    challenge:
      'The foundation needed a mark that felt rooted and timeless without leaning into cultural cliché. The identity had to work across print, digital, and physical spaces simultaneously.',
    solution:
      'A unique handwritten logotype, paired with a restrained typographic system. The web design extends the identity into a quiet, content-first layout that keeps focus on the foundations mission.',
    deliverables: ['Logo & Visual Identity', 'Brand Guidelines', 'Website Design'],
    images: [
      '/images/madreema_img1.png',
      '/images/madreema_img2.png',
    ],
  },
  {
    slug: 'halo-mind',
    title: 'HALO MIND',
    date: 'October 2025',
    tags: 'Web Design / Developpement',
    align: 'right',
    year: '2025',
    category: 'Web Design & Development',
    description:
      'Halo Mind is a mental wellness platform designed for clarity and calm. The site needed to communicate trust and approachability without feeling clinical or sterile.',
    challenge:
      'Mental health products often default to either cold medical aesthetics or overly soft pastels. Halo Mind needed a third path — warm, intelligent, and genuinely human.',
    solution:
      'A light editorial layout built around generous whitespace and Libre Baskerville for warmth. Interactions are intentionally slow and unhurried, mirroring the product\'s ethos.',
    deliverables: ['Web Design', 'Front-end Development', 'Motion Design'],
    images: [
      '/images/halomind_img1.png',
      '/images/halomind_img2.png',
    ],
  },
  {
    slug: 'svea-vaccin',
    title: 'SVEA VACCIN',
    date: 'February 2026',
    tags: 'Web Design / Developpement',
    align: 'right',
    year: '2026',
    category: 'Web Design & Development',
    description:
      'Svea Vaccin is a Swedish healthcare provider offering travel vaccines and health consultations. The redesign focused on reducing friction and building confidence in the booking flow.',
    challenge:
      'Healthcare websites are often burdened with information architecture that serves the organisation, not the patient. The goal was to flip that — put the user\'s journey first.',
    solution:
      'A clean, scannable content hierarchy with a redesigned booking flow that gets users to their appointment in under three clicks. Clinical precision without clinical coldness.',
    deliverables: ['UX Strategy', 'Web Design', 'React Development'],
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1400&q=80',
    ],
  },
  {
    slug: 'a-collective',
    title: 'A COLLECTIVE',
    date: 'April 2025',
    tags: 'Logo / Web Design / Developpement',
    align: 'right',
    year: '2025',
    category: 'Brand Identity & Web',
    description:
      'A Collective is a creative agency bringing together independent designers, writers, and strategists. The brand needed to feel like a point of view, not just a service.',
    challenge:
      'Collectives are notoriously hard to brand — there is no single voice, no single aesthetic. The challenge was to build a visual identity that held shape without becoming rigid.',
    solution:
      'A flexible identity system with a fixed typographic core and a variable colour palette that adapts to each member\'s work. The website is a living document, not a brochure.',
    deliverables: ['Logo & Identity System', 'Website Design', 'Front-end Development'],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=80',
    ],
  },
  {
    slug: 'blg-entertainement',
    title: 'BLG ENTERTAINEMENT',
    date: 'October 2025',
    tags: 'Artistic Direction',
    align: 'right',
    year: '2025',
    category: 'Artistic Direction',
    description:
      'Artistic direction for BLG Entertainment — a music and events company operating across Europe. The work covered visual language for releases, events, and social presence.',
    challenge:
      'BLG operates across very different contexts: intimate club nights, festival stages, and digital-first releases. The visual language needed to flex without fragmenting.',
    solution:
      'A core visual grammar — a specific use of type, contrast, and negative space — that scales from a phone screen to a 10-metre stage backdrop. Consistent energy, variable execution.',
    deliverables: ['Visual Direction', 'Campaign Design', 'Social & Print Assets'],
    images: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1400&q=80',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1400&q=80',
    ],
  },
]

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
export const getAdjacentProject = (slug) => {
  const index = projects.findIndex((p) => p.slug === slug)
  return projects[(index + 1) % projects.length]
}
