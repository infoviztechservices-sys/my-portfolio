'use strict';

// LINKS: Replace the booking URL and add your real social profiles. Empty profiles show an honest notice instead of sending visitors to a generic homepage.
const bookingUrl = 'https://calendly.com/your-link';
const profileLinks = { instagram: '', linkedin: '' };

// CASE STUDIES: These figures were supplied by the owner, not independently verified. Replace brackets and add approved proof with client phone numbers redacted.
const caseStudies = [
  {
    "name": "Plasdecore — Serene Garden Treasures",
    "category": "META ADS · WHATSAPP · SHOPIFY",
    "problem": "A Shopify store selling plastic plant pots with delivery across Pakistan needed a bigger social audience and a steady flow of customers and orders.",
    "actions": [
      "Grew the Facebook page to 9.7K+ followers within 3 months.",
      "Ran Meta (Facebook/Instagram) Click-to-WhatsApp ad campaigns.",
      "Used WhatsApp as the landing point to answer questions and close orders quickly.",
      "Tracked and optimized campaigns using Meta Ads Manager and Shopify analytics."
    ],
    "results": [
      [
        "9.7K+",
        "Facebook followers within 3 months"
      ],
      [
        "1,801",
        "Messaging conversations · 5 April–4 May 2026"
      ],
      [
        "Rs10.07",
        "Cost per conversation · 45% lower than similar ad sets according to Meta"
      ],
      [
        "Rs18,143.65",
        "Total ad spend"
      ],
      [
        "11.5K",
        "Shopify sessions · 4 March–4 May 2026"
      ],
      [
        "PKR 542K",
        "Store-wide sales"
      ],
      [
        "298",
        "Orders"
      ],
      [
        "PKR 1,669",
        "Average order value"
      ]
    ],
    "note": "Store-wide results during the campaign period. Sales rose about 1.2K% and orders about 1K% versus 1 January–3 March 2026. Store-wide revenue is not equivalent to ad-attributed revenue.",
    "proofs": [
      [
        "plasdecore-facebook-page.png",
        "Facebook audience"
      ],
      [
        "plasdecore-meta-ads.jpg",
        "Meta Ads results"
      ],
      [
        "plasdecore-shopify.jpg",
        "Shopify analytics"
      ]
    ],
    "url": "https://www.plasdecore.com"
  },
  {
    "name": "Lenzfine — Lenzfineofficial",
    "category": "BRAND BUILDING · META ADS · WHATSAPP",
    "problem": "A brand-new eyewear store offering original branded contact lenses and glasses frames had no social media presence, audience, or sales system.",
    "actions": [
      "Built the Facebook presence from scratch: page setup, branding, and content.",
      "Grew the page to 1.2K+ followers within 1–2 months.",
      "Ran Meta ad campaigns driving customers to order via WhatsApp.",
      "Optimized ad spend based on performance data."
    ],
    "results": [
      [
        "10X",
        "ROAS within the first month · every Rs1 spent on ads generated Rs10 in sales"
      ],
      [
        "0 → 1.2K+",
        "Facebook followers in 1–2 months"
      ],
      [
        "From scratch",
        "Brand launched and scaled"
      ]
    ],
    "note": "Results supplied by the portfolio owner. Exact first-month reporting dates and supporting ROAS evidence should be added before publication.",
    "proofs": [
      [
        "lenzfine-facebook-page.png",
        "Facebook page"
      ],
      [
        "lenzfine-meta-ads.jpg",
        "ROAS proof",
        true
      ]
    ]
  },
  {
    "name": "Loyal Body Cosmetics",
    "category": "INSTAGRAM · CONTENT STRATEGY · COLLABS",
    "problem": "A Pakistani skincare, beauty, and personal-care brand needed a consistent branded Instagram presence and content that builds trust and supports online sales.",
    "actions": [
      "Managed @loyalbodycosmetics end to end, with 264+ posts published.",
      "Created product-focused posts, benefit-led designs, customer testimonials, and seasonal/festive content such as Eid.",
      "Created collaboration content with creators and influencers to build trust and social proof.",
      "Ran promotion campaigns to drive traffic and sales to loyalbodycosmetics.com."
    ],
    "results": [
      [
        "[+X%]",
        "Sales growth · placeholder"
      ],
      [
        "[X]",
        "Orders generated · placeholder"
      ],
      [
        "1,000+",
        "Engaged Instagram followers"
      ],
      [
        "264+",
        "Posts managed"
      ]
    ],
    "note": "Sales-growth and order figures remain editable placeholders. Other figures were supplied by the portfolio owner; approved supporting screenshots are pending.",
    "proofs": [
      [
        "loyalbody-instagram-profile.png",
        "Instagram profile"
      ],
      [
        "loyalbody-instagram-feed.png",
        "Content feed preview"
      ]
    ]
  },
  {
    "name": "[Brand Name]",
    "category": "OPTIONAL CASE STUDY · PLACEHOLDER",
    "problem": "[Describe the client challenge and starting point.]",
    "actions": [
      "[Add your strategy.]",
      "[Add your execution.]",
      "[Add your measurement approach.]"
    ],
    "results": [
      [
        "[+X%]",
        "Followers · placeholder"
      ]
    ],
    "note": "Illustrative placeholder only. Replace with client-approved information or delete this case study.",
    "proofs": [
      [
        "case4.jpg",
        "Illustrative cover placeholder"
      ]
    ]
  }
];

