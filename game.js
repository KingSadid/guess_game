const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const numeroSecreto = Math.floor(Math.random() * 20) + 1;

console.log("¡Bienvenido al SUPER JUEGO DE ADIVINANZA v2.0!");
console.log("He pensado un número del 1 al 20. ¿Puedes adivinarlo?");

const preguntar = () => {
  rl.question('Ingresa tu número: ', (respuesta) => {
    const numeroUsuario = parseInt(respuesta);

    if (numeroUsuario === numeroSecreto) {
      console.log("¡Felicidades! Adivinaste el número.");
      rl.close();
    } else {
      
      if (Math.abs(numeroSecreto - numeroUsuario) <= 5) {
        console.log("-> ¡Caliente! Estás muy cerca.");
      } else {
        console.log("-> Frío... estás lejos.");
      }

      
      if (numeroUsuario < numeroSecreto) {
        console.log("   Pista: El número secreto es MAYOR.");
      } else {
        console.log("   Pista: El número secreto es MENOR.");
      }

      preguntar();
    }
  });
};

preguntar();