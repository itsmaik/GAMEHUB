import fetchGameData from "./utils/fetchGameData.js";
import getHomeSections from "./getSections/getHomeSections.js";

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

      getHomeSections(gamesData);
    }
  })
  .catch((error) => {
    hideSectionLoading();

    displaySectionError("An error occurred while loading the data.");
  });
