const botonCargarPersona = document.querySelector('#cargar-pokemones');


botonCargarPersona.addEventListener('click', () => {
  fetch('https://app.pokemon-api.xyz/pokemon/random')
    .then(response => response.json())
    .then(response => {
      const userData = response.results[0];
      const userProfile = document.querySelector('pokemon-profile');
      userProfile.personImage = userData.picture.large;
      userProfile.personName = userData.name.first;
    });
});