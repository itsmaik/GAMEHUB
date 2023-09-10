import fetchGameData from "./utils/fetchGameData.js";
import getShopSections from "./getSections/getShopSections.js";

import {
  hideSliderLoading,
  displaySliderError,
  hideSliderError,
  hideTradeSectionLoading,
  displayTradeSectionError,
  hideTradeSectionError,
} from "./utils/feedbacks.js";

const gamesDataPromise = fetchGameData();

gamesDataPromise
  .then((gamesData) => {
    hideSliderLoading();
    hideTradeSectionLoading();

    if (gamesData.errors) {
      displaySliderError("An error occurred while loading the data.");
      displayTradeSectionError("An error occurred while loading the data.");
    } else {
      hideSliderError();
      hideTradeSectionError();

      getShopSections(gamesData);
    }
  })
  .catch((error) => {
    hideSliderLoading();
    hideTradeSectionLoading();

    displaySliderError("An error occurred while loading the data.");
    displayTradeSectionError("An error occurred while loading the data.");
  });