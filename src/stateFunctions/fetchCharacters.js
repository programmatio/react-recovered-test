export default async function(state, name) {
  if (name === "") {
    return { ...state, characters: [] };
  }
  const data = await fetch(`https://swapi.co/api/people/?search=${name}`)
    .then(response => response.json())
    .catch(error => {
      return { ...state, name: "", characters: [], error };
    });
  return { ...state, name: "", characters: data.results };
}
