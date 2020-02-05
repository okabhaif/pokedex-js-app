var repository = (function() {
var pokemonRepo= [

  {
    name:'Pikachu',
    type:' Electric',
    weakness:' Ground',
    height: '0.4',
    evolutionStage: 'Basic',
  },

  {
    name:'Raichu',
    type:' Electric',
    weakness:' Ground',
    height: '0.8',
    evolutionStage: 'stageOne',
  },

  {
    name: 'Bulbasaur',
    type: [' Grass', ' Poison'],
    weakness: [' Ground', ' Psychic', ' Flying', ' Fire', ' Ice'],
    height: '0.7',
    evolutionStage: 'Basic',
  },

  {
    name:'Ivysaur',
    type: [' Grass', ' Poison'],
    weakness: [' Ground', ' Psychic', ' Flying', ' Fire', ' Ice'],
    height: '1.0',
    evolutionStage: 'stageOne',
  },

  {
    name:'Venusaur',
    type: [' Grass', ' Poison'],
    weakness: [' Ground', ' Psychic', ' Flying', ' Fire', ' Ice'],
    height: '2.0',
    evolutionStage: 'stageTwo',
  },

  {
    name:'Charmander',
    type: ' Fire',
    weakness: [' Ground', ' Rock', ' Water'],
    height: '0.6',
    evolutionStage: 'Basic',
  },

  {
    name:'Charmeleon',
    type: ' Fire',
    weakness: [' Ground', ' Rock', ' Water'],
    height: '1.1',
    evolutionStage: 'stageOne',
  },

  {
    name:'Charizard',
    type: ' Fire',
    weakness: [' Ground', ' Rock', ' Water'],
    height: '1.7',
    evolutionStage: 'stageTwo',
  },

  {
    name:'Squirtle',
    type: ' Water',
    weakness: [' Grass', ' Electric'],
    height: '0.5',
    evolutionStage: 'Basic',
  },

  {
    name:'Wartortle',
    type: ' Water',
    weakness: [' Grass', ' Electric'],
    height: '1.0',
    evolutionStage: 'stageOne',
  },

  {
    name:'Blastoise',
    type: ' Water',
    weakness: [' Grass', ' Electric'],
    height: '1.6',
    evolutionStage: 'stageTwo',
  },

  {
    name:'Eevee',
    type: ' Normal',
    weakness: [' Fighting'],
    height: '0.3',
    evolutionStage: 'Basic',
  },

  {
    name:'Vaporeon',
    type: ' Water',
    weakness: [' Grass', ' Electric'],
    height: '1.0',
    evolutionStage: 'stageOne',
  },

  {
    name:'Jolteon',
    type:' Electric',
    weakness:' Ground',
    height: '0.8',
    evolutionStage: 'stageOne',
  },

  {
    name:'Flareon',
    type: ' Fire',
    weakness: [' Ground', ' Rock', ' Water'],
    height: '0.9',
    evolutionStage: 'stageOne',
  },
];

//filter by property test e.g by name:
var filterByProperty = pokemonRepo.filter(function (property) {
  return property.name === 'Charmander';
});
console.log(filterByProperty);

//Testing keys within objects to ensure they are consistent.
var validateObjectKeyExample = {name:'Venusaur',
                                type: ' Poison',
                                weakness: ' Ground',
                                height: '2.0',
                                evolutionStage: 'stageTwo',
                              };

console.log(Object.keys(validateObjectKeyExample));

function addListItem(pokemonItem) {

  var $listItem = document.createElement('li');
  var $button = document.createElement('button');
  var $pokemonName = document.querySelector('.name');
  $button.innerText = [pokemonItem.name];
  $button.classList.add('button--pokemonItem');
  $listItem.appendChild($button);
  $pokemonList.appendChild($listItem);
  $button.addEventListener('click', function(event) {
  return showDetails(pokemonItem);
  });
}

function showDetails(pokemonItem) {
  console.log(pokemonItem)
}

function add(pokemon) {
  if (typeof value === "object") {
   pokemonRepo.push(pokemon);
 }}

 function getAll() {
   return pokemonRepo;
 }

 return {
   add: add,
   getAll: getAll,
   addListItem: addListItem,
 };
})();

var $pokemonList = document.querySelector('.pokemonList');

function writePokemon(pokemonItem){
  repository.addListItem(pokemonItem);
}

repository.getAll().forEach(writePokemon);
