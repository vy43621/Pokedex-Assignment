const pokedex = document.getElementById("pokedex");
console.log(pokedex);
const fetchpokemon = () => {

	const promises = [];
	for(let i = 1; i<=150; i++) {
		const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
		promises.push(fetch(url).then((res) => res.json()));
	}
	 Promise.all(promises).then((results ) => {
	 	const pokemon = results.map((data) => ({
	 			name: data.name,
		 		id: data.id,
		 		image: data.sprites['front_default'],
		 		type: data.types.map((type) => type.type.name).join(', ')
	 	}));
	 	displayPokemon(pokemon);
	 } );

};
const displayPokemon = (pokemon) => {
	console.log(pokemon);
	const pokemonHTMLString = pokemon.map(pokemon => `
		<li class ="card">
		    <img class="card-image" src="${pokemon.image}"/>
		    <h2 class ="card-title">${pokemon.id}. ${pokemon.name}</h2>
		    <p class ="card-subtitle">Type: ${pokemon.type}</p>
		</li>
		`).join("");
	pokedex.innerHTML = pokemonHTMLString;
}
fetchpokemon();

		/*fetch (url)
		 .then((res) => {
		 	return res.json();
		 })
		 .then((data) => {
		 	console.log(data);

		 	const pokemon = {
		 		name: data.name,
		 		id: data.id,
		 		image: data.sprites['front_default'],
		 		type: data.types.map((type) => type.type.name)
		 		.join(', ')
		 	};
		 	console.log(pokemon);
		 	
		 	

		 
}
fetchpokemon();
*/