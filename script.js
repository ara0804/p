var botonEncriptar = document.querySelector(".b_encriptador");
var botonDesencriptar = document.querySelector(".b_desencriptador");
var contenedor = document.querySelector(".parrafo");
var resultado = document.querySelector(".text_resultado");


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var caja = recuperarTexto()
    resultado.textContent = encriptarTexto(caja);

}

function desencriptar(){
    ocultarAdelante();
    var caja = recuperarTexto()
    resultado.textContent = desencriptarTexto(caja);
    
}

function recuperarTexto (){
    var caja = document.querySelector(".caja")
    return caja.value 
}
function ocultarAdelante(){
    contenedor.classList.add("ocultar")
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

        for (var i =0; i <texto.length; i++){
            if(texto[i]== "a"){
                textoFinal= textoFinal +"at"
            }
            else if (texto[i] == "e"){
            textoFinal= textoFinal + "elrsd"
            }
            else if (texto[i] == "i"){
            textoFinal= textoFinal + "iprq"
            }
            else if (texto[i] == "o"){
            textoFinal= textoFinal + "oe9l"
            }
            else if (texto[i] == "u"){
            textoFinal= textoFinal + "ule5"
            }
            else {
                textoFinal= textoFinal+ texto[i]
            }
        }
        return textoFinal;
}

function desencriptarTexto (mensaje){
    var texto= mensaje
    var textoFinal= "";
    for (var i =0; i< texto.length; i++){
        if (texto[i]== "a"){
            textoFinal= textoFinal+"a"
            i= i+1;
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal+ "e"
            i = i+4;
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal+ "i"
            i = i+3;
        }
        else if (texto[i] == "o"){
            textoFinal = textoFinal+ "o"
            i = i+3;
        }
        else if (texto[i] == "u"){
            textoFinal = textoFinal+ "u"
            i = i+3;
        }
        else { 
            textoFinal= textoFinal + texto[i];
        }
    }
    return textoFinal;
}


const btnCopiar =document.querySelector(".b_copiar");
    btnCopiar.addEventListener("click", copiar = () => {
        var contenido = document.querySelector(".text_resultado").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("Encriptador");
    }
)