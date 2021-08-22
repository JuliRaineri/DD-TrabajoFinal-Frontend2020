

const backgroundColor = {
   electric: '#3CC7DA' ,
   flying: '#F6BD20', 
} ;

//obtiene datos y proceso para que el componente grafico los use
class PokeApiProcesor {
    

    async requestRandomPokemon() {
        const pokeName = localStorage.getItem("pokeName") ;
        const data = await fetch( `https://app.pokemon-api.xyz/pokemon/${pokeName}`) ;
        const json = await data.json();
        return json;
    }

    async request6RandomPokemon(){
        const pokemon1 = await this.requestRandomPokemon() ;
        const pokemon2 = await this.requestRandomPokemon() ;
        const pokemon3 = await this.requestRandomPokemon() ;
        const pokemon4 = await this.requestRandomPokemon() ;
        const pokemon5 = await this.requestRandomPokemon() ;
        const pokemon6 = await this.requestRandomPokemon() ;
        return [pokemon1 , pokemon2 , pokemon3, pokemon4, pokemon5, pokemon6]
    }
}

     


    //https://app.pokemon-api.xyz/pokemon/${pokeName}






//para instanciar el nombre deuna clase constructor , new() se ejecuta esa funcion primero
//para probar en la consola, declaro una clase vacia:  class DataApiProcesor  que tenga como constructor
//un console.log  que diga "ready to process" 
//class DataApiProcesor {
//       constructor(){
//       console.log("ready to process") ;    
//} 
//}  enter, vaa mostrar Undefined
// luegocreo la variable dataApi =  new DataApiProcesor() ; enter
//va a mostrar en cponsola Ready to process porque esta dentro del constructor
//para inicializar cosas que necesitamos que ocurran coas apenas instanciamos la clase 
//otro ejemplo  class persona {
// definir propiedase   constructor(){
//    this.nombre = '' ;
//    this.apellido ='' ;
//}
//}this hace referncia a la instancia con la que se esta trabajndo actualmente o recien creada, en el caso de que cada elemento necesite ser especificado para que cada
//copia pueda ser vista
// juli = new persona() ; enter la consola devolvera > persona { nombre: "", apellido:""}
//juli.nombre = 'juli' ; la consola devolvera "juli" y asi
//si hago un console.log de juli, la consola devolvera la clase y sus instancias
//persona { nombre:"juli", apellido ""} y tiene datos nombre y apellido
//estructura que se pueda reutilizar con instancias  especifica con info especifica
// es decir tomar las caracteristicas de la app y tomarlas de la api y usarlas a demanda
//tamnbien puedo definir comportamientos  class perro constructor() thid.color = ""
//}
// y dentro de la clase pero fuera dle constructor agrgeagar un comportamiento
//ladrar(){
//    console.log('ladrar')
//