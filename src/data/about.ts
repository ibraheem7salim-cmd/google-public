import { Capability, ExperienceTimelineItem } from '../types';

export const ABOUT_DATA = {
  name: 'Ibraheem Salim',
  headline: 'I’m Ibraheem Salim, a photographer and filmmaker based in Baghdad, Iraq.',
  location: 'Baghdad, Iraq',
  email: 'hello@ibraheem-salim.com',
  actualEmail: 'ibraheem6salim@gmail.com',
  instagram: '@Ibraheem.sa1m',
  instagramUrl: 'https://instagram.com/Ibraheem.sa1m',
  portfolioUrl: 'https://ibraheem-salim.com',
  portraitImage: '/src/assets/images/ibraheem_salim_portrait_1790756954089.jpg',
  bio: [
    'My work focuses on photography, film, visual direction, and translating ideas and brands into clear, memorable visuals.',
    'With experience spanning commercial productions, creative studios, and independent cultural projects, I collaborate with brands and teams to build coherent visual worlds—from initial treatment and lighting setups to precise post-production.'
  ],
  capabilities: [
    {
      title: 'PHOTOGRAPHY',
      description: 'Commercial photography, lifestyle, product, portraits and visual campaigns.',
      color: 'bg-amber-300 text-neutral-900 border-amber-400'
    },
    {
      title: 'FILM',
      description: 'Commercial films, social campaigns, interviews, brand films and documentary-style video.',
      color: 'bg-blue-600 text-white border-blue-700'
    },
    {
      title: 'VISUAL DIRECTION',
      description: 'Developing visual concepts, references, compositions, lighting direction and overall visual language.',
      color: 'bg-emerald-500 text-white border-emerald-600'
    },
    {
      title: 'ART DIRECTION',
      description: 'Helping translate a brand or idea into a coherent visual identity and production.',
      color: 'bg-red-500 text-white border-red-600'
    },
    {
      title: 'POST-PRODUCTION',
      description: 'Professional photo and video editing with a focus on clean, intentional results rather than excessive effects.',
      color: 'bg-neutral-900 text-white border-neutral-700'
    }
  ] as Capability[],
  experienceTimeline: [
    {
      period: '2024 – PRESENT',
      role: 'Director of Photography & Visual Director',
      organization: 'Kashida Studio',
      location: 'Baghdad, Iraq',
      type: 'Creative Studio / Production'
    },
    {
      period: '2023 – 2024',
      role: 'Senior Commercial Cinematographer',
      organization: 'Sagerlabs',
      location: 'Baghdad',
      type: 'Agency & Tech Productions'
    },
    {
      period: '2022 – 2023',
      role: 'Visual Director & Filmmaker',
      organization: 'Cagency',
      location: 'Regional',
      type: 'Commercial Campaigns'
    },
    {
      period: '2022',
      role: 'Lead Commercial Photographer',
      organization: 'La Lux',
      location: 'Baghdad',
      type: 'Luxury & Lifestyle'
    },
    {
      period: '2021 – 2022',
      role: 'Documentary DP & Visuals',
      organization: 'Makers of Baghdad',
      location: 'Baghdad',
      type: 'Cultural Archive'
    },
    {
      period: '2021',
      role: 'Commercial Film & Photo',
      organization: 'Havana',
      location: 'Baghdad',
      type: 'Hospitality & Brand'
    },
    {
      period: '2020 – 2021',
      role: 'Cinematographer & Editor',
      organization: 'Green Apple',
      location: 'Baghdad',
      type: 'Creative Media'
    },
    {
      period: '2019 – 2020',
      role: 'Photographer & Motion Specialist',
      organization: 'Chan Group',
      location: 'Baghdad',
      type: 'Corporate & Brand'
    }
  ] as ExperienceTimelineItem[],
  brandExperience: [
    'Unilever',
    'Rexona',
    'Signal',
    'Clear',
    'Sunsilk',
    'Comfort',
    'Bio-Oil',
    'Talabat',
    'Olaplex',
    'Kevin Murphy',
    'K18',
    'Nissan',
    'Honor',
    'Xiaomi',
    'Huawei',
    'TCL',
    'Hisense',
    'Gorenje'
  ],
  brandNotice: 'Selected brands worked with through commercial productions, agency collaborations, and professional creative experience.'
};
