encriptar.addEventListener("click",event => {
  const string = document.getElementById('msj').value.toUpperCase();
  const offset= document.getElementById('saltos').value;
  let impresion = document.getElementById("imprimir");
  impresion.innerHTML = window.cipher.encode(string,offset);
}
)

desencriptar.addEventListener("click",event => {
  const string = document.getElementById('msj').value.toUpperCase();
  const offset = document.getElementById('saltos').value;
  let impresion = document.getElementById("imprimir");
  impresion.innerHTML = window.cipher.decode(string,offset);
}
)
