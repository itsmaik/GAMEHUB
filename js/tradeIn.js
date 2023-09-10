import fetchGameData from "./utils/fetchGameData.js";
import getTradeInSections from "./getSections/getTradeInSections.js";

import {
  hideTradeSectionLoading,
  displayTradeSectionError,
  hideTradeSectionError,
} from "./utils/feedbacks.js";

const gamesDataPromise = fetchGameData();

gamesDataPromise
  .then((gamesData) => {
    hideTradeSectionLoading();

    if (gamesData.errors) {
      displayTradeSectionError("An error occurred while loading the data.");
    } else {
      hideTradeSectionError();

      getTradeInSections(gamesData);
    }
  })
  .catch((error) => {
    hideTradeSectionLoading();

    displayTradeSectionError("An error occurred while loading the data.");
  });