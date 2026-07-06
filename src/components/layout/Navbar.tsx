import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { useNavScroll } from '@/hooks/useNavScroll';
import { Route } from '@/constants/enum';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  useNavScroll(navRef);

  // Close dropdown when route changes
  useEffect(() => { setOpenDrop(null); }, [location.pathname]);

  // Close dropdown when clicking outside the nav
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDrop(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const close = () => {
    setOpen(false);
    setOpenDrop(null);
    document.body.style.overflow = '';
  };

  const toggle = () => {
    const next = !open;
    setOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const toggleDrop = (name: string) =>
    setOpenDrop(prev => (prev === name ? null : name));

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="nav" ref={navRef}>
        <div className="nav-inner">
          <ul className="nav-list left">
            <li>
              <NavLink to={Route.Collections} className={({ isActive: a }) => a ? 'active' : ''}>
                Collections
              </NavLink>
            </li>
            <li>
              <NavLink to={Route.Manufacturing} className={({ isActive: a }) => a ? 'active' : ''}>
                Manufacturing
              </NavLink>
            </li>
            <li
              className={`has-drop${openDrop === 'trade' ? ' drop-open' : ''}`}
              onMouseEnter={() => setOpenDrop('trade')}
              onMouseLeave={() => setOpenDrop(null)}
            >
              <a href="#" aria-haspopup="true" onClick={e => { e.preventDefault(); toggleDrop('trade'); }}>Trade</a>
              <div className="nav-drop" role="menu">
                <span className="drop-note">For Wholesalers &amp; Partners</span>
                <NavLink to={Route.WhyChooseUs} onClick={close}>Why Choose Us</NavLink>
                <NavLink to={Route.Certifications} onClick={close}>Certifications</NavLink>
                {/* <NavLink to={Route.GoldRate} onClick={close}>Daily Gold Rate</NavLink> */}
                <NavLink to={Route.Inquiry} onClick={close}>Trade Inquiry</NavLink>
              </div>
            </li>
          </ul>

          <NavLink to={Route.Home} className="brand" onClick={close}>
            <span className="brand-mark">
              Khodiyar <span className="amp">&amp;</span> Jewellers
            </span>
          </NavLink>

          <ul className="nav-list right">
            <li
              className={`has-drop${openDrop === 'story' ? ' drop-open' : ''}`}
              onMouseEnter={() => setOpenDrop('story')}
              onMouseLeave={() => setOpenDrop(null)}
            >
              <a
                href="#"
                aria-haspopup="true"
                onClick={e => { e.preventDefault(); toggleDrop('story'); }}
                className={
                  ([Route.About, Route.LatestCollections, Route.Testimonials, Route.Blog, Route.Faq] as string[]).includes(location.pathname)
                    ? 'active'
                    : ''
                }
              >
                Story
              </a>
              <div className="nav-drop" role="menu">
                <span className="drop-note">The Maison</span>
                <NavLink to={Route.About} className={isActive(Route.About) ? 'active' : ''} onClick={close}>Our Story</NavLink>
                <NavLink to={Route.LatestCollections} onClick={close}>Latest Collections</NavLink>
                <NavLink to={Route.Testimonials} onClick={close}>Testimonials</NavLink>
                <NavLink to={Route.Blog} onClick={close}>Journal</NavLink>
                <NavLink to={Route.Faq} onClick={close}>FAQ</NavLink>
              </div>
            </li>
            <li>
              <NavLink to={Route.Gallery} className={({ isActive: a }) => a ? 'active' : ''}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to={Route.Contact} className={({ isActive: a }) => a ? 'active' : ''}>Contact</NavLink>
            </li>
          </ul>

          <button
            className={`nav-burger${open ? ' open' : ''}`}
            aria-label="Toggle menu"
            onClick={toggle}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <nav className={`mobile-menu${open ? ' open' : ''}`}>
        <NavLink to={Route.Home} onClick={close}>Maison</NavLink>
        <NavLink to={Route.Collections} onClick={close}>Collections</NavLink>
        <NavLink to={Route.Manufacturing} onClick={close}>Manufacturing</NavLink>
        <span className="m-group">&mdash; For the Trade &mdash;</span>
        <NavLink to={Route.WhyChooseUs} onClick={close}>Why Choose Us</NavLink>
        <NavLink to={Route.Certifications} onClick={close}>Certifications</NavLink>
        <NavLink to={Route.GoldRate} onClick={close}>Daily Gold Rate</NavLink>
        <span className="m-group">&mdash; The Maison &mdash;</span>
        <NavLink to={Route.About} className={isActive(Route.About) ? 'active' : ''} onClick={close}>Our Story</NavLink>
        <NavLink to={Route.LatestCollections} onClick={close}>Latest Collections</NavLink>
        <NavLink to={Route.Gallery} onClick={close}>Gallery</NavLink>
        <NavLink to={Route.Testimonials} onClick={close}>Testimonials</NavLink>
        <NavLink to={Route.Blog} onClick={close}>Journal</NavLink>
        <NavLink to={Route.Faq} onClick={close}>FAQ</NavLink>
        <NavLink to={Route.Inquiry} onClick={close}>Inquiries</NavLink>
        <NavLink to={Route.Contact} onClick={close}>Contact</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
