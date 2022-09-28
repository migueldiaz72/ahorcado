//al abrir la página
canvAhorcado.style.display="none";
divPalabraAdivinar.style.display="none";
divGuardarCancelar.style.display="none";
divNuevoDesistir.style.display="none";
let palabras=["ALURA","ORACLE","ONE","JAVASCRIPT","HTML","DEVELOPER","GITHUB"];
let tablero = document.getElementById("canvAhorcado").getContext("2d");
let palabraSecreta = "";
let letras=[];
let errores =8;

//palabra secreta

function escogerPalabraSecreta(){
    let palabra =palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
}

function comprobarLetra(key){
    let estado = false;
    if(key >= 65 && letras.indexOf() || key <= 90 && letras.indexOf(key)){
        letras.push(key);
        console.log(key);
        return estado;
    }else{
        estado = true;
        console.log(key);
        return estado;
    }
}

function anadirLetraIncorrecta(){
    errores -=1;
    console.log(errores);
    if (errores == 0){
        alert("GAME OVER");
        document.location.reload();
    
    }
}


//iniciar juego
function iniciarJuego(){
    document.getElementById("inputPalabraNueva").style.display ="none";
    document.getElementById("btnInicio").style.display = "none";
    document.getElementById("btnAgregar").style.display="none";
    document.getElementById("canvAhorcado").style.display ="";
    document.getElementById("divNuevoDesistir").style.display ="";
    
    escogerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();
    
    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();

        if (comprobarLetra(letra) && palabraSecreta.includes(letra)){
            for(let i=0; i<palabraSecreta.length; i++){
                if(palabraSecreta[i] == letra){
                    escribirLetraCorrecta(i)
                }
            }
        }else{
            anadirLetraIncorrecta(letra);
            escribirLetraIncorrecta(letra, errores);
        }
        
    }
}

//



