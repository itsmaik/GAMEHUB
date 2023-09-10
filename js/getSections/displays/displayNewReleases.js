import { getNewReleases } from "/js/utils/formatters.js";

export default function displayNewReleases(gamesData) {
  let newReleases = "";

  const gamesReleases = getNewReleases(gamesData);

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

    newReleases += `
      <span class='product_card'>
        <a href="/pages/description.html?id=${gamesReleases[index].id}">
          <img 
            class="product_card__image" 
            src="${gamesReleases[index].image}" 
            alt="${gamesReleases[index].description}"
          />
        </a>
        <div class='product_details'>
          <b>${gamesData[index].title}</b>
          ${priceToRender}
        </div>
      </span>
    `;
  }

  document.querySelector("#section__new_release").innerHTML = newReleases;
}
