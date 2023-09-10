import fetchGameData from "./utils/fetchGameData.js";
import getShoppingBagSections from "./getSections/getShoppingBag.js";

const gamesDataPromise = fetchGameData();

gamesDataPromise.then((gamesData) => {
  if (gamesData.errors) {
  } else {
    getShoppingBagSections(gamesData);
  }
});
