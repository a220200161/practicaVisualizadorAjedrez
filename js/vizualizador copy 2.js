let ordenadas = ["a", "b", "c", "d", "e", "f", "g", "h"];
let absisas = ["8", "7", "6", "5", "4", "3", "2", "1"];
let tablero = {};
let piezaB = [];
let piezaN = [];
let equipoActual = [];
let equipoContrario = [];
let partida = null;
let arregloPartida;
let numTurno = 0;
let clase = "";

let turnoB = false;

let simbolosPiezas = {};
simbolosPiezas["rey"] = "K";
simbolosPiezas["dama"] = "Q";
simbolosPiezas["torre"] = "R";
simbolosPiezas["alfil"] = "B";
simbolosPiezas["caballo"] = "N";

let simbolo = {};
simbolo["captura"] = "x";
simbolo["enroque corto"] = "O-O";
simbolo["enroque largo"] = "O-O-O";
simbolo["jaque"] = "+";
simbolo["jaque mate"] = "#";
simbolo["buen movimiento"] = "!";
simbolo["mal movimiento"] = "?";
simbolo["ganan blancas"] = "1-0";
simbolo["ganan negras"] = "0-1";

function resetPiezas() {
  /*let peonB1 = new pieza("peonB1","blanco","a","2",true)
      let peonB2 = new pieza("peonB2","blanco","b","2",true)
      let peonB3 = new pieza("peonB3","blanco","c","2",true)
      let peonB4 = new pieza("peonB4","blanco","d","2",true)
      let peonB5 = new pieza("peonB5","blanco","e","2",true)
      let peonB6 = new pieza("peonB6","blanco","f","2",true)
      let peonB7 = new pieza("peonB7","blanco","g","2",true)
      let peonB8 = new pieza("peonB8","blanco","h","2",true)
  
      let torreB1 = new pieza("torreB1","blanco","a","1",true)
      let torreB2 = new pieza("torreB2","blanco","h","1",true)
      let caballoB1 = new pieza("caballoB1","blanco","b","1",true)
      let caballoB2 = new pieza("caballoB2","blanco","g","1",true)
      let alfilB1 = new pieza("alfilB1","blanco","c","1",true)
      let alfilB2 = new pieza("alfilB2","blanco","f","1",true)
      let reyB = new pieza("reyB","blanco","a","1 ",true)
      let reinaB = new pieza("reinaB","blanco","d","1",true)
  
      let peonN1 = new pieza("peonN1","negro","a","7",true)
      let peonN2 = new pieza("peonN2","negro","b","7",true)
      let peonN3 = new pieza("peonN3","negro","c","7",true)
      let peonN4 = new pieza("peonN4","negro","d","7",true)
      let peonN5 = new pieza("peonN5","negro","e","7",true)
      let peonN6 = new pieza("peonN6","negro","f","7",true)
      let peonN7 = new pieza("peonN7","negro","g","7",true)
      let peonN8 = new pieza("peonN8","negro","h","7",true)
  
      let torreN1 = new pieza("torreB1","negro","a","8",true)
      let torreN2 = new pieza("torreB2","negro","h","8",true)
      let caballoN1 = new pieza("caballoB1","negro","b","8",true)
      let caballoN2 = new pieza("caballoB2","negro","g","8",true)
      let alfilN1 = new pieza("alfilB1","negro","c","8",true)
      let alfilN2 = new pieza("alfilB2","negro","f","8",true)
      let reyN = new pieza("reyB","negro","a","8",true)
      let reinaN = new pieza("reinaB","negro","d","8",true)*/

  piezaB[0] = new pieza("peonB1", "blanco", "a", "2", true, true);
  piezaB[1] = new pieza("peonB2", "blanco", "b", "2", true, true);
  piezaB[2] = new pieza("peonB3", "blanco", "c", "2", true, true);
  piezaB[3] = new pieza("peonB4", "blanco", "d", "2", true, true);
  piezaB[4] = new pieza("peonB5", "blanco", "e", "2", true, true);
  piezaB[5] = new pieza("peonB6", "blanco", "f", "2", true, true);
  piezaB[6] = new pieza("peonB7", "blanco", "g", "2", true, true);
  piezaB[7] = new pieza("peonB8", "blanco", "h", "2", true, true);

  piezaB[8] = new pieza("torreB1", "blanco", "a", "1", true, false);
  piezaB[9] = new pieza("torreB2", "blanco", "h", "1", true, false);
  piezaB[10] = new pieza("caballoB1", "blanco", "b", "1", true, false);
  piezaB[11] = new pieza("caballoB2", "blanco", "g", "1", true, false);
  piezaB[12] = new pieza("alfilB1", "blanco", "c", "1", true, false);
  piezaB[13] = new pieza("alfilB2", "blanco", "f", "1", true, false);
  piezaB[14] = new pieza("reyB", "blanco", "e", "1", true, false);
  piezaB[15] = new pieza("reinaB", "blanco", "d", "1", true, false);

  piezaN[0] = new pieza("peonN1", "negro", "a", "7", true, true);
  piezaN[1] = new pieza("peonN2", "negro", "b", "7", true, true);
  piezaN[2] = new pieza("peonN3", "negro", "c", "7", true, true);
  piezaN[3] = new pieza("peonN4", "negro", "d", "7", true, true);
  piezaN[4] = new pieza("peonN5", "negro", "e", "7", true, true);
  piezaN[5] = new pieza("peonN6", "negro", "f", "7", true, true);
  piezaN[6] = new pieza("peonN7", "negro", "g", "7", true, true);
  piezaN[7] = new pieza("peonN8", "negro", "h", "7", true, true);

  piezaN[8] = new pieza("torreN1", "negro", "a", "8", true, false);
  piezaN[9] = new pieza("torreN2", "negro", "h", "8", true, false);
  piezaN[10] = new pieza("caballoN1", "negro", "b", "8", true, false);
  piezaN[11] = new pieza("caballoN2", "negro", "g", "8", true, false);
  piezaN[12] = new pieza("alfilN1", "negro", "c", "8", true, false);
  piezaN[13] = new pieza("alfilN2", "negro", "f", "8", true, false);
  piezaN[14] = new pieza("reyN", "negro", "e", "8", true, false);
  piezaN[15] = new pieza("reinaN", "negro", "d", "8", true, false);

  setTablero();
  //printTablero();
  equipoActual = cambiarEquipo(piezaN);
  equipoContrario = cambiarEquipo(piezaB);
  numTurno = 0;
}

