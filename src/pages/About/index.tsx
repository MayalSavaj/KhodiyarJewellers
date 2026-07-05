import { Link } from 'react-router-dom';

import { useReveal } from '@/hooks/useReveal';
import { Brand, Route } from '@/constants/enum';

const About = () => {
  useReveal();

  return (
    <>
      {/* Hero */}
      <section className="hero hero-inner">
        <div
          className="hero-img"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1583937443351-3a543c5b8a05?auto=format&fit=crop&w=1900&q=80')",
          }}
        />
        <div className="shell hero-content">
          <span className="eyebrow hero-eyebrow">Chapter One · The Story</span>
          <h1 className="hero-title">
            Of gold,<em>and the hands that shaped it.</em>
          </h1>
          <p className="hero-sub">
            A maison that grew from a single karigar's bench into one of India's most quietly respected
            names in heirloom jewellery.
          </p>
        </div>
        <div className="hero-meta">
          <span>II. Our Story</span>
          <span>{Brand.RomanYear}</span>
        </div>
      </section>

      {/* Story narrative */}
      <section className="section">
        <div className="shell">
          <div className="story">
            <div className="story-text reveal">
              <span className="eyebrow">The Beginning</span>
              <h2 style={{ marginTop: 24 }}>
                A workshop, a name,<em>a promise.</em>
              </h2>
              <p>
                In the monsoon of 1982, our founder Shri Bhagwandas Patel inherited a single karigar's
                bench in Mumbai's Zaveri Bazaar. He came with little capital, a thorough knowledge of
                22-karat gold, and a stubborn idea: that wholesale jewellery did not have to mean
                compromised jewellery.
              </p>
              <p>
                He named the shop <em>Khodiyar</em> — after the family deity — and refused to let a
                piece leave the bench until he could weigh his name on it.
              </p>
              <p>
                Forty-two years later, the bench has grown into a 28,000 sq.ft. atelier. The principle
                has not changed.
              </p>
            </div>
            <div className="story-media reveal" data-delay="2">
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80"
                alt="Heritage jewellery craftsmanship"
              />
              <div className="frame-tag">Founder · 1982</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-ivory">
        <div className="shell">
          <div className="section-head-center reveal">
            <span className="eyebrow center">A Quiet Chronology</span>
            <h2 style={{ marginTop: 22 }}>
              Four decades<br /><em>in five chapters.</em>
            </h2>
          </div>

          <div className="timeline">
            {[
              {
                year: '1982',
                title: 'The Founding Bench',
                text: "Shri Bhagwandas Patel opens a single-karigar workshop in Zaveri Bazaar, Mumbai. The first commission — a bridal mangalsutra for a Surat family — remains in the same family today.",
                left: true,
              },
              {
                year: '1996',
                title: 'First Wholesale Partner',
                text: "Khodiyar opens its first formal trade catalogue with a network of twelve retailers across Gujarat and Maharashtra. The catalogue introduces the first signature Patli bangle.",
                left: false,
              },
              {
                year: '2008',
                title: 'Leo Gold is Founded',
                text: "The family establishes Leo Gold — a dedicated manufacturing atelier — bringing every step of production in-house, from CAD design to final hallmark.",
                left: true,
              },
              {
                year: '2015',
                title: 'International Trade',
                text: "Khodiyar begins serving international wholesalers in Dubai, London and Toronto. A second atelier wing is added for export-grade bridal couture.",
                left: false,
              },
              {
                year: '2024',
                title: 'The Modern Atelier',
                text: "A new design studio is opened — pairing the maison's heritage karigars with a generation of CAD-trained designers. The Modern Collection launches the same year.",
                left: true,
              },
            ].map(({ year, title, text, left }) => (
              <div className="timeline-item reveal" key={year}>
                {left ? (
                  <div className="timeline-content">
                    <span className="timeline-year">{year}</span>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                ) : <div />}
                <div className="dot" />
                {!left ? (
                  <div className="timeline-content">
                    <span className="timeline-year">{year}</span>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                ) : <div />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leo Gold intro */}
      <section className="section mfg">
        <div className="shell mfg-inner">
          <div className="mfg-text reveal">
            <span className="eyebrow">Our Atelier</span>
            <h2>
              {Brand?.AtelierName} —<em>the workshop within.</em>
            </h2>
            <p>
              Founded in 2008 as the manufacturing arm of {Brand?.Name}, the {Brand?.AtelierName} atelier exists
              for one purpose: to make sure that every piece sold under the maison's name has been touched,
              weighed and finished under our own roof.
            </p>
            <p>
              Across our floors you will find CAD designers and master setters working side by side,
              BIS-assay technicians next to traditional polishers, and a karigar workshop where some
              artisans have served the family for two generations.
            </p>
            <Link
              to={Route.Manufacturing}
              className="link-arrow"
              style={{ marginTop: 28, color: 'var(--gold-light)', borderColor: 'var(--gold)' }}
            >
              Tour the atelier <span>→</span>
            </Link>
          </div>
          <div className="mfg-media reveal" data-delay="2">
            <div
              className="m"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?auto=format&fit=crop&w=900&q=80')",
              }}
            />
            <div
              className="m"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80')",
              }}
            />
            <div
              className="m"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1612207474005-1b1bc1ce4ec1?auto=format&fit=crop&w=900&q=80')",
              }}
            />
          </div>
        </div>
      </section>

      {/* Quality assurance values */}
      <section className="section-tight">
        <div className="shell">
          <div className="section-head-center reveal">
            <span className="eyebrow center">Quality Assurance</span>
            <h2 style={{ marginTop: 22 }}>
              The pieces leave<br /><em>only when we approve.</em>
            </h2>
          </div>
          <div className="values reveal">
            {[
              {
                num: 'I.',
                title: 'Karat Verification',
                text: "Every batch passes through our in-house BIS-licensed assay chamber before it leaves the floor.",
              },
              {
                num: 'II.',
                title: 'Weight Reconciliation',
                text: "Bullion-in and finished-out is reconciled to the milligram, twice — at casting and at hallmark.",
              },
              {
                num: 'III.',
                title: 'Stone Authentication',
                text: "All gemstones are certified by an independent gemmological laboratory before they reach the setter's bench.",
              },
              {
                num: 'IV.',
                title: 'Master Sign-Off',
                text: "No piece is dispatched without the signed approval of the floor master and a senior partner.",
              },
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
            We are not in the business of selling gold. We are in the business of preserving the
            relationship between a family and an object.
          </p>
          <div className="quote-author">
            Bhagwandas Patel · <span>Founder</span>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="cta-strip">
        <div className="shell">
          <span className="eyebrow center" style={{ color: 'var(--gold-light)' }}>
            Visit the Atelier
          </span>
          <h2 style={{ marginTop: 22 }}>
            Step inside<em>our Mumbai workshop.</em>
          </h2>
          <p>
            Trade partners and retailers are warmly invited to schedule a private visit to the Leo Gold
            atelier in Zaveri Bazaar.
          </p>
          <Link to={Route.Contact} className="btn btn-gold">
            Schedule a Visit <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
