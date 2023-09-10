import { getSpecialOffers } from "/js/utils/formatters.js";

export default function displayMostPopular(gamesData) {
  let mostPopular = "";

  const popularGames = getSpecialOffers(gamesData);

  for (let index = 0; index <= 3; index++) {
    const priceWithoutDiscount = `
      <div class="product_details__price">
        <p>$ ${gamesData[index].price}</p>
      </div>
    `;

    const priceWithDiscount = `
      <div class="product_details__price_discount">
        <p>$ ${gamesData[index].discountedPrice}</p>
        <b>$ ${gamesData[index].price}</b>
      </div>
    `;

    const priceToRender =
      gamesData[index].price !== gamesData[index].discountedPrice
        ? priceWithDiscount
        : priceWithoutDiscount;

    mostPopular += `
      <span class='product_card'>
        <a href="/pages/description.html?id=${popularGames[index].id}">
          <img 
            class="product_card__image" 
            src="${popularGames[index].image}" 
            alt="${popularGames[index].description}"
          />
          <div class='product_details'>
            <b>${gamesData[index].title}</b>
            ${priceToRender}
          </div>
        </a>
      </span>
    `;
  }

  document.querySelector("#section__special_offers").innerHTML = mostPopular;
}
