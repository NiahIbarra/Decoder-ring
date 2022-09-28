// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //setup
    const regAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const substituteAlphabet = [];
    const inputArray = input.toLowerCase().split("");
    //error handling
    if (!alphabet || alphabet.length !== 26) return false;
    let notUnique = false;
    alphabet
      .split("")
      .forEach((char) =>
        substituteAlphabet.includes(char)
          ? (notUnique = true)
          : substituteAlphabet.push(char)
      );
    if (notUnique === true) return false;
    //encode solution
    if (encode) {
      const encodedInputArray = inputArray.map((char) => {
        if (regAlphabet.includes(char)) {
          const charIndex = regAlphabet.findIndex((char2) => char === char2);
          return substituteAlphabet[charIndex];
        }
        return char;
      });
      return encodedInputArray.join("");
    }
    //decode solution
    const decodedInputArray = inputArray.map((char) => {
      if (substituteAlphabet.includes(char)) {
        const charIndex = substituteAlphabet.findIndex((char2) => char === char2);
        return regAlphabet[charIndex];
      }
      return char;
    });
    return decodedInputArray.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
