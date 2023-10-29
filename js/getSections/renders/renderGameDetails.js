import { addToCart, setCartCounter } from "../../utils/cartCrud.js";
import { formatCurrency } from "../../utils/formatCurrency.js";

const gameContainer = document.querySelector("#section__game_details");

export default function renderGameDetails(game) {
  const priceToRender = (game) => {
    if (game.prices.price !== game.prices.sale_price) {
      return `
        <div class="product_details__price_discount">
          <p>${formatCurrency(game.price)}</p>
          <b>${formatCurrency(game.discountedPrice)}</b>
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

  gameContainer.innerHTML = `
    <div class="grid-box-1">
      <div>
        <img
          class="box1-pic1"
          src="${game.images[0].src}"
          alt=""
        />
      </div>

      <div class="game-desc-1">
        <h1 class="h1-desc">${game.name}</h1>
        ${priceToRender(game)}
        <form id="card-detail-1" action="post">
          <input type="number" value="1" />
        </form>
        <button class="orange" id="add-to-card">ADD TO CARD</button>
      </div>
    </div>
    <div class="grid-box-2">
      <img
        class="box2-pic1"
        src="${game.images[0].src}"
        alt="A warrior in front a castle"
      />
      <div class="game-desc-2">
        <p class="p-game-desc-2">${game.description}</p>
        <button class="orange" id="add-to-card">READ MORE</button>
      </div>
    </div>
  `;

  const addToCartButton = document.getElementById("add-to-card");
  const inputQuantity = document.querySelector("#card-detail-1 input");

  addToCartButton.addEventListener("click", () => {
    const productId = game.id;
    const quantity = parseInt(inputQuantity.value);

    addToCart(productId, quantity);
    setCartCounter();
  });
}