function setTablero() {
  absisas.forEach((absisa) => {
    ordenadas.forEach((ordenada) => {
      //tablero[`${ordenada}${absisa}`] = "*";
      document
        .getElementById(`${ordenada}*${absisa}`)
        .setAttribute("class", "");
    });
  });

  piezaB.forEach((piezita) => {
    if (piezita.getIsActive() === true) {
      /*tablero[
        `${piezita.getOrdered()}${piezita.getAbscissa()}`
      ] = `${piezita.getName()}`;
    }*/
      let casilla = `${piezita.getOrdered()}*${piezita.getAbscissa()}`;
      //console.log(casilla);
      if (document.getElementById(casilla).className == null) {
        clase = "";
      } else {
        clase = document.getElementById(casilla).className;
      }
      clase += ` ${piezita.getName()}`;
      document.getElementById(casilla).setAttribute("class", clase);
    }
  });

  piezaN.forEach((piezita) => {
    /*if (piezita.getIsActive() === true) {
      tablero[
        `${piezita.getOrdered()}${piezita.getAbscissa()}`
      ] = `${piezita.getName()}`;
    }*/
    if (piezita.getIsActive() === true) {
      /*tablero[
        `${piezita.getOrdered()}${piezita.getAbscissa()}`
      ] = `${piezita.getName()}`;
    }*/
      let casilla = `${piezita.getOrdered()}*${piezita.getAbscissa()}`;
      //console.log(casilla);

      let clase = document.getElementById(casilla).className;
      clase += ` ${piezita.getName()}`;
      document.getElementById(casilla).setAttribute("class", clase);
    }
  });
}

function printTablero() {
  let temp = "";
  absisas.forEach((absisa) => {
    ordenadas.forEach((ordenada) => {
      //console.log(tablero[`${ordenada}${absisa}`])
      temp = `${temp} ${tablero[`${ordenada}${absisa}`]}`;
    });
    temp = `${temp} \n`;
  });
  console.log(temp);
}

