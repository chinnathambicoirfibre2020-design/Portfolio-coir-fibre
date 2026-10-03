/**
 * Main Application Script - Chinnathambi Coir Fibre (CCF)
 * Interactive features, animations, lightbox gallery, and All-India B2B RFQ
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollAnimations();
  initLightbox();
  initGalleryFilter();
  initHeaderScroll();
  initGradeBars();
  initGradeQuoteTriggers();
  initHotspots();
  initBlueprintDownload();
  initWholesaleEstimator();
});

/**
 * Mobile Navigation Drawer Toggle
 */
function initNavigation() {
  const burger = document.querySelector('.burger');
  const menu = document.getElementById('menu');

  if (!burger || !menu) return;

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('click', (e) => {
    if (menu.classList.contains('open') && !menu.contains(e.target) && !burger.contains(e.target)) {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Scroll Reveal Animation with IntersectionObserver and Fallback
 */
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px 80px 0px',
      threshold: 0.05
    });

    reveals.forEach((el) => observer.observe(el));
  } else {
    // Fallback for older browsers
    const checkReveals = () => {
      const windowHeight = window.innerHeight;
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight + 120) {
          el.classList.add('active');
        }
      });
    };
    checkReveals();
    window.addEventListener('scroll', checkReveals, { passive: true });
    window.addEventListener('resize', checkReveals, { passive: true });
  }
}

/**
 * Animate Grade Progress Bars on Viewport Intersection
 */
function initGradeBars() {
  const statBars = document.querySelectorAll('.stat-bar-fill');
  if (!statBars.length) return;

  if ('IntersectionObserver' in window) {
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const width = target.getAttribute('data-width') || '75%';
          target.style.width = width;
          barObserver.unobserve(target);
        }
      });
    }, { threshold: 0.2 });

    statBars.forEach((bar) => barObserver.observe(bar));
  } else {
    statBars.forEach((bar) => {
      bar.style.width = bar.getAttribute('data-width') || '75%';
    });
  }
}

/**
 * Auto-select Fibre Grade in RFQ Form when clicking Grade Card CTA
 */
function initGradeQuoteTriggers() {
  const quoteBtns = document.querySelectorAll('[data-grade-quote]');
  const selectElem = document.getElementById('f-len');
  const enquirySection = document.getElementById('enquiry');

  if (!quoteBtns.length) return;

  quoteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const grade = btn.getAttribute('data-grade-quote');
      if (selectElem && grade) {
        // Try selecting matching option
        for (let i = 0; i < selectElem.options.length; i++) {
          if (selectElem.options[i].value.includes(grade) || selectElem.options[i].text.includes(grade)) {
            selectElem.selectedIndex = i;
            break;
          }
        }
      }

      if (enquirySection) {
        enquirySection.scrollIntoView({ behavior: 'smooth' });
        const formCard = document.querySelector('.rfq-form-card');
        if (formCard) {
          formCard.style.transition = 'box-shadow 0.4s ease, transform 0.4s ease';
          formCard.style.boxShadow = '0 0 0 4px var(--caramel)';
          setTimeout(() => {
            formCard.style.boxShadow = '';
          }, 1800);
        }
      }
    });
  });
}

/**
 * Interactive Anatomy Pins
 */
function initHotspots() {
  const pins = document.querySelectorAll('.hotspot-pin');
  const cards = document.querySelectorAll('.anatomy-callout-card');

  pins.forEach((pin) => {
    pin.addEventListener('mouseenter', () => {
      const targetId = pin.getAttribute('data-target-callout');
      cards.forEach((card) => {
        if (card.id === targetId) {
          card.style.borderColor = 'var(--caramel)';
          card.style.transform = 'translateY(-6px)';
          card.style.boxShadow = '0 8px 24px rgba(197, 137, 64, 0.25)';
        } else {
          card.style.borderColor = '';
          card.style.transform = '';
          card.style.boxShadow = '';
        }
      });
    });

    pin.addEventListener('mouseleave', () => {
      cards.forEach((card) => {
        card.style.borderColor = '';
        card.style.transform = '';
        card.style.boxShadow = '';
      });
    });
  });
}

/**
 * Technical Blueprint PDF/Print Handler
 */
function initBlueprintDownload() {
  const printBtns = document.querySelectorAll('[data-blueprint-print]');
  printBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  });
}

/**
 * Real Factory Photo Lightbox Modal
 */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const modalCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');

  if (!modal || !modalImg) return;

  document.querySelectorAll('[data-lightbox]').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const imgSrc = item.getAttribute('data-img') || item.querySelector('img')?.src;
      const caption = item.getAttribute('data-caption') || item.querySelector('h4, h3, p')?.innerText || 'Factory Production Photo';

      if (imgSrc) {
        modalImg.src = imgSrc;
        modalCaption.textContent = caption;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}

/**
 * Gallery Tab Filtering
 */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-grid-item');

  if (!filterBtns.length || !galleryItems.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach((item) => {
        const category = item.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          item.style.display = 'block';
          item.classList.add('active');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Header Elevation on Scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('header.nav');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * Interactive B2B Wholesale Quantity Estimator
 */
function initWholesaleEstimator() {
  const presetBtns = document.querySelectorAll('.preset-pill-btn');
  const estWeight = document.getElementById('estWeight');
  const estBales = document.getElementById('estBales');
  const estQuoteBtn = document.getElementById('estQuoteBtn');
  const estWhatsappBtn = document.getElementById('estWhatsappBtn');
  const qtyInput = document.getElementById('f-qty');

  if (!presetBtns.length) return;

  presetBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      presetBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const tons = btn.getAttribute('data-tons');
      const bales = btn.getAttribute('data-bales');
      const kg = parseInt(tons, 10) * 1000;

      if (estWeight) estWeight.textContent = `${kg.toLocaleString()} KG (${tons} Ton${tons > 1 ? 's' : ''})`;
      if (estBales) estBales.textContent = `~${bales} Bales (52-56kg)`;
      if (estQuoteBtn) estQuoteBtn.textContent = `Lock Wholesale Rate for ${tons} Ton${tons > 1 ? 's' : ''}`;

      if (estWhatsappBtn) {
        const message = `Hello CCF Team, I would like a wholesale quote for ${tons} Ton${tons > 1 ? 's' : ''} (~${bales} Bales) of 8-12 inch Black Bristle Fibre.`;
        estWhatsappBtn.href = `https://wa.me/919487371259?text=${encodeURIComponent(message)}`;
      }

      if (qtyInput) {
        qtyInput.value = `${tons} Ton${tons > 1 ? 's' : ''} (~${bales} Bales)`;
      }
    });
  });
}


