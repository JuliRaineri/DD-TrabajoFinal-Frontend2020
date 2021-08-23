const form = document.querySelector("#form") ;
console.log("form", form) ;

const handleSearch = (event) =>{
   event.preventDefault() ;
   
    const pokeName = event.target[0].value ;
    const pokeId = event.target[0].value ;
    console.log("pokeName" , pokeName, "pokeId" , pokeId) ;
    localStorage.setItem("pokeName" , pokeName, "pokeId" , pokeId);
    location.href = "/poke-handler/poke-handler.html";
}

form.addEventListener('submit' , handleSearch);