document.getElementById('year').textContent = new Date().getFullYear();
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('nav-links');
function closeMenu() {
  navigation.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}
menuToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.nav')) closeMenu(); });
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

if (!document.getElementById('testimonials')) {
  document.querySelectorAll('a[href="#testimonials"]').forEach(link => link.remove());
}

const notice = document.getElementById('link-notice');
document.querySelectorAll('.booking-link').forEach(link => {
  link.href = bookingUrl.includes('/your-link') ? '#contact' : bookingUrl;
  if (bookingUrl.includes('/your-link')) {
    link.addEventListener('click', event => {
      event.preventDefault();
      document.getElementById('contact').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      notice.hidden = false;
      notice.textContent = 'Online booking is coming soon. Please send a message or contact me on WhatsApp to arrange a call.';
    });
  }
});
document.querySelectorAll('[data-social]').forEach(link => {
  const destination = profileLinks[link.dataset.social];
  if (destination) {
    link.href = destination;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.removeAttribute('aria-label');
  } else {
    link.addEventListener('click', event => {
      event.preventDefault();
      notice.hidden = false;
      document.getElementById('contact').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      notice.textContent = 'This social profile is not linked yet. Let’s connect by email or WhatsApp instead.';
    });
  }
});

if ('IntersectionObserver' in window) {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('motion-enabled');
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
  }
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navigation.querySelectorAll('a').forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-15% 0px -65% 0px' });
  document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
}

