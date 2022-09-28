// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    const letterIndex = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if(!shift || shift === 0 || shift < -25 || shift > 25){
      return false;
    }
    if(encode){
      const word = input.toLowerCase().split('');
      const wordEncoded = word.map((letter) => {
        if(letterIndex.includes(letter)){
          const currentIndex = letterIndex.findIndex((char) => char === letter);
          let newIndex = currentIndex + shift;
          if(newIndex < 0 || newIndex > 25){
            newIndex > 25 ? newIndex = newIndex - 26 : newIndex += 26;
          }
          return letterIndex[newIndex];
        }
        return letter;
      });
      return wordEncoded.join('');
    } else {
      const word = input.toLowerCase().split("");
      const wordEncoded = word.map((letter) => {
        if (letterIndex.includes(letter)) {
          const currentIndex = letterIndex.findIndex(
            (char) => char === letter
          );
          let newIndex = currentIndex - shift;
          if (newIndex < 0 || newIndex > 25) {
            newIndex > 25 ? (newIndex = newIndex - 26) : (newIndex += 26);
          }
          return letterIndex[newIndex];
        }
        return letter;
      });
      return wordEncoded.join("");
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
