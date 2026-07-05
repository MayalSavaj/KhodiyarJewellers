// ─── Brand ───────────────────────────────────────────────────────────────────

export enum Brand {
  Name        = 'Khodiyar Jewellers',
  AtelierName = 'Leo Gold',
  RomanYear   = 'MMXXVI',
  FoundedYear = '1984',
  AtelierFounded = '2008',
  Location    = 'Zaveri Bazaar',
  City        = 'Mumbai',
}

// ─── Contact ─────────────────────────────────────────────────────────────────

export enum Contact {
  EmailAtelier = 'atelier@khodiyarjewellers.com',
  EmailTrade   = 'trade@khodiyarjewellers.com',
  Address      = '14 Karigar Lane, Zaveri Bazaar, Mumbai 400002, India',
  AddressShort = 'Leo Gold, Zaveri Bazaar, Mumbai 400 002',
  WhatsAppFloat   = 'https://wa.me/919821200000',
  WhatsAppContact = 'https://wa.me/912222420000',
  Instagram    = 'https://instagram.com',
  TradingHours = '09:30–18:30 IST, Monday to Saturday',
}

// ─── Routes ──────────────────────────────────────────────────────────────────

export enum Route {
  Home              = '/',
  About             = '/about',
  Collections       = '/collections',
  LatestCollections = '/latest-collections',
  Gallery           = '/gallery',
  Manufacturing     = '/manufacturing',
  GoldRate          = '/gold-rate',
  Blog              = '/blog',
  Testimonials      = '/testimonials',
  WhyChooseUs       = '/why-choose-us',
  Certifications    = '/certifications',
  Faq               = '/faq',
  Inquiry           = '/inquiry',
  Contact           = '/contact',
}

// ─── Meta labels (hero-meta roman numerals) ──────────────────────────────────

export enum PageMeta {
  About             = 'II. About',
  Collections       = 'III. Collections',
  Manufacturing     = 'IV. Manufacturing',
  Gallery           = 'V. Gallery',
  Certifications    = 'V. Certifications',
  WhyChooseUs       = 'VI. The Partnership',
  Inquiries         = 'VI. Inquiries',
  Contact           = 'VII. Contact',
  Testimonials      = 'VII. Testimonials',
  LatestCollections = 'VIII. New Arrivals',
  Blog              = 'IX. Atelier Journal',
  Faq               = 'X. Frequently Asked',
}

// ─── Markets served ──────────────────────────────────────────────────────────

export const MARKETS = ['Mumbai', 'Surat', 'Dubai', 'London'] as const;
export type Market = (typeof MARKETS)[number];
