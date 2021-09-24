import { calculator } from '../code/calculator';

test('Suma: ', () => {
  expect(calculator(12, 14, 's')).toBe(26);
  expect(calculator(45644654, 56465465, 's')).toBe(102110119);
});

test('Resta: ', () => {
  expect(calculator(456, 452, 'r')).toBe(4);
  expect(calculator(123, 123, 'r')).toBe(0);
});

test('Multiply: ', () => {
  expect(calculator(12, 12, 'm')).toBe(144);
  expect(calculator(10, 450, 'm')).toBe(4500);
  expect(calculator(456, 1, 'm')).toBe(456);
  expect(calculator(45.563, 456.123, 'm')).toBe((45.563 * 456.123).toFixed(2));
});

test('División: ', () => {
  expect(calculator(456, 45, 'd')).toBe((456 / 45).toFixed(2));
  expect(calculator(789454, 654564, 'd')).toBe((789454 / 654564).toFixed(2));
});

test('No se puede hacer cosas con letras', () => {
  expect(calculator('45', '12', 's'));
});
