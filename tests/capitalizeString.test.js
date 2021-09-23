import { capitalize } from '../code/capitalizeString';

test('La primera letra debería estar escrita en mayúscula', () => {
  expect(capitalize('leninner')).toMatch('Leninner');
  expect(capitalize('pepe')).toMatch('Pepe');
  expect(capitalize('jajaja, el pepe')).toMatch('Jajaja, el pepe');
  expect(capitalize('haz las cosas bien')).toBe('Haz las cosas bien');
  expect(capitalize('sdfgdgdsgkjhdskjghskldjg')).toBe('Sdfgdgdsgkjhdskjghskldjg');
});

test('No se deben ingresar números', () => {
  expect(capitalize(123)).toBeFalsy();
  expect(capitalize(15162)).toBeFalsy();
  expect(capitalize(7894.54)).toBeFalsy();
});

test('Si se ingresa una cadena vacía, entonces retornar falso', () => {
  expect(capitalize('')).toBeFalsy();
});

test('Si se tiene números como arreglos, retornar falso', () => {
  expect(capitalize('4561')).toBeFalsy();
  expect(capitalize('4561.7894')).toBeFalsy();
  expect(capitalize('456345345345341')).toBeFalsy();
});
