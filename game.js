const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 20) + 1;

console.log("¡Bienvenido al SUPER JUEGO DE ADIVINANZA v3.0 (Final)!");
console.log("Adivina el número del 1 al 20.");

const ask = () => {
  rl.question('Ingresa tu número: ', (answer) => {
    const userNumber = parseInt(answer);

    if (userNumber === secretNumber) {
      console.log("¡Felicidades! Adivinaste el número.");
      rl.close();
    } else {
      const difference = Math.abs(secretNumber - userNumber);

      if (difference <= 2) {
        console.log("-> ¡Estás hirviendo!");
      } else if (difference <= 5) {
        console.log("-> ¡Caliente! Estás cerca.");
      } else if (difference <= 10) {
        console.log("-> Tibio... ni cerca ni lejos.");
      } else {
        console.log("-> ¡Congelado!");
      }

      if (userNumber < secretNumber) {
        console.log("   Pista: Busca un número MAYOR.");
      } else {
        console.log("   Pista: Busca un número MENOR.");
      }

      ask();
    }
  });
};

ask();