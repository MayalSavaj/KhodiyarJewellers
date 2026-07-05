import { Link } from 'react-router-dom';

import useWhyChooseUs from './useWhyChooseUs';

import { useReveal } from '@/hooks/useReveal';
import { Brand, Route } from '@/constants/enum';

const WhyChooseUs = () => {
    const { WHY_CELLS } = useWhyChooseUs();
    useReveal();
    return (
        <>
            {/* Hero */}
            <section className="hero hero-inner">
                <div className="hero-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1900&q=80')" }} />
                <div className="shell hero-content">
                    <span className="eyebrow hero-eyebrow">VI. The Partnership</span>
                    <h1 className="hero-title">Why partners stay<em>for a second decade.</em></h1>
                    <p className="hero-sub">A direct account of the ten things that have kept 1,200 trade partners returning to this atelier for over four decades.</p>
                </div>
                <div className="hero-meta"><span>VI. The Partnership</span><span>{Brand.RomanYear}</span></div>
            </section>

            {/* Pillars */}
            <section className="section">
                <div className="shell">
                    <div className="pillars">
                        <div className="pillars-media reveal">
                            <img src="https://images.unsplash.com/photo-1633293048312-1844f262e9c5?auto=format&fit=crop&w=1200&q=80" alt="Leo Gold atelier" />
                        </div>
                        <div className="reveal" data-delay="2">
                            <span className="eyebrow">The {Brand?.Name} Standard</span>
                            <h2 style={{ marginTop: 24 }}>More than a manufacturer.<em>A standing concern.</em></h2>
                            <p>Since 1984, {Brand?.Name} has operated from a single address in Zaveri Bazaar. The maison's position in the trade has always been the same: a vertically integrated atelier, producing hallmarked gold under its own roof, selling direct to the wholesale and retail trade.</p>
                            <p>No intermediaries. No sub-workshops. No minimum orders on repeat accounts. The ten points below are the practical consequence of that structure — not marketing claims, but the operational reality of how we work.</p>
                            <span className="link-arrow" style={{ marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                Read our certifications <span>→</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why grid */}
            <section className="section section-ivory">
                <div className="shell">
                    <div className="section-head-center reveal">
                        <span className="eyebrow center">The Ten Points</span>
                        <h2 style={{ marginTop: 22 }}>The operational<em>difference.</em></h2>
                        <p>A plain-language account of the ten things that are structurally different about working with Khodiyar.</p>
                    </div>
                    <div className="why-grid reveal">
                        {WHY_CELLS.map(c => (
                            <div key={c.roman} className="why-cell">
                                <div className="roman">{c.roman}</div>
                                <div className="ico">✦</div>
                                <h4>{c.h}</h4>
                                <p>{c.p}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Counts */}
            <section className="section">
                <div className="shell">
                    <div className="count-grid reveal">
                        <div className="count-cell"><div className="count-num">42<sup>+</sup></div><div className="count-label">Years in Trade</div></div>
                        <div className="count-cell"><div className="count-num">1,200<sup>+</sup></div><div className="count-label">Active Partners</div></div>
                        <div className="count-cell"><div className="count-num">47</div><div className="count-label">Export Jurisdictions</div></div>
                        <div className="count-cell"><div className="count-num">280<sup>kg</sup></div><div className="count-label">Monthly Capacity</div></div>
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section className="section section-ivory">
                <div className="shell">
                    <div className="quote-block reveal" style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
                        <blockquote style={{ fontSize: 'clamp(20px,2.5vw,28px)', lineHeight: 1.65, fontFamily: 'var(--font-display)', color: 'var(--dark)', fontStyle: 'italic' }}>
                            &ldquo;We&rsquo;ve sold gold from a dozen ateliers across three continents. Khodiyar is the only one that has never made us telephone twice for the same answer.&rdquo;
                        </blockquote>
                        <p style={{ marginTop: 24, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                            Senior Buyer · Gulf Retail Group · Dubai
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-strip">
                <div className="shell">
                    <span className="eyebrow center" style={{ color: 'var(--gold-light)' }}>For the Trade</span>
                    <h2 style={{ marginTop: 22 }}>Begin a trade<em>inquiry today.</em></h2>
                    <p>Open an inquiry and the trade desk will respond within one business day with pricing, documentation, and a sample schedule.</p>
                    <Link to={Route.Inquiry} className="btn btn-gold">Begin a Trade Inquiry <span className="arrow">→</span></Link>
                </div>
            </section>
        </>
    );
};

export default WhyChooseUs;
