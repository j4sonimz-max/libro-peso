const items = [...document.querySelectorAll('.audience-item')];
const cards = [...document.querySelectorAll('.card-content')];
const counter = document.querySelector('#current-card');

items.forEach((item, index) => item.addEventListener('click', () => {
  items.forEach(button => button.classList.remove('active'));
  cards.forEach(card => card.classList.remove('active'));
  item.classList.add('active');
  cards[index].classList.add('active');
  counter.textContent = String(index + 1).padStart(2, '0');
}));

const panels = [...document.querySelectorAll('[data-panel]')];
const progress = document.querySelector('.progress span');
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) progress.style.height = `${(Number(visible.target.dataset.panel) + 1) / panels.length * 100}%`;
}, { threshold: [0.35, 0.6] });
panels.forEach(panel => observer.observe(panel));
document.querySelector('#year').textContent = new Date().getFullYear();
