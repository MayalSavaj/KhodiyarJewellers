import { Link } from 'react-router-dom';

import { useReveal } from '@/hooks/useReveal';
import { Brand, Route } from '@/constants/enum';

const Home = () => {
  useReveal();

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div
          className="hero-img"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1900&q=80')",
          }}
        />
        <div className="shell hero-content">
          <span className="eyebrow hero-eyebrow">{Brand?.Name} · Heritage {Brand?.RomanYear}</span>
          <h1 className="hero-title">
            Crafted in&nbsp;gold,<em>worn for generations.</em>
          </h1>
          <p className="hero-sub">
            A maison devoted to the slow art of heirloom jewellery — where bridal traditions, modern
            silhouettes and the discipline of the {Brand?.AtelierName}  atelier come together under one roof.
          </p>
          <div className="hero-cta">
            <Link to={Route.Collections} className="btn btn-ghost">
              Discover Collections <span className="arrow">→</span>
            </Link>
            <Link to={Route.Inquiry} className="btn btn-ghost">
              Trade Inquiries <span className="arrow">→</span>
            </Link>
          </div>
        </div>
        <div className="hero-meta">
          <span>I. The Maison</span>
          <span className="scroll-cue">Scroll to explore</span>
          <span>{Brand.RomanYear}</span>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="shell">
          <div className="story">
            <div className="story-text reveal">
              <span className="eyebrow">A Family Maison</span>
              <h2 style={{ marginTop: 24 }}>
                Four decades of <em>quiet mastery.</em>
              </h2>
              <p>
                What began in 1982 as a single bench in a narrow Mumbai lane is today a maison whose
                pieces accompany weddings, anniversaries and inheritances across three continents.
                {Brand?.Name} was never built to be fashionable — it was built to last.
              </p>
              <p>
                Every piece that bears our name is shaped, weighed and finished by the artisans of{' '}
                <span style={{ fontFamily: 'var(--font-italic)', color: 'var(--gold-dark)' }}>{Brand?.AtelierName}</span>,
                our in-house atelier — a workshop where modern precision meets the unhurried hand of an
                older trade.
              </p>
              <Link to={Route.About} className="link-arrow" style={{ marginTop: 28 }}>
                Read our story <span>→</span>
              </Link>

              <div className="story-stats">
                <div>
                  <div className="stat-num">42<sup>+</sup></div>
                  <div className="stat-label">Years of Craft</div>
                </div>
                <div>
                  <div className="stat-num">1,200<sup>+</sup></div>
                  <div className="stat-label">Trade Partners</div>
                </div>
                <div>
                  <div className="stat-num">96<sup>%</sup></div>
                  <div className="stat-label">Hallmark Yield</div>
                </div>
              </div>
            </div>

            <div className="story-media reveal" data-delay="2">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80"
                alt="Artisan crafting a gold necklace"
              />
              <div className="frame-tag">Atelier · Floor IV</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section section-ivory">
        <div className="shell">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Featured Collections</span>
              <h2 style={{ marginTop: 24 }}>
                Seven chapters,<br /><em>one inheritance.</em>
              </h2>
            </div>
            <p>
              From the candlelit grammar of bridal couture to the clean geometries of our modern line —
              every collection is composed in our own ateliers, in karat-certified gold.
            </p>
          </div>

          <div className="collections-grid">
            {[
              { img: 'photo-1535632066927-ab7c9ab60908', num: 'I.', name: 'Bridal Couture', desc: 'Heirloom sets · Polki · Kundan', tall: true },
              { img: 'photo-1611652022419-a9419f74343d', num: 'II.', name: 'Necklaces', desc: 'Choker · Long-rani · Mangalsutra', delay: 1 },
              { img: 'photo-1535556116002-6281ff3e9f36', num: 'III.', name: 'Gold Rings', desc: 'Couture · Solitaire · Cocktail', delay: 2 },
              { img: 'photo-1602173574767-37ac01994b2a', num: 'IV.', name: 'Earrings', desc: 'Jhumka · Chandbali · Studs', wide: true },
              { img: 'photo-1573408301185-9146fe634ad0', num: 'V.', name: 'Bangles', desc: 'Patli · Kada · Bracelet', delay: 1 },
              { img: 'photo-1515562141207-7a88fb7ce338', num: 'VI.', name: 'Traditional', desc: 'Temple · Antique · Rajwadi', delay: 2 },
            ].map(c => (
              <Link
                to={Route.Collections}
                key={c.num}
                className={`collection-card reveal${c.tall ? ' tall' : ''}${c.wide ? ' wide' : ''}`}
                {...(c.delay ? { 'data-delay': c.delay } : {})}
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="section mfg">
        <div className="shell mfg-inner">
          <div className="mfg-text reveal">
            <span className="eyebrow">{Brand?.AtelierName} · Manufacturing</span>
            <h2>
              The hand,<em>then the machine.</em>
            </h2>
            <p>
              The {Brand?.AtelierName} workshop is the silent partner behind every {Brand?.Name} piece. Across 28,000
              square feet of climate-controlled ateliers, our master karigars work alongside CAD
              designers, laser welders and assay laboratories — the union of two centuries of jewellery
              practice and the precision of contemporary tooling.
            </p>
            <p>
              This is not a factory. It is an atelier where 240 hands turn raw bullion into objects
              worth inheriting.
            </p>
            <ul className="mfg-features">
              {[
                'BIS-Hallmarked gold from sourced refineries',
                'CAD & 3D wax printing studio',
                'Laser welding & rhodium plating bath',
                'In-house assay & karat verification lab',
                'Hand-set Polki & Kundan ateliers',
                'Capacity for bulk wholesale & bespoke',
              ].map(f => <li key={f}>{f}</li>)}
            </ul>
            <Link to={Route.Manufacturing} className="link-arrow" style={{ marginTop: 36 }}>
              Tour the workshop <span>→</span>
            </Link>
          </div>

          <div className="mfg-media reveal" data-delay="2">
            <div className="m" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?auto=format&fit=crop&w=900&q=80')" }} />
            <div className="m" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518544866330-95a2bec0146f?auto=format&fit=crop&w=900&q=80')" }} />
            <div className="m" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1633293048312-1844f262e9c5?auto=format&fit=crop&w=900&q=80')" }} />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-tight">
        <div className="shell">
          <div className="section-head-center reveal">
            <span className="eyebrow center">The House Code</span>
            <h2 style={{ marginTop: 22 }}>
              Four promises<br /><em>kept since 1982.</em>
            </h2>
          </div>
          <div className="values reveal">
            {[
              { num: 'I.',   title: 'Hallmark Purity',   text: 'Every gram of gold leaves our atelier with a BIS-verified karat marking — never less, never blended.' },
              { num: 'II.',  title: 'Made by Hand',       text: 'From wax to polish, our pieces pass through eleven sets of artisan hands — and not one assembly line.' },
              { num: 'III.', title: 'Lifetime Service',   text: 'Cleaning, re-polish and stone-setting are guaranteed to all trade and private clients for life.' },
              { num: 'IV.',  title: 'Quiet Sourcing',     text: 'We work only with refineries who hold Responsible Jewellery Council certification.' },
            ].map(v => (
              <div className="value" key={v.num}>
                <span className="num">{v.num}</span>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="quote section-ivory">
        <div className="shell reveal">
          <div className="quote-mark">"</div>
          <p className="quote-text">
            A piece of Khodiyar gold doesn't ask for attention. It earns it — slowly, across a wedding,
            an heirloom, a lifetime.
          </p>
          <div className="quote-author">
            Mrs. K. Patel · <span>Mumbai · Trade Partner since 1996</span>
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
            Open an atelier line.<em>Become a partner.</em>
          </h2>
          <p>
            Wholesalers, designers and retail houses are warmly invited to visit our Mumbai atelier or
            open a trade catalogue inquiry.
          </p>
          <Link to={Route.Inquiry} className="btn btn-gold">
            Begin an Inquiry <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
