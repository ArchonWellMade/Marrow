// ============ Marrow shared scripts ============

document.addEventListener('DOMContentLoaded', () => {
  // Image fallback
  const fallback = 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=1200&q=80';
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () {
      if (!this.dataset.fallback) {
        this.dataset.fallback = '1';
        this.src = fallback;
      }
    });
  });

  // Header subtle border on scroll
  const header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  // Drawer toggle
  const drawer = document.getElementById('navDrawer');
  const openBtn = document.getElementById('menuToggle');
  const closeBtn = document.getElementById('menuClose');
  if (drawer && openBtn && closeBtn) {
    const openDrawer = () => {
      drawer.classList.add('open');
      openBtn.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      openBtn.setAttribute('aria-label', 'Close menu');
      document.body.style.overflow = 'hidden';
    };
    const closeDrawer = () => {
      drawer.classList.remove('open');
      openBtn.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      openBtn.setAttribute('aria-label', 'Open menu');
      document.body.style.overflow = '';
    };
    openBtn.addEventListener('click', () =>
      drawer.classList.contains('open') ? closeDrawer() : openDrawer()
    );
    closeBtn.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
  }

  // Selection filters (only on selection page)
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.venue-card');
  if (filters.length && cards.length) {
    const applyFilter = (f) => {
      filters.forEach(b => b.classList.toggle('active', b.dataset.filter === f));
      cards.forEach(card => {
        const cats = (card.dataset.cats || '').split(',');
        card.hidden = !(f === 'all' || cats.includes(f));
      });
    };
    filters.forEach(btn => btn.addEventListener('click', () => applyFilter(btn.dataset.filter)));
    // Honour ?cat=X in the URL
    const cat = new URLSearchParams(location.search).get('cat');
    if (cat) applyFilter(cat);
  }

  // Product page quantity + thumbnail swap
  const qtyInput = document.getElementById('qtyInput');
  if (qtyInput) {
    document.getElementById('qtyMinus').addEventListener('click', () => {
      qtyInput.value = Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1);
    });
    document.getElementById('qtyPlus').addEventListener('click', () => {
      qtyInput.value = (parseInt(qtyInput.value, 10) || 1) + 1;
    });
  }
  const main = document.getElementById('productMain');
  const thumbs = document.querySelectorAll('.product-thumbs img');
  if (main && thumbs.length) {
    thumbs.forEach(t => {
      t.addEventListener('click', () => {
        thumbs.forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        main.src = t.dataset.full || t.src;
      });
    });
  }
});
