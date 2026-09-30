import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'kashida-studio',
    slug: 'kashida-studio',
    projectNumber: 'PROJECT 001',
    title: 'Kashida Studio',
    client: 'Kashida Creative Studio',
    year: '2025',
    category: 'FILM',
    categoryLabel: 'Brand Film & Visual Direction',
    coverImage: '/src/assets/images/hero_cinematic_baghdad_1790756937135.jpg',
    aspectRatio: '16:9',
    tapeColor: 'yellow',
    rotation: '-rotate-1',
    shortDescription: 'Brand film and visual identity study exploring contemporary design practice and tactile craftsmanship.',
    fullDescription: [
      'A cinematic brand film created for Kashida Studio, focusing on spatial geometry, typographic discipline, and the tactility of physical materials.',
      'The visual direction prioritizes natural ambient illumination, contemplative panning movements, and clean sound-driven rhythm that positions the studio at the intersection of heritage and modern design.'
    ],
    credits: [
      { role: 'Visual Direction', name: 'Ibraheem Salim' },
      { role: 'Cinematography', name: 'Ibraheem Salim' },
      { role: 'Color Grading', name: 'Ibraheem Salim' }
    ],
    vimeoId: '76979871',
    vimeoUrl: 'https://vimeo.com/76979871',
    featured: true,
    galleryImages: [
      {
        url: '/src/assets/images/hero_cinematic_baghdad_1790756937135.jpg',
        caption: 'Opening rooftop sequence overlooking the Tigris river at twilight.',
        aspect: '16:9'
      },
      {
        url: '/src/assets/images/documentary_baghdad_culture_1790756987326.jpg',
        caption: 'Material study and historic Baghdad architectural textures.',
        aspect: '16:9'
      },
      {
        url: '/src/assets/images/commercial_product_cosmetics_1790756975859.jpg',
        caption: 'Studio lighting and surface detail composition.',
        aspect: '4:3'
      }
    ],
    closingImage: '/src/assets/images/hero_cinematic_baghdad_1790756937135.jpg',
    tags: ['Brand Film', 'Visual Direction', 'Cinematography'],
    location: 'Baghdad, Iraq'
  },
  {
    id: 'hanoot',
    slug: 'hanoot',
    projectNumber: 'PROJECT 002',
    title: 'Hanoot',
    client: 'Hanoot Platform',
    year: '2024',
    category: 'COMMERCIAL',
    categoryLabel: 'Commercial Campaign & Film',
    coverImage: '/src/assets/images/commercial_automotive_film_1790756964850.jpg',
    aspectRatio: '16:9',
    tapeColor: 'blue',
    rotation: 'rotate-1',
    shortDescription: 'Multi-platform commercial campaign translating fast-paced urban retail into dynamic visual stories.',
    fullDescription: [
      'Developed commercial film assets and campaign stills for Hanoot, highlighting momentum, urban motion, and modern commerce.',
      'The visual treatment balanced high-energy cuts with architectural framing to elevate the platform beyond conventional commercial advertising.'
    ],
    credits: [
      { role: 'Director & Cinematographer', name: 'Ibraheem Salim' },
      { role: 'Visual Direction', name: 'Ibraheem Salim' },
      { role: 'Editor', name: 'Ibraheem Salim' }
    ],
    vimeoId: '1084537',
    vimeoUrl: 'https://vimeo.com/1084537',
    featured: true,
    galleryImages: [
      {
        url: '/src/assets/images/commercial_automotive_film_1790756964850.jpg',
        caption: 'High-contrast nocturnal movement and directional lighting.',
        aspect: '16:9'
      },
      {
        url: '/src/assets/images/hero_cinematic_baghdad_1790756937135.jpg',
        caption: 'Location production establishing shot.',
        aspect: '16:9'
      }
    ],
    closingImage: '/src/assets/images/commercial_automotive_film_1790756964850.jpg',
    tags: ['Commercial', 'Campaign', 'Automotive/Urban'],
    location: 'Baghdad'
  },
  {
    id: '404-coffee-house',
    slug: '404-coffee-house',
    projectNumber: 'PROJECT 003',
    title: '404 Coffee House & Chill',
    client: '404 Coffee House',
    year: '2024',
    category: 'BRANDING',
    categoryLabel: 'Visual Identity & Architectural Photography',
    coverImage: '/src/assets/images/documentary_baghdad_culture_1790756987326.jpg',
    aspectRatio: '16:9',
    tapeColor: 'kraft',
    rotation: '-rotate-2',
    shortDescription: 'Spatial photography and brand visuals capturing the dialogue between raw brutalist concrete and warm coffee culture.',
    fullDescription: [
      'Comprehensive photographic study of the 404 Coffee House space. Capturing the interplay of raw concrete textures, brushed steel, and the warm morning rituals of Baghdad’s contemporary coffee community.',
      'The series spans architectural perspectives, bar workflow, and quiet human interactions.'
    ],
    credits: [
      { role: 'Photography', name: 'Ibraheem Salim' },
      { role: 'Art Direction', name: 'Ibraheem Salim' }
    ],
    featured: true,
    galleryImages: [
      {
        url: '/src/assets/images/documentary_baghdad_culture_1790756987326.jpg',
        caption: 'Morning light piercing the architectural entrance.',
        aspect: '16:9'
      },
      {
        url: '/src/assets/images/hero_cinematic_baghdad_1790756937135.jpg',
        caption: 'Environmental perspective.',
        aspect: '16:9'
      }
    ],
    closingImage: '/src/assets/images/documentary_baghdad_culture_1790756987326.jpg',
    tags: ['Architecture', 'Branding', 'Lifestyle'],
    location: 'Baghdad, Iraq'
  },
  {
    id: 'hareer-touch',
    slug: 'hareer-touch',
    projectNumber: 'PROJECT 004',
    title: 'Hareer Touch',
    client: 'Hareer Touch',
    year: '2024',
    category: 'PHOTOGRAPHY',
    categoryLabel: 'Product & Lifestyle Photography',
    coverImage: '/src/assets/images/commercial_product_cosmetics_1790756975859.jpg',
    aspectRatio: '4:3',
    tapeColor: 'yellow',
    rotation: 'rotate-2',
    shortDescription: 'Tactile product and lifestyle photography sequence exploring organic textures, oils, and glass.',
    fullDescription: [
      'Editorial studio photography for Hareer Touch, utilizing natural daylight and raking shadows to emphasize bottle transparency, viscous liquid textures, and raw stone surfaces.',
      'Designed to provide an elevated editorial aesthetic for print lookbooks and digital brand applications.'
    ],
    credits: [
      { role: 'Photographer', name: 'Ibraheem Salim' },
      { role: 'Set & Light Direction', name: 'Ibraheem Salim' },
      { role: 'Retouching', name: 'Ibraheem Salim' }
    ],
    featured: true,
    galleryImages: [
      {
        url: '/src/assets/images/commercial_product_cosmetics_1790756975859.jpg',
        caption: 'Primary glass silhouette on warm travertine.',
        aspect: '4:3'
      },
      {
        url: '/src/assets/images/ibraheem_salim_portrait_1790756954089.jpg',
        caption: 'Monochrome contrast and lighting study.',
        aspect: '3:4'
      }
    ],
    closingImage: '/src/assets/images/commercial_product_cosmetics_1790756975859.jpg',
    tags: ['Product', 'Still Life', 'Studio'],
    location: 'Studio, Baghdad'
  },
  {
    id: 'aeropress-branding',
    slug: 'aeropress-branding',
    projectNumber: 'PROJECT 005',
    title: 'Aeropress Branding',
    client: 'Aeropress Campaign Series',
    year: '2024',
    category: 'COMMERCIAL',
    categoryLabel: 'Commercial / Product Photography',
    coverImage: '/src/assets/images/commercial_product_cosmetics_1790756975859.jpg',
    aspectRatio: '4:3',
    tapeColor: 'blue',
    rotation: '-rotate-1',
    shortDescription: 'Precision product study focusing on geometric design, mechanical extraction, and amber crema tones.',
    fullDescription: [
      'A focused commercial photography campaign exploring the mechanical simplicity of manual coffee brewing.',
      'Shot with macro lenses to reveal engineered polycarbonate tolerances, steam droplets, and the richness of freshly extracted coffee.'
    ],
    credits: [
      { role: 'Photographer', name: 'Ibraheem Salim' },
      { role: 'Art Direction', name: 'Ibraheem Salim' }
    ],
    featured: true,
    galleryImages: [
      {
        url: '/src/assets/images/commercial_product_cosmetics_1790756975859.jpg',
        caption: 'Macro extraction and pressure sequence.',
        aspect: '4:3'
      }
    ],
    closingImage: '/src/assets/images/commercial_product_cosmetics_1790756975859.jpg',
    tags: ['Product', 'Commercial', 'Macro'],
    location: 'Studio'
  },
  {
    id: 'kashida-series',
    slug: 'kashida-series',
    projectNumber: 'PROJECT 006',
    title: 'Kashida Series',
    client: 'Kashida Cultural Project',
    year: '2023',
    category: 'FILM',
    categoryLabel: 'Documentary / Visual Direction',
    coverImage: '/src/assets/images/hero_cinematic_baghdad_1790756937135.jpg',
    aspectRatio: '16:9',
    tapeColor: 'kraft',
    rotation: 'rotate-1',
    shortDescription: 'Observational documentary exploring calligraphy, letterforms, and physical craft across historic quarters.',
    fullDescription: [
      'An intimate visual documentary capturing classical craftspeople maintaining typographic arts in Baghdad.',
      'Shot on 35mm focal lengths with natural light, letting long unbroken takes capture the rhythm of hand-carved nibs and ink chemistry.'
    ],
    credits: [
      { role: 'Director & DP', name: 'Ibraheem Salim' },
      { role: 'Sound Recordist', name: 'Kashida Team' },
      { role: 'Post-Production', name: 'Ibraheem Salim' }
    ],
    vimeoId: '76979871',
    vimeoUrl: 'https://vimeo.com/76979871',
    featured: true,
    galleryImages: [
      {
        url: '/src/assets/images/hero_cinematic_baghdad_1790756937135.jpg',
        caption: 'Cinema camera rig positioned for natural window backlight.',
        aspect: '16:9'
      },
      {
        url: '/src/assets/images/documentary_baghdad_culture_1790756987326.jpg',
        caption: 'Historic Mutanabbi arcade detail.',
        aspect: '16:9'
      }
    ],
    closingImage: '/src/assets/images/hero_cinematic_baghdad_1790756937135.jpg',
    tags: ['Documentary', 'Culture', 'Film'],
    location: 'Old Baghdad'
  },
  {
    id: 'homa',
    slug: 'homa',
    projectNumber: 'PROJECT 007',
    title: 'Homa',
    client: 'Homa Atelier',
    year: '2024',
    category: 'BRANDING',
    categoryLabel: 'Brand Campaign & Visual Direction',
    coverImage: '/src/assets/images/ibraheem_salim_portrait_1790756954089.jpg',
    aspectRatio: '3:4',
    tapeColor: 'yellow',
    rotation: '-rotate-2',
    shortDescription: 'Brand identity visual direction and editorial lookbook capturing minimalist apparel and sculptural drapery.',
    fullDescription: [
      'Visual direction for Homa Atelier’s seasonal presentation.',
      'Focused on monochrome restraint, negative space, and architectural forms that complement the garment silhouettes.'
    ],
    credits: [
      { role: 'Visual Direction', name: 'Ibraheem Salim' },
      { role: 'Photography', name: 'Ibraheem Salim' }
    ],
    featured: false,
    galleryImages: [
      {
        url: '/src/assets/images/ibraheem_salim_portrait_1790756954089.jpg',
        caption: 'Sculptural silhouette study.',
        aspect: '3:4'
      }
    ],
    closingImage: '/src/assets/images/ibraheem_salim_portrait_1790756954089.jpg',
    tags: ['Branding', 'Fashion', 'Lookbook'],
    location: 'Baghdad'
  },
  {
    id: 'patch',
    slug: 'patch',
    projectNumber: 'PROJECT 008',
    title: 'Patch',
    client: 'Patch Creative',
    year: '2023',
    category: 'COMMERCIAL',
    categoryLabel: 'Commercial Film & Photography',
    coverImage: '/src/assets/images/commercial_automotive_film_1790756964850.jpg',
    aspectRatio: '16:9',
    tapeColor: 'blue',
    rotation: 'rotate-1',
    shortDescription: 'Dynamic commercial teaser and campaign photography emphasizing contemporary youth culture.',
    fullDescription: [
      'Commercial production combining high-frame-rate film captures with editorial still photography.',
      'Curated to bring cinematic color depth and rhythmic velocity to digital campaigns.'
    ],
    credits: [
      { role: 'Cinematographer', name: 'Ibraheem Salim' },
      { role: 'Photographer', name: 'Ibraheem Salim' }
    ],
    vimeoId: '1084537',
    vimeoUrl: 'https://vimeo.com/1084537',
    featured: false,
    galleryImages: [
      {
        url: '/src/assets/images/commercial_automotive_film_1790756964850.jpg',
        caption: 'Night exterior framing.',
        aspect: '16:9'
      }
    ],
    closingImage: '/src/assets/images/commercial_automotive_film_1790756964850.jpg',
    tags: ['Commercial', 'Social Campaign'],
    location: 'Baghdad'
  },
  {
    id: 'ali-jassim-workshop',
    slug: 'ali-jassim-workshop',
    projectNumber: 'PROJECT 009',
    title: 'Ali Jassim Workshop',
    client: 'Studio Ali Jassim',
    year: '2023',
    category: 'PHOTOGRAPHY',
    categoryLabel: 'Documentary & Portrait',
    coverImage: '/src/assets/images/ibraheem_salim_portrait_1790756954089.jpg',
    aspectRatio: '3:4',
    tapeColor: 'kraft',
    rotation: '-rotate-1',
    shortDescription: 'Intimate portrait and behind-the-scenes documentary series inside the artist’s creative workshop.',
    fullDescription: [
      'An editorial portrait essay tracking process, concentration, and spontaneous gestures inside the artist’s working environment.',
      'Emphasizing candid framing without staged artificial poses.'
    ],
    credits: [
      { role: 'Photographer', name: 'Ibraheem Salim' },
      { role: 'Editorial Sequencing', name: 'Ibraheem Salim' }
    ],
    featured: false,
    galleryImages: [
      {
        url: '/src/assets/images/ibraheem_salim_portrait_1790756954089.jpg',
        caption: 'Workshop contemplative moment.',
        aspect: '3:4'
      }
    ],
    closingImage: '/src/assets/images/ibraheem_salim_portrait_1790756954089.jpg',
    tags: ['Portrait', 'Documentary', 'Art'],
    location: 'Baghdad'
  },
  {
    id: 'shames-telecom',
    slug: 'shames-telecom',
    projectNumber: 'PROJECT 010',
    title: 'Shames Telecom',
    client: 'Shames Telecom',
    year: '2023',
    category: 'FILM',
    categoryLabel: 'Commercial Video Campaign',
    coverImage: '/src/assets/images/commercial_automotive_film_1790756964850.jpg',
    aspectRatio: '16:9',
    tapeColor: 'yellow',
    rotation: 'rotate-2',
    shortDescription: 'Widescreen commercial film highlighting connectivity, modern city infrastructure, and human stories.',
    fullDescription: [
      'Commercial videography campaign documenting connectivity across regional centers.',
      'Carefully planned camera choreography combining drone aerial views with street-level anamorphic cinematography.'
    ],
    credits: [
      { role: 'Cinematographer & Director', name: 'Ibraheem Salim' },
      { role: 'Post-Production', name: 'Ibraheem Salim' }
    ],
    vimeoId: '76979871',
    vimeoUrl: 'https://vimeo.com/76979871',
    featured: false,
    galleryImages: [
      {
        url: '/src/assets/images/commercial_automotive_film_1790756964850.jpg',
        caption: 'City skyline infrastructure sequence.',
        aspect: '16:9'
      }
    ],
    closingImage: '/src/assets/images/commercial_automotive_film_1790756964850.jpg',
    tags: ['Commercial', 'Telecom', 'Film'],
    location: 'Iraq'
  },
  {
    id: 'travel-personal-work',
    slug: 'travel-personal-work',
    projectNumber: 'PROJECT 011',
    title: 'Travel / Personal Work',
    client: 'Personal Archive',
    year: '2023–2025',
    category: 'PERSONAL',
    categoryLabel: 'Visual Storytelling, Baghdad & Beyond',
    coverImage: '/src/assets/images/documentary_baghdad_culture_1790756987326.jpg',
    aspectRatio: '16:9',
    tapeColor: 'kraft',
    rotation: '-rotate-1',
    shortDescription: 'An ongoing observational visual diary documenting people, light, silence, and architectural history.',
    fullDescription: [
      'Personal visual archive exploring the textures, shadows, and daily poetry of Baghdad and regional journeys.',
      'An antidote to formulaic commercial shoots, grounded in patience, quiet observation, and authentic human presence.'
    ],
    credits: [
      { role: 'Visuals & Curation', name: 'Ibraheem Salim' }
    ],
    featured: true,
    galleryImages: [
      {
        url: '/src/assets/images/documentary_baghdad_culture_1790756987326.jpg',
        caption: 'Historic archways and amber dust beams.',
        aspect: '16:9'
      },
      {
        url: '/src/assets/images/hero_cinematic_baghdad_1790756937135.jpg',
        caption: 'Rooftops at golden hour.',
        aspect: '16:9'
      },
      {
        url: '/src/assets/images/ibraheem_salim_portrait_1790756954089.jpg',
        caption: 'Shadow and character study.',
        aspect: '3:4'
      }
    ],
    closingImage: '/src/assets/images/documentary_baghdad_culture_1790756987326.jpg',
    tags: ['Personal', 'Travel', 'Street', 'Documentary'],
    location: 'Baghdad & Regional'
  }
];
