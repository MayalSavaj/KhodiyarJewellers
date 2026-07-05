import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useReveal } from '@/hooks/useReveal';
import { Brand, Route } from '@/constants/enum';

const PRODUCTS = [
  { img: 'photo-1611591437281-460bfbe1220a', cat: 'Bridal Couture', name: 'Vadhu Set',        meta: '22K · Polki & Pearl',       tags: ['bridal', 'traditional'] },
  { img: 'photo-1611652022419-a9419f74343d', cat: 'Necklace',       name: 'Rani Haar',        meta: '22K · Hand-strung',          tags: ['necklaces', 'traditional'], delay: 1 },
  { img: 'photo-1535556116002-6281ff3e9f36', cat: 'Ring',           name: 'Solitaire Marquise', meta: '18K · Diamond Centre',     tags: ['rings', 'modern'], delay: 2 },
  { img: 'photo-1602173574767-37ac01994b2a', cat: 'Earrings',       name: 'Mor Jhumka',       meta: '22K · Peacock Motif',        tags: ['earrings', 'traditional'] },
  { img: 'photo-1599643478518-a784e5dc4c8f', cat: 'Bangle',         name: 'Patli Pair',       meta: '22K · Signature 1996',       tags: ['bangles', 'traditional'], delay: 1 },
  { img: 'photo-1535632066927-ab7c9ab60908', cat: 'Necklace · Bridal', name: 'Mehfil Choker', meta: '22K · Kundan inlay',         tags: ['necklaces', 'bridal'], delay: 2 },
  { img: 'photo-1605100804763-247f67b3557e', cat: 'Ring',           name: 'Linea Band',       meta: '18K · Brushed Finish',       tags: ['rings', 'modern'] },
  { img: 'photo-1620625515032-6ed0c1790c75', cat: 'Earrings',       name: 'Atelier Drops',    meta: '18K · Diamond Pavé',         tags: ['earrings', 'modern'], delay: 1 },
  { img: 'photo-1515562141207-7a88fb7ce338', cat: 'Bangle',         name: 'Riva Cuff',        meta: '18K · Hand-engraved',        tags: ['bangles', 'modern'], delay: 2 },
  { img: 'photo-1617038220319-276d3cfab638', cat: 'Traditional',    name: 'Devi Temple',      meta: '22K · Antique Finish',       tags: ['traditional', 'necklaces'] },
  { img: 'photo-1633293048312-1844f262e9c5', cat: 'Earrings · Bridal', name: 'Chand Bali',   meta: '22K · Uncut diamond',        tags: ['bridal', 'earrings'], delay: 1 },
  { img: 'photo-1583937443351-3a543c5b8a05', cat: 'Ring · Bridal',  name: 'Sindoor Ring',     meta: '22K · Ruby Centre',          tags: ['rings', 'traditional', 'bridal'], delay: 2 },
];

const FILTERS = [
  { key: 'all',         label: 'All' },
  { key: 'rings',       label: 'Gold Rings' },
  { key: 'necklaces',   label: 'Necklaces' },
  { key: 'earrings',    label: 'Earrings' },
  { key: 'bangles',     label: 'Bangles' },
  { key: 'bridal',      label: 'Bridal' },
  { key: 'traditional', label: 'Traditional' },
  { key: 'modern',      label: 'Modern' },
];

const Collections = () => {
  useReveal();
  const [active, setActive] = useState('all');

  const visible = active === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.tags.includes(active));

  return (
    <>
      {/* Hero */}
      <section className="hero hero-inner">
        <div
          className="hero-img"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1900&q=80')",
          }}
        />
        <div className="shell hero-content">
          <span className="eyebrow hero-eyebrow">The Collections</span>
          <h1 className="hero-title">
            Seven chapters<em>of one inheritance.</em>
          </h1>
          <p className="hero-sub">
            From bridal couture to modern minimalism — every collection composed in our atelier,
            in karat-certified gold.
          </p>
        </div>
        <div className="hero-meta">
          <span>III. Collections</span>
          <span>{Brand.RomanYear}</span>
        </div>
      </section>

      {/* Filter + Products */}
      <section className="section">
        <div className="shell">
          <div className="section-head-center reveal">
            <span className="eyebrow center">Browse by Chapter</span>
            <h2 style={{ marginTop: 22 }}>
              Explore the<br /><em>maison archive.</em>
            </h2>
            <p>
              The pieces shown here are a representative selection from our trade catalogue. For full
              karat options, weight ranges and wholesale terms, please open an inquiry.
            </p>
          </div>

          <div className="filter-bar reveal">
            {FILTERS.map(f => (
              <button
                key={f.key}
                className={active === f.key ? 'active' : ''}
                onClick={() => setActive(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {visible.map(p => (
              <article
                key={p.name}
                className="product reveal"
                {...(p.delay ? { 'data-delay': p.delay } : {})}
              >
                <div className="product-img">
                  <img
                    src={`https://images.unsplash.com/${p.img}?auto=format&fit=crop&w=900&q=80`}
                    alt={p.name}
                  />
                </div>
                <div className="product-body">
                  <div className="product-cat">{p.cat}</div>
                  <h3 className="product-name">{p.name}</h3>
                  <div className="product-meta">{p.meta}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Collections chapters */}
      <section className="section section-ivory">
        <div className="shell">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Chapters</span>
              <h2 style={{ marginTop: 24 }}>
                Three families,<em>seven chapters.</em>
              </h2>
            </div>
            <p>
              Our archive is structured into three families — Bridal, Traditional and Modern — and the
              chapters move freely between them.
            </p>
          </div>

          <div className="collections-grid">
            {[
              { img: 'photo-1535632066927-ab7c9ab60908', num: 'Chapter I.',   name: 'Bridal Couture', desc: 'Polki · Kundan · Jadau',         filter: 'bridal' },
              { img: 'photo-1515562141207-7a88fb7ce338', num: 'Chapter II.',  name: 'Traditional',    desc: 'Temple · Antique · Rajwadi',      filter: 'traditional', delay: 1 },
              { img: 'photo-1605100804763-247f67b3557e', num: 'Chapter III.', name: 'Modern',         desc: 'Linea · Atelier · Couture',        filter: 'modern', delay: 2 },
            ].map(c => (
              <button
                key={c.num}
                className={`collection-card reveal${c.delay ? '' : ''}`}
                {...(c.delay ? { 'data-delay': c.delay } : {})}
                onClick={() => { setActive(c.filter); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{ cursor: 'pointer', textAlign: 'left', border: 'none', padding: 0, background: 'none', display: 'block', width: '100%' }}
              >
                <div
                  className="img"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/${c.img}?auto=format&fit=crop&w=900&q=80')`,
                  }}
                />
                <span className="corner">→</span>
                <div className="body">
                  <span className="num">{c.num}</span>
                  <h3 className="name">{c.name}</h3>
                  <div className="desc">{c.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="shell">
          <span className="eyebrow center" style={{ color: 'var(--gold-light)' }}>
            For the Trade
          </span>
          <h2 style={{ marginTop: 22 }}>
            Request the<em>wholesale catalogue.</em>
          </h2>
          <p>
            Each chapter is available with detailed karat, weight and price-band specifications. Open a
            trade inquiry to receive the full catalogue.
          </p>
          <Link to={Route.Inquiry} className="btn btn-gold">
            Request Catalogue <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Collections;
