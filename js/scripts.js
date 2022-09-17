//IIEF
let pokemonRepository = (function(){
    
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

    //function that will allow to access the pokemonList outside of the IIEF
    function getAll(){
        return pokemonList;
    };

    //function that will allow to add to the pokemonList    
    function add(newPokemon){
        if (typeof newPokemon === 'object' && 'name' in newPokemon){ //tried to make it work with Object.keys(newPokemon) === ['name', 'height', 'type'] but couldn't make it work.
            console.log('Your new pokemon had been added to the list.')
            return pokemonList.push(newPokemon);
        } else {
            console.log('The information you entered is not valid. You must enter an object with at least the key {name: \'\'}')
        }   
    };

    return {
        getAll: getAll,
        add: add
    }
})();

pokemonRepository.getAll().forEach(function(pokemon){ //updated to work with IIEF
    
    let pokeList = document.querySelector('ul');

    if (pokemon.height > 1){
        document.write(`- ${pokemon.name} (height: ${pokemon.height}m) - That's big!<br>`);
    } else {
        document.write(`- ${pokemon.name} (height: ${pokemon.height}m)<br>`); 
    }
});
