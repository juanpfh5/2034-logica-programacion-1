alert('Bienvenido al juego del número secreto');

// Variables
let numeroSecreto;
let numeroUsuario;
let intentos = 1;
let maximosIntentos = 3;
let numeroMaximo = prompt('Ingresa el número máximo para el juego: ');

numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
console.log('Número secreto:', numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Ingresa un número entre el 1 y el ${numeroMaximo}:`));

    console.log('Valor de intento:', numeroUsuario);

    // Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
    // console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
        // console.log('Valor del número secreto:', numeroSecreto);
        // alert("Lo siento, no acertaste el número.");

        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor.");
        } else {
            alert("El número secreto es mayor.");
        }

        intentos++;

        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}


// alert('Hola Mundo');


// 01. INICIANDO CON JAVASCRIPT 
// 09. Desafío: hora de practicar

// let nombre = 'Luna';
// let edad = 25;
// let numeroDeVentas = 50;
// let saldoDisponible = 1000;

// alert('¡Bienvenida y bienvenido a nuestro sitio web!');

// mensajeDeError = '¡Error! Completa todos los campos';
// alert(mensajeDeError);

// nombre = prompt('¿Cuál es tu nombre?');
// edad = prompt('¿Cuál es tu edad?');

// if (edad >= 18) {
//     alert('¡Puedes obtener tu licencia de conducir!');
// }


// 02. CONDICIONALES Y CONCATENACIÓN
// 09. Desafío: hora de practicar

// let diaSemana = prompt('¿Qué día de la semana es hoy?');
// let numero;
// let puntuacion;
// let saldoDisponible = 1000;
// let nombre;

// if (diaSemana == 'Sabado' || diaSemana == 'Domingo') {
//     alert('¡Buen fin de semana!');
// } else {
//     alert('¡Buena semana!');
// }

// numero = prompt('Ingresa un número: ');

// if (numero >= 0) {
//     alert('El número ingresado es positivo');
// } else {
//     alert('El número ingresado es negativo');
// }

// puntuacion = prompt('Ingresa tu puntuación: ');

// if (puntuacion == 100) {
//     alert('¡Felicidades, has ganado!');
// } else {
//     alert('Intentalo nuevamente para ganar.');
// }

// alert(`Saldo en su cuenta: $${saldoDisponible}`);

// nombre = prompt('¿Cuál es tu nombre?');
// alert(`¡Hola, ${nombre}!`);


// 03. LOOPS Y TENTATIVAS
// 07. Desafío: Hora de practicar

// let contador = 1;

// while (contador <= 10) {
//     console.log(contador);
//     contador++;
// }

// contador = 10;

// while (contador >= 0) {
//     console.log(contador);
//     contador--;
// }

// numeroUsuario = prompt('Ingresa un número mayor a 0: ');
// contador = 0;
// while (contador <= numeroUsuario) {
//     console.log(contador);
//     contador++;
// }


// 04. BUENAS PRÁCTICAS EN PROGRAMACIÓN
// 09. Desafío: hora de practicar

// let nombre = 'Juan';
// let lenguaje;
// let valor1 = 5;
// let valor2 = 7;
// let resultado = valor1 + valor2;
// let edad;
// let numero;
// let contador = 1;
// let nota = 7;

// console.log(`¡Hola, ${nombre}!`);
// alert(`¡Hola, ${nombre}!`);

// lenguaje = prompt('¿Cuál es el lenguaje de programación que más te gusta?');

// console.log(`Tu lenguaje favorito es: ${lenguaje}`);
// console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

// resultado = valor1 - valor2;

// console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}`);

// edad = prompt('¿Cuál es tu edad?');
// if (edad >= 18) {
//     console.log('¡Eres mayor de edad!');
// } else {
//     console.log('¡Eres menor de edad!');
// }

// numero = prompt('Ingresa un número: ');
// if (numero > 0) {
//     console.log('El número ingresado es positivo');
// } else {
//     if (numero < 0) {
//         console.log('El número ingresado es negativo');
//     } else {
//         console.log('El número ingresado es 0');
//     }
// }

// while (contador <= 10) {
//     console.log(contador);
//     contador++;
// }

// if (nota >= 7) {
//     console.log('¡Aprobado!');
// } else {
//     console.log('¡Reprobado!');
// }

// console.log(Math.random());
// console.log(Math.floor(Math.random()*10)+1);
// console.log(Math.floor(Math.random()*1000)+1);