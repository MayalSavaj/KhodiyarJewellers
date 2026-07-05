import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useReveal } from '@/hooks/useReveal';
import { Route } from '@/constants/enum';
import { fetchLiveRates, fetchHistoryRows, type LiveRate, type HistoryRow } from './api';

const GoldRate = () => {
    useReveal();
    const [time, setTime] = useState('');
    const [rates, setRates] = useState<LiveRate[]>([]);
    const [loading, setLoading] = useState(true);
    const [history, setHistory] = useState<HistoryRow[]>([]);

    useEffect(() => {
        const load = () => {
            fetchLiveRates()
                .then(r => { setRates(r); setLoading(false); setTime(new Date().toLocaleTimeString('en-IN')); })
                .catch(() => setLoading(false));
        };
        load();
        const id = setInterval(load, 60000); // refresh every 60s (API courtesy)
        // Historical rows only need to load once per session
        fetchHistoryRows(6).then(setHistory).catch(() => {});
        return () => clearInterval(id);
    }, []);

    const fmt = (n: number) => n.toLocaleString('en-IN');
    const gold24 = rates[0]?.price ?? 0;
    const gold22 = rates[1]?.price ?? 0;
    const prev24 = history[0]?.p24 ?? 0; // yesterday's close from live API
    const chg = gold24 > 0 && prev24 > 0 ? gold24 - prev24 : 0;
    const chgStr = chg >= 0 ? `+₹ ${fmt(chg)}` : `−₹ ${fmt(Math.abs(chg))}`;

    return (
        <>
            {/* Rate Hero */}
            <section className="rate-hero">
                <div className="shell">
                    <div style={{ maxWidth: 760, marginBottom: 60 }}>
                        <span className="ribbon">Daily Trading Desk</span>
                        <h1 className="hero-title" style={{ color: 'var(--ivory)', fontSize: 'clamp(40px,6vw,88px)' }}>
                            Today’s gold rate,<em>at Mumbai close.</em>
                        </h1>
                        <p style={{ color: 'rgba(250,247,241,0.78)', fontSize: 16, lineHeight: 1.85, maxWidth: 540, marginTop: 24 }}>
                            Published by our trading desk, refreshed across the trading day. The reference rate against which all our consignments to trade partners are priced.
                        </p>
                    </div>

                    <div className="rate-card reveal">
                        <div>
                            <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Mumbai Bullion · 22K &amp; 24K</span>
                            <h2>Live gold rate<em>per 10 grams.</em></h2>
                            <div className="rate-display">
                                {loading && <p style={{ color: 'var(--gold-light)', opacity: 0.7 }}>Fetching live rates…</p>}
                                {rates.map(r => (
                                    <div key={r.karat} className="row">
                                        <div className="label"><span>{r.karat}</span> · {r.label}</div>
                                        <div className="price">₹ {fmt(r.price)} <small>/ {r.unit}</small></div>
                                    </div>
                                ))}
                            </div>
                            <div className="rate-meta">
                                <span className="live">Live · Auto-refresh every 60s</span>
                                <span>{time}</span>
                            </div>
                        </div>
                        <div>
                            <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Why this price?</span>
                            <h2 style={{ fontSize: 'clamp(24px,2.6vw,36px)', margin: '12px 0 16px' }}>A single<em>reference rate.</em></h2>
                            <p style={{ color: 'rgba(250,247,241,0.75)', fontSize: 14, lineHeight: 1.8 }}>Our daily rate is derived from the Mumbai Bullion Association close, adjusted for the international LBMA AM fix, and applied uniformly to every trade partner consignment that day.</p>
                            <p style={{ color: 'rgba(250,247,241,0.75)', fontSize: 14, lineHeight: 1.8, marginTop: 14 }}>Wholesale orders placed before 11:00 IST are priced at the previous day’s close; orders after 11:00 IST are held for the day’s published rate.</p>
                            <Link to={Route.Inquiry} className="btn btn-ghost" style={{ marginTop: 24 }}>Trade Inquiry <span className="arrow">→</span></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7-day history */}
            <section className="section">
                <div className="shell">
                    <div className="section-head reveal">
                        <div>
                            <span className="eyebrow">Last Seven Days</span>
                            <h2 style={{ marginTop: 24 }}>A week<em>of the trading desk.</em></h2>
                        </div>
                        <p>Daily Mumbai close, by karat. Useful for partners reconciling consignment invoices against the contemporaneous rate.</p>
                    </div>
                    <div className="rate-history reveal">
                        <div className="row head"><div>Date</div><div>24K · / 10g</div><div>22K · / 10g</div><div>Change</div></div>
                        <div className="row">
                            <div className="date">Today</div>
                            <div className="px">{gold24 > 0 ? `₹ ${fmt(gold24)}` : '—'}</div>
                            <div className="px">{gold22 > 0 ? `₹ ${fmt(gold22)}` : '—'}</div>
                            <div className={`chg ${chg >= 0 ? 'up' : 'dn'}`}>{gold24 > 0 ? chgStr : '—'}</div>
                        </div>
                        {history.map((h, i) => {
                            const next = history[i + 1];
                            const diff = next ? h.p24 - next.p24 : null;
                            const diffStr = diff !== null
                                ? (diff >= 0 ? `+₹ ${fmt(diff)}` : `−₹ ${fmt(Math.abs(diff))}`)
                                : '—';
                            return (
                                <div key={h.dateStr} className="row">
                                    <div className="date">{h.dateStr}</div>
                                    <div className="px">₹ {fmt(h.p24)}</div>
                                    <div className="px">₹ {fmt(h.p22)}</div>
                                    <div className={`chg ${diff !== null && diff >= 0 ? 'up' : 'dn'}`}>{diffStr}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-strip">
                <div className="shell">
                    <span className="eyebrow center" style={{ color: 'var(--gold-light)' }}>For the Trade</span>
                    <h2 style={{ marginTop: 22 }}>Price your next<em>consignment today.</em></h2>
                    <p>Open a trade inquiry and our desk will apply today’s rate to your order within one business day.</p>
                    <Link to={Route.Inquiry} className="btn btn-gold">Open an Inquiry <span className="arrow">→</span></Link>
                </div>
            </section>
        </>
    );
};

export default GoldRate;

