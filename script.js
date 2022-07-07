const resultContainer = document.getElementById('result-container');
document.getElementById('searchForm').addEventListener("submit", getPokemon);


function getPokemon(event){
	let searchTerm = event.target.elements.searchTerm.value;
	const request = new XMLHttpRequest();

	request.onload = function () {
		const data = JSON.parse(request.responseText);
		console.log(data);
		resultContainer.innerHTML = `<img src="${data.sprites.front_default}"> <img src="${data.sprites.front_shiny}"> <br>
			<p><b>The typing(s): </b>${data.types.map(type => type.type.name).join(" / ")} <br> 

			<b> The possible ability(s): </b>${data.abilities.map(ability => ability.ability.name).join(" / ")} </p>
		
			<p><b>The Base Experience: 
			</b>${data.base_experience} <br>
		
			<b>Base Stats <br></b>
			<b>${(data.stats[0].stat.name)}:</b> ${(data.stats[0].base_stat)}<br>
			<b>${(data.stats[1].stat.name)}:</b> ${(data.stats[1].base_stat)}<br>
			<b>${(data.stats[2].stat.name)}:</b> ${(data.stats[2].base_stat)}<br>
			<b>${(data.stats[3].stat.name)}:</b> ${(data.stats[3].base_stat)}<br>
			<b>${(data.stats[4].stat.name)}:</b> ${(data.stats[4].base_stat)}<br>
			<b>${(data.stats[5].stat.name)}:</b> ${(data.stats[5].base_stat)} </p>

			<p> <b>All possible moves: </b><br> ${data.moves.map(move => move.move.name).join(" / ")} </p>`
	}

	request.open("GET", `https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
	request.send()
	
}	