import Link from 'next/link';
import Newsletter from '@/components/Newsletter';

export const metadata = { title: 'Dry-Aging — Marrow' };

export default function DryAgingPage() {
  return (
    <>
      <section className="page-hero">
        <img src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=1920&q=80" alt="The dry-aging room" />
        <div className="page-hero-text">
          <div className="eyebrow">Dry-Aging</div>
          <h1>Time on the hook</h1>
        </div>
      </section>

      <nav className="crumbs"><Link href="/">Home</Link><span>/</span>Dry-Aging</nav>

      <section className="prose">
        <div className="eyebrow">The salt room</div>
        <h2>Slow is the only way</h2>
        <p className="lead">Dry-aging is a controlled act of patience. Cold air, low humidity and time — and what emerges is beef with a depth of flavour that wet-ageing cannot touch.</p>
        <p>Sub-primals hang on stainless hooks in our purpose-built room, walled with Himalayan rock salt that draws moisture from the air and the meat alike. Enzymes break down muscle proteins; surface water leaves; flavour concentrates. We don&apos;t shortcut any part of it.</p>
      </section>

      <section className="feature-row">
        <div className="feature-grid">
          <div>
            <span className="num">28 days</span>
            <h4>Classic</h4>
            <p>Tender, beefy, faintly nutty. Our standard age for ribeyes, sirloins and rump caps. The clearest expression of the cut.</p>
          </div>
          <div>
            <span className="num">45 days</span>
            <h4>Reserve</h4>
            <p>Deeper minerality and a noticeable funk on the rind. Best for steaks cooked over coals; the crust crisps quickly and the interior eats long.</p>
          </div>
          <div>
            <span className="num">90 days</span>
            <h4>Cellar</h4>
            <p>Blue-cheese notes and aromatics that announce themselves from the pan. A small standing list — call ahead. For the curious cook.</p>
          </div>
        </div>
      </section>

      <section className="split">
        <div><img src="https://images.unsplash.com/photo-1588347818133-c8def949f9f4?w=1200&q=80" alt="Aged beef" /></div>
        <div>
          <div className="eyebrow">The conditions</div>
          <h3>1.5°C · 82% humidity · still air, salt-filtered</h3>
          <p>Three numbers govern the room and we hold them tight. Too cold and the enzymes sleep. Too warm and the wrong microbes wake. Too dry and the crust hardens before the inside softens.</p>
          <p>Every hook is logged, every primal weighed before and after. The yield loss is real — sometimes 30% — and that&apos;s why dry-aged carries a premium. There is no other way to get there.</p>
          <Link className="cta-link" href="/selection?cat=beef">See dry-aged beef</Link>
        </div>
      </section>

      <section className="prose">
        <div className="eyebrow">Reserve a hook</div>
        <p>We hold a limited number of private hooks each quarter — bring your own primal or let us source one for you, then choose the age. Pickup at the shop or local delivery.</p>
        <Link className="cta-link" href="/visit" style={{ marginTop: 24 }}>Enquire about a hook</Link>
      </section>

      <Newsletter />
    </>
  );
}
