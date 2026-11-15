document.addEventListener('DOMContentLoaded', () => {
  // 1. Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // 2. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // 3. Product Category Tab Filtering
  const tabButtons = document.querySelectorAll('.tab-btn');
  const productCards = document.querySelectorAll('.card');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const selectedCategory = button.getAttribute('data-category');

      productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (selectedCategory === 'all' || cardCategory.includes(selectedCategory)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 4. WhatsApp / Order Inquiry Action
  const whatsappNumber = '917765895851'; // Replace with your business WhatsApp number
  document.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const product = btn.getAttribute('data-product');
      const message = encodeURIComponent(`Namaste Sarvdrik! I would like to know more about your ${product}.`);
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    });
  });
});
