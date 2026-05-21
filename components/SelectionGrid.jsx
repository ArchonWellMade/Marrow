'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CATEGORIES, products } from '@/lib/products';

export default function SelectionGrid() {
  const params = useSearchParams();
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const cat = params.get('cat');
    if (cat) setFilter(cat);
  }, [params]);

  return (
    <>
      <div className="filters">
        {CATEGORIES.map((c) => (
          <button
            key={c.slug}
            className={`filter${filter === c.slug ? ' active' : ''}`}
            onClick={() => setFilter(c.slug)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="venue-grid">
        {products.map((p) => {
          const visible = filter === 'all' || p.cats.includes(filter);
          return (
            <Link
              key={p.slug}
              className={`venue-card${p.cardSpan === 'wide' ? ' wide' : ''}`}
              href={`/products/${p.slug}`}
              hidden={!visible}
            >
              <img src={p.image} alt={p.title} />
              <div className="label">
                <h3>{p.title}</h3>
                <div className="tags">
                  {p.cardTags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
