
window.onload = fadeIn;
function fadeIn() {
    var fade = document.getElementById("section");
    var opacity = 0;
    var intervalID = setInterval(function () {

        if (opacity < 1) {
            opacity = opacity + 0.1
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 200);
}

function miAlerta() {
    alert("Mensaje de Alerta");
}

function obtenerDatos() {
    const url = 'http://api.icndb.com/jokes/random'
    const http = new XMLHttpRequest()

    http.open("GET", url)
    http.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
                       
            document.getElementById('parrafo').innerHTML = this.responseText;
            
        }
        
    }
    
    http.send()
}

function general(server, type) {
    return new Promise(function (resolve, reject) {
        const http = new XMLHttpRequest()
        http.open(type, server)
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(http.response);
                document.getElementById('promesa').innerHTML = "Estado Correcto";
                document.getElementById('promesa').style.backgroundColor = 'green'
                console.log(resolve(http.response));
            }
            else{
                reject(new Error(http.statusText));
                document.getElementById('promesa').innerHTML = "Incorrecto";
                document.getElementById('promesa').style.backgroundColor = 'red'
            }
            
        }
        http.onerror = function() {
            reject(new Error("Error de red"));
            //document.getElementById('promesa').innerHTML = "Error";
            document.getElementById('promesa').style.backgroundColor = 'red'
        }
        http.send()
    });

}
/*Generar la tabla*/

function genera_tabla() {
    // Obtener la referencia del elemento body
    var div = document.getElementsByTagName("div")[0];
  
    // Crea un elemento <table> 
    var tabla  = document.createElement("table");

    //Crea un titulo
    var titulo = document.createElement('h3');
    var textTitulo = document.createTextNode('Tabla generada');
    titulo.appendChild(textTitulo);
    div.appendChild(titulo);

    // Crea las celdas
    for (var i = 0; i < 5; i++) {
      // Crea las filas de la tabla
      var fila = document.createElement("tr");
      
      for (var j = 0; j < 4; j++) {
        /* Crea un elemento <td> y un nodo de texto, haz que el nodo de
         texto sea el contenido de <td>, ubica el elemento <td> al final
        de la fila de la tabla*/
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("celda en la fila "+i+", columna "+j);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
      }
  
      // agrega la fila al final de la tabla 
      tabla.appendChild(fila);
      
    }
    
    
    // agrega la tabla en el body
    div.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
  }


 
