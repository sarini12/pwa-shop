// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log("SW registered"));
}

// Example product data
const products = [
  { id: 1, name: "Headphones", price: "₹1999" },
  { id: 2, name: "Smart Watch", price: "₹3299" },
  { id: 3, name: "Keyboard", price: "₹1499" }
];

const catalog = document.getElementById("catalog");
products.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h3>${p.name}</h3><p>${p.price}</p><button>Add to Cart</button>`;
  catalog.appendChild(card);
});

// Simple Push Notification request
document.getElementById("notify").addEventListener("click", async () => {
  let permission = await Notification.requestPermission();
  if (permission === "granted") {
    new Notification("Thanks for enabling notifications!");
  } else {
    alert("Notifications blocked!");
  }
});
