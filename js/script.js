// https://docs.google.com/presentation/d/1Vkg4sT6S5IWw2xknQnZ9Iv8H_xe-dMNY/edit#slide=id.g115980d9f22_0_146
// https://docs.google.com/presentation/d/1V1vprFAQSvQgQ0RFRY-dfmjx6Tm_7lGW/edit#slide=id.p1

// funcion para imprimir los primeros numeros pares
const pares = (numero) => {
  for (let i = 1; i <= numero; i++) {
    if (i % 2 == 0) {
      //   console.log(i);
    }
  }
};

pares(6);

// ARREGLOS
let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arreglo);
// console.log(arreglo[0]);

// MODIFICAR ARREGLOS
// arreglo.push(11);
// console.log(arreglo);

// arreglo.pop();
// console.log(arreglo);

// arreglo.unshift(0);
// console.log(arreglo);

// arreglo.splice(0, 1);
// console.log(arreglo);

// arreglo.splice(0, 1);
// console.log(arreglo);

// ITERACIONES

for (let i = 0; i < arreglo.length; i++) {
  //   console.log(arreglo[i]);
}

for (let element of arreglo) {
  //   console.log(element);
}

arreglo.forEach((element) => {
  //   console.log(element);
});

arreglo.sort((primero, segundo) => {
  return primero - segundo;
});

console.log(arreglo);
