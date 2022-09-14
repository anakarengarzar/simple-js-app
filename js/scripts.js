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

