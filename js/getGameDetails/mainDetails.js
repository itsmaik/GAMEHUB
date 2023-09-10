const gameContainer = document.querySelector("#section__game_details");

export default function mainDetails(game) {
  const priceWithoutDiscount = `
    <div class="price_main">
      <p>$ ${game.price}</p>
    </div>
  `;

  const priceWithDiscount = `
    <div class="price_discount">
      <p>$ ${game.discountedPrice}</p>
      <b>$ ${game.price}</b>
    </div>
  `;

  const priceToRender =
    game.price !== game.discountedPrice
      ? priceWithDiscount
      : priceWithoutDiscount;

  gameContainer.innerHTML = `
    <div class="grid-box-1">
      <div>
        <img
          class="box1-pic1"
          src="${game.image}"
          alt=""
        />
      </div>

      <div class="game-desc-1">
        <h1 class="h1-desc">${game.title}</h1>
        ${priceToRender}
        <form id="card-detail-1" action="">
          <input type="number" />
        </form>
        <form id="card-detail-2" action="">
          <input type="number" />
        </form>
        <a href="/pages/shoppingbag.html"
          ><button class="orange" id="add-to-card">ADD TO CARD</button></a
        >
      </div>
    </div>
    <div class="grid-box-2">
      <img
        class="box2-pic1"
        src="${game.image}"
        alt="A warrior in front a castle"
      />
      <div class="game-desc-2">
        <p class="p-game-desc-2">${game.description}</p>
        <button class="orange" id="add-to-card">READ MORE</button>
      </div>
    </div>
  `;
}
