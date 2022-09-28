function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap ="round"
    tablero.lineJoin ="round";
    tablero.fillStyle ="transparent";
    //tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle ="8A3871";

    tablero.fillRect(0,0,800,500);
    tablero.beginPath();
    tablero.moveTo(200,350);
    tablero.lineTo(500,350);
    tablero.stroke();
    tablero.closePath();
}

function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap ="round"
    tablero.lineJoin ="round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle ="8A3871";

    let anchura = 750/palabraSecreta.length;
    for(let i=0; i < palabraSecreta.length; i++){
        tablero.moveTo(100 + (anchura * i),450)
        tablero.lineTo(40 + (anchura * i),450)
    }

    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index){
    tablero.font = "bold 63px inter";
    tablero.lineWidth = 6;
    tablero.lineCap ="round";
    tablero.lineJoin ="round";
    tablero.fillStyle = "#F3F5F6";
    
    let anchura = 750/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index],45+(anchura*index),430);
    tablero.stroke;
}

function escribirLetraIncorrecta(letra, errorsLeft){
    tablero.font = "bold 40px inter";
    tablero.lineWidth = 6;
    tablero.lineCap ="round";
    tablero.lineJoin ="round";
    tablero.fillStyle = "#F3F5F6";
    tablero.fillText(letra,15+(40*(10-errorsLeft)),490,40)
}