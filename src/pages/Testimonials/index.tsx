import { Link } from 'react-router-dom';

import useTestimonials from './useTestimonials';

import { useReveal } from '@/hooks/useReveal';
import { Brand, Route } from '@/constants/enum';

const Testimonials = () => {
    const { CARDS, VIDEO_TESTIS } = useTestimonials();
    useReveal();
    return (
        <>
            {/* Hero */}
            <section className="hero hero-inner">
                <div className="hero-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1900&q=80')" }} />
                <div className="shell hero-content">
                    <span className="eyebrow hero-eyebrow">VII. Testimonials</span>
                    <h1 className="hero-title">In their<em>own words.</em></h1>
                    <p className="hero-sub">We have been told that the best recommendation is the quiet kind — the one a partner gives another partner, without being asked. Here are a few, on record.</p>
                </div>
                <div className="hero-meta"><span>VII. Testimonials</span><span>{Brand.RomanYear}</span></div>
            </section>

            {/* Written testimonials */}
            <section className="section">
                <div className="shell">
                    <div className="section-head reveal">
                        <div>
                            <span className="eyebrow">Partner Accounts</span>
                            <h2 style={{ marginTop: 24 }}>Eleven years of<em>honest reports.</em></h2>
                        </div>
                        <p>Selected accounts from our retail and wholesale trade network, shared with permission. Names, cities and roles as verified.</p>
                    </div>
                    <div className="testi-grid">
                        {CARDS.map(c => (
                            <div key={c.initials} className="testi-card reveal">
                                <div className="mark">{c.mark}</div>
                                <p className="quote">{c.quote}</p>
                                <div className="stars">★★★★★</div>
                                <div className="who">
                                    <div className="avatar">{c.initials}</div>
                                    <div>
                                        <div className="who-name">{c.name}</div>
                                        <div className="who-role">{c.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video testimonials */}
            <section className="section section-ivory">
                <div className="shell">
                    <div className="section-head-center reveal">
                        <span className="eyebrow center">On Camera</span>
                        <h2 style={{ marginTop: 22 }}>Partners who<em>said it on record.</em></h2>
                    </div>
                    <div className="video-testi reveal">
                        {VIDEO_TESTIS.map(v => (
                            <div key={v.name} className="v">
                                <img src={`https://images.unsplash.com/${v.img}?auto=format&fit=crop&w=800&q=80`} alt={v.name} loading="lazy" />
                                <div className="play">▶</div>
                                <div className="caption">
                                    <h5>{v.name}</h5>
                                    <span>{v.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case study */}
            <section className="section">
                <div className="shell">
                    <div className="case-study reveal">
                        <div className="case-media">
                            <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80" alt="Shah Jewels case study" />
                        </div>
                        <div className="case-text">
                            <span className="eyebrow">Case Study</span>
                            <h2 style={{ marginTop: 18 }}>Shah Jewels,<em>Ahmedabad.</em></h2>
                            <p>When Rajan Shah took over his father's three-store chain in 2014, the buying was inconsistent — three different manufacturers, three different quality levels. Within two seasons of consolidating to Khodiyar, the return rate from end customers fell by 64% and re-order frequency doubled.</p>
                            <div className="case-metrics">
                                <div className="metric"><div className="metric-num">64%</div><div className="metric-label">Customer return rate drop</div></div>
                                <div className="metric"><div className="metric-num">2×</div><div className="metric-label">Re-order frequency</div></div>
                                <div className="metric"><div className="metric-num">11</div><div className="metric-label">Years of partnership</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-strip">
                <div className="shell">
                    <span className="eyebrow center" style={{ color: 'var(--gold-light)' }}>Join the Partnership</span>
                    <h2 style={{ marginTop: 22 }}>Begin a relationship<em>on the same terms.</em></h2>
                    <p>The accounts above started with a single inquiry. The desk is open.</p>
                    <Link to={Route.Inquiry} className="btn btn-gold">Open an Inquiry <span className="arrow">→</span></Link>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
