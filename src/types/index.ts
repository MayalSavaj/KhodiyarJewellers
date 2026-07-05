export interface NavLink {
  label: string;
  href: string;
}

export interface JewelleryItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  weight?: string;
  purity?: string;
}

export interface GoldRate {
  purity: '24K' | '22K' | '18K';
  ratePerGram: number;
  updatedAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  message: string;
  rating: number;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  image?: string;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface InquiryForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}
