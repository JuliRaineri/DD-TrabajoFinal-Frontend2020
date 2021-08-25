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

   const pokeType = document.querySelector('.poke-type');
   pokeType.innerHTML = pokemon.type[0] ;

   const pokeWeight = document.querySelector('.weight') ;
   pokeWeight.innerHTML = pokemon.profile.weight  ;

   const pokeHeight = document.querySelector('.height') ;
   pokeHeight.innerHTML = pokemon.profile.height  ;
   

   const pokeImg = document.querySelector('#pokemon-img') ;
   pokeImg.src = pokemon.thumbnail;
   
   const pokeName = document.querySelector('.pokemon-name');
   pokeName.innerHTML = pokemon.name.english ;

   const pokeNameFr = document.querySelector('.pokemon-name-fr');
   pokeNameFr.innerHTML = pokemon.name.french ;

   const pokeNameChn = document.querySelector('.pokemon-name-chn');
   pokeNameChn.innerHTML = pokemon.name.chinese ;

   const pokeNameJpn = document.querySelector('.pokemon-name-jpn');
   pokeNameJpn.innerHTML = pokemon.name.japanese ;

   const pokeProfile = document.querySelector('.pokemon-profile');
   pokeProfile.innerHTML = pokemon.species ;
  
   const pokeStats = document.querySelector('.poke-stats') ;
   pokeStats.innerHTML = pokemon.base.Attack;
   
    const pokeDescription = document.querySelector('.poke-description') ;
    pokeDescription.innerHTML = pokemon.description;

   
   

})





