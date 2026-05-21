import Link from 'next/link';
import Newsletter from '@/components/Newsletter';

export const metadata = { title: 'Our Craft — Marrow' };

export default function CraftPage() {
  return (
    <>
      <section className="page-hero">
        <img src="https://images.unsplash.com/photo-1607019748050-c66d6cdf3a90?w=1920&q=80" alt="The butcher's block" />
        <div className="page-hero-text">
          <div className="eyebrow">Our Craft</div>
          <h1>The work of the block</h1>
        </div>
      </section>

      <nav className="crumbs">
        <Link href="/">Home</Link><span>/</span>Our Craft
      </nav>

      <section className="prose">
        <div className="eyebrow">Provenance</div>
        <h2>From the pasture to the plate</h2>
        <p className="lead">Every cut begins with the animal — pasture-raised, ethically sourced, and traceable to the farms we work with. We sit down with each producer, walk their fields, and only bring in what we&apos;d put on our own table.</p>
        <p>Our beef comes from regenerative ranches in the Cotswolds and Northern California. Pork from heritage Berkshire and Tamworth breeders. Lamb from grass-finished flocks in the Pyrenees and the Welsh hills. We know the herds. We know the people. Nothing else makes it past the door.</p>
      </section>

      <section className="split">
        <div>
          <img src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=1200&q=80" alt="Whole-animal butchery" />
        </div>
        <div>
          <div className="eyebrow">The Block</div>
          <h3>Whole-animal butchery, every cut accounted for</h3>
          <p>We break carcasses on site, by hand, every week. There is no shrink-wrapped tray, no anonymous case-ready box. Each primal is studied for grain, fat, and structure before the first cut.</p>
          <p>Working whole animals means we use the whole animal — prized steaks alongside braising cuts, bones for stock, trim for sausage, fat for the rendering pot. The craft asks for restraint and respect.</p>
          <Link className="cta-link" href="/selection">See the selection</Link>
        </div>
      </section>

      <section className="split reverse">
        <div>
          <img src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=1200&q=80" alt="The salt room" />
        </div>
        <div>
          <div className="eyebrow">The Salt Room</div>
          <h3>Patience, measured in days</h3>
          <p>Our dry-aging room runs at 1.5°C with a stable 82% humidity and a slow current of Himalayan-salt-filtered air. We hang sub-primals here for 28, 45, even 90 days — until the enzymes have done their quiet work.</p>
          <p>The result is a deeper, more concentrated flavour and a tenderness no rapid wet-age can replicate. It is not faster, and it is not cheaper, but it is right.</p>
          <Link className="cta-link" href="/dry-aging">Inside the dry-aging room</Link>
        </div>
      </section>

      <section className="feature-row">
        <div className="feature-grid">
          <div>
            <span className="num">01</span>
            <h4>Source</h4>
            <p>Direct relationships with farmers and ranchers practising regenerative agriculture. Traceability from pasture to counter, no exceptions.</p>
          </div>
          <div>
            <span className="num">02</span>
            <h4>Break</h4>
            <p>Whole-carcass butchery on site, in full view of the shop. Every primal is broken and trimmed by hand, every cut named and dated.</p>
          </div>
          <div>
            <span className="num">03</span>
            <h4>Age</h4>
            <p>Dry-aged in our purpose-built salt-room. House-cured charcuterie hangs alongside. Time is the ingredient we will not skip.</p>
          </div>
        </div>
      </section>

      <section className="prose">
        <div className="eyebrow">A note from the head butcher</div>
        <p>&quot;The block is the oldest kitchen tool I know. It rewards attention and punishes hurry. Our job is to honour the animal and to send people home with food they will be proud to cook. Everything else follows from that.&quot;</p>
        <p style={{ fontFamily: 'var(--sans)', fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 32 }}>
          — H. Reeves, Head Butcher
        </p>
        <Link className="cta-link" href="/visit" style={{ marginTop: 48 }}>Visit the shop</Link>
      </section>

      <Newsletter />
    </>
  );
}
