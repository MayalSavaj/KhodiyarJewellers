import { Link } from 'react-router-dom';

import { Brand, Route } from '@/constants/enum';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-grid cols-5 shell">
        <div className="footer-about">
          <span className="brand-mark">
            Khodiyar <span className="amp">&amp;</span> Jewellers
          </span>
          <p>
            A heritage jewellery maison crafting heirloom-grade bridal, traditional and modern gold
            jewellery &mdash; manufactured in-house at the Leo Gold atelier, Mumbai.
          </p>
          <div className="socials">
            <a href="#" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="Pinterest">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.64 1.267 1.408 0 .858-.546 2.141-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.566 0-2.387-1.715-4.057-4.163-4.057-2.836 0-4.5 2.126-4.5 4.323 0 .856.33 1.773.741 2.274a.3.3 0 0 1 .069.284c-.076.312-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.967-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S17.522 2 12 2z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h5>Maison</h5>
          <ul>
            <li><Link to={Route.About}>Our Story</Link></li>
            <li><Link to={Route.Manufacturing}>Leo Gold</Link></li>
            <li><Link to={Route.Collections}>Collections</Link></li>
            <li><Link to={Route.LatestCollections}>Latest</Link></li>
            <li><Link to={Route.Gallery}>Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h5>For the Trade</h5>
          <ul>
            <li><Link to={Route.WhyChooseUs}>Why Choose Us</Link></li>
            <li><Link to={Route.Certifications}>Certifications</Link></li>
            <li><Link to={Route.GoldRate}>Daily Gold Rate</Link></li>
            <li><Link to={Route.Inquiry}>Trade Inquiry</Link></li>
          </ul>
        </div>

        <div>
          <h5>Insights</h5>
          <ul>
            <li><Link to={Route.Testimonials}>Testimonials</Link></li>
            <li><Link to={Route.Blog}>Journal</Link></li>
            <li><Link to={Route.Faq}>FAQ</Link></li>
            <li><Link to={Route.Contact}>Press</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h5>Atelier</h5>
          <p>
            <strong>Address</strong>
            14 Karigar Lane, Zaveri Bazaar,<br />Mumbai 400002, India
          </p>
          <p><strong>Telephone</strong>+91 98212 00000</p>
          <p><strong>Email</strong>atelier@khodiyarjewellers.com</p>
        </div>
      </div>

      <div className="footer-bottom shell">
        <span>
          &copy; {year} {Brand?.Name} &middot; <em>{Brand?.AtelierName}</em> Atelier &middot; All rights reserved
        </span>
        <span>Mumbai &middot; Surat &middot; Dubai &middot; London</span>
      </div>
    </footer>
  );
};

export default Footer;
