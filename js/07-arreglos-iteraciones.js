let arreglo = [
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 23,
  },
  {
    nombre: "Pedro",
    apellido: "Perez",
    edad: 18,
  },
  {
    nombre: "Victoria",
    apellido: "Salinas",
    edad: 34,
  },
];

let calificaciones = [1, 2, 3];

for (let i = 0; i < arreglo.length; i++) {
  //   console.log(arreglo[i]);
}

for (let contacto of arreglo) {
  //   console.log(contacto);
}

arreglo.forEach((contacto) => {
  //   console.log(contacto);
});

let nuevoArregloOrdenado = arreglo.sort((a, b) => {
  if (a.nombre > b.nombre) {
    return 1;
  } else if (a.nombre < b.nombre) {
    return -1;
  } else {
    return 0;
  }
});

// console.log(nuevoArregloOrdenado);

let nuevoArregloFiltrado = arreglo.filter((contacto) => {
  if (contacto.edad >= 30) {
    return contacto;
  }
});

// console.log(nuevoArregloFiltrado);

let nuevoArregloAlterado = arreglo.map((contacto) => {
  contacto.edad = contacto.edad + 1;
  return contacto;
});

// console.log(nuevoArregloAlterado);

let sumatoria = calificaciones.reduce((valorAnterior, valorActual) => {
  return valorAnterior + valorActual;
});

// console.log(sumatoria);
