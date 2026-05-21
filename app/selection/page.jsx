import Link from 'next/link';
import { Suspense } from 'react';
import Newsletter from '@/components/Newsletter';
import SelectionGrid from '@/components/SelectionGrid';

export const metadata = { title: 'Selection — Marrow' };

export default function SelectionPage() {
  return (
    <>
      <section className="page-hero">
        <img src="https://images.unsplash.com/photo-1588347818133-c8def949f9f4?w=1920&q=80" alt="Selection of cuts" />
        <div className="page-hero-text">
          <div className="eyebrow">Selection</div>
          <h1>The whole counter</h1>
        </div>
      </section>

      <nav className="crumbs">
        <Link href="/">Home</Link><span>/</span>Selection
      </nav>

      <section className="prose">
        <p className="lead">Browse the counter. Every cut is broken on site, hand-trimmed and labelled with the farm of origin. Prices are per pound unless otherwise noted; we hold a small standing list — call ahead for larger orders.</p>
      </section>

      <section className="collections" style={{ paddingTop: 40 }}>
        <Suspense fallback={null}>
          <SelectionGrid />
        </Suspense>
      </section>

      <Newsletter />
    </>
  );
}
