import { Analysis } from '../code/arrayAnalysis';

test('Los datos deben estar correctos: ', () => {
  expect(Analysis([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual({ average: 5, min: 1, max: 9, length: 9 });
  expect(Analysis([45, 6, 5, 2, 4, 5, 1, 54, 651, 56, 456, 453, 21])).toStrictEqual({
    average: 135.30769230769232,
    min: 1,
    max: 651,
    length: 13,
  });
});

test('La función debe permitir solo el ingreso de arreglos, caso contrario, retornar -1', () => {
  expect(Analysis(12)).toBe(-1);
  expect(Analysis('Leninner')).toBe(-1);
  expect(Analysis(false)).toBe(-1);
});

test('Los elementos de un arreglo solo deben contener números: ', () => {
  expect(Analysis([1, 1, 2, 2, 45, 'LenIN'])).toBe(-1);
  expect(Analysis([true, 'Carlos', null, undefined, 456]));
});
