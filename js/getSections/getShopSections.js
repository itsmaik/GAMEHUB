import renderTopSellers from "./renders/renderTopSellers.js";
import renderTradeInSelection from "./renders/renderTradeInSelection.js";

export default function getShopSections(gamesData) {
  renderTopSellers(gamesData);
  renderTradeInSelection(gamesData);
}
