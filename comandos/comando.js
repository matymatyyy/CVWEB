function iniciar(){
    const espacio= document.getElementById("espacio")
    const proyecto= document.getElementById("Proyectos")
    proyecto.style.display="none"

    const botones= document.getElementsByClassName("boton1")
    document.addEventListener("click", hola)

    function hola(){
        console.log("hola")
    }



}

window.addEventListener("load", iniciar)