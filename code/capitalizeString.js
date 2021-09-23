/**
 *
 * @param {*} string
 * @returns  the first character capitalized.
 */

const capitalize = (string) => {
  if (string === '') {
    return false;
  }

  if (typeof string === 'number') {
    return false;
  }

  if (string.match(/[0-9]/)) {
    return false;
  }

  return string[0].toUpperCase() + string.slice(1);
};

export { capitalize };
