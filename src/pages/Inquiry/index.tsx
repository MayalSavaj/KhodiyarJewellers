import { useState } from 'react';

import { useReveal } from '@/hooks/useReveal';
import { Brand } from '@/constants/enum';

type FormState = {
  name: string; mobile: string; email: string; business: string;
  nature: string; message: string;
};

const INITIAL: FormState = { name: '', mobile: '', email: '', business: '', nature: '', message: '' };

const Inquiry = () => {
  useReveal();
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      {/* Hero */}
      <section className="hero hero-inner">
        <div className="hero-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1900&q=80')" }} />
        <div className="shell hero-content">
          <span className="eyebrow hero-eyebrow">VI. Inquiries</span>
          <h1 className="hero-title">A note<em>to the atelier.</em></h1>
          <p className="hero-sub">Every letter is read by a member of the trade desk. We answer within one business day. The one that begins a long relationship is rarely the one with the largest first order.</p>
        </div>
        <div className="hero-meta"><span>VI. Inquiries</span><span>{Brand.RomanYear}</span></div>
      </section>

      {/* Form section */}
      <section className="section">
        <div className="shell">
          <div className="inquiry-shell">
            <aside className="inquiry-aside reveal">
              <span className="eyebrow">The Atelier Desk</span>
              <h3 style={{ marginTop: 24, fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3vw,36px)', lineHeight: 1.25 }}>
                Speak with<em style={{ display: 'block' }}>our atelier desk.</em>
              </h3>
              <p>The trade desk handles wholesale accounts, bespoke commissions, export documentation, and atelier visits. There is no ticketing system — a person reads every note.</p>
              <p>For urgent matters, WhatsApp is faster than this form. We respond within the hour during trading days.</p>
              <div className="contact-line">
                <div className="row"><span className="ci">📍</span><div><strong>The Atelier</strong><span>Mota Varachha, Surat, Gujarat 394101</span></div></div>
                <div className="row"><span className="ci">📞</span><div><strong>Trade Desk</strong><span><a href="tel:+912222420000">+91 22 2242 0000</a></span></div></div>
                <div className="row"><span className="ci">✉️</span><div><strong>Mail</strong><span><a href="mailto:trade@khodiyarjewellers.com">trade@khodiyarjewellers.com</a></span></div></div>
                <div className="row"><span className="ci">⏱️</span><div><strong>Hours</strong><span>Mon–Sat, 09:30–18:30 IST</span></div></div>
              </div>
            </aside>

            {submitted ? (
              <div className="form reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: '60px 40px', textAlign: 'center' }}>
                <span style={{ fontSize: 48, color: 'var(--gold)' }}>✓</span>
                <h3>Your note has been received.</h3>
                <p>The trade desk will respond within one business day.</p>
                <button className="btn btn-gold" onClick={() => { setForm(INITIAL); setSubmitted(false); }}>Send Another <span className="arrow">→</span></button>
              </div>
            ) : (
              <form className="form reveal" data-delay="2" onSubmit={submit} noValidate>
                <div className="field-row">
                  <div className="field">
                    <label>Full Name *</label>
                    <input name="name" required value={form.name} onChange={set} placeholder="Your full name" />
                  </div>
                  <div className="field">
                    <label>Mobile / WhatsApp</label>
                    <input name="mobile" type="tel" value={form.mobile} onChange={set} placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label>Email Address *</label>
                    <input name="email" type="email" required value={form.email} onChange={set} placeholder="you@example.com" />
                  </div>
                  <div className="field">
                    <label>Business / Company</label>
                    <input name="business" value={form.business} onChange={set} placeholder="Your shop or company name" />
                  </div>
                </div>
                <div className="field">
                  <label>Nature of Inquiry *</label>
                  <select name="nature" required value={form.nature} onChange={set}>
                    <option value="">Select one&hellip;</option>
                    <option>Wholesale Trade Account</option>
                    <option>Bespoke Commission</option>
                    <option>Export &amp; Documentation</option>
                    <option>Atelier Visit</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div className="field">
                  <label>Your Note *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={set} placeholder="Tell us what you need — the more specific, the better our first response." />
                </div>
                <p className="form-note">We answer every inquiry. Response time: one business day. WhatsApp enquiries during trading hours are answered within the hour.</p>
                <button type="submit" className="btn btn-gold form-submit">Send to the Atelier Desk <span className="arrow">→</span></button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section section-ivory">
        <div className="shell">
          <div className="quote-block reveal" style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <blockquote style={{ fontSize: 'clamp(20px,2.5vw,26px)', lineHeight: 1.65, fontFamily: 'var(--font-display)', color: 'var(--dark)', fontStyle: 'italic' }}>
              &ldquo;We answer every letter. The one that begins a long relationship is rarely the one with the largest first order.&rdquo;
            </blockquote>
            <p style={{ marginTop: 24, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              N. Patel &middot; Head of Trade Office
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inquiry;
