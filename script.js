const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'মেনু খুলুন' : 'মেনু বন্ধ করুন');
  nav.classList.toggle('open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'মেনু খুলুন');
    nav.classList.remove('open');
  });
});

document.querySelector('#appointment-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const lines = [
    'Dr. Zaman\'s Dental Clinic-এ অ্যাপয়েন্টমেন্টের অনুরোধ',
    `নাম: ${form.get('name')}`,
    `ফোন: ${form.get('phone')}`,
    `সেবা: ${form.get('service')}`,
    form.get('date') ? `পছন্দের দিন: ${form.get('date')}` : '',
    form.get('message') ? `বার্তা: ${form.get('message')}` : ''
  ].filter(Boolean);
  const whatsappUrl = `https://wa.me/8801681873041?text=${encodeURIComponent(lines.join('\n'))}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});

document.querySelector('#year').textContent = new Date().getFullYear();
