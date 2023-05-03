function iniciar(){
    const botones=document.getElementById("boton")
    const botones1=document.getElementById("boton1")
    const botones2=document.getElementById("boton2")
    const botones3=document.getElementById("boton3")
    var nombreBoton


    botones.addEventListener("click", joga)
    botones1.addEventListener("click", joga)
    botones2.addEventListener("click", joga)
    botones3.addEventListener("click", joga)


    function joga(){
        nombreBoton=event.target.textContent;
        console.log(nombreBoton)
        if(nombreBoton=="Inicio"){
            alert("ini")
        }
        else if(nombreBoton=="Proyectos"){
            alert("pro")
        }
        else if(nombreBoton=="Experiencia"){
            alert("xp")
        }
        else if(nombreBoton=="Contactos"){
            alert("contac")
        }
        else{
            console.log(":C")
        }
    }

    

}

window.addEventListener("load", iniciar)