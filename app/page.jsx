import Link from 'next/link';
import { Suspense } from 'react';
import HeroSlider from '@/components/HeroSlider';
import SelectionGrid from '@/components/SelectionGrid';
import Newsletter from '@/components/Newsletter';

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="tagline">
        <h1>Hand-selected cuts,<br />dry-aged with patience,<br />butchered by craft.</h1>
        <div className="divider" />
      </section>

      <section className="story" id="about">
        <div className="eyebrow">Our Craft</div>
        <p>Every cut begins with the animal — pasture-raised, ethically sourced, and traceable to the farms we work with. Nothing leaves the block until it has been broken, trimmed and aged by hand.</p>
        <p>From dry-aged ribeyes resting in our salt room to small-batch charcuterie cured on site, we believe the butcher&apos;s craft is one of restraint, knowledge and respect for the whole animal.</p>
        <Link className="cta" href="/craft">Visit the Block</Link>
      </section>

      <section className="collections" id="venues">
        <h2>Our Selection</h2>
        <Suspense fallback={null}>
          <SelectionGrid />
        </Suspense>
      </section>

      <Newsletter />
    </>
  );
}
