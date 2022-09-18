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

    //function that will allow to add a new object to the pokemonList    
    function add(newPokemon){
        if (typeof newPokemon === 'object' && 'name' in newPokemon){ //tried to make it work with Object.keys(newPokemon) === ['name', 'height', 'type'] but couldn't make it work.
            console.log('Your new pokemon had been added to the list.')
            return pokemonList.push(newPokemon);
        } else {
            console.log('The information you entered is not valid. You must enter an object with at least the key {name: \'\'}')
        }   
    };

    //function that will allow to write in the html document a list of buttons (to be invoked in the forEach function outside IIEF)
    function addListItem(pokemon){
        let pokeList = document.querySelector('ul'); //selects the ul in the html
        let pokeListItem = document.createElement('li'); //creates a li 
        let button = document.createElement('button'); //creates a button
        button.innerText = pokemon.name; //assigns the name of the current pokemon in the iteration to the button just created
        button.classList.add('buttonStyle'); //adds the class with the button styling to the button just created
        pokeListItem.appendChild(button); //adds the created button to the created li
        pokeList.appendChild(pokeListItem); //adds the created li to the ul in the original html
    };
    
    function showDetails(pokemon){
        console.log(pokemon);
    }

    return { 
        //all functions created inside the IIEF are returned so that they can be called outside of the IIEF
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails
    }
})();

pokemonRepository.getAll().forEach(function(pokemon){ //calling the function from inside the IIEF which returns the array pokemonList then use forEach to iterate through each object in the array (which will be the value of the 'pokemon' parameter)
    pokemonRepository.addListItem(pokemon); //calling the addListItem inside the IIEF which will apply the function addListItem actions to each object in the pokemonList array     
});
