fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    const characters = data.results;
    const container = document.querySelector('#container');
    const searchInput = document.querySelector('#search-input');

    // Función para crear las tarjetas de los personajes
    function makeCard(character) {
      const card = document.createElement('div');
      card.id = 'card';

      const imgCard = document.createElement('img');
      imgCard.src = character.image;
      imgCard.alt = character.name;

      const divParagraphs = document.createElement('div')
      divParagraphs.id = 'paragraphs'

      const nameContainer = document.createElement('h2');
      nameContainer.id ='name-container'
      nameContainer.textContent = character.name;

      const statusContainer = document.createElement('h3');
      statusContainer.id = 'status-container'
      statusContainer.textContent = `Status: ${character.status}`;

      const specieContainer = document.createElement('h4');
      specieContainer.id = 'specie-container'
      specieContainer.textContent = `Specie: ${character.species}`;

      // Agregamos los elementos creados al card
      card.appendChild(imgCard);
      card.appendChild(divParagraphs)
      divParagraphs.appendChild(nameContainer);
      divParagraphs.appendChild(statusContainer);
      divParagraphs.appendChild(specieContainer);

      return card;
    }

    // Función para mostrar los personajes filtrados
    function displayCharacters(filteredCharacters) {
      container.innerHTML = ''; // Limpiar el contenedor antes de añadir nuevos elementos
      filteredCharacters.forEach(character => {
        const card = makeCard(character);
        container.appendChild(card);
      });
    }

    // Inicialmente mostramos todos los personajes
    displayCharacters(characters);

    // Filtrar personajes en tiempo real al escribir en el input
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredCharacters = characters.filter(character => 
        character.name.toLowerCase().includes(searchTerm)
      );
      displayCharacters(filteredCharacters); // Mostrar los personajes filtrados
    });
  })
  .catch(err => console.error(err));