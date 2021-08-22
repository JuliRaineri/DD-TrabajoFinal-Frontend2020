const form = document.querySelector("#form") ;
console.log("form", form) ;

const handleSearch = (event) =>{
   event.preventDefault() ;
   
    const pokeName = event.target[0].value ;
    console.log("pokeName" , pokeName) ;
    localStorage.setItem("pokeName" , pokeName);
    location.href = "/poke-handler/poke-handler.html";
}

form.addEventListener('submit' , handleSearch);
