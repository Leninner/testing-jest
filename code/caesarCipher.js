/**
Don’t forget to test wrapping from z to a.
Don’t forget to test keeping the same case.
Don’t forget to test punctuation!
For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesar() function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.
 */

/**
 * 65 - 90 (A - Z)
 * 97 - 122 (a - z)
 * x + k
 * x - k
 * "ABC".charCodeAt(0) // return 65
 */

const caesar = (string, positions) => {
    if (string === '' || typeof string === 'number') {
        return -1;
    }

    if (positions >= 0) {
        let arregloOfLetters = string.split('').map((element) => {
            return element.charCodeAt() + positions;
        });

        return arregloOfLetters
            .map((element) => {
                if (
                    element > 90 &&
                    String.fromCharCode(element - positions).toUpperCase() === String.fromCharCode(element - positions)
                ) {
                    return 65 + (element - 91);
                } else if (
                    element > 122 &&
                    String.fromCharCode(element - positions).toLowerCase() === String.fromCharCode(element - positions)
                ) {
                    return 97 + (element - 123);
                } else {
                    return element;
                }
            })
            .map((element) => {
                return String.fromCharCode(element);
            })
            .join('');
    } else {
        let arregloOfLetters = string.split('').map((element) => {
            return element.charCodeAt() + positions;
        });

        return arregloOfLetters
            .map((element) => {
                if (
                    element < 65 &&
                    String.fromCharCode(element - positions).toUpperCase() === String.fromCharCode(element - positions)
                ) {
                    return 90 - (65 - element - 1);
                } else if (
                    element < 97 &&
                    String.fromCharCode(element - positions).toLowerCase() === String.fromCharCode(element - positions)
                ) {
                    return 122 - (97 - element - 1);
                } else {
                    return element;
                }
            })
            .map((element) => {
                return String.fromCharCode(element);
            })
            .join('');
    }
};

export { caesar };
