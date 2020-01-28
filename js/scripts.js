var pokemon= [
  //will draw out information re different pokemon for application


    {
      name:'Pikachu',
      type:'Electric',
      weakness:'Ground',
      height: '0.4',
      evolutionStage: 'Basic',
    },

    {
      name:'Raichu',
      type:'Electric',
      weakness:'Ground',
      height: '0.8',
      evolutionStage: 'stageOne',
    },

    {
      name: 'Bulbasaur',
      type: ['Grass', 'Poison'],
      weakness: ['Ground', 'Psychic', 'Flying', 'Fire', 'Ice'],
      height: '0.7',
      evolutionStage: 'Basic',
    },

    {
      name:'Ivysaur',
      type: ['Grass', 'Poison'],
      weakness: ['Ground', 'Psychic', 'Flying', 'Fire', 'Ice'],
      height: '1.0',
      evolutionStage: 'stageOne',
    },

    {
      name:'Venusaur',
      type: ['Grass', 'Poison'],
      weakness: ['Ground', 'Psychic', 'Flying', 'Fire', 'Ice'],
      height: '2.0',
      evolutionStage: 'stageTwo',
    },

    {
      name:'Charmander',
      type: 'Fire',
      weakness: ['Ground', 'Rock', 'Water'],
      height: '0.6',
      evolutionStage: 'Basic',
    },

    {
      name:'Charmeleon',
      type: 'Fire',
      weakness: ['Ground', 'Rock', 'Water'],
      height: '1.1',
      evolutionStage: 'stageOne',
    },

    {
      name:'Charizard',
      type: 'Fire',
      weakness: ['Ground', 'Rock', 'Water'],
      height: '1.7',
      evolutionStage: 'stageTwo',
    },

    {
      name:'Squirtle',
      type: 'Water',
      weakness: ['Grass', 'Electric'],
      height: '0.5',
      evolutionStage: 'Basic',
    },

    {
      name:'Wartortle',
      type: 'Water',
      weakness: ['Grass', 'Electric'],
      height: '1.0',
      evolutionStage: 'stageOne',
    },

    {
      name:'Blastoise',
      type: 'Water',
      weakness: ['Grass', 'Electric'],
      height: '1.6',
      evolutionStage: 'stageTwo',
    },

    {
      name:'Eevee',
      type: 'Normal',
      weakness: ['Fighting'],
      height: '0.3',
      evolutionStage: 'Basic',
    },

    {
      name:'Vaporeon',
      type: 'Water',
      weakness: ['Grass', 'Electric'],
      height: '1.0',
      evolutionStage: 'stageOne',
    },

    {
      name:'Jolteon',
      type:'Electric',
      weakness:'Ground',
      height: '0.8',
      evolutionStage: 'stageOne',
    },

    {
      name:'Flareon',
      type: 'Fire',
      weakness: ['Ground', 'Rock', 'Water'],
      height: '0.9',
      evolutionStage: 'stageOne',
    },
];

//trying to call the items needed expected : Pikachu (Height: 0.4; Type: Electric; Weakness: Ground)
//document.write(pokemon[0].name +' \(Height\: '+pokemon[0].height+'\; Type\: '+pokemon[0].type+'\; Weakness\: '+pokemon[0].weakness+'\)')

//preliminary loop
for (var i = 0; i < pokemon.length; i++) {
  document.write(pokemon[i].name +' \(Height\: '+pokemon[i].height+'m\; Type\: '+pokemon[i].type+'\; Weakness\: '+pokemon[i].weakness+'\) <br> ');
};
