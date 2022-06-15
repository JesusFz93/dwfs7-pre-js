let persona = {
  nombre: "Juan",
  apellido: "Fernandez",
  edad: 17,
  activo: true,
  gustos: ["nadar", "futbol", "musica"],
};

// console.log(persona["nombre"]);
// console.log(persona.nombre + " " + persona.apellido);
console.log(`${persona.nombre} ${persona.apellido}`);

let { nombre: name, apellido, edad: age, gustos } = persona;

// console.log(gustos[1]);

// let nombre = persona.nombre;
// let apellido = persona.apellido;
// let edad = persona.edad;

console.log(gustos);

console.log(`${name} ${apellido} tiene ${age} de edad`);
