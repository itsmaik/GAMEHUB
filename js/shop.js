import fetchGameData from "./utils/fetchGameData.js";
import getShopSections from "./getSections/getShopSections.js";

import {
  hideSliderLoading,
  displaySliderError,
  hideSliderError,
} from "./utils/feedbacks.js";

const gamesDataPromise = fetchGameData();

gamesDataPromise
  .then((gamesData) => {
    hideSliderLoading();

    if (gamesData.errors) {
      displaySliderError("An error occurred while loading the data.");
    } else {
      hideSliderError();

      getShopSections(gamesData);
    }
  })
  .catch((error) => {
    hideSliderLoading();

    displaySliderError("An error occurred while loading the data.");
  });
