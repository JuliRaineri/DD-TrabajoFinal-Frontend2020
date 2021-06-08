let pokemonList = document.querySelector( "#pokemones");

console.log(pokemonList);

let pokemones;

fetch("https://app.pokemon-api.xyz/pokemon/random")
.then( function (response){
      return response.json();

})

.then(function (data) {
     pokemones =  data.results;
     console.log(pokemones.length);
     pokemones.array.forEach(onePokemon => {
         let htmlContent = `
         <li>
             $(onePokemon.name)
             $(onePokemon.img)
             

         
         `
     });
         
     });
})