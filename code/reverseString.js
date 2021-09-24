/*reverseString(string) takes a string and returns it reversed.*/

const reverseString = (string) => {
  return string !== '' ? string.split('').reverse().join('') : -1;
};

export { reverseString };
