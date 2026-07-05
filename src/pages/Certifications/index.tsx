import { Link } from 'react-router-dom';

import { useReveal } from '@/hooks/useReveal';
import { Brand, Route } from '@/constants/enum';

const CERTS = [
  {
    glyph: 'BIS', h: 'Bureau of Indian Standards',
    body: 'Every piece carries a BIS hallmark under the Hallmarking Scheme for Gold Jewellery & Artefacts. Our in-house assay chamber is BIS-licensed and audited annually.',
    no: 'Licence No. BIS/HAL/2019/0042',
  },
  {
    glyph: 'RJC', h: 'Responsible Jewellery Council',
    body: 'Certified member of the RJC — the global standard for responsible sourcing, business ethics and environmental performance across the jewellery supply chain.',
    no: 'Member Since 2021 · Audit Year 2024',
  },
  {
    glyph: 'GJE', h: 'GJEPC Registered Exporter',
    body: 'Registered exporter under the Gem & Jewellery Export Promotion Council of India. All export documentation is prepared to GJEPC format as standard.',
    no: 'Export House Code GJ/2011/00318',
  },
  {
    glyph: 'IGI', h: 'IGI Laboratory Affiliate',
    body: 'Affiliated with the International Gemological Institute for stone grading and diamond certification. Stones above 0.30ct are available with IGI report on request.',
    no: 'Affiliate No. IGI/MUM/2018/A12',
  },
  {
    glyph: 'ISO', h: 'ISO 9001:2015',
    body: 'Quality management system certified to ISO 9001:2015 — covering our design, casting, setting, finishing and dispatch processes.',
    no: 'Certificate No. QMS/2020/04411',
  },
  {
    glyph: 'MSM', h: 'MSME Udyam Registered',
    body: 'Registered under the Ministry of MSME\'s Udyam scheme, enabling transparent government-audited documentation for all trade and export partners.',
    no: 'Udyam No. MH-27-0021433',
  },
];

const STEPS = [
  { n: '01', h: 'Pre-cast Assay', p: 'All incoming bullion lots are tested on our XRF cabinet before a single gram enters a crucible. The lot number is logged against every casting batch.' },
  { n: '02', h: 'Mid-process Test', p: 'A sample from each casting batch is cut and tested at the mid-process stage — before setting begins. Any batch below tolerance is remelted.' },
  { n: '03', h: 'BIS Assaying Centre', p: 'Finished pieces are submitted to our BIS-licensed assay chamber. The karat, fineness and gross weight are recorded and signed by a licensed assayer.' },
  { n: '04', h: 'Laser Hallmark', p: 'The BIS Unique ID is laser-engraved onto each piece alongside the karat mark and our maker\'s mark — legible under 10× magnification.' },
];

const Certifications = () => {
  useReveal();
  return (
    <>
      {/* Hero */}
      <section className="hero hero-inner">
        <div className="hero-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518544866330-95a2bec0146f?auto=format&fit=crop&w=1900&q=80')" }} />
        <div className="shell hero-content">
          <span className="eyebrow hero-eyebrow">V. Certifications</span>
          <h1 className="hero-title">Independently<em>verified, by hand.</em></h1>
          <p className="hero-sub">Six independent certifications across quality, responsibility, export and purity — each maintained with an annual audit, not a one-time application.</p>
        </div>
        <div className="hero-meta"><span>V. Certifications</span><span>{Brand.RomanYear}</span></div>
      </section>

      {/* Cert grid */}
      <section className="section">
        <div className="shell">
          <div className="section-head-center reveal">
            <span className="eyebrow center">Our Accreditations</span>
            <h2 style={{ marginTop: 22 }}>Six marks<em>that travel with the piece.</em></h2>
            <p>Each certificate below is maintained with an active annual audit — not a historical award.</p>
          </div>
          <div className="cert-grid">
            {CERTS.map(c => (
              <div key={c.glyph} className="cert-card reveal">
                <div className="cert-seal">
                  <div className="glyph">{c.glyph}</div>
                </div>
                <div className="cert-meta" />
                <h4>{c.h}</h4>
                <p>{c.body}</p>
                <div className="cert-no">{c.no}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hallmark process */}
      <section className="section section-ivory">
        <div className="shell">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">The Hallmarking Process</span>
              <h2 style={{ marginTop: 24 }}>Four stages,<em>zero shortcuts.</em></h2>
            </div>
            <p>Every Khodiyar piece passes through four discrete assay and marking stages before dispatch. Here is each one, plainly described.</p>
          </div>
          <div className="values">
            {STEPS.map(s => (
              <div key={s.n} className="value reveal">
                <div className="value-num">{s.n}</div>
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance strip */}
      <section className="section">
        <div className="shell">
          <div className="compliance-strip reveal">
            <div className="item"><div className="c-num">42<sup>+</sup></div><div className="c-label">Years in Trade</div></div>
            <div className="item"><div className="c-num">6</div><div className="c-label">Active Certifications</div></div>
            <div className="item"><div className="c-num">96<sup>%</sup></div><div className="c-label">Casting Yield</div></div>
            <div className="item"><div className="c-num">3</div><div className="c-label">Annual Audits</div></div>
          </div>
        </div>
      </section>

      {/* Digital cert */}
      <section className="section section-dark">
        <div className="shell">
          <div className="section-head-center reveal">
            <span className="eyebrow center" style={{ color: 'var(--gold-light)' }}>Digital Certificates</span>
            <h2 style={{ marginTop: 22 }}>Every consignment,<em>documented.</em></h2>
            <p style={{ color: 'rgba(250,247,241,0.75)' }}>Every Khodiyar consignment ships with a digital certificate package — available as a PDF, QR-scannable, and formatted for major customs systems.</p>
          </div>
          <ul className="mfg-features reveal" style={{ maxWidth: 640, margin: '40px auto 0', listStyle: 'none', padding: 0 }}>
            {['BIS assay certificate per piece', 'Net weight declaration per lot', 'Purity & karat confirmation letter', 'Maker\'s declaration (GJEPC format)', 'IGI stone report (on request)', 'QR-linked digital authentication'].map(f => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="shell">
          <span className="eyebrow center" style={{ color: 'var(--gold-light)' }}>For the Trade</span>
          <h2 style={{ marginTop: 22 }}>Request a<em>certification pack.</em></h2>
          <p>Trade partners may request a full certification documentation pack — certificates, audit summaries and assay methodology — for due diligence purposes.</p>
          <Link to={Route.Inquiry} className="btn btn-gold">Request Documentation <span className="arrow">→</span></Link>
        </div>
      </section>
    </>
  );
};

export default Certifications;

