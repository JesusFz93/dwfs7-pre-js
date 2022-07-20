// DESESTRUCTURACION DE OBJETOS
let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 23,
};

let paciente = {
  nombre: "Jesus",
  apellido: "Perez",
  edad: 23,
  calle: "Doce",
  activo: true,
  numero: 45,
  carrera: "Sistemas",
  deporte: "Futbol",
};

const { nombre, apellido, activo, carrera, deporte } = paciente;

console.log(nombre, apellido, activo, carrera, deporte);
