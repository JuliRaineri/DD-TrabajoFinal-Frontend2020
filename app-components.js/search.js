//call the form html element and linked to the DOM through querySelector
// create a function to handle the form output
//used the preventDefault method to  cancel the event if it is
// cancellable, without stopping the rest of the event's 
//operation, that is, it can be called again.
//added the setItem method to call by the input user request to filter by Id(number) 
//or name of the pokemon.
//control the submit of the user request through addEventListener event.


const form = document.querySelector("#form") ;
console.log("form", form) ;

const handleSearch = (event) =>{
   event.preventDefault() ;
   
    const pokeName = event.target[0].value ;
    const pokeId = event.target[0].value ;
    const pokemonImg = event.target[0].Thumbnail ;
    console.log("pokeName" , pokeName, "pokeId" , pokeId) ;
    localStorage.setItem("pokeName" , pokeName, "pokeId" , pokeId);
    localStorage.setItem("pokemon-img", pokemonImg) ;
    location.href = "/poke-handler/poke-handler.html";
}

form.addEventListener('submit' , handleSearch);

