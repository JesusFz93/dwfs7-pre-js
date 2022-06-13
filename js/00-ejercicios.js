function pares(numero) {
  for (let i = 1; i <= numero * 2; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

function permiso(nombre, edad) {
  if (edad < 18) {
    console.log(`${nombre}, no puedes solicitar el permiso`);
  } else {
    console.log(`${nombre}, puedes solicitar el permiso`);
  }
}

function promedio(p1, p2, p3, p4, p5) {
  let promedio = (p1 + p2 + p3 + p4 + p5) / 5;
  console.log(promedio);
}

function promedioMod(p1, p2, p3, p4, p5) {
  let promedio = (p1 + p2 + p3 + p4 + p5) / 5;
  if (promedio <= 30) {
    console.log(`Muy deficiente`);
  } else if (promedio <= 50) {
    console.log(`Insuficiente`);
  } else if (promedio <= 60) {
    console.log(`Suficiente`);
  } else if (promedio <= 70) {
    console.log(`Bien`);
  } else if (promedio <= 90) {
    console.log(`Notable`);
  } else if (promedio <= 100) {
    console.log(`Sobresaliente`);
  }
  console.log(promedio);
}

// ARREGLOS

function promedioArr(arr) {
  let promedio =
    arr.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual;
    }) / arr.length;

  if (promedio > 70) {
    console.log(`Aprobado: ` + promedio);
  } else {
    console.log(`No Aprobado: ` + promedio);
  }
}

function imprimeArray(arr) {
  arr.forEach((elemento) => {
    console.log(elemento);
  });
}

const nombres = [
  "alberto",
  "paty",
  "Jose",
  "daniel",
  "luis",
  "antonio",
  "Luis",
  "paty",
  "luis",
];

// mayusculas(nombres);

function mayusculas(nombres) {
  nombres.forEach((elemento) => {
    console.log(elemento.toUpperCase());
  });
}

// largo(nombres);

function largo(nombres) {
  let newArray = nombres.map((elemento) => {
    return elemento.length;
  });

  console.log(newArray);
}

// filtrar(nombres);

function filtrar(nombres) {
  let newArray = nombres.filter((elemento) => {
    return elemento === "luis";
  });

  console.log(newArray);
}

function aprobadas(calificaciones) {
  let newArray = calificaciones.filter((elemento) => {
    return elemento >= 70;
  });

  console.log(newArray);
}

function impares(numero1, numero2) {
  for (let i = numero1; i <= numero2; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}

function tabla(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + numero * i);
  }
}

function ordenar(numeros) {
  let newArray = numeros.sort((a, b) => {
    return a - b;
  });

  console.log(newArray);
}

function contar(nacionalidades) {
  let contados = [];
  for (let nacionalidad of nacionalidades) {
    let cuenta = nacionalidades.filter((value) => value === nacionalidad);
    if (!contados.includes(nacionalidad)) {
      contados.push(nacionalidad);
      console.log(
        nacionalidad.charAt(0).toUpperCase() +
          nacionalidad.slice(1) +
          ": " +
          cuenta.length
      );
    }
  }
}

function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
