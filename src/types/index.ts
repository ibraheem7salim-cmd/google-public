export type ProjectCategory = 
  | 'ALL' 
  | 'FILM' 
  | 'PHOTOGRAPHY' 
  | 'BRANDING' 
  | 'COMMERCIAL' 
  | 'PERSONAL';

export type PhotoCategory = 
  | 'COMMERCIAL' 
  | 'PORTRAITS' 
  | 'PRODUCT' 
  | 'LIFESTYLE' 
  | 'TRAVEL' 
  | 'PERSONAL';

export interface ProjectCredit {
  role: string;
  name: string;
}

export interface GalleryItem {
  url: string;
  caption?: string;
  aspect?: '16:9' | '4:3' | '3:4' | '1:1' | 'full';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: string;
  category: 'FILM' | 'PHOTOGRAPHY' | 'BRANDING' | 'COMMERCIAL' | 'PERSONAL';
  categoryLabel: string;
  coverImage: string;
  aspectRatio?: '16:9' | '4:3' | '3:4';
  shortDescription: string;
  fullDescription: string[];
  credits: ProjectCredit[];
  vimeoId?: string;
  vimeoUrl?: string;
  featured: boolean;
  galleryImages: GalleryItem[];
  closingImage?: string;
  tags: string[];
  location?: string;
  projectNumber?: string;
  tapeColor?: 'yellow' | 'blue' | 'kraft';
  rotation?: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  category: PhotoCategory;
  imageUrl: string;
  aspect: '3:4' | '4:3' | '16:9' | '1:1';
  year: string;
  location: string;
  cameraInfo?: string;
  caption?: string;
  frameCode?: string;
  greaseMark?: 'circle' | 'check' | 'cross' | 'star';
}

export interface FilmItem {
  id: string;
  title: string;
  client: string;
  year: string;
  type: string;
  thumbnail: string;
  vimeoId?: string;
  vimeoUrl?: string;
  duration?: string;
  description: string;
  role: string;
  scene?: string;
  take?: string;
}

export interface Capability {
  title: string;
  description: string;
  color: string;
}

export interface ExperienceTimelineItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: string;
}
