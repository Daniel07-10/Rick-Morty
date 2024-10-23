

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));