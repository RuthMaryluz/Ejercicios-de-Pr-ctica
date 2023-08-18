 
function calcularDia() {
let dia = parseInt(document.getElementById("dia").value);
let mes = parseInt(document.getElementById("mes").value);      //parseIn => para convertir un valor de string a numerico entero
let anio = parseInt(document.getElementById("anio").value);    // getElementById => obtienes el elemento por medio del Id    con .value se obtiene el valor

console.log("dia"+dia);
console.log("mes"+mes);
console.log("anio"+anio);

const fecha = new Date(anio, mes - 1, dia);
const diaSemana = fecha.getDay();
console.log("diaSemana" + diaSemana);
console.log("fecha" + fecha);

let resultado = "";

      switch (diaSemana) {
        case 0:
          resultado = "No laborable";
          break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          resultado = "Día laborable";
          break;
        case 6:
          resultado = "no laborable";
          break;
        default:
          resultado = "Fecha inválida";
    }
document.getElementById("resultado").value = `${fecha.toLocaleDateString("es-ES", { weekday: 'long' })}, ${resultado}`; //document=> Manipula objetos de la pag web (DOM).  toLocaleDateString => formatea la fecha en una cadena. "es-ES" => lo convierte a lenguaje español. weekday: 'long' => imprime el nombre completo del dia de la semana.

if(esAnioBisiesto(anio)){
    document.getElementById("tipo-anio").value = "Año bisiesto";// En caso de que se true, imprime esta parte
   
}
else{
    document.getElementById("tipo-anio").value = "Año no bisiesto";//En caso de que se false, imprime esta parte
}

}

function esAnioBisiesto(anio) {             // se crea una funcion que te devuelve true en caso de ser año bisiesto y false si no lo es.
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);  // anio % 4 === 0 => verifica si el año es divisible x4 sin dejar un resto.
    //anio % 100 !== 0 => asegura que los años multiplos de 100 no se consideren bisiestos y verifica si el año es divisible x 400
    //Años divisibles por 4 son bisiestos.
    //Años divisibles por 100 no son bisiestos, a menos que también sean divisibles por 400.


  }

  function recargar(){
    window.location.reload();
  }