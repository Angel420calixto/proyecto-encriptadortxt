function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let Muñeco = document.getElementById("Muñeco");
    
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto") = textoCifrado;
        tituloMensaje.textContent = "texto encriptado con exito";
        parrafo.textContent = "";
        Muñeco.src = "./img/encriptado.webp";
    } else {
        Muñeco.src = "./img/Muñeco.png";
        tituloMensaje.textContent = "ningun mensaje encontrado";
        parrafo.textContent = "ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algun texto");
    }
}