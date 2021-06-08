// Ejecución asincrónica diferida
const timeout = setTimeout(() => {
    console.log("Hola");
  }, 1000);
  
  // Ejecución asincrónica cíclica
  const interval = setInterval(() => {
    
  }, 1000);
  
  // Cancelar ejecución asincrónica diferida
  clearTimeout(timeout);
  
  // Cancelar ejecución asincrónica cíclica
  clearInterval(interval);
  
  // -----------------------------------------------
  
  // 1. Tener una variable contador que arranca
  //    en un número determinado.
  //
  // 2. Por cada segundo que pase, restarle 1 al contador.
  //
  // 3. Cuando contador = 0, detener la ejecución cíclica.
  
  const cuentaRegresiva = document.querySelector(".cuenta-regresiva");
  const bordeGiratorio = document.querySelector(".borde-giratorio");
  
  
  let contador = Number(cuentaRegresiva.dataset.contarDesde);
  let contadorEnPausa = false;
  
  
  
  const cronometro = setInterval(() => {
    if (contadorEnPausa) {
      return;
    }
  
    //-----------------------------------
    // debajo del contador en 0 cargar el componente de la tarjeta CHOOSE YOUR POKEMON.
    if (contador === 0) {
      bordeGiratorio.style.display = 'none';
      clearInterval(cronometro);
    }
  
    cuentaRegresiva.innerHTML = contador;
  
    contador -= 1;
  }, 1000);