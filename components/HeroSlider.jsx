'use client';

import { useEffect, useState } from 'react';

const SLIDES = [
  { src: 'https://images.unsplash.com/photo-1607019748050-c66d6cdf3a90?w=1920&q=80', alt: 'Butcher counter with hand-selected cuts' },
  { src: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=1920&q=80', alt: 'Dry-aged beef cut' },
  { src: 'https://images.unsplash.com/photo-1588347818133-c8def949f9f4?w=1920&q=80', alt: 'Premium steak on cutting board' },
  { src: 'https://images.unsplash.com/photo-1606851094291-6efae152bb87?w=1920&q=80', alt: 'House-cured charcuterie board' },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      {SLIDES.map((s, i) => (
        <div key={s.src} className={`hero-slide${i === index ? ' active' : ''}`}>
          <img src={s.src} alt={s.alt} />
        </div>
      ))}
      <div className="hero-dots" aria-label="Hero slides">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={i === index ? 'active' : ''}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
