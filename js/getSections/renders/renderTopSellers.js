import { formatCurrency } from "../../utils/formatCurrency.js";

export default function renderTopSellers(gamesData) {
  const topSellersSection = document.querySelector("#section__top_sellers");

  const numGamesToDisplay = gamesData.length;

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
    <div class="product_card">
      <a href="/pages/description.html?id=${game.id}">
        <img 
          class="img-scr" 
          src="${game.image}" 
          alt="${game.description}"
        />
        <div class="product_details">
          <b>${game.title}</b>
          ${priceToRender(game)}
        </div>
      </a>
    </div>
  `;

  let topSellersItems = "";

  for (let index = 0; index < numGamesToDisplay - 1; index++) {
    topSellersItems += cardToRender(gamesData[index]);
  }

  topSellersSection.innerHTML = topSellersItems;

  // SCROLL SLIDER

  const slider = document.querySelector(".grid-scr");
  let mouseDown = false;
  let startX, scrollLeft;

  let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };
  let stopDragging = function (event) {
    mouseDown = false;
  };

  slider.addEventListener("mousemove", (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
  });

  slider.addEventListener("mousedown", startDragging, false);
  slider.addEventListener("mouseup", stopDragging, false);
  slider.addEventListener("mouseleave", stopDragging, false);
}
