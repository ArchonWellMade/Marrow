import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Information</h4>
            <ul>
              <li><Link href="/craft">Our Craft</Link></li>
              <li><Link href="/selection">Selection</Link></li>
              <li><Link href="/dry-aging">Dry-Aging</Link></li>
              <li><Link href="/wholesale">Wholesale</Link></li>
              <li><Link href="/visit">Visit Us</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Selection</h4>
            <ul>
              <li><Link href="/selection?cat=beef">Beef</Link></li>
              <li><Link href="/selection?cat=pork">Pork</Link></li>
              <li><Link href="/selection?cat=lamb">Lamb</Link></li>
              <li><Link href="/selection?cat=poultry">Poultry</Link></li>
              <li><Link href="/selection?cat=seafood">Seafood</Link></li>
              <li><Link href="/selection?cat=charcuterie">Charcuterie</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Cuts</h4>
            <ul>
              <li><Link href="/products/wagyu-reserve">Wagyu Reserve</Link></li>
              <li><Link href="/products/dry-aged-ribeye">Dry-Aged Ribeye</Link></li>
              <li><Link href="/products/tomahawk">The Tomahawk</Link></li>
              <li><Link href="/products/heritage-berkshire">Heritage Berkshire</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>&nbsp;</h4>
            <ul>
              <li><Link href="/products/iberico-bellota">Iberico Bellota</Link></li>
              <li><Link href="/products/spring-lamb">Spring Lamb</Link></li>
              <li><Link href="/products/the-board">The Board</Link></li>
              <li><Link href="/products/fresh-oysters">Fresh Oysters</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="mark" aria-label="Marrow mark">
            <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M32 4 L60 32 L32 60 L4 32 Z" />
              <path d="M32 16 L48 32 L32 48 L16 32 Z" />
              <circle cx="32" cy="32" r="3" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <div className="socials" aria-label="Follow us">
            <span>Follow Us :</span>
            <a href="#" aria-label="LinkedIn"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" /></svg></a>
            <a href="#" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg></a>
            <a href="#" aria-label="Facebook"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z" /></svg></a>
          </div>
          <div className="copyright">© Copyright 2026 Marrow Butchery</div>
        </div>
      </div>
    </footer>
  );
}
