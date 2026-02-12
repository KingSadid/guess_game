const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 20) + 1;

console.log("¡Bienvenido al SUPER JUEGO DE ADIVINANZA v3.0 (Final)!");
console.log("He pensado un número del 1 al 20. ¿Puedes adivinarlo?");

const preguntar = () => {
  rl.question('Ingresa tu número: ', (respuesta) => {
    const numeroUsuario = parseInt(respuesta);

    if (numeroUsuario === numeroSecreto) {
      console.log("¡Felicidades! Adivinaste el número.");
      rl.close();
    } else {
      const diferencia = Math.abs(numeroSecreto - numeroUsuario);

     
      if (diferencia <= 2) {
        console.log("->Estás hirviendo .");
      } else if (diferencia <= 5) {
        console.log("-> ¡Caliente! Estás cerca.");
      } else if (diferencia <= 10) {
        console.log("-> Tibio... ni cerca ni lejos.");
      } else {
        console.log("-> ¡Congelado!.");
      }

     
      if (numeroUsuario < numeroSecreto) {
        console.log("   Pista: Busca un número MAYOR.");
      } else {
        console.log("   Pista: Busca un número MENOR.");
      }

      preguntar();
    }
  });
};

preguntar();