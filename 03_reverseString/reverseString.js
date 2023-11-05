const reverseString = function(stringToBeReversed) {
  let reversedString = ""
  const arrayOfLetters = []

  for(let i=0;i<stringToBeReversed.length;i++){
    arrayOfLetters[i] = stringToBeReversed[i]
  }

  for(let i=arrayOfLetters.length-1;i>=0;i--){
    reversedString += arrayOfLetters[i]
  }
  return reversedString
};

// Do not edit below this line
module.exports = reverseString;
