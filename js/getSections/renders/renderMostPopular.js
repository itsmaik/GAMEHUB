import { getSpecialOffers } from "/js/utils/formatters.js";
import { formatCurrency } from "../../utils/formatCurrency.js";

export default function renderMostPopular(gamesData) {
  const specialOffersSection = document.querySelector(
    "#section__special_offers"
  );

  const popularGames = getSpecialOffers(gamesData);
  const numGamesToDisplay = 4;

  const priceToRender = (game) => {
    if (game.price !== game.discountedPrice) {
      return `
        <div class="product_details__price_discount">
          <p>${formatCurrency(game.price)}</p>
          <b>${formatCurrency(game.discountedPrice)}</b>
        </div>
      `;
    } else {
      return `
        <div class="product_details__price">
          <p>${formatCurrency(game.price)}</p>
        </div>
      `;
    }
  };

  const cardToRender = (game) => `
    <span class="product_card">
      <a href="/pages/description.html?id=${game.id}">
        <img 
          class="product_card__image" 
          src="${game.image}" 
          alt="${game.description}"
        />
        <div class="product_details">
          <b>${game.title}</b>
          ${priceToRender(game)}
        </div>
      </a>
    </span>
  `;

  let mostPopularItems = "";

  for (let index = 0; index < numGamesToDisplay - 1; index++) {
    mostPopularItems += cardToRender(popularGames[index]);
  }

  specialOffersSection.innerHTML = mostPopularItems;
}
