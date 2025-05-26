
﻿const products = [
  { id: 1, name: "Apples", price: 2.5 },
  { id: 2, name: "Bananas", price: 1.2 },
  { id: 3, name: "Milk", price: 3.0 },
  { id: 4, name: "Bread", price: 2.0 },
  { id: 5,  name: "peanut butter", price: 4.2 },
  { id: 6,  name: "paneer", price: 2.6 },
  { id: 7,  name:  "carrot", price: 1.6 },
  { id: 8,  name:  "curd", price: 2.4 },
  { id: 9,  name: "ghee", price: 4.6 },
  { id: 10, name: "mango", price: 3.8 },
  { id: 11, name: "cheese", price: 4.5 },
  { id: 12, name: "eggs",  price: 4.3 },
  { id: 13, name: "jam", price: 5.1 },
  { id: 14, name: "tomato sauce", price: 5.4 },
  { id: 15, name: "atta", price: 6.6 },
 ];
let cart = [];

function renderProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCartCount();
  alert(`${product.name} added to cart!`);
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function viewCart() {
  const cartSection = document.getElementById("cart-section");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.innerText = total.toFixed(2);
  cartSection.style.display = "block";
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for your purchase!");
  cart = [];
  updateCartCount();
  document.getElementById("cart-section").style.display = "none";
}

renderProducts();
