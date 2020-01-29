var pokemon= [
  //will draw out information re different pokemon for application


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

pokemon.forEach(function(pokemonRepo){
  document.write(pokemonRepo.name +' \(Type\:'+pokemonRepo.type+'\; Weakness\:'+pokemonRepo.weakness+'\; Height\: '+pokemonRepo.height+'m\)');
  if (pokemonRepo.height >= 1.7) {
    document.write(' - Wow, that\'s big!! <br>')
  }
  if (pokemonRepo.height < 1.7) {
    document.write(' <br>')
  }

}); 
