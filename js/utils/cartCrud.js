// --> REMOVE ITEM TO CART

function removeToCart(productId) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const index = cartItems.findIndex((item) => item.id === productId);

  if (index !== -1) {
    cartItems.splice(index, 1);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
}

// --> ADD ITEM TO CART

function addToCart(productId, quantity) {
  console.log(productId, quantity);

  if (quantity <= 0) {
    removeToCart(produtoId);
    return;
  }

  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const existingProduct = cartItems.find((item) => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cartItems.push({ id: productId, quantity: quantity });
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// --> GET THE ITEMS IN THE CART

function getCartItems() {
  return JSON.parse(localStorage.getItem("cartItems")) || [];
}

// --> DEFINE AND CONTROL THE NUMBER IN THE CART COUNTER

function setCartCounter() {
  const cartCounterElements = document.querySelectorAll(
    ".cart__count_indicator"
  );

  const cart = getCartItems();
  const cartCounter = cart.reduce((total, item) => total + item.quantity, 0);

  cartCounterElements.forEach((cartCounterElement) => {
    if (cartCounter > 0) {
      cartCounterElement.classList.remove("inactive");
      cartCounterElement.textContent = cartCounter;
    } else {
      cartCounterElement.classList.add("inactive");
    }
  });
}

// --> GET THE NUMBER OF ALL PRODUCTS IN THE CART

function getTotalValue(gamesData) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  let totalValue = 0;

  cartItems.forEach((item) => {
    const game = gamesData.find((game) => game.id === item.id);

    if (game) {
      totalValue += game.discountedPrice * item.quantity;
    }
  });

  return totalValue;
}

export { addToCart, removeToCart, getCartItems, setCartCounter, getTotalValue };
