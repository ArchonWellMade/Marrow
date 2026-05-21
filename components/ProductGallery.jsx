'use client';

import { useState } from 'react';

const FALLBACK_THUMBS = [
  'https://images.unsplash.com/photo-1588347818133-c8def949f9f4?w=400',
  'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400',
  'https://images.unsplash.com/photo-1607019748050-c66d6cdf3a90?w=400',
];

export default function ProductGallery({ image, title }) {
  const [active, setActive] = useState(image);
  const thumbs = [image, ...FALLBACK_THUMBS.map((u) => u.replace('w=400', 'w=1200'))];

  return (
    <div className="product-media">
      <img id="productMain" src={active} alt={title} />
      <div className="product-thumbs">
        {thumbs.map((t, i) => (
          <img
            key={t + i}
            className={active === t ? 'active' : ''}
            src={t.replace('w=1200', 'w=400')}
            alt=""
            onClick={() => setActive(t)}
          />
        ))}
      </div>
    </div>
  );
}
