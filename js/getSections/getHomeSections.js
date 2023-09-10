import renderMostPopular from "./renders/renderMostPopular.js";
import renderNewReleases from "./renders/renderNewReleases.js";

export default function getHomeSections(gamesData) {
  renderMostPopular(gamesData);
  renderNewReleases(gamesData);
}
