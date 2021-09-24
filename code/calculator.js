//A calculator object that contains the basic operations: add, subtract, divide, and multiply.

/*
usar Math. floor() para obtener la parte entera del numero y restársela al numero y si es 0 pues entonces el número es entero y sino pues obviamente no.
 */

const calculator = (numOne, numTwo, operation) => {
  let result;
  switch (operation) {
    case 's':
      result = numOne + numTwo;
      break;
    case 'r':
      result = numOne - numTwo;
      break;
    case 'm':
      if (numOne - Math.floor(numOne) === 0 && numTwo - Math.floor(numTwo) === 0) {
        result = numOne * numTwo;
      } else {
        result = (numOne * numTwo).toFixed(2);
      }
      break;
    case 'd':
      result = (numOne / numTwo).toFixed(2);
      break;
  }

  return result;
};

export { calculator };
