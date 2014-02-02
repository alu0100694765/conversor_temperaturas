"use strict";


function calcular() {
    var resultado;
    var original= document.getElementById("datos");
    var expresion= /[-+]?[0-9]+((.)([0-9]*))?\s*?[CcFf]$/;
    
    if (document.getElementById("datos").value.search(expresion)==-1) {
            alert("Por favor, introduzca un valor válido! \n Ejemplo: 50C o 50F");
        }
    else{
        var numero=parseFloat(document.getElementById("datos").value);
        var tipo= document.getElementById("datos").value.slice(-1);
        if ((tipo=="c" || tipo=="C")) {
            resultado= (numero * 9/5)+32;
            document.getElementById("resul").value= resultado;
            document.getElementById("resul").value+= "F";
            resultado.value+="F";
        }
        else {
            resultado= (numero - 32)*5/9;
            document.getElementById("resul").value=resultado;
            document.getElementById("resul").value+= "C";
            resultado.value+="C";
        }

    }
}