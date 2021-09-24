import { reverseString } from '../code/reverseString';

test('La función debe devolver un string girado', () => {
  expect(reverseString('hola')).toMatch('aloh');
  expect(reverseString('?éuq o ,soibmac')).toMatch('cambios, o qué?');
  expect(reverseString('!"#$%&/()=?¡¿0987654321')).toMatch('1234567890¿¡?=)(/&%$#"!');
});

test('Si recibe un string vacío, entonces retornar -1', () => {
  expect(reverseString('')).toBe(-1);
});
