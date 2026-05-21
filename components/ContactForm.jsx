'use client';

import { useState } from 'react';

export default function ContactForm({ variant = 'visit' }) {
  const [sent, setSent] = useState(false);

  if (variant === 'wholesale') {
    return (
      <form
        className="contact-form"
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      >
        <div className="field"><label>Restaurant / kitchen</label><input type="text" required /></div>
        <div className="field"><label>Your name</label><input type="text" required /></div>
        <div className="field"><label>Email</label><input type="email" required /></div>
        <div className="field"><label>Phone</label><input type="tel" /></div>
        <div className="field"><label>What you&apos;d like to order</label><textarea rows={4} /></div>
        <button type="submit" className="btn">{sent ? "Sent — we'll be in touch" : 'Open trade account'}</button>
      </form>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
    >
      <div className="field"><label>Your name</label><input type="text" required /></div>
      <div className="field"><label>Email</label><input type="email" required /></div>
      <div className="field"><label>Subject</label><input type="text" /></div>
      <div className="field"><label>Message</label><textarea rows={5} /></div>
      <button type="submit" className="btn">{sent ? 'Sent — thank you' : 'Send message'}</button>
    </form>
  );
}
