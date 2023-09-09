import fetchGameData from "./utils/fetchGameData.js";
import getTradeInSections from "./getSections/getTradeInSections.js";

// import showSlides from "./showSlides.js";
// import buyNowBtn from "./cart/buyNowBtn.js";
// import errorBox from "./errorBox.js";

const gamesData = await fetchGameData();

if (gamesData.errors) {
  //   const container1 = document.querySelector(".slideshow-container");
  //   const [container2, container3] = document.querySelectorAll(".shop-grid");
  //   const displayError = [container1, container2, container3];
  //   displayError.forEach((error) => (error.innerHTML += errorBox(gamesData)));
} else {
  // const slides = document.getElementsByClassName("slideshow-container")[0].getElementsByClassName("img");
  // showSlides(slides);
  getTradeInSections(gamesData);
  // buyNowBtn()
}