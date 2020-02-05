var repository = (function() {
var pokemonRepo= [];
var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

function showDetails(item) {
  repository.loadDetails(item).then(function () {
    console.log(item);
  });
}


function add(pokemon) {
  if (typeof pokemon === "object") {
    pokemonRepo.push(pokemon);
 }
}

 function getAll() {
   return pokemonRepo;
 }

 function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    })
    .catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    })
    .then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    })
    .catch(function (e) {
      console.error(e);
    });
  }

 return {
   add: add,
   getAll: getAll,
   addListItem: addListItem,
   loadList: loadList,
   loadDetails: loadDetails,
 };
})();

var $pokemonList = document.querySelector('.pokemonList');

repository.loadList().then(function() {
  // Now the data is loaded!
  repository.getAll().forEach(function(pokemon){
    repository.addListItem(pokemon);
  });
});
