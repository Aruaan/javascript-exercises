const removeFromArray = function(startingArray, ...args) {
  if (!Array.isArray(startingArray)) {
    throw new TypeError('Expected an array as argument');
  }
  const filteredArray = startingArray.filter(element => !args.includes(element));
      return filteredArray
}
// Do not edit below this line
module.exports = removeFromArray;
