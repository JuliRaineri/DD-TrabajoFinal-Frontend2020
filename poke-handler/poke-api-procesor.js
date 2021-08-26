

const backgroundColor = {
   electric: '#3CC7DA' ,
   flying: '#F6BD20', 
} ;

//obtiene datos y proceso para que el componente grafico los use
class PokeApiProcesor {
    

    async requestRandomPokemon() {
        const pokeName = localStorage.getItem("pokeName" , "pokeId") ;
        const data = await fetch( `https://app.pokemon-api.xyz/pokemon/${pokeName}`) ;
        const json = await data.json();
        return json;
    }

    async request6RandomPokemon(){
        const pokemon1 = await this.requestRandomPokemon() ;
        
        return [pokemon1 ]
    }
}

     
class PokeApiGif{

    async requestGif() {
    const pokeImg = localStorage.getItem("pokeImg", this.pokeImg) ;
     const data = await fetch('https://pokeapi.co/api/v2/pokemon/${pokeImg}') ;
     const json = await data.json() ;
     return json ; 
    }

    async requestGif() {

        const pokemon1 = await this.requestGif() ;
        return[pokemon1]
    }
}

const searchHTML = document.querySelector("#btn") ;

searchHTML.addEventListener("click",    
    function () {  
window.history.back()   ;
}
             
)
