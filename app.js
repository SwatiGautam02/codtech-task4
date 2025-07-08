if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker registered', reg))
      .catch(err => console.log('Service Worker registration failed', err));
  });
}

const products = [
  { name: "Lipstick", price: "₹299", img: "https://via.placeholder.com/150" },
  { name: "Facewash", price: "₹199", img: "https://via.placeholder.com/150" },
  { name: "Moisturizer", price: "₹399", img: "https://via.placeholder.com/150" }
];

const list = document.getElementById('product-list');
products.forEach(p => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<img src="${p.img}" alt="${p.name}"><h3>${p.name}</h3><p>${p.price}</p>`;
  list.appendChild(card);
});

function showNotification() {
  alert("Thanks for subscribing to notifications!");
}