import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useReveal } from '@/hooks/useReveal';
import { Brand, Route } from '@/constants/enum';

type FCat = 'all' | 'mfg' | 'wholesale' | 'cert' | 'quality' | 'delivery' | 'partner';
const FCATS: { key: FCat; label: string }[] = [
  { key: 'all',       label: 'All Questions' },
  { key: 'mfg',       label: 'Manufacturing' },
  { key: 'wholesale', label: 'Wholesale' },
  { key: 'cert',      label: 'Certifications' },
  { key: 'quality',   label: 'Quality' },
  { key: 'delivery',  label: 'Delivery' },
  { key: 'partner',   label: 'Partnerships' },
];

const FAQS: { num: string; cat: FCat; q: string; a: string }[] = [
  { num: 'I',      cat: 'mfg',       q: 'Is all manufacturing done in-house at Leo Gold?',                          a: 'Yes — every piece is designed, cast, set, finished and assayed under our roof at Leo Gold, Zaveri Bazaar. We do not sub-contract any stage of production.' },
  { num: 'II',     cat: 'mfg',       q: 'What is the Leo Gold atelier\'s monthly production capacity?',              a: 'The atelier can produce approximately 4,800 finished pieces per month, or 280kg net gold weight, depending on piece complexity. Custom bridal pieces are managed within a separate small-batch schedule.' },
  { num: 'III',    cat: 'mfg',       q: 'How long does a bespoke order take from CAD approval to dispatch?',        a: 'Standard bespoke pieces: 10–14 working days from CAD sign-off. Complex bridal sets with polki or kundan: 18–24 working days. We confirm a production schedule before accepting any order.' },
  { num: 'IV',     cat: 'mfg',       q: 'Can I visit the Leo Gold atelier?',                                        a: 'Yes. Trade partners and serious enquiry buyers are welcome to schedule a guided atelier visit. Contact the trade desk to arrange a date.' },
  { num: 'V',      cat: 'mfg',       q: 'What software does your design studio use?',                               a: 'RhinoGold and Matrix for 3D CAD. Wax prototypes are printed on a Solidscape T76+ before approval. Design files can be shared as STL or OBJ on request.' },
  { num: 'VI',     cat: 'wholesale', q: 'What is the minimum order quantity for a new trade account?',              a: 'The minimum for a first order is 50g net gold weight. There is no minimum on repeat orders once a trade account is established.' },
  { num: 'VII',    cat: 'wholesale', q: 'How is wholesale pricing structured?',                                     a: 'Pricing is set against the daily Mumbai Bullion Association close plus a making charge by piece category. Making charges are published to registered trade partners. There are no hidden fees.' },
  { num: 'VIII',   cat: 'wholesale', q: 'Do you offer consignment stock arrangements?',                             a: 'We offer consignment terms to established trade partners after 12 months of account history. Please raise this with your trade desk contact after your first season.' },
  { num: 'IX',     cat: 'wholesale', q: 'Can I order against my own designs or samples?',                           a: 'Yes. We accept design briefs, CAD files, and physical samples for reproduction. All IP in a bespoke brief remains with the commissioning partner unless otherwise agreed.' },
  { num: 'X',      cat: 'cert',      q: 'Is every piece BIS hallmarked?',                                          a: 'Yes. Every piece above 2g net weight carries a BIS hallmark, including the Unique Identification Mark introduced under the 2021 amendment. Each is accompanied by an in-house assay certificate.' },
  { num: 'XI',     cat: 'cert',      q: 'Are certificates available for individual retail pieces?',                 a: 'Yes. Piece-level assay certificates are available for all pieces. IGI stone reports are available for diamond-set pieces above 0.30ct.' },
  { num: 'XII',    cat: 'cert',      q: 'What is your RJC certification status?',                                   a: 'We are a certified Responsible Jewellery Council member, last audited in 2024. Our RJC certificate covers sourcing ethics, labour practices and environmental management.' },
  { num: 'XIII',   cat: 'quality',   q: 'What is your casting yield, and why does it matter?',                     a: 'Our casting yield is 96% — meaning 96g of metal is recovered as finished product from every 100g melted. This matters because it reduces waste cost and ensures consistent alloy quality across a batch.' },
  { num: 'XIV',    cat: 'quality',   q: 'How do you ensure consistent colour across a batch of pieces?',            a: 'All plating baths — rhodium, 24K, and palladium white — are calibrated weekly. Bath chemistry is logged per batch. Colour consistency is checked by eye under standard illuminant D65 before dispatch.' },
  { num: 'XV',     cat: 'quality',   q: 'What is your process if a piece does not pass final QC?',                  a: 'Pieces that fail QC are remelted or re-worked at our cost, not the partner\'s. We do not dispatch and ask forgiveness. The dispatch timeline adjusts; we notify you immediately.' },
  { num: 'XVI',    cat: 'quality',   q: 'Can I request a sample before placing a production order?',               a: 'Yes. Single samples are available for most catalogue pieces at the published sample rate. Custom samples are quoted per brief.' },
  { num: 'XVII',   cat: 'delivery',  q: 'Which markets do you currently export to?',                               a: 'We have active accounts in 47 markets, including the UAE, UK, USA, Singapore, Australia, Canada, Germany, Mauritius, Kenya, and all Gulf Cooperation Council states.' },
  { num: 'XVIII',  cat: 'delivery',  q: 'What logistics partners do you use for international shipments?',          a: 'Brinks, Malca-Amit, and Sequel Logistics for insured jewellery freight. For smaller parcels, we use registered courier with declared value insurance. Courier choice can be specified by the partner.' },
  { num: 'XIX',    cat: 'delivery',  q: 'How is jewellery packed for transit?',                                    a: 'Each piece is tissue-wrapped in branded archival paper, boxed individually, and placed in a tamper-evident outer carton. The packing list is enclosed with piece-level weight and reference.' },
  { num: 'XX',     cat: 'delivery',  q: 'How long does international dispatch take from order confirmation?',       a: 'In-stock pieces ship within 2 working days. Production orders ship on the agreed production date. Customs clearance time varies by destination — typically 1–4 days for UAE, UK and Singapore.' },
  { num: 'XXI',    cat: 'partner',   q: 'How do I open a trade account with Khodiyar Jewellers?',                  a: 'Submit a trade inquiry from this site with your business details. The trade desk will respond within one business day with an account application, pricing schedule, and documentation checklist.' },
  { num: 'XXII',   cat: 'partner',   q: 'What documentation is required to open a trade account?',                 a: 'GST certificate (or equivalent for non-Indian buyers), business registration, and a trade reference. International buyers require a business registration and import licence if applicable.' },
  { num: 'XXIII',  cat: 'partner',   q: 'Do you attend international jewellery trade fairs?',                      a: 'We exhibit at IIJS (Mumbai), Dubai Jewellery Show, and JCK Las Vegas annually. Partners can arrange private atelier meetings during these events through the trade desk.' },
  { num: 'XXIV',   cat: 'partner',   q: 'Is there a partner referral programme?',                                  a: 'Yes. Established partners who refer a verified trade account receive a credit note equivalent to 1.5% of the referred partner\'s first order value, applied against their next invoice.' },
];

