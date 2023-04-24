function iniciar(){
    const espacio= document.getElementById("espacio")
    espacio.style.display="hidden"

    const botones= document.getElementsByClassName("boton1")
    document.addEventListener("click", hola)

    function hola(){
        console.log("hola")
    }



}

window.addEventListener("load", iniciar)