const gallery = document.getElementById('content-grid');
const moreContent = document.getElementById('more-content');
let activeFilter = 'all';
let expandedGallery = false;
function updateGallery() {
  gallery.classList.toggle('expanded', expandedGallery || activeFilter !== 'all');
  gallery.querySelectorAll('[data-category]').forEach(item => {
    item.hidden = activeFilter !== 'all' && item.dataset.category !== activeFilter;
    item.querySelector('video')?.pause();
  });
  moreContent.hidden = activeFilter !== 'all';
  moreContent.setAttribute('aria-expanded', String(expandedGallery));
  moreContent.innerHTML = expandedGallery ? 'Show less <span aria-hidden="true">↑</span>' : 'Explore all content <span aria-hidden="true">↓</span>';
}
document.querySelectorAll('.filter').forEach(filter => {
  filter.addEventListener('click', () => {
    activeFilter = filter.dataset.filter;
    document.querySelectorAll('.filter').forEach(button => {
      const selected = button === filter;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    updateGallery();
  });
});
moreContent.addEventListener('click', () => {
  expandedGallery = !expandedGallery;
  updateGallery();
  if (!expandedGallery) document.getElementById('content').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
});

function openDialog(dialog) {
  dialog.showModal();
  document.body.classList.add('dialog-open');
}
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => document.body.classList.toggle('dialog-open', Boolean(document.querySelector('dialog[open]'))));
});
const caseDialog = document.getElementById('case-dialog');
document.querySelectorAll('[data-case]').forEach(card => {
  card.addEventListener('click', () => {
    const study = caseStudies[Number(card.dataset.case)];
    const details = document.getElementById('case-dialog-content');
    details.replaceChildren();
    function addElement(tag, text, parent = details, className = '') {
      const element = document.createElement(tag);
      element.textContent = text;
      if (className) element.className = className;
      parent.append(element);
      return element;
    }
    addElement('p', study.category, details, 'eyebrow');
    const title = addElement('h2', study.name);
    title.id = 'case-title';
    caseDialog.setAttribute('aria-labelledby', 'case-title');
    addElement('p', 'Figures supplied by the portfolio owner. Supporting screenshots are pending unless displayed below; no independent verification is implied.', details, 'result-note');
    addElement('h3', 'The problem');
    addElement('p', study.problem);
    addElement('h3', 'What I did');
    const list = addElement('ul', '');
    study.actions.forEach(action => addElement('li', action, list));
    addElement('h3', 'Results & reporting period');
    const results = addElement('div', '', details, 'dialog-results');
    study.results.forEach(([value, label]) => {
      const result = addElement('div', '', results);
      addElement('strong', value, result);
      addElement('span', label, result);
    });
    addElement('p', study.note, details, 'result-note');
    const proofs = addElement('div', '', details, 'proof-grid');
    study.proofs.forEach(([filename, label, optional]) => {
      const slot = addElement('figure', '', proofs, 'proof-slot');
      slot.hidden = Boolean(optional);
      const button = addElement('button', '', slot);
      button.type = 'button';
      button.dataset.proof = 'assets/' + filename;
      button.dataset.title = label;
      if (optional) button.dataset.optional = 'true';
      button.disabled = true;
      addElement('span', label + ' — approved screenshot pending', button, 'proof-placeholder');
      addElement('figcaption', filename, slot);
      loadProof(button);
    });
    if (study.url) {
      const link = addElement('a', 'Visit Store ↗', details, 'button button-outline');
      link.href = study.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    openDialog(caseDialog);
  });
});
document.querySelectorAll('.case-card').forEach(card => {
  card.addEventListener('click', event => {
    if (!event.target.closest('a, button')) card.querySelector('[data-case]')?.click();
  });
});
const lightbox = document.getElementById('lightbox');
// PROOF: Add approved screenshots at these paths. Missing proof never displays stock images or broken thumbnails.
function loadProof(button) {
  const image = new Image();
  image.alt = button.dataset.title;
  image.onload = () => {
    button.replaceChildren(image);
    button.disabled = false;
    button.dataset.lightbox = button.dataset.proof;
    button.closest('.proof-slot').hidden = false;
  };
  image.onerror = () => {
    if (button.dataset.optional) button.closest('.proof-slot').remove();
  };
  image.src = button.dataset.proof;
}
if ('IntersectionObserver' in window) {
  const proofObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadProof(entry.target);
        proofObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '150px' });
  document.querySelectorAll('[data-proof]:not([data-optional])').forEach(button => proofObserver.observe(button));
} else {
  document.querySelectorAll('[data-proof]:not([data-optional])').forEach(loadProof);
}
document.querySelectorAll('[data-proof][data-optional]').forEach(loadProof);
document.addEventListener('click', event => {
  const item = event.target.closest('[data-lightbox]');
  if (!item || item.disabled) return;
  document.getElementById('lightbox-image').src = item.dataset.lightbox;
  document.getElementById('lightbox-image').alt = item.dataset.title;
  document.getElementById('lightbox-title').textContent = item.dataset.title;
  openDialog(lightbox);
});
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); });
  });
});

const testimonialSlides = [...document.querySelectorAll('.testimonial-slide')];
let testimonialIndex = 0;
function showTestimonial(direction) {
  testimonialIndex = (testimonialIndex + direction + testimonialSlides.length) % testimonialSlides.length;
  testimonialSlides.forEach((slide, index) => { slide.hidden = index !== testimonialIndex; });
  document.getElementById('slide-count').textContent = `${String(testimonialIndex + 1).padStart(2, '0')} / ${String(testimonialSlides.length).padStart(2, '0')}`;
  document.getElementById('slide-announcement').textContent = `Testimonial ${testimonialIndex + 1} of ${testimonialSlides.length}`;
}
if (testimonialSlides.length) {
  document.getElementById('previous-testimonial').addEventListener('click', () => showTestimonial(-1));
  document.getElementById('next-testimonial').addEventListener('click', () => showTestimonial(1));
}

const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
// Netlify persists submissions; no custom database or server is required. The native form still works without JavaScript.
form.addEventListener('submit', async event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const submitButton = form.querySelector('[type="submit"]');
  const originalLabel = submitButton.innerHTML;
  submitButton.disabled = true;
  submitButton.textContent = 'Sending your message…';
  formStatus.hidden = true;
  formStatus.classList.remove('error');
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString()
    });
    if (!response.ok) throw new Error('Submission failed');
    form.reset();
    formStatus.textContent = 'Thank you! Your message is on its way. I’m looking forward to hearing more about your brand.';
  } catch {
    formStatus.classList.add('error');
    formStatus.textContent = 'Your message couldn’t be sent. Please try again, or email vmansari41@gmail.com. Your form details have been kept.';
  } finally {
    formStatus.hidden = false;
    submitButton.disabled = false;
    submitButton.innerHTML = originalLabel;
  }
});
if (new URLSearchParams(window.location.search).get('submitted') === 'true') {
  formStatus.hidden = false;
  formStatus.textContent = 'Thank you! Your message has been sent. Let’s build something good together.';
}
