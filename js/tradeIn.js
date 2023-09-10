import fetchGameData from "./utils/fetchGameData.js";
import getTradeInSections from "./getSections/getTradeInSections.js";

import {
  hideSectionLoading,
  displaySectionError,
  hideSectionError,
} from "./utils/feedbacks.js";

const gamesDataPromise = fetchGameData();

gamesDataPromise
  .then((gamesData) => {
    hideSectionLoading();

    if (gamesData.errors) {
      displaySectionError("An error occurred while loading the data.");
    } else {
      hideSectionError();

      getTradeInSections(gamesData);
    }
  })
  .catch((error) => {
    hideSectionLoading();

    displaySectionError("An error occurred while loading the data.");
  });