const FAQ = () => {
  useReveal();
  const [cat, setCat] = useState<FCat>('all');
  const [open, setOpen] = useState<string | null>(null);
  const visible = cat === 'all' ? FAQS : FAQS.filter(f => f.cat === cat);

  return (
    <>
      {/* Hero */}
      <section className="hero hero-inner">
        <div className="hero-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?auto=format&fit=crop&w=1900&q=80')" }} />
        <div className="shell hero-content">
          <span className="eyebrow hero-eyebrow">X. Frequently Asked</span>
          <h1 className="hero-title">The things partners<em>ask us first.</em></h1>
          <p className="hero-sub">Twenty-four questions from our trade network, answered plainly. If yours is not here, the desk is one message away.</p>
        </div>
        <div className="hero-meta"><span>X. Frequently Asked</span><span>{Brand.RomanYear}</span></div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="shell">
          <div className="faq-cat-bar reveal">
            {FCATS.map(c => (
              <button key={c.key} className={cat === c.key ? 'active' : ''} onClick={() => { setCat(c.key); setOpen(null); }}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="faq-list reveal">
            {visible.map(f => (
              <div key={f.num} className={`faq-item${open === f.num ? ' open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(prev => prev === f.num ? null : f.num)} aria-expanded={open === f.num}>
                  <span className="num">{f.num}</span>
                  {f.q}
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="shell">
          <span className="eyebrow center" style={{ color: 'var(--gold-light)' }}>Still Have Questions?</span>
          <h2 style={{ marginTop: 22 }}>Our partnership team<em>is one call away.</em></h2>
          <p>The trade desk responds within one business day. For urgent queries, WhatsApp is faster.</p>
          <Link to={Route.Contact} className="btn btn-gold">Reach the Desk <span className="arrow">→</span></Link>
        </div>
      </section>
    </>
  );
};

export default FAQ;

