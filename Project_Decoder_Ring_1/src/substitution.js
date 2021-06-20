
const substitutionModule = (function () {
    function substitution(input, alphabet, encode = true) {
  
    
    
      if (!alphabet || alphabet.length !== 26 ||
        alphabet.toLowerCase().split("").sort().join("").match(/(.)(.)\1+/g)) {
        return false;
      }
  
      const alpha = 'abcdefghijklmnopqrstuvwxyz';
  
      return encode 
      ?input.toLowerCase().replace(/[a-z]/g, (letter) => alphabet[alpha.indexOf(letter)])
      :input.toLowerCase().replace(/[a-z-!-\/:-@[-`{-~]/g,
        (letter) => alpha[alphabet.indexOf(letter)]);
    }
  
  
    return {
      substitution,
    };
  })();
  
  module.exports = { substitution: substitutionModule.substitution };