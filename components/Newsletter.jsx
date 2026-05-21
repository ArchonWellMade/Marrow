'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="newsletter">
      <div className="newsletter-inner">
        <h2>From the Block</h2>
        <p>Weekly cuts, dry-aging updates and seasonal specials — straight to your inbox.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.currentTarget.reset();
            setSubmitted(true);
          }}
        >
          <input type="email" placeholder="Your email address" required />
          <button type="submit">{submitted ? 'Thank you' : 'Subscribe'}</button>
        </form>
      </div>
    </section>
  );
}
