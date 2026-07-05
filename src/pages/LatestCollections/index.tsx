import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useReveal } from '@/hooks/useReveal';
import { Brand, Route } from '@/constants/enum';

const PRODUCTS = [
  { img: 'photo-1535632066927-ab7c9ab60908', cat: 'New · Bridal',    name: 'The Banaras Set',          meta: '22kt · Polki · Pearl drops',         tags: ['all','bridal'] },
  { img: 'photo-1611591437281-460bfbe1220a', cat: 'New · Modern',    name: 'The Eclipse Ring',         meta: '18kt · Brushed gold · Solitaire',    tags: ['all','modern'] },
  { img: 'photo-1573408301185-9146fe634ad0', cat: 'New · Festive',   name: 'The Suryakiran Bangle',    meta: '22kt · Hand-engraved · Pair',        tags: ['all','festive'] },
  { img: 'photo-1611652022419-a9419f74343d', cat: 'New · Signature', name: 'The Rani Haar No. 47',     meta: '22kt · Polki · Limited 12',          tags: ['all','signature'] },
  { img: 'photo-1602173574767-37ac01994b2a', cat: 'New · Bridal',    name: 'The Chand Earrings',       meta: '22kt · Chandbali · Kundan',          tags: ['all','bridal'] },
  { img: 'photo-1535556116002-6281ff3e9f36', cat: 'New · Modern',    name: 'The Linea Pendant',        meta: '18kt · Minimalist · Polished',       tags: ['all','modern'] },
  { img: 'photo-1515562141207-7a88fb7ce338', cat: 'New · Festive',   name: 'The Akashganga Necklace',  meta: '22kt · Temple work · Pavadai',       tags: ['all','festive'] },
  { img: 'photo-1605100804763-247f67b3557e', cat: 'New · Bridal',    name: 'The Heritage Mangalsutra', meta: '22kt · Diamond · Chain',             tags: ['all','bridal'] },
];

const TABS = ['all','bridal','modern','festive','signature'] as const;
type Tab = typeof TABS[number];
const TAB_LABELS: Record<Tab, string> = { all: 'All Releases', bridal: 'Bridal', modern: 'Modern', festive: 'Festive', signature: 'Signature' };

const LatestCollections = () => {
  useReveal();
  const [tab, setTab] = useState<Tab>('all');
  const visible = PRODUCTS.filter(p => p.tags.includes(tab));

  return (
    <>
      {/* Hero */}
      <section className="hero hero-inner">
        <div className="hero-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1900&q=80')" }} />
        <div className="shell hero-content">
          <span className="eyebrow hero-eyebrow">Spring · Summer · {Brand.RomanYear}</span>
          <h1 className="hero-title">Newly off<em>the bench.</em></h1>
          <p className="hero-sub">Five new chapters this season — drawn from our CAD studios, hand-set in our atelier, and released a small batch at a time. As is the maison's habit.</p>
        </div>
        <div className="hero-meta"><span>VIII. New Arrivals</span><span>{Brand.RomanYear}</span></div>
      </section>

      {/* Feature strip */}
      <section className="section">
        <div className="shell">
          <div className="feature-strip reveal">
            <div className="feature-media" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1400&q=80')" }} />
            <div className="feature-text">
              <span className="eyebrow">Signature Release · No. 47</span>
              <h2>The Mughal<em>Rani-Haar.</em></h2>
              <p>A 22-karat homage to the long-haar tradition of Mughal court jewellery — set with uncut polki, river pearls and emerald tassels. A 14-week build at the Leo Gold bench.</p>
              <p style={{ opacity: 0.75, fontSize: 14 }}>Limited release · 12 pieces · For private and trade allocation.</p>
              <Link to={Route.Inquiry} className="btn btn-gold" style={{ marginTop: 8 }}>Reserve Allocation <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal releases */}
      <section className="section section-ivory">
        <div className="shell">
          <div className="section-head-center reveal">
            <span className="eyebrow center">Seasonal Releases</span>
            <h2 style={{ marginTop: 22 }}>Five chapters,<br /><em>one season.</em></h2>
          </div>

          <div className="season-tabs reveal">
            {TABS.map(t => (
              <button key={t} className={tab === t ? 'active' : ''} onClick={() => setTab(t)}>
                {TAB_LABELS[t]}
              </button>
            ))}
          </div>

          <div className="products-grid reveal">
            {visible.map(p => (
              <article key={p.name} className="product">
                <div className="product-img">
                  <img src={`https://images.unsplash.com/${p.img}?auto=format&fit=crop&w=900&q=80`} alt={p.name} loading="lazy" />
                </div>
                <div className="product-body">
                  <div className="product-cat">{p.cat}</div>
                  <div className="product-name">{p.name}</div>
                  <div className="product-meta">{p.meta}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="shell">
          <span className="eyebrow center" style={{ color: 'var(--gold-light)' }}>For the Trade</span>
          <h2 style={{ marginTop: 22 }}>Reserve from<em>this season's bench.</em></h2>
          <p>New pieces are available for trade allocation before wider release. Open an inquiry to secure your batch.</p>
          <Link to={Route.Inquiry} className="btn btn-gold">Open an Inquiry <span className="arrow">→</span></Link>
        </div>
      </section>
    </>
  );
};

export default LatestCollections;
