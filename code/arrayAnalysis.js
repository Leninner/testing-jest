// Array Analysis. Write a function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

const Analysis = (arreglo) => {
  if (
    typeof arreglo !== 'object' ||
    arreglo.some((element) => {
      return typeof element !== 'number';
    })
  ) {
    return -1;
  }

  let min = arreglo[0],
    max = arreglo[0],
    average = 0,
    suma = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] < min) {
      min = arreglo[i];
    }
    if (arreglo[i] > max) {
      max = arreglo[i];
    }
    suma += arreglo[i];
  }

  average = suma / arreglo.length;

  return {
    average: average,
    min: min,
    max: max,
    length: arreglo.length,
  };
};

export { Analysis };
