import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useReveal } from '@/hooks/useReveal';
import { Brand, Route } from '@/constants/enum';

type Cat = 'all' | 'trends' | 'market' | 'manufacturing' | 'industry' | 'fashion' | 'investment';
const CATS: { key: Cat; label: string }[] = [
  { key: 'all',           label: 'All' },
  { key: 'trends',        label: 'Trends' },
  { key: 'market',        label: 'Market' },
  { key: 'manufacturing', label: 'Manufacturing' },
  { key: 'industry',      label: 'Industry' },
  { key: 'fashion',       label: 'Fashion' },
  { key: 'investment',    label: 'Investment' },
];

const ARTICLES = [
  { img: 'photo-1611652022419-a9419f74343d', cat: 'trends',        catLabel: 'Trends',        date: '14 May 2026', read: '7 min read', title: 'Polki Is Not a Trend. It Is a Sentence.',          excerpt: 'How the uncut-stone aesthetic has quietly become the defining idiom of Indian fine jewellery — for the second time in history.' },
  { img: 'photo-1605100804763-247f67b3557e', cat: 'market',         catLabel: 'Market',        date: '08 May 2026', read: '5 min read', title: 'Gold Above 74K: A Wholesaler\'s Playbook.',           excerpt: 'When spot climbs, margins compress. Here is the three-step adjustment we recommend to every trade partner during a sustained rally.' },
  { img: 'photo-1620625515032-6ed0c1790c75', cat: 'manufacturing',  catLabel: 'Manufacturing', date: '01 May 2026', read: '9 min read', title: 'Why Our Casting Yield Is 96%.',                     excerpt: 'It is not magic — it is a Solidscape T76+ and a casting supervisor who has not missed a morning weigh-in since 2011.' },
  { img: 'photo-1599643478518-a784e5dc4c8f', cat: 'industry',       catLabel: 'Industry',      date: '24 Apr 2026', read: '6 min read', title: 'The BIS Second Amendment: What Changed.',           excerpt: 'The April 2025 hallmarking amendment tightened the Unique Identification Marking rules. Here is the practical impact for retailers.' },
  { img: 'photo-1535632066927-ab7c9ab60908', cat: 'fashion',        catLabel: 'Fashion',       date: '18 Apr 2026', read: '4 min read', title: 'Matte vs Mirror: The Finish Conversation.',          excerpt: 'Spring buyers are splitting evenly between brushed and polished surfaces. We explain the technique and price differential behind each.' },
  { img: 'photo-1515562141207-7a88fb7ce338', cat: 'investment',     catLabel: 'Investment',    date: '11 Apr 2026', read: '8 min read', title: 'Jewellery as an Asset Class for NRI Buyers.',        excerpt: 'Three questions every NRI diaspora retailer should answer before stocking investment-grade pieces in a foreign-currency market.' },
  { img: 'photo-1573408301185-9146fe634ad0', cat: 'trends',         catLabel: 'Trends',        date: '04 Apr 2026', read: '6 min read', title: 'The South Indian Revival: Temple Jewellery in 2026.', excerpt: 'After two decades of Mughal dominance, temple-work and Kemp stones are leading the buying brief from buyers in the Gulf and the US.' },
  { img: 'photo-1602173574767-37ac01994b2a', cat: 'manufacturing',  catLabel: 'Manufacturing', date: '28 Mar 2026', read: '5 min read', title: 'From Sketch to Hallmark in Fourteen Days.',          excerpt: 'A plain-language account of what actually happens to your bespoke order once the CAD is approved. Stage by stage, day by day.' },
  { img: 'photo-1611591437281-460bfbe1220a', cat: 'market',         catLabel: 'Market',        date: '21 Mar 2026', read: '7 min read', title: 'Rupee Depreciation and Your Next Consignment.',      excerpt: 'When INR weakens against the dollar, your landed cost in AED, GBP or USD changes. We walk through the currency maths wholesale buyers should run.' },
];