function leerArchivo(input, output) {
  if (input.files && input.files[0]) {
    var fr = new FileReader();
    fr.onload = function (e) {
      partida = e.target.result;
      //console.log(partida);
      document.getElementById(output).textContent = partida;
      arregloPartida = transformarArreglo(partida);
      //console.log(arregloPartida);
    };
    fr.readAsText(input.files[0]);
  } else {
    console.error(
      "No se selecciono ningun archivo, o el archivo seleccionado no pudo ser leido."
    );
  }
}

function transformarArreglo(string) {
  let arreglo = string.split(" ");
  let arregloFinal = [];
  arregloFinal[0] = "";
  arreglo.forEach((elemento) => {
    //console.log(!elemento.includes(".") || !elemento.includes("\r\n"));

    if (!elemento.includes(".")) {
      arregloFinal.push(elemento);
      //console.log(elemento);
    }
  });
  return arregloFinal;
}

function siguienteMovimiento() {
  if (numTurno != arregloPartida.length - 1) {
    numTurno++;
    if (turnoB == false) {
      turnoB = true;
    } else {
      turnoB = false;
    }
    let movimientoActual = arregloPartida[numTurno];
    movimientoActual=movimientoActual.replace(" ","")
    //console.log(movimientoActual);
    /*if (movimientoActual === "O-O") {
      console.log("El movimiento fue un enroque corto");
      return;
    }
    if (movimientoActual === "O-O-O") {
      console.log("El movimiento fue un enroque largo");
      return;
    }*/
    let tipo = definirTipo(movimientoActual);
    //movimientoActual = removerTipo(movimientoActual);

    //console.log(`El tipo de pieza que realizo el movimiento es ${tipo}`);
    /*if (movimientoActual.includes("x")) {
      console.log("La pieza capturo a otra pieza!");
      movimientoActual = movimientoActual.replace("x", "");
    }*/
    if (movimientoActual.includes("x")) {
      equipoContrario.forEach((piezita) => {
        if (
          piezita.getOrdered() ==
            movimientoActual[movimientoActual.length - 2] &&
          piezita.getAbscissa() ==
            +movimientoActual[movimientoActual.length - 1]
        ) {
          piezita.setIsActive(false);
        }
      });
    }
    if (tipo == "Enroque corto") {
      equipoActual[14].setOrdered("g");
      equipoActual[9].setOrdered("f");
    }
    if (tipo == "Enroque largo") {
      equipoActual[14].setOrdered("c");
      equipoActual[8].setOrdered("d");
    }
    if (tipo == "Peon") {
      if (movimientoActual.includes("x")) {
        for (var index = 0; index <= 7; index++) {
          if (
            equipoActual[index].getOrdered() == movimientoActual[0] &&
            (equipoActual[index].getAbscissa() == +movimientoActual[3] + 1 ||
              equipoActual[index].getAbscissa() == +movimientoActual[3] - 1)
          ) {
            equipoActual[index].setOrdered(movimientoActual[2]);
            equipoActual[index].setAbscissa(movimientoActual[3]);
            equipoActual[index].setDoubleStep(false);
          }
          /*if (
            equipoContrario[index].getOrdered() == movimientoActual[2] &&
            equipoContrario[index].getAbscissa() == movimientoActual[3]
          ) {
            equipoContrario[index].setIsActive(false);
          }*/
        }
        //console.log(equipoActual[index].getOrdered() == movimientoActual[0]);
      } else {
        for (var index = 0; index <= 7; index++) {
          if (
            equipoActual[index].getOrdered() == movimientoActual[0] &&
            (equipoActual[index].getAbscissa() == +movimientoActual[1] - 2 ||
              equipoActual[index].getAbscissa() == +movimientoActual[1] + 2) &&
            equipoActual[index].hasDoubleStep() == true
          ) {
            equipoActual[index].setOrdered(movimientoActual[0]);
            equipoActual[index].setAbscissa(movimientoActual[1]);
            equipoActual[index].setDoubleStep(false);
          } else if (
            equipoActual[index].getOrdered() == movimientoActual[0] &&
            (equipoActual[index].getAbscissa() == +movimientoActual[1] - 1 ||
              equipoActual[index].getAbscissa() == +movimientoActual[1] + 1)
          ) {
            equipoActual[index].setOrdered(movimientoActual[0]);
            equipoActual[index].setAbscissa(movimientoActual[1]);
            equipoActual[index].setDoubleStep(false);
          }
        }
      }
    }
    if (tipo == "Alfil") {
      let flagDSI=true
      let flagDSD=true
      let flagDII=true
      let flagDID=true
      
      for (var index = 0; index <= 7; index++) {
        var diagonal1 =+movimientoActual[+movimientoActual.length - 1] 
        - convertirOrdenadaANum(movimientoActual[+movimientoActual.length - 2]) 
        + index 
        + 1;
        var diagonal2 =
          +movimientoActual[+movimientoActual.length - 1] +
          convertirOrdenadaANum(
            movimientoActual[+movimientoActual.length - 2]
          ) -
          index -
          1;
        if (diagonal1 > 0 && diagonal1 < 9) {
          //console.log(`${convertirNumAOrdenada(index + 1)}*${diagonal1}`);
          for (let jndex = 12; jndex <= 13; jndex++) {
            if (
              equipoActual[jndex].getOrdered() ==
                convertirNumAOrdenada(index + 1) &&
              equipoActual[jndex].getAbscissa() == diagonal1
            ) {
              //console.log("Esta es la pieza");
              equipoActual[jndex].setOrdered(
                movimientoActual[+movimientoActual.length - 2]
              );
              equipoActual[jndex].setAbscissa(
                movimientoActual[+movimientoActual.length - 1]
              );
            }
            /*console.log(
              equipoActual[jndex].getOrdered() ==
                convertirNumAOrdenada(index + 1) &&
                equipoActual[jndex].getAbscissa() == diagonal1
            );*/
          }
        }

        if (diagonal2 > 0 && diagonal2 < 9) {
          //console.log(`${convertirNumAOrdenada(index + 1)}*${diagonal2}`);
          for (let jndex = 12; jndex <= 13; jndex++) {
            if (
              equipoActual[jndex].getOrdered() ==
                convertirNumAOrdenada(index + 1) &&
              equipoActual[jndex].getAbscissa() == diagonal2
            ) {
              //console.log("Esta es la pieza");
              equipoActual[jndex].setOrdered(
                movimientoActual[+movimientoActual.length - 2]
              );
              equipoActual[jndex].setAbscissa(
                movimientoActual[+movimientoActual.length - 1]
              );
            }
          }
        }
        // console.log("------");
        /*console.log(
          `${ordenadas[index]}*${
            +movimientoActual[+movimientoActual.length - 1] -
            convertirOrdenadaANum(
              movimientoActual[+movimientoActual.length - 2]
            ) +
            (index + 1)
          }`
        );*/
      }
    }
    if (tipo == "Torre") {
      let torres = [];
      let flagH1 = true;
      let flagH2 = true;
      let flagV1 = true;
      let flagV2 = true;
      let xDestino = +convertirOrdenadaANum(
        movimientoActual[+movimientoActual.length - 2]
      );
      let yDestino = +movimientoActual[+movimientoActual.length - 1];
      for (var index = 1; index <= 7; index++) {
        if (xDestino + index > 0 && xDestino + index < 9 && flagH1 == true) {
          let clase = document.getElementById(
            `${convertirNumAOrdenada(xDestino + index)}*${yDestino}`
          ).className;
          
          if (!clase.includes("torre")&&clase.length>0) {
            flagH1 = false;
            console.log(clase);
          } else {
            if (clase.includes(equipoActual[8].getName())) {
              torres.push(equipoActual[8]);
              //flagH1=false
            }
            if (clase.includes(equipoActual[9].getName())) {
              torres.push(equipoActual[9]);
              //flagH1=false
            }
          }
        }
        
        if (xDestino - index > 0 && xDestino - index < 9 && flagH2 == true) {
          let clase = document.getElementById(
            `${convertirNumAOrdenada(xDestino - index)}*${yDestino}`
          ).className;
          console.log(clase);
          console.log(!clase.includes("torre")&&clase.length>0);
          console.log(!clase.includes("torre"))
          console.log(clase.length>0)
          console.log("-------");
          if (!clase.includes("torre")&&clase.length>0) {
            flagH2 = false;
          } else {
            if (clase.includes(equipoActual[8].getName())) {
              torres.push(equipoActual[8]);
              flagH2=false
            }
            if (clase.includes(equipoActual[9].getName())) {
              torres.push(equipoActual[9]);
              flagH2=false
            }
          }
        }
        //console.log(yDestino + index < 9);
        if (yDestino + index > 0 && yDestino + index < 9 && flagV1 == true) {
          let clase = document.getElementById(
            `${convertirNumAOrdenada(xDestino)}*${yDestino + index}`
          ).className;
          //console.log(clase);
          if (!clase.includes("torre")&&clase.length>0) {
            flagV1 = false;
          } else {
            if (clase.includes(equipoActual[8].getName())) {
              torres.push(equipoActual[8]);
              flagV1=false
            }
            if (clase.includes(equipoActual[9].getName())) {
              torres.push(equipoActual[9]);
              flagV1=false
            }
          }
        }
        if (yDestino - index > 0 && yDestino - index < 9 && flagV2 == true) {
          let clase = document.getElementById(
            `${convertirNumAOrdenada(xDestino)}*${yDestino - index}`
          ).className;
          if (clase != null ||!clase.includes("torre")) {
            flagV2 = false;
          } else {
            if (clase.includes(equipoActual[8].getName())) {
              torres.push(equipoActual[8]);
              flagV2=false
            }
            if (clase.includes(equipoActual[9].getName())) {
              torres.push(equipoActual[9]);
              flagV2=false
            }
          }
        }
      }
      if (torres.length == 2 && movimientoActual.length > 3) {
        //console.log("xd");
        torres.forEach((torre) => {
          //console.log(torre.getOrdered());
          //console.log(movimientoActual[+movimientoActual.length - 3]);
          if (
            torre.getOrdered() == movimientoActual[+movimientoActual.length - 3]
          ) {
            if (torre.getName() == equipoActual[8].getName()) {
              equipoActual[8].setOrdered(
                movimientoActual[+movimientoActual.length - 2]
              );
              equipoActual[8].setAbscissa(
                movimientoActual[+movimientoActual.length - 1]
              );
            } else if (torre.getName() == equipoActual[9].getName()) {
              equipoActual[9].setOrdered(
                movimientoActual[+movimientoActual.length - 2]
              );
              equipoActual[9].setAbscissa(
                movimientoActual[+movimientoActual.length - 1]
              );
            }
          }
        });
      } else if (torres.length == 1) {
        
        //console.log(torres[0].getOrdered());
        //console.log(movimientoActual[+movimientoActual.length - 2]);
        if (torres[0].getName() == equipoActual[8].getName()) {
          equipoActual[8].setOrdered(
            movimientoActual[+movimientoActual.length - 2]
          );
          equipoActual[8].setAbscissa(
            movimientoActual[+movimientoActual.length - 1]
          );
        } else if (torres[0].getName() == equipoActual[9].getName()) {
          equipoActual[9].setOrdered(
            movimientoActual[+movimientoActual.length - 2]
          );
          equipoActual[9].setAbscissa(
            movimientoActual[+movimientoActual.length - 1]
          );
        }
      }
      console.log(torres.length);
    }
    if (tipo == "Caballo") {
      let piezas = [];
      let xDestino = convertirOrdenadaANum(
        movimientoActual[+movimientoActual.length - 2]
      );
      let yDestino = +movimientoActual[+movimientoActual.length - 1];
      if (
        xDestino + 1 > 0 &&
        xDestino + 1 < 9 &&
        yDestino + 2 > 0 &&
        yDestino + 2 < 9
      ) {
        if (
          document
            .getElementById(
              `${convertirNumAOrdenada(xDestino + 1)}*${yDestino + 2}`
            )
            .className.includes("caballo")
        ) {
          equipoActual.forEach((piezita) => {
            if (
              piezita.getOrdered() == convertirNumAOrdenada(xDestino + 1) &&
              +piezita.getAbscissa() == yDestino + 2
            ) {
              /*piezita.setOrdered(convertirNumAOrdenada(xDestino));
              piezita.setAbscissa(yDestino);
              console.log(piezita.getOrdered());
              console.log(piezita.getAbscissa());*/
              piezas.push(piezita);
            }
          });
        }
      }
      if (
        xDestino - 1 > 0 &&
        xDestino - 1 < 9 &&
        yDestino + 2 > 0 &&
        yDestino + 2 < 9
      ) {
        if (
          document
            .getElementById(
              `${convertirNumAOrdenada(xDestino - 1)}*${yDestino + 2}`
            )
            .className.includes("caballo")
        ) {
          equipoActual.forEach((piezita) => {
            if (
              piezita.getOrdered() == convertirNumAOrdenada(xDestino - 1) &&
              +piezita.getAbscissa() == yDestino + 2
            ) {
              /*piezita.setOrdered(convertirNumAOrdenada(xDestino));
              piezita.setAbscissa(yDestino);
              console.log(piezita.getOrdered());
              console.log(piezita.getAbscissa());*/
              piezas.push(piezita);
            }
          });
        }
      }
      if (
        xDestino + 1 > 0 &&
        xDestino + 1 < 9 &&
        yDestino - 2 > 0 &&
        yDestino - 2 < 9
      ) {
        if (
          document
            .getElementById(
              `${convertirNumAOrdenada(xDestino + 1)}*${yDestino - 2}`
            )
            .className.includes("caballo")
        ) {
          equipoActual.forEach((piezita) => {
            if (
              piezita.getOrdered() == convertirNumAOrdenada(xDestino + 1) &&
              +piezita.getAbscissa() == yDestino - 2
            ) {
              /*piezita.setOrdered(convertirNumAOrdenada(xDestino));
              piezita.setAbscissa(yDestino);
              console.log(piezita.getOrdered());
              console.log(piezita.getAbscissa());*/
              piezas.push(piezita);
            }
          });
        }
      }
      if (
        xDestino - 1 > 0 &&
        xDestino - 1 < 9 &&
        yDestino - 2 > 0 &&
        yDestino - 2 < 9
      ) {
        if (
          document
            .getElementById(
              `${convertirNumAOrdenada(xDestino - 1)}*${yDestino - 2}`
            )
            .className.includes("caballo")
        ) {
          equipoActual.forEach((piezita) => {
            if (
              piezita.getOrdered() == convertirNumAOrdenada(xDestino - 1) &&
              +piezita.getAbscissa() == yDestino - 2
            ) {
              /*piezita.setOrdered(convertirNumAOrdenada(xDestino));
              piezita.setAbscissa(yDestino);
              console.log(piezita.getOrdered());
              console.log(piezita.getAbscissa());*/
              piezas.push(piezita);
            }
          });
        }
      }
      //////////
      if (
        xDestino + 2 > 0 &&
        xDestino + 2 < 9 &&
        yDestino + 1 > 0 &&
        yDestino + 1 < 9
      ) {
        if (
          document
            .getElementById(
              `${convertirNumAOrdenada(xDestino + 2)}*${yDestino + 1}`
            )
            .className.includes("caballo")
        ) {
          equipoActual.forEach((piezita) => {
            if (
              piezita.getOrdered() == convertirNumAOrdenada(xDestino + 2) &&
              +piezita.getAbscissa() == yDestino + 1
            ) {
              /*piezita.setOrdered(convertirNumAOrdenada(xDestino));
              piezita.setAbscissa(yDestino);
              console.log(piezita.getOrdered());
              console.log(piezita.getAbscissa());*/
              piezas.push(piezita);
            }
          });
        }
      }
      if (
        xDestino - 2 > 0 &&
        xDestino - 2 < 9 &&
        yDestino + 1 > 0 &&
        yDestino + 1 < 9
      ) {
        
        if (
          document
            .getElementById(
              `${convertirNumAOrdenada(xDestino - 2)}*${yDestino + 1}`
            )
            .className.includes("caballo")
        ) {
          equipoActual.forEach((piezita) => {
            if (
              piezita.getOrdered() == convertirNumAOrdenada(xDestino - 2) &&
              +piezita.getAbscissa() == yDestino + 1
            ) {
              /*piezita.setOrdered(convertirNumAOrdenada(xDestino));
              piezita.setAbscissa(yDestino);
              console.log(piezita.getOrdered());
              console.log(piezita.getAbscissa());*/
              piezas.push(piezita);
            }
          });
        }
      }
      if (
        xDestino + 2 > 0 &&
        xDestino + 2 < 9 &&
        yDestino - 1 > 0 &&
        yDestino - 1 < 9
      ) {
        if (
          document
            .getElementById(
              `${convertirNumAOrdenada(xDestino + 2)}*${yDestino - 1}`
            )
            .className.includes("caballo")
        ) {
          equipoActual.forEach((piezita) => {
            if (
              piezita.getOrdered() == convertirNumAOrdenada(xDestino + 2) &&
              +piezita.getAbscissa() == yDestino - 1
            ) {
              /*piezita.setOrdered(convertirNumAOrdenada(xDestino));
              piezita.setAbscissa(yDestino);
              console.log(piezita.getOrdered());
              console.log(piezita.getAbscissa());*/
              piezas.push(piezita);
            }
          });
        }
      }
      if (
        xDestino - 2 > 0 &&
        xDestino - 2 < 9 &&
        yDestino - 1 > 0 &&
        yDestino - 1 < 9
      ) {
        if (
          document
            .getElementById(
              `${convertirNumAOrdenada(xDestino - 2)}*${yDestino - 1}`
            )
            .className.includes("caballo")
        ) {
          equipoActual.forEach((piezita) => {
            if (
              piezita.getOrdered() == convertirNumAOrdenada(xDestino - 2) &&
              +piezita.getAbscissa() == yDestino - 1
            ) {
              /*piezita.setOrdered(convertirNumAOrdenada(xDestino));
              piezita.setAbscissa(yDestino);
              console.log(piezita.getOrdered());
              console.log(piezita.getAbscissa());*/
              piezas.push(piezita);
            }
          });
        }
      }

      
      if (piezas.length == 1) {
        piezas[0].setOrdered(convertirNumAOrdenada(xDestino));
        piezas[0].setAbscissa(yDestino);
      } else {
        piezas.forEach((piezita) => {
          if (piezita.getOrdered() == movimientoActual[1]) {
            piezita.setOrdered(convertirNumAOrdenada(xDestino));
            piezita.setAbscissa(yDestino);
          }
        });
      }
    }

    equipoActual = cambiarEquipo(equipoActual);
    equipoContrario = cambiarEquipo(equipoContrario);
    setTablero();
    console.log(movimientoActual);
  }
}
function removerTipo(movimiento) {
  if (movimiento.includes("K")) {
    return movimiento.replace("K", "");
  } else if (movimiento.includes("Q")) {
    return movimiento.replace("Q", "");
  } else if (movimiento.includes("R")) {
    return movimiento.replace("R", "");
  } else if (movimiento.includes("B")) {
    return movimiento.replace("B", "");
  } else if (movimiento.includes("N")) {
    return movimiento.replace("N", "");
  } else {
    return movimiento;
  }
}
function cambiarEquipo(arreglo) {
  if (arreglo === piezaN) {
    return piezaB;
  } else if (arreglo === piezaB) {
    return piezaN;
  } else {
    console.error("Error inesperado");
    return null;
  }
}
function convertirOrdenadaANum(ordenada) {
  switch (ordenada) {
    case "a":
      return 1;
    case "b":
      return 2;
    case "c":
      return 3;
    case "d":
      return 4;
    case "e":
      return 5;
    case "f":
      return 6;
    case "g":
      return 7;
    case "h":
      return 8;
  }
}
function convertirNumAOrdenada(num) {
  switch (num) {
    case 1:
      return "a";
    case 2:
      return "b";
    case 3:
      return "c";
    case 4:
      return "d";
    case 5:
      return "e";
    case 6:
      return "f";
    case 7:
      return "g";
    case 8:
      return "h";
  }
}

function definirTipo(movimiento) {
  if (movimiento.includes("K")) {
    return "Rey";
  } else if (movimiento.includes("Q")) {
    return "Dama";
  } else if (movimiento.includes("R")) {
    return "Torre";
  } else if (movimiento.includes("B")) {
    return "Alfil";
  } else if (movimiento.includes("N")) {
    return "Caballo";
  } else if (movimiento.includes("O-O")) {
    return "Enroque corto";
  } else if (movimiento.includes("O-O-O")) {
    return "Enroque largo";
  } else {
    return "Peon";
  }
}
