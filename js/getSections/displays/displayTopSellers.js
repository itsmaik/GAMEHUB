export default function displayTopSellers(gamesData) {
  let newReleases = "";

  for (let index = 0; index <= gamesData.length - 1; index++) {
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
    <div class='product_card'>
      <a href="/pages/description.html?id=${gamesData[index].id}">
        <img
          class="img-scr"
          src="${gamesData[index].image}" 
          alt="${gamesData[index].description}"
        />
        <div class='product_details'>
          <b>${gamesData[index].title}</b>
          ${priceToRender}
        </div>
      </a>
    </div>
    `;
  }

  document.querySelector("#section__top_sellers").innerHTML = newReleases;

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
