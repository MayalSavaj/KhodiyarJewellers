import { Link } from 'react-router-dom';

import useManufacturing from './useManufacturing';

import { useReveal } from '@/hooks/useReveal';
import { Brand, Route } from '@/constants/enum';

const Manufacturing = () => {
    const { PROCESS } = useManufacturing();
    useReveal();
    return (
        <>
            {/* Hero */}
            <section className="hero hero-inner">
                <div className="hero-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?auto=format&fit=crop&w=1900&q=80')" }} />
                <div className="shell hero-content">
                    <span className="eyebrow hero-eyebrow">Leo Gold · The Atelier</span>
                    <h1 className="hero-title">The workshop<em>behind the maison.</em></h1>
                    <p className="hero-sub">28,000 sq.ft. of CAD studios, casting floors, hand-setting benches and assay chambers — built so that every Khodiyar piece is made under one roof.</p>
                </div>
                <div className="hero-meta"><span>IV. Manufacturing</span><span>{Brand.RomanYear}</span></div>
            </section>

            {/* Atelier intro */}
            <section className="section">
                <div className="shell">
                    <div className="story">
                        <div className="story-text reveal">
                            <span className="eyebrow">The Atelier</span>
                            <h2 style={{ marginTop: 24 }}>A workshop,<em>not a factory.</em></h2>
                            <p>Founded in 2008, the Leo Gold atelier was built on a single proposition: that scale should not cost a piece its character. Across our five floors in Zaveri Bazaar, 240 artisans, designers and assay-technicians work in a sequence that hasn't changed in three generations.</p>
                            <p>We can produce 4,800 finished pieces per month — or one heirloom that takes a full season. The discipline at every bench is the same.</p>
                            <div className="story-stats">
                                <div><div className="stat-num">28k<sup>sqft</sup></div><div className="stat-label">Atelier Floors</div></div>
                                <div><div className="stat-num">240<sup>+</sup></div><div className="stat-label">Master Artisans</div></div>
                                <div><div className="stat-num">11<sup>•</sup></div><div className="stat-label">Stages of Finish</div></div>
                            </div>
                        </div>
                        <div className="story-media reveal" data-delay="2">
                            <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80" alt="Leo Gold atelier" />
                            <div className="frame-tag">Leo Gold · Floor II</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process steps */}
            <section className="section section-ivory">
                <div className="shell">
                    <div className="section-head-center reveal">
                        <span className="eyebrow center">The Process</span>
                        <h2 style={{ marginTop: 22 }}>From wax<br /><em>to hallmark.</em></h2>
                        <p>Every piece moves through five disciplines — design, casting, setting, finishing and assay — each watched over by a master.</p>
                    </div>
                    <div className="process">
                        {PROCESS.map(s => (
                            <div key={s.num} className="process-step reveal">
                                <div>
                                    <span className="process-num">{s.num}</span>
                                    <h3 dangerouslySetInnerHTML={{ __html: s.title.replace(/([^.]+)(\.?)$/, '$1<em>$2</em>') }} />
                                    {s.body.map((t, i) => <p key={i}>{t}</p>)}
                                </div>
                                <div className="process-img">
                                    <img src={`https://images.unsplash.com/${s.img}?auto=format&fit=crop&w=1200&q=80`} alt={s.num} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Machinery */}
            <section className="section mfg">
                <div className="shell mfg-inner">
                    <div className="mfg-text reveal">
                        <span className="eyebrow">Machinery &amp; Craft</span>
                        <h2>Precision tools,<em>patient hands.</em></h2>
                        <p>The Leo Gold floor houses Italian and German tooling alongside the karigar's hammer. We invest in equipment that supports the artisan — never that replaces them.</p>
                        <ul className="mfg-features">
                            {['Vacuum casting centrifuges · Italian build', 'Laser welding · 10W pulsed Nd:YAG', 'Rhodium &amp; 24K plating baths', 'X-ray fluorescence assay cabinet', 'CAD workstations · RhinoGold &amp; Matrix', '3D wax printer · Solidscape T76+'].map(f => <li key={f} dangerouslySetInnerHTML={{ __html: f }} />)}
                        </ul>
                        <Link to={Route.Certifications} className="link-arrow" style={{ marginTop: 36 }}>
                            View certifications <span>→</span>
                        </Link>
                    </div>
                    <div className="mfg-media reveal" data-delay="2">
                        <div className="m" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?auto=format&fit=crop&w=900&q=80')" }} />
                        <div className="m" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518544866330-95a2bec0146f?auto=format&fit=crop&w=900&q=80')" }} />
                        <div className="m" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1633293048312-1844f262e9c5?auto=format&fit=crop&w=900&q=80')" }} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-strip">
                <div className="shell">
                    <span className="eyebrow center" style={{ color: 'var(--gold-light)' }}>Visit the Floor</span>
                    <h2 style={{ marginTop: 22 }}>See the atelier<em>in person.</em></h2>
                    <p>Trade partners and serious enquiry buyers are invited to a guided walkthrough of the Leo Gold atelier — from CAD studio to assay chamber.</p>
                    <Link to={Route.Contact} className="btn btn-gold">Schedule a Visit <span className="arrow">→</span></Link>
                </div>
            </section>
        </>
    );
};

export default Manufacturing;
