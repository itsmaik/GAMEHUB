export default function renderTradeInSelection(gamesData) {
  const containerMainLeft = `
    <div class="grid-standard-1">
      <div class="img-standard-1">
        <a href="/pages/description.html?id=${gamesData[0].id}"
          ><img
            src="${gamesData[0].images[0].src}"
            alt="${gamesData[0].description}"
        /></a>
      </div>
      <div class="img-standard">
        <a href="/pages/description.html?id=${gamesData[1].id}"
          ><img
            src="${gamesData[1].images[0].src}"
            alt="${gamesData[1].description}"
        /></a>
      </div>
      <div class="img-standard">
        <a href="/pages/description.html?id=${gamesData[2].id}"
          ><img
            src="${gamesData[2].images[0].src}"
            alt="${gamesData[2].description}"
        /></a>
      </div>
      <div class="img-standard" id="pic3">
        <a href="/pages/description.html?id=${gamesData[3].id}"
          ><img
            src="${gamesData[3].images[0].src}"
            alt="${gamesData[3].description}"
        /></a>
      </div>
      <div class="img-standard">
        <a href="/pages/description.html?id=${gamesData[4].id}"
          ><img
            src="${gamesData[4].images[0].src}"
            alt="${gamesData[4].description}"
        /></a>
      </div>
    </div>
  `;

  const containerMainRight = `
    <div class="grid-standard-2">
      <div class="img-standard">
        <a href="/pages/description.html?id=${gamesData[5].id}"
          ><img
            src="${gamesData[5].images[0].src}"
            alt="${gamesData[5].description}"
        /></a>
      </div>
      <div class="img-standard">
        <a href="/pages/description.html?id=${gamesData[6].id}"
          ><img
            src="${gamesData[6].images[0].src}"
            alt="${gamesData[6].description}"
        /></a>
      </div>
      <div class="img-standard">
        <a href="/pages/description.html?id=${gamesData[7].id}"
          ><img
            src="${gamesData[7].images[0].src}"
            alt="${gamesData[7].description}"
        /></a>
      </div>
      <div class="img-standard">
        <a href="/pages/description.html?id=${gamesData[8].id}"
          ><img
            src="${gamesData[8].images[0].src}"
            alt="${gamesData[8].description}"
        /></a>
      </div>
      <div class="img-standard-2" id="pic2">
        <a href="/pages/description.html?id=${gamesData[9].id}"
          ><img
            src="${gamesData[9].images[0].src}"
            alt="${gamesData[9].description}"
        /></a>
      </div>
    </div>
  `;

  document.querySelector("#section__trade_in_selection").innerHTML =
    containerMainLeft + containerMainRight;
}
