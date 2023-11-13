const palindromes = function (stringToBeReversed) {
  let isAPalindrome = false
  let originalString = ''
  let reversedString = ''
  for(i = 0; i < stringToBeReversed.length ; i++){
    if(stringToBeReversed[i].match(/[a-zA-Z0-9]/)){
      originalString += stringToBeReversed[i]
    }
  }
  for(i = originalString.length - 1; i >= 0; i--){
    reversedString +=originalString[i]
  }
  if(originalString.toLowerCase() == reversedString.toLowerCase()){
    isAPalindrome = true
  }
  return isAPalindrome
};

// Do not edit below this line
module.exports = palindromes;
