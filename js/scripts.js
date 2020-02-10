var repository = (function() {
var pokemonRepo= [];
var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
var $modalContainer = document.querySelector('#modal-container');

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
    showModal(item);
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

      //creating a loop to access the pokemon types from the array
      var types = [];
      details.types.forEach((item, i) => {
        types.push(item.type.name)

      });

      item.types = types;
      return item;
    })
    .catch(function (e) {
      console.error(e);
    });
  }

  function showModal(item) {
    // Clear all existing modal content
    $modalContainer.innerHTML = '';

    var modal = document.createElement('div');
    modal.classList.add('modal');

    // Add the new modal content
    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    var titleElement = document.createElement('h1');
    titleElement.innerText = item.name;

    var imgElement = document.createElement('img');
    imgElement.src= item.imageUrl;


    var heightElement = document.createElement('p');
    heightElement.innerText = 'Height: ' + item.height;

    var typeElement = document.createElement('p');
    typeElement.innerText ='Type: ' + item.types.join(', ') ;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(imgElement);
    modal.appendChild(heightElement);
    modal.appendChild(typeElement);
    $modalContainer.appendChild(modal);

    $modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    $modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  $modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal container,
    // We only want to close if the user clicks directly on the overlay
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
  })

 return {
   add: add,
   getAll: getAll,
   addListItem: addListItem,
   loadList: loadList,
   loadDetails: loadDetails,
   showModal : showModal,
   hideModal : hideModal,
 };
})();

var $pokemonList = document.querySelector('.pokemonList');

repository.loadList().then(function() {
  // Now the data is loaded!
  repository.getAll().forEach(function(pokemon){
    repository.addListItem(pokemon);
  });
});
