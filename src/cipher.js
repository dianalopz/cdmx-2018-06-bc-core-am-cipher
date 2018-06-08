window.cipher = {
  // ...
};

//Funcion para Encriptar
function encriptar() {
  //Evita que el form recarge la pagina
  event.preventDefault()
  //Inicialisa arreglo
  let resultado = [];
  //obtener el msj y guardarlo en una variable
  const mensaje = document.getElementById("msj").value;
  //Convertir a mayuscula
  const msjEnMayuscula = mensaje.toUpperCase();
  //Obtiene la longitud del msj
  for (let contador = 0; contador < mensaje.length; contador++) {
    //Obtener la posicion de la primerletra en Ascii
    let posicionAscii = msjEnMayuscula.charCodeAt(contador);
    //Aplicar formula
    let nuevaPosicion = (posicionAscii-65+33)%26+65;
    //Extraer la nueva posicion en el arreglo
    resultado.push(String.fromCharCode(nuevaPosicion));
    //document.write (resultado);
    console.log(resultado);
  }
  document.getElementById("imprimir").innerHTML = "Tu mensaje encriptado es: " + resultado + " guarda el secreto ;)";
};

//Funcion para Desencriptar
function desencriptar() {
  //Evita que el form recarge la pagina
  event.preventDefault()
  //Inicialisa arreglo
  let resultado = [];
  //obtener el msj y guardarlo en una variable
  const mensajeEncriptado = document.getElementById("msj").value;
  //Convertir a mayuscula
  const msjEncriptadoEnMayuscula = mensajeEncriptado.toUpperCase();
  //Obtiene la longitud del msj
  for (let contador = 0; contador < mensajeEncriptado.length; contador++) {
    //Obtener la posicion de la primerletra en Ascii
    let posicionAscii = msjEncriptadoEnMayuscula.charCodeAt(contador);
    //Aplicar formula
    let nuevaPosicion = posicionAscii-7;
    //Extraer la nueva posicion en el arreglo
    resultado.push(String.fromCharCode(nuevaPosicion));
    //return resultado;
    console.log(resultado);
  }
  document.getElementById("imprimir").innerHTML = "Tu mensaje real es: " + resultado;
};
