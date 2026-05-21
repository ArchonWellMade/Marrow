'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function QuantityAndBuy() {
  const [qty, setQty] = useState(1);

  return (
    <>
      <div className="qty-row">
        <div className="qty">
          <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">−</button>
          <input
            type="text"
            value={qty}
            onChange={(e) => {
              const n = parseInt(e.target.value, 10);
              setQty(Number.isFinite(n) && n > 0 ? n : 1);
            }}
          />
          <button onClick={() => setQty((q) => q + 1)} aria-label="Increase">+</button>
        </div>
      </div>
      <div className="product-buttons">
        <button className="btn">Reserve in store</button>
        <Link className="btn outline" href="/visit">Call to order</Link>
      </div>
    </>
  );
}
