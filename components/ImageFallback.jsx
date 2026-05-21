'use client';

import { useEffect } from 'react';

const FALLBACK =
  'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=1200&q=80';

export default function ImageFallback() {
  useEffect(() => {
    const handler = (e) => {
      const img = e.target;
      if (img.tagName !== 'IMG') return;
      if (img.dataset.fallback) return;
      img.dataset.fallback = '1';
      img.src = FALLBACK;
    };

    document.addEventListener('error', handler, true);

    document.querySelectorAll('img').forEach((img) => {
      if (img.complete && img.naturalWidth === 0 && !img.dataset.fallback) {
        img.dataset.fallback = '1';
        img.src = FALLBACK;
      }
    });

    return () => document.removeEventListener('error', handler, true);
  }, []);

  return null;
}
