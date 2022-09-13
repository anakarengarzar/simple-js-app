let pokemonList = [
    {
        name: 'Bulbasur',
        height: 7,
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

for (let i = 0; i < pokemonList.length; i++){
    document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height}m)<br>`);
}