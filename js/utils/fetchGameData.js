export default async function fetchGameData(id = "") {
  try {
    const loadGames = await fetch(
      "https://noroffcors.onrender.com/https://gamehub.itsmaik.com/wp-json/wc/store/products" + id
    );
    const games = await loadGames.json();
      

    return games;
  } catch (error) {
    return error;
  }
}
