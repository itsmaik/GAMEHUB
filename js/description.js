import fetchGameData from "./utils/fetchGameData.js";
import getDescriptionSections from "./getSections/getDescriptionSections.js";

import {
  hideDescriptionLoading,
  displayDescriptionError,
  hideDescriptionError,
} from "./utils/feedbacks.js";


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const currentGame = await fetchGameData(`/${id}`);


// currentGame.then((gamesData) => {

    hideDescriptionLoading();

    if (currentGame.errors) {
  
      displayDescriptionError("An error occurred while loading the data.");
      
    } else {
      hideDescriptionError();


      getDescriptionSections(currentGame);
    }
