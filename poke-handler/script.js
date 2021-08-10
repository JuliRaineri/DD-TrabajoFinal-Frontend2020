//instanciar cada clase para generar operaciones ,funciones 

//const ProcesorApi = new    () ;

//const handler = new    ();

//ProcesorApi.  () ;
//handler.     () ;




const dataApi = new
PokeApiProcesor() ; 

dataApi.requestRandomPokemon().then((pokemon) => {
   console.log(pokemon) ;

   const pokeId = document.querySelector('#pokemon-id') ;
   pokeId.innerHTML = pokemon.id ;
   const pokeType = document.querySelector('.pokemon-name');
   pokeType.innerHTML = pokemon.type[0] ;
   const pokeName = document.querySelector('.poke-type');
   pokeName.innerHTML = pokemon.name.english ;
   const pokeImg = document.querySelector('#pokemon-img') ;
   pokeImg.src = pokemon.thumbnail ;
   const pokeStats = document.querySelector('.poke-stats') ;
   pokeStats.innerHTML = pokemon.base.Attack;
   

})





