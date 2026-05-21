import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import Newsletter from '@/components/Newsletter';

export const metadata = { title: 'Wholesale — Marrow' };

export default function WholesalePage() {
  return (
    <>
      <section className="page-hero">
        <img src="https://images.unsplash.com/photo-1606851094291-6efae152bb87?w=1920&q=80" alt="Wholesale supply" />
        <div className="page-hero-text">
          <div className="eyebrow">Wholesale</div>
          <h1>Supply for restaurants &amp; kitchens</h1>
        </div>
      </section>

      <nav className="crumbs"><Link href="/">Home</Link><span>/</span>Wholesale</nav>

      <section className="prose">
        <div className="eyebrow">Trade accounts</div>
        <h2>Restaurants, hotels &amp; private kitchens</h2>
        <p className="lead">We work with a small list of restaurants and chefs who want the same level of provenance and butchery that defines the shop. Weekly standing orders, bespoke breakdowns, and access to specials before they reach the counter.</p>
      </section>

      <section className="feature-row">
        <div className="feature-grid">
          <div>
            <span className="num">01</span>
            <h4>Standing orders</h4>
            <p>Weekly cut sheets agreed with your chef. Consistent yield, consistent grade, delivered on the day you need it.</p>
          </div>
          <div>
            <span className="num">02</span>
            <h4>Bespoke breakdowns</h4>
            <p>Off-spec primals, full carcasses, custom portioning. Tell us how you want it on the plate; we&apos;ll get it there.</p>
          </div>
          <div>
            <span className="num">03</span>
            <h4>Dry-aged programme</h4>
            <p>Dedicated hooks for trade partners. Reserve sides ahead of menu launches and own the age window.</p>
          </div>
        </div>
      </section>

      <section className="split">
        <div><img src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=1200&q=80" alt="Working with chefs" /></div>
        <div>
          <div className="eyebrow">How it works</div>
          <h3>A direct line to the butcher</h3>
          <p>Trade partners get a direct number to our head butcher and a single point of contact for ordering. No call centre, no menu trees. You ring; you get answers.</p>
          <p>Delivery within a 40-mile radius is included; further afield is arranged by chilled courier. Minimum order is modest by design — small kitchens are welcome.</p>
          <Link className="cta-link" href="#trade-form">Open an account</Link>
        </div>
      </section>

      <section className="contact-grid" id="trade-form">
        <div className="contact-info">
          <div className="block">
            <div className="label">Trade enquiries</div>
            <h3>Talk to our butcher</h3>
            <p>trade@marrow.example<br />+44 (0)20 7946 0123</p>
          </div>
          <div className="block">
            <div className="label">Minimum order</div>
            <p>£200 per delivery within zone 1<br />£400 outside zone 1</p>
          </div>
          <div className="block">
            <div className="label">Delivery days</div>
            <p>Tuesday, Thursday &amp; Saturday<br />Custom days on request</p>
          </div>
        </div>
        <ContactForm variant="wholesale" />
      </section>

      <Newsletter />
    </>
  );
}
