import { Link } from 'react-router-dom';

import { useReveal } from '@/hooks/useReveal';
import { Brand, Route } from '@/constants/enum';

const CHANNELS = [
  { num: '01', h: 'WhatsApp', p: 'For fast responses during trading hours. The desk monitors WhatsApp from 09:00–19:00 IST, Monday to Saturday.', link: 'https://wa.me/912222420000', label: 'Open WhatsApp →' },
  { num: '02', h: 'Instagram', p: 'The atelier\'s visual record — new releases, bench moments, and seasonal collections. DMs are monitored but slower than WhatsApp.', link: 'https://instagram.com', label: 'View on Instagram →' },
  { num: '03', h: 'Pinterest', p: 'Our design archive and trend board, maintained by the Leo Gold design studio. Useful for buyers researching the catalogue.', link: 'https://pinterest.com', label: 'Browse Pinterest →' },
  { num: '04', h: 'YouTube', p: 'Long-form atelier documentaries and process films. A full floor tour of Leo Gold was released in February 2026.', link: 'https://youtube.com', label: 'Watch on YouTube →' },
];

const Contact = () => {
  useReveal();
  return (
    <>
      {/* Hero */}
      <section className="hero hero-inner">
        <div className="hero-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1900&q=80')" }} />
        <div className="shell hero-content">
          <span className="eyebrow hero-eyebrow">VII. Contact</span>
          <h1 className="hero-title">Step inside<em>the atelier.</em></h1>
          <p className="hero-sub">The desk is open Monday to Saturday, 09:30–18:30 IST. For new trade accounts, the fastest route is a WhatsApp message to the number below.</p>
        </div>
        <div className="hero-meta"><span>VII. Contact</span><span>{Brand.RomanYear}</span></div>
      </section>

      {/* Contact cards */}
      <section className="section">
        <div className="shell">
          <div className="section-head-center reveal">
            <span className="eyebrow center">Get in Touch</span>
            <h2 style={{ marginTop: 22 }}>Three ways<em>to reach the desk.</em></h2>
          </div>
          <div className="contact-grid reveal">
            <div className="contact-card">
              <div className="cc-icon">📍</div>
              <h4>The Atelier</h4>
              <p>Leo Gold, 14–16 Zaveri Bazaar,<br />Mumbai 400 002, Maharashtra, India.</p>
              <span className="link-arrow">Get Directions <span>→</span></span>
            </div>
            <div className="contact-card">
              <div className="cc-icon">📞</div>
              <h4>Telephone</h4>
              <p>Trade desk, atelier visits<br />and account queries.</p>
              <a href="tel:+912222420000" className="link-arrow">+91 22 2242 0000 <span>→</span></a>
            </div>
            <div className="contact-card">
              <div className="cc-icon">✉️</div>
              <h4>Correspond</h4>
              <p>Trade accounts, export documentation,<br />bespoke commissions.</p>
              <a href="mailto:trade@khodiyarjewellers.com" className="link-arrow">trade@khodiyarjewellers.com <span>→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-tight" id="map">
        <div className="shell">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">The Address</span>
              <h2 style={{ marginTop: 18 }}>{Brand?.AtelierName},<em>Zaveri Bazaar.</em></h2>
            </div>
            <p>We are on the fourth floor above the main Zaveri Bazaar arcade, accessible by the central lift. Visitors are received by appointment only.</p>
          </div>
          <div className="map-shell reveal">
            <iframe
              src="https://www.google.com/maps?q=Zaveri+Bazaar,+Mumbai&output=embed"
              title={`${Brand?.Name} location`}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-overlay">
              <h5>{Brand?.Name}</h5>
              <p>{Brand?.AtelierName} · 14–16 Zaveri Bazaar · Mumbai 400 002</p>
              <span className="link-arrow">Open in Maps <span>→</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick channels */}
      <section className="section section-ivory">
        <div className="shell">
          <div className="section-head-center reveal">
            <span className="eyebrow center">Elsewhere</span>
            <h2 style={{ marginTop: 22 }}>Find us<em>across channels.</em></h2>
          </div>
          <div className="values reveal">
            {CHANNELS.map(c => (
              <div key={c.num} className="value" style={{ textAlign: 'center' }}>
                <div className="value-num">{c.num}</div>
                <h4>{c.h}</h4>
                <p>{c.p}</p>
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="link-arrow">{c.label}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="shell">
          <span className="eyebrow center" style={{ color: 'var(--gold-light)' }}>For the Trade</span>
          <h2 style={{ marginTop: 22 }}>We would be honoured<em>to hear from you.</em></h2>
          <p>A detailed inquiry helps us respond precisely. The form takes two minutes.</p>
          <Link to={Route.Inquiry} className="btn btn-gold">Open an Inquiry <span className="arrow">→</span></Link>
        </div>
      </section>
    </>
  );
};

export default Contact;

