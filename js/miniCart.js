import fetchGameData from "./utils/fetchGameData.js";
import { setCartCounter } from "./utils/cartCrud.js";

const gamesDataPromise = fetchGameData();

gamesDataPromise.then((gamesData) => {
  if (gamesData.errors) {
  } else {
    setCartCounter();
  }
});
