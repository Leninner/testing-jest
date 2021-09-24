import { caesar } from '../code/caesarCipher';

test('La frase cuando esté en minúscula debería ser así: ', () => {
    expect(caesar('leninner', 0)).toMatch('leninner');
    expect(caesar('Mathias eres el grande', 10)).toMatch('Wkdrskc*oboc*ov*qbkxno');
    expect(caesar('Pepepepepepepepepepepepepepepepepe', 5)).toMatch('Ujujujujujujujujujujujujujujujujuj');
});

test('La frase cuando esté en mayúscula, debería ser así: ', () => {
    expect(caesar('LENINNER', 0)).toMatch('LENINNER');
    expect(caesar('MATHIAS ERES EL GRANDE', 10)).toMatch('wkdrskc*oboc*ov*qbkxno'.toUpperCase());
    expect(caesar('TWELVE, THIRTY', 6)).toMatch('zckrbk2&znoxze'.toUpperCase());
});

test('Cuando se mezclen frases, la función debería ser sensitiva con mayúsculas y minúsculas: ', () => {
    expect(caesar('LeNinNer', 0)).toMatch('LeNinNer');
    expect(caesar('Mathias EL pepe', 5)).toMatch('Rfymnfx%JQ%ujuj');
});

test('Si encuentra cadenas vacías o números, retornar -1', () => {
    expect(caesar('')).toBe(-1);
    expect(caesar(456)).toBe(-1);
});

test('Si el parámetro positions es menor a 0: ', () => {
    expect(caesar('Leninner', -5)).toMatch('Gzidiizm');
    expect(caesar('AAA', -5)).toMatch('VVV');
    expect(caesar('jejejeje el pepe', -14)).toMatch('vqvqvqvq,qx,bqbq');
});

test('Tomar en cuenta para la encriptación: comas, espacios, signos de interrogación, preguntas: ', () => {
    expect(caesar('Leninner?', 2)).toMatch('NgpkppgtA');
    expect(caesar('lñaskdfjlkajflñksadf??=)/)(/()/)(', 2)).toMatch('');
});
