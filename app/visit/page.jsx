import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import Newsletter from '@/components/Newsletter';

export const metadata = { title: 'Visit Us — Marrow' };

export default function VisitPage() {
  return (
    <>
      <section className="page-hero">
        <img src="https://images.unsplash.com/photo-1607019748050-c66d6cdf3a90?w=1920&q=80" alt="The shop" />
        <div className="page-hero-text">
          <div className="eyebrow">Visit Us</div>
          <h1>The shop</h1>
        </div>
      </section>

      <nav className="crumbs"><Link href="/">Home</Link><span>/</span>Visit Us</nav>

      <section className="prose">
        <p className="lead">Open six days a week, just off the high street. Come for a chat at the block, ask for a cut you don&apos;t see, or call ahead and we&apos;ll have it ready.</p>
      </section>

      <section className="contact-grid">
        <div className="contact-info">
          <div className="block">
            <div className="label">Address</div>
            <h3>The Block</h3>
            <p>14 Elm Mews<br />Marylebone, London W1H 5LD<br />United Kingdom</p>
          </div>
          <div className="block">
            <div className="label">Opening hours</div>
            <p>Tuesday — Friday · 8:00 — 19:00<br />Saturday · 8:00 — 18:00<br />Sunday · 9:00 — 14:00<br />Monday · Closed</p>
          </div>
          <div className="block">
            <div className="label">Get in touch</div>
            <p>hello@marrow.example<br />+44 (0)20 7946 0123</p>
          </div>
          <div className="block">
            <div className="label">Reserve a cut</div>
            <p>Email or phone is fastest. We hold orders for 48 hours; longer by arrangement.</p>
            <Link className="cta-link" href="#visit-form" style={{ marginTop: 16 }}>Send a message</Link>
          </div>
        </div>
        <div>
          <iframe
            className="map-frame"
            title="Map to Marrow Butchery"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.165%2C51.514%2C-0.140%2C51.524&layer=mapnik"
            loading="lazy"
          />
        </div>
      </section>

      <section className="contact-grid" id="visit-form" style={{ paddingTop: 0 }}>
        <div className="contact-info">
          <div className="block">
            <div className="label">Drop us a line</div>
            <h3>Questions, orders, or a hello</h3>
            <p>We read every message and reply within a working day. For urgent same-day orders, the phone is faster.</p>
          </div>
        </div>
        <ContactForm variant="visit" />
      </section>

      <Newsletter />
    </>
  );
}
