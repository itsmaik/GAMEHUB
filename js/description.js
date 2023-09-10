import fetchGameData from "./utils/fetchGameData.js";
import getDescriptionSections from "./getSections/getDescriptionSections.js";

import {
  hideDescriptionLoading,
  displayDescriptionError,
  hideDescriptionError,
} from "./utils/feedbacks.js";

const gamesDataPromise = fetchGameData();

gamesDataPromise
  .then((gamesData) => {
    hideDescriptionLoading();

    if (gamesData.errors) {
      displayDescriptionError("An error occurred while loading the data.");
    } else {
      hideDescriptionError();

      const queryString = document.location.search;
      const params = new URLSearchParams(queryString);
      const id = params.get("id");

      const currentGame = gamesData.find((game) => game.id === id);

      getDescriptionSections(currentGame);
    }
  })
  .catch((error) => {
    hideDescriptionLoading();

    displayDescriptionError("An error occurred while loading the data.");
  });
