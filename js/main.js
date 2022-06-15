//FUNCIONES
function sumatoria(numero1, numero2) {
  //   console.log(numero1 + numero2);
}

let numero1 = 1;
let numero2 = 6;

sumatoria(numero1, numero2);

sumatoria(56, 32);

let variable1 = 3;
let variable2 = 4;
let variable3 = "Juan";
let variable4 = false;

let numeros = [2, 8, 7, 6, 0, 9];

// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

for (let i = 0; i < numeros.length; i++) {
  //   console.log(numeros[i]);
}

for (let numero of numeros) {
  //   console.log(numero);
}

numeros.forEach(function iterar(numero) {
  //   console.log(numero);
});

let nuevo_arreglo = numeros.map(function multiplicar(numero) {
  return numero * 10;
});

// console.log(numeros);
// console.log(nuevo_arreglo);

// numeros.sort(function ordenar(valor_anterior, valor_actual) {
//   if (valor_anterior > valor_actual) {
//     return 1;
//   } else if (valor_anterior < valor_actual) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

// console.log(numeros);

let numeros_filtrados = numeros.filter(function filtrar(numero) {
  if (numero < 2) {
    return numero;
  }
});

// console.log(numeros_filtrados);

// console.log(numeros);

let suma = numeros.reduce(function sumatoria(acumulado, valorActual) {
  return acumulado + valorActual;
});

// console.log(suma);

console.log(numeros);

numeros.push(8);
console.log(numeros);

numeros.pop();
console.log(numeros);

numeros.unshift(67);
console.log(numeros);

numeros.shift();
console.log(numeros);

// Eliminar a partir del indice 3, 1 elemento
numeros.splice(3, 1);
console.log(numeros);

// Agrega a partir del indice 1, 1 elemento y mueveme los demas a la derecha
numeros.splice(1, 0, 78);
console.log(numeros);

// Reemplazame el numero del indice 1, un elemento por el 90
numeros.splice(1, 1, 90);
console.log(numeros);
