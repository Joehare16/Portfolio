// Mobile nav toggle
const navToggleButton = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggleButton && navMenu) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Contact form validation + stub submit
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const statusEl = document.getElementById('formStatus');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    statusEl.textContent = '';

    // Validate
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    let valid = true;

    if (!name) { nameError.textContent = 'Please enter your name.'; valid = false; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      valid = false;
    }
    if (!message) { messageError.textContent = 'Please enter a message.'; valid = false; }
    if (!valid) { return; }

    // Submit to Formspree
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form),
      });
      if (response.ok) {
        statusEl.textContent = 'Thanks! Your message has been sent.';
        form.reset();
      } else {
        statusEl.textContent = 'Sorry, something went wrong. Please try again later.';
      }
    } catch (err) {
      statusEl.textContent = 'Sorry, something went wrong. Please try again later.';
    }
  });
}


