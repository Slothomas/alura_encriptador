// Función para cifrar el texto
function cifrar(diccionario) {
    document.querySelector("#advertencia").removeAttribute("style");
    var areaTexto = document.querySelector("#entrada_texto");
    const texto = areaTexto.value;
    var seccionDefault = document.querySelector("#default_mensaje");
    var seccionResultado = document.querySelector("#resultado_mensaje");
    var areaSalida = document.querySelector("#salida_texto");

    if (texto != ""){
        var resultado = "";
        for(var i = 0; i < texto.length; i++){
            if (((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#advertencia").style.color = "red";
                document.querySelector("#advertencia").style.fontSize = "16px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                seccionDefault.classList.remove("invisible");
                seccionResultado.classList.add("invisible");
                return;
            }

            resultado += diccionario[texto[i]] || texto[i];
        }

        seccionDefault.classList.add("invisible");
        seccionResultado.classList.remove("invisible");
        areaSalida.innerHTML = resultado;
    }

    return;
}

// Función para descifrar el texto
function descifrar(diccionario) {
    document.querySelector("#advertencia").removeAttribute("style");
    var areaTexto = document.querySelector("#entrada_texto");
    var texto = areaTexto.value;
    var seccionDefault = document.querySelector("#default_mensaje");
    var seccionResultado = document.querySelector("#resultado_mensaje");
    var areaSalida = document.querySelector("#salida_texto");

    if (texto != ""){
        for(var i = 0; i < texto.length; i++){
            if (((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#advertencia").style.color = "red";
                document.querySelector("#advertencia").style.fontSize = "16px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                seccionDefault.classList.remove("invisible");
                seccionResultado.classList.add("invisible");
                return;
            }
        }

        seccionDefault.classList.add("invisible");
        seccionResultado.classList.remove("invisible");

        for (let clave in diccionario) {
            texto = texto.replace(new RegExp(diccionario[clave], "g"), clave);
        }
        
        areaSalida.innerHTML = texto;
    }

    return;
}

// Función para copiar texto al portapapeles
function copiarAlPortapapeles() {
    const areaSalida = document.querySelector("#salida_texto");
    navigator.clipboard.writeText(areaSalida.value);
}

// Asignación de eventos a los botones
const botonCifrar = document.querySelector('#boton_encriptar');
const botonDescifrar = document.querySelector('#boton_desencriptar');
const botonCopiar = document.querySelector('#boton_copiar');

// Diccionario de cifrado
var diccionarioCifrado = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

botonCifrar.addEventListener('click', function() { cifrar(diccionarioCifrado); });
botonDescifrar.addEventListener('click', function() { descifrar(diccionarioCifrado); });
botonCopiar.addEventListener('click', function() { copiarAlPortapapeles(); });
