let pokemonList = [
    {
        name: 'Bulbasur',
        height: 0.7,
        type: ['grass', 'poison']
    },
    {
        name: 'Beedrill',
        height: 1,
        type: ['bug', 'poison']
    },
    {
        name: 'Pidgeot',
        height: 1.5,
        type: ['flying', 'normal']
    }];

    pokemonList.forEach(function(pokemon){
        if (pokemon.height > 1){
            document.write(`- ${pokemon.name} (height: ${pokemon.height}m) - That's big!<br>`);
        } else {
            document.write(`- ${pokemon.name} (height: ${pokemon.height}m)<br>`); 
        }
    });




// for (let i = 0; i < pokemonList.length; i++){ //the for loop will iterate through the array of objects
//     if (pokemonList[i].height > 1){
//         document.write(`- ${pokemonList[i].name} (height: ${pokemonList[i].height}m) - That's big!<br>`); //this will print if the height is higher than 1m
//     } else {
//         document.write(`- ${pokemonList[i].name} (height: ${pokemonList[i].height}m)<br>`); //pokemons with 1m or less height will just print their name and height
//     }
// }

