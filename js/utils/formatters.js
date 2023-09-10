export default async function fetchGameData(id = "") {
  try {
    const loadGames = await fetch(
      "https://api.noroff.dev/api/v1/gamehub/" + id
    );
    const games = await loadGames.json();

    return games;
  } catch (error) {
    return error;
  }
}
