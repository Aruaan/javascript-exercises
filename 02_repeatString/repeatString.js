const repeatString = function(theStringToBeRepeated, numberOfRepetitions) {
  if(numberOfRepetitions < 0){
    return "ERROR"
  }
  let startingString = ""
  for(let i=1; i<=numberOfRepetitions; i++){
    startingString += theStringToBeRepeated
  }
  return startingString
};

// Do not edit below this line
module.exports = repeatString;
