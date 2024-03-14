let ordenadas = ["a", "b", "c", "d", "e", "f", "g", "h"];
let absisas = ["8", "7", "6", "5", "4", "3", "2", "1"];
let tablero = {};
let piezaB = [];
let piezaN = [];
let partida;

let turno = "blanco";

let simbolosPiezas = {};
simbolosPiezas["rey"] = "K";
simbolosPiezas["dama"] = "Q";
simbolosPiezas["torre"] = "R";
simbolosPiezas["alfil"] = "B";
simbolosPiezas["caballo"] = "N";
simbolosPiezas["peon"] = "";

let movimiento = {};
movimiento["captura"] = "x";
movimiento["enroque corto"] = "0-0";
movimiento["enroque largo"] = "0-0-0";
movimiento["jaque"] = "+";
movimiento["jaque mate"] = "#";
movimiento["buen movimiento"] = "!";
movimiento["mal movimiento"] = "?";

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

  piezaB[0] = new pieza("peonB1", "blanco", "a", "2", true);
  piezaB[1] = new pieza("peonB2", "blanco", "b", "2", true);
  piezaB[2] = new pieza("peonB3", "blanco", "c", "2", true);
  piezaB[3] = new pieza("peonB4", "blanco", "d", "2", true);
  piezaB[4] = new pieza("peonB5", "blanco", "e", "2", true);
  piezaB[5] = new pieza("peonB6", "blanco", "f", "2", true);
  piezaB[6] = new pieza("peonB7", "blanco", "g", "2", true);
  piezaB[7] = new pieza("peonB8", "blanco", "h", "2", true);

  piezaB[8] = new pieza("torreB1", "blanco", "a", "1", true);
  piezaB[9] = new pieza("torreB2", "blanco", "h", "1", true);
  piezaB[10] = new pieza("caballoB1", "blanco", "b", "1", true);
  piezaB[11] = new pieza("caballoB2", "blanco", "g", "1", true);
  piezaB[12] = new pieza("alfilB1", "blanco", "c", "1", true);
  piezaB[13] = new pieza("alfilB2", "blanco", "f", "1", true);
  piezaB[14] = new pieza("reyB", "blanco", "e", "1", true);
  piezaB[15] = new pieza("reinaB", "blanco", "d", "1", true);

  piezaN[0] = new pieza("peonN1", "negro", "a", "7", true);
  piezaN[1] = new pieza("peonN2", "negro", "b", "7", true);
  piezaN[2] = new pieza("peonN3", "negro", "c", "7", true);
  piezaN[3] = new pieza("peonN4", "negro", "d", "7", true);
  piezaN[4] = new pieza("peonN5", "negro", "e", "7", true);
  piezaN[5] = new pieza("peonN6", "negro", "f", "7", true);
  piezaN[6] = new pieza("peonN7", "negro", "g", "7", true);
  piezaN[7] = new pieza("peonN8", "negro", "h", "7", true);

  piezaN[8] = new pieza("torreN2", "negro", "h", "8", true);
  piezaN[9] = new pieza("caballoN1", "negro", "b", "8", true);
  piezaN[10] = new pieza("torreN1", "negro", "a", "8", true);
  piezaN[11] = new pieza("caballoN2", "negro", "g", "8", true);
  piezaN[12] = new pieza("alfilN1", "negro", "c", "8", true);
  piezaN[13] = new pieza("alfilN2", "negro", "f", "8", true);
  piezaN[14] = new pieza("reyN", "negro", "e", "8", true);
  piezaN[15] = new pieza("reinaN", "negro", "d", "8", true);

  setTablero();
  printTablero();
}

function setTablero() {
  absisas.forEach((absisa) => {
    ordenadas.forEach((ordenada) => {
      tablero[`${ordenada}${absisa}`] = "*";
    });
  });

  piezaB.forEach((piezita) => {
    if (piezita.getIsActive() === true) {
      tablero[
        `${piezita.getOrdered()}${piezita.getAbscissa()}`
      ] = `${piezita.getName()}`;
    }
  });

  piezaN.forEach((piezita) => {
    if (piezita.getIsActive() === true) {
      tablero[
        `${piezita.getOrdered()}${piezita.getAbscissa()}`
      ] = `${piezita.getName()}`;
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
  document.getElementById(input).innerText = "";
  try {
    document.getElementById(input).addEventListener("change", function () {
      let fr = new FileReader();
      fr.onload = function () {
        document.getElementById(output).textContent = fr.result;
      };
      fr.readAsText(this.files[0]);
      //partida=document.getElementById(output).textContent
    });
  } catch (error) {
    console.error(error);
  }
  //console.log(partida)
}

function archivo(input, output) {
  let temp = async () => {
    await leerArchivo(input, output);
    guardarVariable(output);
  };
}

function guardarVariable(output) {
  partida = document.getElementById(output).value;
  console.log(partida);
}
