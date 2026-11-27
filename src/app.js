/* Small, dependency-free interactions. No user text is inserted as HTML. */
const root = document.documentElement;
const language = window.selectaI18n;
const translated = (cs, en) => language.locale === 'en' ? en : cs;
const themeButton = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('selecta-theme');
if (savedTheme === 'light') root.dataset.theme = 'light';
setTheme(root.dataset.theme);
function setTheme(theme) {
  root.dataset.theme = theme;
  themeButton.setAttribute('aria-pressed', String(theme === 'light'));
  themeButton.setAttribute('aria-label', theme === 'light' ? translated('Přepnout na tmavý režim', 'Switch to dark mode') : translated('Přepnout na světlý režim', 'Switch to light mode'));
  themeButton.querySelector('.theme-label').textContent = theme === 'light' ? translated('Tma', 'Dark') : translated('Světlo', 'Light');
  themeButton.querySelector('.theme-icon').textContent = theme === 'light' ? '☾' : '☼';
  document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#f4f0e9' : '#10100f';
}
themeButton.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(next);
  localStorage.setItem('selecta-theme', next);
});

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#site-nav');
function updateMenuLabel() {
  menuButton.setAttribute('aria-label', root.classList.contains('nav-open') ? translated('Zavřít navigaci', 'Close navigation') : translated('Otevřít navigaci', 'Open navigation'));
}
updateMenuLabel();
menuButton.addEventListener('click', () => {
  const open = root.classList.toggle('nav-open');
  menuButton.setAttribute('aria-expanded', String(open));
  updateMenuLabel();
});
mobileNav.addEventListener('click', event => {
  if (event.target.closest('a')) {
    root.classList.remove('nav-open');
    menuButton.setAttribute('aria-expanded', 'false');
    updateMenuLabel();
  }
});
for (const menu of mobileNav.querySelectorAll('details')) menu.addEventListener('toggle', () => {
  if (menu.open) for (const sibling of mobileNav.querySelectorAll('details')) if (sibling !== menu) sibling.open = false;
});
document.addEventListener('click', event => {
  if (!event.target.closest('.main-nav')) for (const menu of mobileNav.querySelectorAll('details')) menu.open = false;
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    for (const menu of mobileNav.querySelectorAll('details')) menu.open = false;
    root.classList.remove('nav-open');
    menuButton.setAttribute('aria-expanded', 'false');
    updateMenuLabel();
  }
});

const filterButtons = [...document.querySelectorAll('.filter')];
const galleryItems = [...document.querySelectorAll('.gallery-item')];
for (const button of filterButtons) button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  for (const filter of filterButtons) {
    const active = filter === button;
    filter.classList.toggle('is-active', active);
    filter.setAttribute('aria-pressed', String(active));
  }
  for (const item of galleryItems) item.hidden = selected !== 'all' && item.dataset.category !== selected;
});

const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox?.querySelector('img');
const lightboxCaption = lightbox?.querySelector('figcaption');
let currentItem = 0;
function openItem(item) {
  currentItem = galleryItems.indexOf(item);
  lightboxImage.src = item.dataset.src;
  lightboxImage.alt = item.querySelector('img').alt;
  lightboxCaption.textContent = item.dataset.caption;
  if (!lightbox.open) lightbox.showModal();
}
for (const item of galleryItems) item.addEventListener('click', () => openItem(item));
lightbox?.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox?.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
function stepImage(direction) {
  const visible = galleryItems.filter(item => !item.hidden);
  const position = visible.indexOf(galleryItems[currentItem]);
  openItem(visible[(position + direction + visible.length) % visible.length]);
}
for (const button of lightbox?.querySelectorAll('[data-step]') || []) button.addEventListener('click', () => stepImage(Number(button.dataset.step)));
lightbox?.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') stepImage(-1);
  if (event.key === 'ArrowRight') stepImage(1);
});
window.addEventListener('languagechange', () => {
  setTheme(root.dataset.theme);
  updateMenuLabel();
  if (lightbox?.open) {
    const item = galleryItems[currentItem];
    lightboxImage.alt = item.querySelector('img').alt;
    lightboxCaption.textContent = item.dataset.caption;
  }
  if (statusMessage && status) setStatus(statusMessage);
});

/* Reveal contact details only after a person interacts with the page. */
const contacts = {
  email: [83,101,108,101,99,116,97,65,114,116,52,85,64,103,109,97,105,108,46,99,111,109],
  phone: [43,52,50,48,32,54,48,54,32,55,55,54,32,55,57,57]
};
for (const button of document.querySelectorAll('[data-reveal]')) button.addEventListener('click', () => {
  const kind = button.dataset.reveal;
  const value = String.fromCharCode(...contacts[kind]);
  const link = document.createElement('a');
  link.href = kind === 'email' ? `mailto:${value}` : `tel:${value.replaceAll(' ', '')}`;
  link.textContent = value;
  button.replaceWith(link);
});

document.querySelector('#year').textContent = new Date().getFullYear();
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
let statusMessage = '';
function setStatus(message) {
  statusMessage = message;
  const messages = {
    invalid: ['Vyplňte prosím všechna povinná pole správně.', 'Please complete all required fields correctly.'],
    sending: ['Odesílám zprávu…', 'Sending your message…'],
    success: ['Děkuji. Vaše zpráva byla odeslána.', 'Thank you. Your message has been sent.'],
    error: ['Zprávu se nepodařilo odeslat. Zobrazte si prosím e-mail vlevo a napište mi přímo.', 'The message could not be sent. Please reveal the email address on the left and write to me directly.']
  };
  status.textContent = message ? messages[message][language.locale === 'en' ? 1 : 0] : '';
}
if (form) {
form.elements.startedAt.value = String(Date.now());
form.addEventListener('submit', async event => {
  event.preventDefault();
  for (const control of form.querySelectorAll('[aria-invalid]')) control.removeAttribute('aria-invalid');
  if (!form.checkValidity()) {
    const invalid = form.querySelector(':invalid');
    invalid?.setAttribute('aria-invalid', 'true');
    invalid?.focus();
    setStatus('invalid');
    return;
  }
  const submit = form.querySelector('[type="submit"]');
  submit.disabled = true;
  setStatus('sending');
  const payload = Object.fromEntries(new FormData(form));
  try {
    const response = await fetch(form.action, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if (!response.ok) throw new Error(String(response.status));
    form.reset();
    form.elements.startedAt.value = String(Date.now());
    setStatus('success');
  } catch {
    setStatus('error');
  } finally {
    submit.disabled = false;
  }
});
}
