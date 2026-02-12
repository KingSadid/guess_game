const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

console.log("¡Bienvenido al SUPER JUEGO DE ADIVINANZA v1.0!");
console.log("He pensado un número del 1 al 100. ¿Puedes adivinarlo?");

const preguntar = () => {
  rl.question('Ingresa tu número: ', (respuesta) => {
    const numeroUsuario = parseInt(respuesta);

   
    if (numeroUsuario === numeroSecreto) {
      console.log("¡Felicidades! Adivinaste el número.");
      rl.close();
    } else {
    
      if (Math.abs(numeroSecreto - numeroUsuario) <= 10) {
        console.log("-> ¡Caliente! Estás muy cerca.");
      } else {
        console.log("-> Frío... estás lejos.");
      }

      if (numeroUsuario < numeroSecreto) {
        console.log("   Pista extra: El número secreto es MAYOR.");
      } else {
        console.log("   Pista extra: El número secreto es MENOR.");
      }

      preguntar(); 
    }
  });
};

preguntar();