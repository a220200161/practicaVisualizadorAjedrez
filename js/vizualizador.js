let buttonCompleto = document.getElementById("completo")
let ordenadas = ["a", "b", "c", "d", "e", "f", "g", "h"];
let absisas = ["8", "7", "6", "5", "4", "3", "2", "1"];
let tablero = {};
let piezaB = [];
let piezaN = [];
let equipoActual = [];
let equipoContrario = [];
let partida = null;
let arregloPartida=[];
let numTurno = 0;
let clase = "";
let flagBoton=true;

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
  piezaB[0] = new pieza("peonB-1", "blanco", "a", "2", true, true);
  piezaB[1] = new pieza("peonB-2", "blanco", "b", "2", true, true);
  piezaB[2] = new pieza("peonB-3", "blanco", "c", "2", true, true);
  piezaB[3] = new pieza("peonB-4", "blanco", "d", "2", true, true);
  piezaB[4] = new pieza("peonB-5", "blanco", "e", "2", true, true);
  piezaB[5] = new pieza("peonB-6", "blanco", "f", "2", true, true);
  piezaB[6] = new pieza("peonB-7", "blanco", "g", "2", true, true);
  piezaB[7] = new pieza("peonB-8", "blanco", "h", "2", true, true);

  piezaB[8] = new pieza("torreB1", "blanco", "a", "1", true, false);
  piezaB[9] = new pieza("torreB2", "blanco", "h", "1", true, false);
  piezaB[10] = new pieza("caballoB1", "blanco", "b", "1", true, false);
  piezaB[11] = new pieza("caballoB2", "blanco", "g", "1", true, false);
  piezaB[12] = new pieza("alfilB1", "blanco", "c", "1", true, false);
  piezaB[13] = new pieza("alfilB2", "blanco", "f", "1", true, false);
  piezaB[14] = new pieza("reyB", "blanco", "e", "1", true, false);
  piezaB[15] = new pieza("reinaB", "blanco", "d", "1", true, false);

  piezaN[0] = new pieza("peonN-1", "negro", "a", "7", true, true);
  piezaN[1] = new pieza("peonN-2", "negro", "b", "7", true, true);
  piezaN[2] = new pieza("peonN-3", "negro", "c", "7", true, true);
  piezaN[3] = new pieza("peonN-4", "negro", "d", "7", true, true);
  piezaN[4] = new pieza("peonN-5", "negro", "e", "7", true, true);
  piezaN[5] = new pieza("peonN-6", "negro", "f", "7", true, true);
  piezaN[6] = new pieza("peonN-7", "negro", "g", "7", true, true);
  piezaN[7] = new pieza("peonN-8", "negro", "h", "7", true, true);

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
  flagBoton=true
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
function movimiento(){
  if(flagBoton==true){
    flagBoton=false
  }
  siguienteMovimiento()
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
    //movimientoActual=movimientoActual.replace(" ","")
    document.getElementById("movimiento").innerHTML=""

    let tipo = definirTipo(movimientoActual);

    if (movimientoActual.includes("+")) {
      console.log("Haque");
      movimientoActual = movimientoActual.replace("+", "")
      document.getElementById("movimiento").insertAdjacentHTML("beforeend",` El jugador ${equipoContrario[14].getTeam()} esta en Haque!!`)
    }
    if (movimientoActual.includes("#")) {
      console.log("Haque mate");
      movimientoActual = movimientoActual.replace("#", "")
    }
    if (movimientoActual.includes("!")) {
      console.log("Buen Movimiento");
      movimientoActual = movimientoActual.replace("!", "")
    }
    if (movimientoActual.includes("?")) {
      console.log("Mal Movimiento");
      movimientoActual = movimientoActual.replace("?", "")
    }
    if (tipo == "Enroque corto") {
      equipoActual[14].setOrdered("g");
      equipoActual[9].setOrdered("f");
      document.getElementById("movimiento").innerHTML=`Enroque corto del jugador ${equipoActual[14].getTeam()}`
    }
    if (tipo == "Enroque largo") {
      equipoActual[14].setOrdered("c");
      equipoActual[8].setOrdered("d");
      document.getElementById("movimiento").innerHTML=`Enroque corto del jugador ${equipoActual[14].getTeam()}`
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
          
        }
        
      } else {
        
        equipoActual.forEach((piezita) => {
          if (piezita.getName().includes("peon")) {
            if ((piezita.getOrdered() == movimientoActual[0] && (piezita.getAbscissa() == +movimientoActual[1] - 1 ||
              piezita.getAbscissa() == +movimientoActual[1] + 1)) || (piezita.getOrdered() == movimientoActual[0] && (piezita.getAbscissa() == +movimientoActual[1] - 2 ||
                piezita.getAbscissa() == +movimientoActual[1] + 2) && piezita.hasDoubleStep)) {
              piezita.setOrdered(movimientoActual[0]);
              piezita.setAbscissa(movimientoActual[1]);
              if (movimientoActual.includes("=")) {
                piezita.setName(piezita.getName().replace("peon", definirTipo(movimientoActual[movimientoActual.length - 1]).toLocaleLowerCase()))
              }
              piezita.setDoubleStep(false);
            }
          }
        }
        )
      }
    }
    if (movimientoActual.includes("x")) {
      equipoContrario.forEach((piezita) => {
        if (
          piezita.getOrdered() ==
          movimientoActual[movimientoActual.length - 2] &&
          piezita.getAbscissa() ==
          movimientoActual[movimientoActual.length - 1]
        ) {
          piezita.setIsActive(false);
        }
      });
      movimientoActual = movimientoActual.replace("x", "")
    }
    if (tipo == "Alfil") {
      let alfiles = []
      let flagDSI = true
      let flagDSD = true
      let flagDII = true
      let flagDID = true
      let xDestino = +convertirOrdenadaANum(
        movimientoActual[+movimientoActual.length - 2]
      );
      let yDestino = +movimientoActual[+movimientoActual.length - 1];
      for (var index = 1; index <= 7; index++) {
        /*console.log(flagDSD)
        console.log(flagDSI)
        console.log(flagDID)
        console.log(flagDII)*/
        if (xDestino + index > 0 && xDestino + index < 9 && yDestino + index > 0 && yDestino + index < 9 && flagDSD == true) {
          let clase = document.getElementById(
            `${convertirNumAOrdenada(xDestino + index)}*${yDestino + index}`
          ).className;

          if (!clase.includes("alfil") && clase.length > 0) {
            flagDSD = false;
          } else {
            
            equipoActual.forEach((piezita) => {
              if (piezita.getIsActive() && clase.includes(piezita.getName())) {
                alfiles.push(piezita);
                flagDSD = false
              }
            })
          }
        }
        if (xDestino - index > 0 && xDestino - index < 9 && yDestino + index > 0 && yDestino + index < 9 && flagDSI == true) {
          let clase = document.getElementById(
            `${convertirNumAOrdenada(xDestino - index)}*${yDestino + index}`
          ).className;
          if (!clase.includes("alfil") && clase.length > 0) {
            flagDSI = false;
            
          } else {
            equipoActual.forEach((piezita) => {
              if (piezita.getIsActive() && clase.includes(piezita.getName())) {
                alfiles.push(piezita);
                flagDSI = false
              }
            })
          }
        }

        if (xDestino + index > 0 && xDestino + index < 9 && yDestino - index > 0 && yDestino - index < 9 && flagDID == true) {
          let clase = document.getElementById(
            `${convertirNumAOrdenada(xDestino + index)}*${yDestino - index}`
          ).className;
          console.log(flagDID);
          if (!clase.includes("alfil") && clase.length > 0) {
            flagDID = false;
            
          } else {
            equipoActual.forEach((piezita) => {
              if (piezita.getIsActive() && clase.includes(piezita.getName())) {
                alfiles.push(piezita);
                flagDID = false
              }
            })
          }
        }
        if (xDestino - index > 0 && xDestino - index < 9 && yDestino - index > 0 && yDestino - index < 9 && flagDII == true) {
          let clase = document.getElementById(
            `${convertirNumAOrdenada(xDestino - index)}*${yDestino - index}`
          ).className;
          if (!clase.includes("alfil") && clase.length > 0) {
            flagDII = false;
            console.log(clase);
          } else {
            equipoActual.forEach((piezita) => {
              if (piezita.getIsActive() && clase.includes(piezita.getName())) {
                alfiles.push(piezita);
                flagDII = false
              }
            })
          }

        }
      }
      if (alfiles.length == 2 && movimientoActual.length > 3) {

        alfiles.forEach((alfil) => {

          if (
            alfil.getOrdered() == movimientoActual[+movimientoActual.length - 3]
          ) {
            equipoActual.forEach((piezita) => {
              if (alfil.getName() == piezita.getName()) {
                piezita.setOrdered(
                  movimientoActual[+movimientoActual.length - 2]
                );
                piezita.setAbscissa(
                  movimientoActual[+movimientoActual.length - 1]
                );
              }
            })
          }
        });
      } else if (alfiles.length == 1) {
        equipoActual.forEach((piezita) => {
          if (alfiles[0].getName() == piezita.getName()) {
            piezita.setOrdered(
              movimientoActual[+movimientoActual.length - 2]
            );
            piezita.setAbscissa(
              movimientoActual[+movimientoActual.length - 1]
            );
          }
        })

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
          if (!clase.includes("torre") && clase.length > 0) {
            flagH1 = false;
          } else {
            equipoActual.forEach((piezita) => {
              if (piezita.getIsActive() && clase.includes(piezita.getName())) {
                torres.push(piezita);
                flagH1 = false
              }
            })
          }
        }

        if (xDestino - index > 0 && xDestino - index < 9 && flagH2 == true) {
          let clase = document.getElementById(
            `${convertirNumAOrdenada(xDestino - index)}*${yDestino}`
          ).className;
          if (!clase.includes("torre") && clase.length > 0) {
            flagH2 = false;
          } else {
            equipoActual.forEach((piezita) => {
              if (piezita.getIsActive() && clase.includes(piezita.getName())) {
                torres.push(piezita);
                flagH2 = false
              }
            })

          }
        }
        if (yDestino + index > 0 && yDestino + index < 9 && flagV1 == true) {
          let clase = document.getElementById(
            `${convertirNumAOrdenada(xDestino)}*${yDestino + index}`
          ).className;
          if (!clase.includes("torre") && clase.length > 0) {
            flagV1 = false;
          } else {
            equipoActual.forEach((piezita) => {
              if (piezita.getIsActive() && clase.includes(piezita.getName())) {
                torres.push(piezita);
                flagV1 = false
              }
            })
          }
        }
        if (yDestino - index > 0 && yDestino - index < 9 && flagV2 == true) {
          let clase = document.getElementById(
            `${convertirNumAOrdenada(xDestino)}*${yDestino - index}`
          ).className;
          if (!clase.includes("torre") && clase.length > 0) {
            flagV2 = false;
          } else {
            equipoActual.forEach((piezita) => {
              if (piezita.getIsActive() && clase.includes(piezita.getName())) {
                torres.push(piezita);
                flagV2 = false
              }
            })
          }
        }
      }
      console.log(torres);
      if (torres.length == 2 && movimientoActual.length > 3) {
        torres.forEach((torre) => {
          if (
            torre.getOrdered() === movimientoActual[+movimientoActual.length - 3]
          ) {
            equipoActual.forEach((piezita) => {
              if (piezita.getIsActive() && torre.getName() == piezita.getName()) {
                piezita.setOrdered(
                  movimientoActual[+movimientoActual.length - 2]
                );
                piezita.setAbscissa(
                  movimientoActual[+movimientoActual.length - 1]
                );
              }
            })
          } else if (
            torre.getAbscissa() === movimientoActual[+movimientoActual.length - 3]
          ) {
            equipoActual.forEach((piezita) => {
              if (piezita.getIsActive() && torre.getName() == piezita.getName()) {
                piezita.setOrdered(
                  movimientoActual[+movimientoActual.length - 2]
                );
                piezita.setAbscissa(
                  movimientoActual[+movimientoActual.length - 1]
                );
              }
            })
          }
        });
      } else if (torres.length == 1) {
        equipoActual.forEach((piezita) => {
          if (piezita.getIsActive() && torres[0].getName() == piezita.getName()) {
            piezita.setOrdered(
              movimientoActual[+movimientoActual.length - 2]
            );
            piezita.setAbscissa(
              movimientoActual[+movimientoActual.length - 1]
            );
          }
        })
      }
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
              piezita.getIsActive() && piezita.getOrdered() == convertirNumAOrdenada(xDestino + 1) &&
              +piezita.getAbscissa() == yDestino + 2
            ) {
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
              piezita.getIsActive() && piezita.getOrdered() == convertirNumAOrdenada(xDestino - 1) &&
              +piezita.getAbscissa() == yDestino + 2
            ) {
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
              piezita.getIsActive() && piezita.getOrdered() == convertirNumAOrdenada(xDestino + 1) &&
              +piezita.getAbscissa() == yDestino - 2
            ) {
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
              piezita.getIsActive() && piezita.getOrdered() == convertirNumAOrdenada(xDestino - 1) &&
              +piezita.getAbscissa() == yDestino - 2
            ) {
              piezas.push(piezita);
            }
          });
        }
      }
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
              piezita.getIsActive() && piezita.getOrdered() == convertirNumAOrdenada(xDestino + 2) &&
              +piezita.getAbscissa() == yDestino + 1
            ) {
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
              piezita.getIsActive() && piezita.getOrdered() == convertirNumAOrdenada(xDestino - 2) &&
              +piezita.getAbscissa() == yDestino + 1
            ) {
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
              piezita.getIsActive() && piezita.getOrdered() == convertirNumAOrdenada(xDestino + 2) &&
              +piezita.getAbscissa() == yDestino - 1
            ) {
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
              piezita.getIsActive() && piezita.getOrdered() == convertirNumAOrdenada(xDestino - 2) &&
              +piezita.getAbscissa() == yDestino - 1
            ) {
              piezas.push(piezita);
            }
          });
        }
      }

      console.log(piezas);
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
    if (tipo == "Reina") {
      let flagDiagonal = true
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
          if (!clase.includes("reina") && clase.length > 0) {
            flagH1 = false;
          } else {
            equipoActual.forEach((piezita) => {
              if (clase.includes(piezita.getName())) {
                torres.push(piezita);
                flagH1 = false
              }
            })
          }
        }

        if (xDestino - index > 0 && xDestino - index < 9 && flagH2 == true) {
          let clase = document.getElementById(
            `${convertirNumAOrdenada(xDestino - index)}*${yDestino}`
          ).className;
          if (!clase.includes("reina") && clase.length > 0) {
            flagH2 = false;
          } else {
            equipoActual.forEach((piezita) => {
              if (clase.includes(piezita.getName())) {
                torres.push(piezita);
                flagH2 = false
              }
            })
          }
        }
        if (yDestino + index > 0 && yDestino + index < 9 && flagV1 == true) {
          let clase = document.getElementById(
            `${convertirNumAOrdenada(xDestino)}*${yDestino + index}`
          ).className;
          if (!clase.includes("reina") && clase.length > 0) {
            flagV1 = false;
          } else {
            equipoActual.forEach((piezita) => {
              if (piezita.getIsActive() && clase.includes(piezita.getName())) {
                torres.push(piezita);
                flagV1 = false
              }
            })
          }
        }

        if (yDestino - index > 0 && yDestino - index < 9 && flagV2 == true) {
          let clase = document.getElementById(
            `${convertirNumAOrdenada(xDestino)}*${yDestino - index}`
          ).className;
          if (!clase.includes("reina") && clase.length > 0) {
            flagV2 = false;
          } else {
            equipoActual.forEach((piezita) => {
              if (piezita.getIsActive() && clase.includes(piezita.getName())) {
                torres.push(piezita);
                flagV2 = false
              }
            })
          }
        }
      }
      if (torres.length == 2 && movimientoActual.length > 3) {
        torres.forEach((torre) => {
          if (
            torre.getOrdered() === movimientoActual[+movimientoActual.length - 3]
          ) {
            equipoActual.forEach((piezita) => {
              if (piezita.getIsActive() && torre.getName() == piezita.getName()) {
                piezita.setOrdered(
                  movimientoActual[+movimientoActual.length - 2]
                );
                piezita.setAbscissa(
                  movimientoActual[+movimientoActual.length - 1]
                );
              }
            })
          } else if (
            torre.getAbscissa() === movimientoActual[+movimientoActual.length - 3]
          ) {
            equipoActual.forEach((piezita) => {
              if (piezita.getIsActive() && torre.getName() == piezita.getName()) {
                piezita.setOrdered(
                  movimientoActual[+movimientoActual.length - 2]
                );
                piezita.setAbscissa(
                  movimientoActual[+movimientoActual.length - 1]
                );
              }
            })
          }
        });
      } else if (torres.length == 1) {
        equipoActual.forEach((piezita) => {
          if (piezita.getIsActive() && torres[0].getName() == piezita.getName()) {
            piezita.setOrdered(
              movimientoActual[+movimientoActual.length - 2]
            );
            piezita.setAbscissa(
              movimientoActual[+movimientoActual.length - 1]
            );
            flagDiagonal = false
          }
        })
      }
      if (flagDiagonal = true) {
        let alfiles = []
        let flagDSI = true
        let flagDSD = true
        let flagDII = true
        let flagDID = true
        let xDestino = +convertirOrdenadaANum(
          movimientoActual[+movimientoActual.length - 2]
        );
        let yDestino = +movimientoActual[+movimientoActual.length - 1];
        for (var index = 1; index <= 7; index++) {
          if (xDestino + index > 0 && xDestino + index < 9 && yDestino + index > 0 && yDestino + index < 9 && flagDSD == true) {
            let clase = document.getElementById(
              `${convertirNumAOrdenada(xDestino + index)}*${yDestino + index}`
            ).className;

            if (!clase.includes("reina") && clase.length > 0) {
              flagDSD = false;
            } else {
              equipoActual.forEach((piezita) => {
                if (piezita.getIsActive() && clase.includes(piezita.getName())) {
                  alfiles.push(piezita);
                  flagDSD = false
                }
              })
            }
          }
          if (xDestino - index > 0 && xDestino - index < 9 && yDestino + index > 0 && yDestino + index < 9 && flagDSI == true) {
            let clase = document.getElementById(
              `${convertirNumAOrdenada(xDestino - index)}*${yDestino + index}`
            ).className;
            if (!clase.includes("reina") && clase.length > 0) {
              flagDSI = false;
            } else {
              equipoActual.forEach((piezita) => {
                if (piezita.getIsActive() && clase.includes(piezita.getName())) {
                  alfiles.push(piezita);
                  flagDSI = false
                }
              })
            }
          }

          if (xDestino + index > 0 && xDestino + index < 9 && yDestino - index > 0 && yDestino - index < 9 && flagDID == true) {
            let clase = document.getElementById(
              `${convertirNumAOrdenada(xDestino + index)}*${yDestino - index}`
            ).className;
            console.log(flagDID);
            if (!clase.includes("reina") && clase.length > 0) {
              flagDID = false;
            } else {
              equipoActual.forEach((piezita) => {
                if (piezita.getIsActive() && clase.includes(piezita.getName())) {
                  alfiles.push(piezita);
                  flagDID = false
                }
              })
            }
          }
          if (xDestino - index > 0 && xDestino - index < 9 && yDestino - index > 0 && yDestino - index < 9 && flagDII == true) {
            let clase = document.getElementById(
              `${convertirNumAOrdenada(xDestino - index)}*${yDestino - index}`
            ).className;
            if (!clase.includes("reina") && clase.length > 0) {
              flagDII = false;
              console.log(clase);
            } else {
              equipoActual.forEach((piezita) => {
                if (piezita.getIsActive() && clase.includes(piezita.getName())) {
                  alfiles.push(piezita);
                  flagDII = false
                }
              })
            }

          }
        }
        if (alfiles.length == 2 && movimientoActual.length > 3) {

          alfiles.forEach((alfil) => {

            if (
              alfil.getOrdered() == movimientoActual[+movimientoActual.length - 3]
            ) {
              equipoActual.forEach((piezita) => {
                if (piezita.getIsActive() && alfil.getName() == piezita.getName()) {
                  piezita.setOrdered(
                    movimientoActual[+movimientoActual.length - 2]
                  );
                  piezita.setAbscissa(
                    movimientoActual[+movimientoActual.length - 1]
                  );
                }
              })
            }
          });
        } else if (alfiles.length == 1) {
          equipoActual.forEach((piezita) => {
            if (piezita.getIsActive() && alfiles[0].getName() == piezita.getName()) {
              piezita.setOrdered(
                movimientoActual[+movimientoActual.length - 2]
              );
              piezita.setAbscissa(
                movimientoActual[+movimientoActual.length - 1]
              );
            }
          })

        }
      }
    }
    if (tipo == "Rey") {
      let xDestino = +convertirOrdenadaANum(
        movimientoActual[+movimientoActual.length - 2]
      );
      let yDestino = +movimientoActual[+movimientoActual.length - 1];
      for (var index = -1; index <= 1; index++) {
        for (var jndex = -1; jndex <= 1; jndex++) {
          if ((xDestino + index > 0 && xDestino + index < 9)
            && (yDestino + jndex > 0 && yDestino + jndex < 9)
            && !(index == 0 && jndex == 0)) {
            let clase = document.getElementById(
              `${convertirNumAOrdenada(xDestino + index)}*${yDestino + jndex}`
            ).className;
            console.log(`${convertirNumAOrdenada(xDestino + index)}*${yDestino + jndex}`);
            console.log(clase);
            if (clase.includes("rey")) {
              equipoActual.forEach((piezita) => {
                if (clase.includes(piezita.getName())) {
                  console.log(piezita);
                  piezita.setOrdered(convertirNumAOrdenada(xDestino))
                  piezita.setAbscissa(yDestino)
                }
              })
            }
          }
        }
      }
    }
    if(tipo!="Enroque corto"&&tipo!="Enroque largo"){
      if(movimientoActual=="1-0"){
        document.getElementById("movimiento").innerHTML="Ganan las blancas"  
      }else if(movimientoActual=="0-1"){
        document.getElementById("movimiento").innerHTML="Ganan las negras"  
      }
      document.getElementById("movimiento").insertAdjacentHTML("afterbegin",`${tipo} ${equipoActual[14].getTeam()} se movio a ${movimientoActual[+movimientoActual.length - 2]}${movimientoActual[+movimientoActual.length - 1]}`)
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
    return "Reina";
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

buttonCompleto.addEventListener("click",(e)=>{
  if(flagBoton){
  e.preventDefault()
  console.log(arregloPartida.length);
  
  for (let n = 0; n < arregloPartida.length; n++) {
    setTimeout(() => {
      console.log("si");
      siguienteMovimiento()

    }, 1000*n)

  }
}
})