import { getSpecialOffers } from "/js/utils/formatters.js";
import { formatCurrency } from "../../utils/formatCurrency.js";

export default function renderMostPopular(gamesData) {
  const specialOffersSection = document.querySelector(
    "#section__special_offers"
  );
  const popularGames = getSpecialOffers(gamesData);
  const numGamesToDisplay = 4;
  console.log("popularGames", popularGames)

  const priceToRender = (game) => {

    if (game.prices.price !== game.prices.sale_price) {
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

  const cardToRender = (game) => {
    console.log("game", game)
    return `
    <span class="product_card">
      <a href="/pages/description.html?id=${game.id}">
        <img 
          class="product_card__image" 
          src="${game.images[0].src}" 
          alt="${game.images[0].alt}"
        />
        <div class="product_details">
          <b>${game.name}</b>
          ${priceToRender(game)}
        </div>
      </a>
    </span>
  `;
}

  let mostPopularItems = "";

  for (let index = 0; index < numGamesToDisplay - 1; index++) {
    mostPopularItems += cardToRender(popularGames[index]);
  }

  specialOffersSection.innerHTML = mostPopularItems;
}
