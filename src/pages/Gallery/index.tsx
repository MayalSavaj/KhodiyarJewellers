import { Link } from 'react-router-dom';

import { useReveal } from '@/hooks/useReveal';
import { Brand, Route } from '@/constants/enum';

const PLATES = [
  { img: 'photo-1611652022419-a9419f74343d', tag: 'Necklace · 22K' },
  { img: 'photo-1605100804763-247f67b3557e', tag: 'Ring · Bridal' },
  { img: 'photo-1535632066927-ab7c9ab60908', tag: 'Choker · Kundan' },
  { img: 'photo-1573408301185-9146fe634ad0', tag: 'Bangle · Patli' },
  { img: 'photo-1602173574767-37ac01994b2a', tag: 'Earring · Jhumka' },
  { img: 'photo-1535556116002-6281ff3e9f36', tag: 'Ring · Modern' },
  { img: 'photo-1599643478518-a784e5dc4c8f', tag: 'Atelier · Detail' },
  { img: 'photo-1611591437281-460bfbe1220a', tag: 'Bridal · Couture' },
  { img: 'photo-1515562141207-7a88fb7ce338', tag: 'Traditional' },
  { img: 'photo-1617038220319-276d3cfab638', tag: 'Temple · 22K' },
  { img: 'photo-1633293048312-1844f262e9c5', tag: 'Leo Gold · Floor IV' },
  { img: 'photo-1583937443351-3a543c5b8a05', tag: 'Diamond · Solitaire' },
  { img: 'photo-1620625515032-6ed0c1790c75', tag: 'Karigar · Bench' },
  { img: 'photo-1605648916361-9bc12ad6a569', tag: 'Assay · Hallmark' },
  { img: 'photo-1612207474005-1b1bc1ce4ec1', tag: 'Atelier · Daylight' },
];

const Gallery = () => {
  useReveal();
  return (
    <>
      {/* Hero */}
      <section className="hero hero-inner">
        <div className="hero-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1900&q=80')" }} />
        <div className="shell hero-content">
          <span className="eyebrow hero-eyebrow">The Archive</span>
          <h1 className="hero-title">A gallery<em>of gold and detail.</em></h1>
          <p className="hero-sub">A photographic archive of finished pieces and atelier moments — captured in natural daylight, at the bench.</p>
        </div>
        <div className="hero-meta"><span>V. Gallery</span><span>{Brand.RomanYear}</span></div>
      </section>

      {/* Masonry */}
      <section className="section">
        <div className="shell">
          <div className="section-head-center reveal">
            <span className="eyebrow center">Visual Archive</span>
            <h2 style={{ marginTop: 22 }}>Tap any plate<br /><em>to view in full.</em></h2>
          </div>
          <div className="masonry">
            {PLATES.map(p => (
              <div key={p.img} className="masonry-item reveal">
                <img src={`https://images.unsplash.com/${p.img}?auto=format&fit=crop&w=900&q=80`} alt={p.tag} loading="lazy" />
                <span className="tag">{p.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="shell">
          <span className="eyebrow center" style={{ color: 'var(--gold-light)' }}>Press &amp; Editorial</span>
          <h2 style={{ marginTop: 22 }}>High-resolution<em>library available.</em></h2>
          <p>Press, retailers and editorial partners may request our high-resolution image library and product specifications.</p>
          <Link to={Route.Inquiry} className="btn btn-gold">Request Library <span className="arrow">→</span></Link>
        </div>
      </section>
    </>
  );
};

export default Gallery;
