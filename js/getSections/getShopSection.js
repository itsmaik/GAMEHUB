import displayTopSellers from "./displays/displayTopSellers.js";
import displayTradeInSelection from "./displays/displayTradeInSelection.js";

export default function getShopSections(games) {
  displayTopSellers(games);
  displayTradeInSelection(games);
}
