// Récupérer le panier depuis localStorage ou initialiser un panier vide
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Mettre à jour le compteur du panier
function updateCartCount() {
  // Cherche l’élément <span id="cart-count">
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    // Somme des quantités
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
}

// Ajouter un produit au panier
function addToCart(productId, productName, productPrice, bulkPrice) {
  // Vérifie si le produit existe déjà dans le panier
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    // Augmente la quantité
    existingItem.quantity++;
    existingItem.totalPrice =
      existingItem.quantity >= 10
        ? existingItem.quantity * bulkPrice
        : existingItem.quantity * productPrice;
  } else {
    // Ajoute un nouveau produit
    cart.push({
      id: productId,
      name: productName,
      image: `images/product${productId}.png`, 
      price: productPrice,
      bulkPrice: bulkPrice,
      quantity: 1,
      totalPrice: productPrice,
    });
  }

  // Sauvegarder dans localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Mettre à jour l’affichage du compteur
  updateCartCount();

  // Rediriger vers la page d’accueil (ou la page de produits)
  window.location.href = 'kalysta_new_version.html';
}

// Afficher les articles dans le panier
function displayCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalPrice = document.getElementById('cart-total-price');

  if (!cartItemsContainer) return;

  // Vider le contenu précédent
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Votre panier est vide.</p>';
    cartTotalPrice.textContent = '0';
    return;
  }

  // Affiche chaque article
  cart.forEach((item, index) => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p>Prix : ${item.quantity >= 10 ? item.bulkPrice : item.price} €</p>
        <div class="cart-actions">
          <button onclick="decreaseQuantity(${index})">-</button>
          <span>${item.quantity}</span>
          <button onclick="increaseQuantity(${index})">+</button>
        </div>
        <p>Total : ${item.totalPrice} €</p>
      </div>
      <button onclick="removeFromCart(${item.id})">Supprimer</button>
    `;
    cartItemsContainer.appendChild(itemElement);
  });

  // Mettre à jour le total
  updateTotalPrice();
}

// Mettre à jour le total du panier
function updateTotalPrice() {
  const cartTotalPrice = document.getElementById('cart-total-price');
  if (!cartTotalPrice) return;

  const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  cartTotalPrice.textContent = total;
}

// Supprimer un article du panier
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
  updateCartCount();
  updateTotalPrice();
}

// Augmenter la quantité
function increaseQuantity(index) {
  const item = cart[index];
  item.quantity++;
  item.totalPrice =
    item.quantity >= 10
      ? item.quantity * item.bulkPrice
      : item.quantity * item.price;

  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
  updateCartCount();
}

// Diminuer la quantité
function decreaseQuantity(index) {
  const item = cart[index];
  if (item.quantity > 1) {
    item.quantity--;
    item.totalPrice =
      item.quantity >= 10
        ? item.quantity * item.bulkPrice
        : item.quantity * item.price;

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
  } else {
    removeFromCart(item.id);
  }
}
