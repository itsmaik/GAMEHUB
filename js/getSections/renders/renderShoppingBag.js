import {
  getCartItems,
  getTotalValue,
  removeToCart,
  setCartCounter,
} from "../../utils/cartCrud.js";
import { formatCurrency } from "../../utils/formatCurrency.js";
import {
  findDiscountCardByPromoCode,
  findGiftCardByPromoCode,
} from "../../utils/verifyDiscounts.js";

export default function renderShoppingBag(gamesData) {
  const priceToRender = (game) => {
    if (game.price !== game.prices.sale_price) {
      return `
        <div class="product_details__price_discount">
          <p>${formatCurrency(game.prices.price)}</p>
          <b>${formatCurrency(game.prices.sale_price)}</b>
        </div>
      `;
    } else {
      return `
        <div class="product_details__price">
          <p>${formatCurrency(game.prices.price)}</p>
        </div>
      `;
    }
  };

  const cardToRender = (game, quantity) => {
    const priceToCalculate =
      game.prices.price !== game.prices.sale_price ? game.prices.sale_price : game.prices.price;

    const calculatedPrice = Number(priceToCalculate) * quantity;

    const formatedPrice = formatCurrency(calculatedPrice);

    return `
    <div class="cart__products_item">
      <div class="cart__product_detail">
        <img src="${game.images[0].src}" alt="${game.description}" />
      </div>

      <div class="cart__product_detail">
        <h1 class="h-shop">${game.name}</h1>
      </div>

      <div class="cart__product_detail">
        <p class="p-shop">${game.categories[0].name}</p>
      </div>

      <div class="cart__product_detail">
        <p class="p-shop">${priceToRender(game)}</p>
      </div>

      <div class="cart__product_detail">
        <p class="p-shop">${quantity}</p>
      </div>

      <div class="cart__product_detail">
        <p class="p-shop">${formatedPrice}</p>
      </div>

      <button class="cart__product_detail__exclude" data-product-id="${
        game.id
      }">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `;
  };

  // ----------------------------------------- TOTAL PRICE RENDERS

  const submitGiftCard = (event) => {
    event.preventDefault();
  };

  const submitDiscount = (event) => {
    event.preventDefault();
  };

  const giftsInputsToRender = () => {
    const giftInput = `
      <input
        id="gift_input"
        class="promo_code__input"
        type="text"
        placeholder="Use a gift card"
        aria-label="card-detail-1"
      />
    `;

    const discountInput = `
      <input
        id="discount_input"
        class="promo_code__input"
        type="text"
        placeholder="Type your promotional code"
        aria-label="card-detail-1"
      />
    `;

    return `
      ${giftInput}
      ${discountInput}
    `;
  };

  const totalPriceToRender = (gamesData) => {
    const totalValue = getTotalValue(gamesData);

    // Change here to modify the shipping price
    const shippingValue = 0;

    const totalValueToRender = totalValue + shippingValue;

    return `
      <p>${formatCurrency(totalValue)}</p>
      <p>${formatCurrency(shippingValue)}</p>
      <p>${formatCurrency(0)}</p>
      <p><span class="bold">${formatCurrency(totalValueToRender)}<span></p>
    `;
  };

  // ----------------------------------------- RENDER CART ITEMS

  const shoppingBag = document.querySelector(".cart__products_list");

  const cartItems = getCartItems();

  let mostPopularItems = "";

  cartItems.forEach((item) => {
    const game = gamesData.find((game) => game.id === item.id);

    if (game) {
      mostPopularItems += cardToRender(game, item.quantity);
    }
  });

  shoppingBag.innerHTML = mostPopularItems;

  // ----------------------------------------- RENDER CART TOTAL

  function updateTotalPrice(discountAmount) {
    const totalPricing = document.querySelector("#pricing");
    const currentTotalValue = getTotalValue(gamesData);

    // Change here to modify the shipping price
    const shippingValue = 0;

    const updatedTotalValue =
      currentTotalValue + shippingValue - discountAmount;

    totalPricing.innerHTML = `
      <p>${formatCurrency(currentTotalValue)}</p>
      <p>${formatCurrency(shippingValue)}</p>
      <p class="discount_amount">
        ${formatCurrency(discountAmount)}
      </p>
      <p><span class="bold">${formatCurrency(updatedTotalValue)}<span></p>
    `;
  }

  const handleGiftCardInput = (event) => {
    if (event.key === "Enter") {
      const promoCode = event.target.value;
      const giftCard = findGiftCardByPromoCode(promoCode);

      if (giftCard) {
        updateTotalPrice(giftCard.giftCardPromoValue);
        event.target.value = "";
      } else {
        alert("Invalid gift card code");
      }
    }
  };

  const handleDiscountInput = (event) => {
    if (event.key === "Enter") {
      const promoCode = event.target.value;
      const discount = findDiscountCardByPromoCode(promoCode);

      if (discount) {
        updateTotalPrice(discount.discountPromoValue);
        event.target.value = "";
      } else {
        alert("Invalid discount code");
      }
    }
  };

  const giftsInputs = document.querySelector(".giftcards");
  const totalPricing = document.querySelector("#pricing");

  giftsInputs.innerHTML = giftsInputsToRender();
  totalPricing.innerHTML = totalPriceToRender(gamesData);

  const giftInputField = giftsInputs.querySelector("#gift_input");
  const discountInputField = giftsInputs.querySelector("#discount_input");

  giftInputField.addEventListener("keydown", handleGiftCardInput);
  discountInputField.addEventListener("keydown", handleDiscountInput);

  // ----------------------------------------- EXCLUDE FUNCTION

  const excludeButtons = document.querySelectorAll(
    ".cart__product_detail__exclude"
  );

  excludeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.getAttribute("data-product-id");

      removeToCart(productId);
      renderShoppingBag(gamesData);

      setCartCounter();
    });
  });
  // ----------------------------------------- CONTROL IF CART IS EMPTY

  const cartContainer = document.querySelector(".cart_container");
  const cartContainerEmpty = document.querySelector(".cart_container_empty");

  if (cartItems.length > 0) {
    cartContainer.classList.remove("hidden");
    cartContainer.classList.add("shown");
    cartContainerEmpty.classList.remove("shown");
    cartContainerEmpty.classList.add("hidden");
  } else {
    cartContainer.classList.remove("shown");
    cartContainer.classList.add("hidden");
    cartContainerEmpty.classList.remove("hidden");
    cartContainerEmpty.classList.add("shown");
  }
}
