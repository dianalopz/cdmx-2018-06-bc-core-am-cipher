window.cipher = {
  // ...
};

//Funcion para Encriptar
function encriptar() {
  //Evita que el form recarge la pagina
  event.preventDefault()
  //Inicialisa arreglo
  let resultado = [];
  let nuevaPosicion = 0;
  //obtener el msj y guardarlo en una variable
  const mensaje = document.getElementById("msj").value;
  //Obtener el num de saltos
  const numSaltos= document.getElementById("saltos").value;
  //Convertir a mayuscula
  const msjEnMayuscula = mensaje.toUpperCase();
  //Obtiene la longitud del msj
  for (let contador = 0; contador < mensaje.length; contador++) {
    //Obtener la posicion de la primerletra en Ascii
    let posicionAscii = msjEnMayuscula.charCodeAt(contador);
    //Detecta espacios en blanco
    if (posicionAscii == 32) {
      nuevaPosicion = 32;
    } else {
      //Aplicar formula
      nuevaPosicion = (posicionAscii-65+parseInt(numSaltos))%26+65;
    }
    //Extraer la nueva posicion en el arreglo
    resultado.push(String.fromCharCode(nuevaPosicion));
    var final = resultado.join('');
    //document.write (resultado);
  }
  document.getElementById("imprimir").innerHTML = "Tu mensaje encriptado es: " + final;
};


//Funcion para Desencriptar
function desencriptar() {
  //Evita que el form recarge la pagina
  event.preventDefault()
  //Inicialisa arreglo
  let resultado = [];
  let nuevaPosicion = 0;
  //obtener el msj y guardarlo en una variable
  const mensajeEncriptado = document.getElementById("msj").value;
  //Obtener el num de saltos
  const numSaltos= document.getElementById("saltos").value;
  //Convertir a mayuscula
  const msjEncriptadoEnMayuscula = mensajeEncriptado.toUpperCase();
  //Obtiene la longitud del msj
  for (let contador = 0; contador < mensajeEncriptado.length; contador++) {
    //Obtener la posicion de la primerletra en Ascii
    let posicionAscii = msjEncriptadoEnMayuscula.charCodeAt(contador);
    //Detecta espacios en blanco
    if (posicionAscii == 32) {
      nuevaPosicion = 32;
    } else {
      //Aplicar formula
      nuevaPosicion = (posicionAscii+65-parseInt(numSaltos))%26+65;
    }
    //Extraer la nueva posicion en el arreglo
    resultado.push(String.fromCharCode(nuevaPosicion));
    var final = resultado.join('');
    //return resultado;
    console.log(resultado);
  }
  document.getElementById("imprimir").innerHTML = "Tu mensaje real es: " + final;
};
