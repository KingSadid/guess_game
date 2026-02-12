// game.js - Versión 1
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
console.log("¡Bienvenido! Adivina el número del 1 al 100.");

const preguntar = () => {
  rl.question('Ingresa tu número: ', (respuesta) => {
    const numeroUsuario = parseInt(respuesta);

    if (numeroUsuario === numeroSecreto) {
      console.log("¡Felicidades! Adivinaste el número.");
      rl.close();
    } else {
      // Lógica de pista simple
      if (Math.abs(numeroSecreto - numeroUsuario) <= 10) {
        console.log("¡Caliente! Estás muy cerca.");
      } else {
        console.log("Frío... estás lejos.");
      }
      preguntar(); 
    }
  });
};

preguntar();