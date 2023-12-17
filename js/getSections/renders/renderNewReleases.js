import { getNewReleases } from "/js/utils/formatters.js";
import { formatCurrency } from "../../utils/formatCurrency.js";

export default function renderNewReleases(gamesData) {
  const newReleasesSection = document.querySelector("#section__new_release");

  const gamesReleases = getNewReleases(gamesData);
  const numGamesToDisplay = 4;

  console.log("gamesReleases", gamesReleases)
  console.log("gamesData", gamesData)

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

  const cardToRender = (game) => `
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

  let newReleasesItems = "";

  for (let index = 0; index < numGamesToDisplay - 1; index++) {
    newReleasesItems += cardToRender(gamesReleases[index]);
  }

  newReleasesSection.innerHTML = newReleasesItems;
}