const FEATURED = {
  img: 'photo-1583937443351-3a543c5b8a05',
  cat: 'Bridal',
  date: '20 May 2026',
  read: '12 min read',
  title: 'The Bridal Gold Brief for 2026: What Brides and Retailers Both Want.',
  body: 'After reviewing our top-30 wholesale accounts and speaking to eight bridal stylists in Mumbai, Surat and Dubai, we have distilled the 2026 bridal brief into four non-negotiable design notes — and one quiet revolution in weight.',
};

const Blog = () => {
  useReveal();
  const [cat, setCat] = useState<Cat>('all');
  const visible = cat === 'all' ? ARTICLES : ARTICLES.filter(a => a.cat === cat);

  return (
    <>
      {/* Hero */}
      <section className="hero hero-inner">
        <div className="hero-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583937443351-3a543c5b8a05?auto=format&fit=crop&w=1900&q=80')" }} />
        <div className="shell hero-content">
          <span className="eyebrow hero-eyebrow">IX. Atelier Journal</span>
          <h1 className="hero-title">Notes from<em>the bench.</em></h1>
          <p className="hero-sub">Perspective from the Leo Gold atelier — on markets, craft, trends and the quiet discipline of a long-running jewellery maison.</p>
        </div>
        <div className="hero-meta"><span>IX. Atelier Journal</span><span>{Brand.RomanYear}</span></div>
      </section>

      {/* Featured */}
      <section className="section">
        <div className="shell">
          <div className="journal-featured reveal">
            <div className="media" style={{ backgroundImage: `url('https://images.unsplash.com/${FEATURED.img}?auto=format&fit=crop&w=1400&q=80')` }} />
            <div className="text">
              <div className="journal-meta">
                <span className="chip">{FEATURED.cat}</span>
                <span className="dot">·</span>
                <span>{FEATURED.date}</span>
                <span className="dot">·</span>
                <span>{FEATURED.read}</span>
              </div>
              <h2>{FEATURED.title}</h2>
              <p>{FEATURED.body}</p>
              <span className="link-arrow">Read the brief <span>→</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="section section-ivory">
        <div className="shell">
          <div className="section-head-center reveal">
            <span className="eyebrow center">Atelier Journal</span>
            <h2 style={{ marginTop: 22 }}>From the bench<br /><em>and the desk.</em></h2>
          </div>
          <div className="cat-chips reveal">
            {CATS.map(c => (
              <button key={c.key} className={cat === c.key ? 'active' : ''} onClick={() => setCat(c.key)}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="journal-grid reveal">
            {visible.map(a => (
              <article key={a.title} className="journal-card">
                <div className="journal-img">
                  <img src={`https://images.unsplash.com/${a.img}?auto=format&fit=crop&w=800&q=80`} alt={a.title} loading="lazy" />
                </div>
                <div className="journal-meta">
                  <span className="chip">{a.catLabel}</span>
                  <span className="dot">·</span>
                  <span>{a.date}</span>
                </div>
                <h3>{a.title}</h3>
                <p className="excerpt">{a.excerpt}</p>
                <span className="read">{a.read}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section section-ivory">
        <div className="shell">
          <div className="newsletter reveal">
            <div className="nl-text">
              <span className="eyebrow">The Atelier Letter</span>
              <h2 style={{ marginTop: 18 }}>Once a month,<em>from the bench.</em></h2>
              <p>A short brief from our atelier: one market observation, one craft note, one new release. No marketing — just the maison's view of the week.</p>
            </div>
            <form className="nl-form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" aria-label="Email address" required />
              <button type="submit" className="btn btn-gold">Subscribe <span className="arrow">→</span></button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="shell">
          <span className="eyebrow center" style={{ color: 'var(--gold-light)' }}>Get in Touch</span>
          <h2 style={{ marginTop: 22 }}>The atelier desk<em>is one call away.</em></h2>
          <Link to={Route.Contact} className="btn btn-gold">Reach Out <span className="arrow">→</span></Link>
        </div>
      </section>
    </>
  );
};

export default Blog;

