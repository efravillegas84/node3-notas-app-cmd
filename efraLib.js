console.log("efraLib.js");

const saludo = "¡Hola Mundo!";

const holaMundo = function(){
    return saludo+" desde funcion";
}

module.exports = {saludo, holaMundo}