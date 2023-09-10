import fetchGameData from "./utils/fetchGameData.js";
import mainDetails from "./getGameDetails/mainDetails.js";

// import getSections from "./getSections/getSections.js";
// import displayMostPopular from "./getFour/displayMostPopular.js";
// import buyNowBtn from "./cart/buyNowBtn.js";
// import errorBox from "./errorBox.js";

// GAME-DETAILS //

const gamesData = await fetchGameData();

if (gamesData.errors) {
  // const container1 = document.querySelector(".game-box");
  // const container2 = document.querySelector(".shop-grid");
  // const displayError = [container1, container2];
  // displayError.forEach((error) => (error.innerHTML += errorBox(gamesData)));
} else {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const currentGame = gamesData.find((game) => game.id === id);

  mainDetails(currentGame);
  // getSections(gamesData);
  // bottomDetails(currentGame);
  // buyNowBtn();
}
