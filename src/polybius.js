// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const polybiusSquare = {
      1: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" },
      2: { 1: "f", 2: "g", 3: "h", 4: "i/j", 5: "k" },
      3: { 1: "l", 2: "m", 3: "n", 4: "o", 5: "p" },
      4: { 1: "q", 2: "r", 3: "s", 4: "t", 5: "u" },
      5: { 1: "v", 2: "w", 3: "x", 4: "y", 5: "z" },
    };
    const inputArray = input.toLowerCase().split("");
    const inputNoSpaces = inputArray.filter((num) => num != " ");
    if (encode) {
      const encodedArray = [];
      for (let char of inputArray) {
        if (char === " ") encodedArray.push(" ");
        for (let c = 1; c < 6; c++) {
          for (let i = 1; i < 6; i++) {
            if (polybiusSquare[c][i].includes(char)) {
              encodedArray.push(i);
              encodedArray.push(c);
            }
          }
        }
      }
      return encodedArray.join("");
    } else {
      let decodedString = "";
      if (inputNoSpaces.length % 2 != 0) return false;
      for (let index = 0; index < inputArray.length; index += 2) {
        if (inputArray[index] === " ") {
          decodedString += " ";
          index--;
        } else {
          decodedString += polybiusSquare[inputArray[index + 1]][inputArray[index]];
        }
      }
      return decodedString;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
