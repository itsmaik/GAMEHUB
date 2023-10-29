/*
  This function gets takes the array of games pulled from the api and returns 
  the games reordered from most recent release date to lowest.
*/

function getNewReleases(gamesData) {
  return gamesData.sort(function (a, b) {
    var dateA = new Date(a.released);
    var dateB = new Date(b.released);

    return dateA - dateB;
  });
}

/*
  This function gets the array of games pulled from the api and returns all 
  the games that have special offers, that is, they have a value of discountedPrice
  different from price. In addition, it also returns in order of the game with 
  the biggest discount for the smallest.
*/

function getSpecialOffers(gamesData) {
  var ofertasEspeciais = gamesData.filter(function (jogo) {

    const price = Number(jogo.prices.regular_price)
    const salePrice = Number(jogo.prices.sale_price)
    return salePrice !== price;
  });

  ofertasEspeciais.sort(function (a, b) {


    
    var porcentagemA = ((Number(a.prices.regular_price) - Number(a.prices.sale_price)) / Number(a.prices.sale_price)) * 100;
    var porcentagemB = ((b.prices.regular_price - b.prices.sale_price) / b.price) * 100;
    return porcentagemB - porcentagemA;
  });

  return ofertasEspeciais;
}

export { getNewReleases, getSpecialOffers };
