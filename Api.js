fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    const characters = data.results;
    const container = document.querySelector('#container');

    function makeCard(character) {
      const card = document.createElement('div');
      card.id = 'card'; // Añadimos el id para el estilo

      
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

      return card; // Devolvemos la tarjeta creada
    }

    // Recorremos el array de personajes y creamos las tarjetas
    characters.forEach(character => {
      const card = makeCard(character);
      container.appendChild(card);
    });
  })
  
  .catch(err => console.error(err));