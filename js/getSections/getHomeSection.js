import displayMostPopular from "./displays/displayMostPopular.js";
import displayNewReleases from "./displays/displayNewReleases.js";

export default function getHomeSections(games) {
  displayMostPopular(games);
  displayNewReleases(games);
}
