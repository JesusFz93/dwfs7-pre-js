let arreglo = [
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 23,
  },
  {
    nombre: "Pedro",
    apellido: "Perez",
    edad: 24,
  },
  {
    nombre: "Victoria",
    apellido: "Salinas",
    edad: 34,
  },
];

function mostrarArreglo() {
  console.log(arreglo);
}

function crearElemento(name, lastName, age) {
  let nuevoElemento = {
    nombre: name,
    apellido: lastName,
    edad: age,
  };

  arreglo.push(nuevoElemento);
}

function editarElemento(name, apellido, edad) {
  let index = arreglo.findIndex((elemento) => elemento.nombre === name);

  arreglo[index].nombre = name;
  arreglo[index].apellido = apellido;
  arreglo[index].edad = edad;
}

function eliminarElemento(nombre) {
  let index = arreglo.findIndex((elemento) => elemento.nombre === nombre);
  arreglo.splice(index, 1);
}
