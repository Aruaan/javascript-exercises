const convertToCelsius = function(tempInFahrenheit) {
  let tempInCelsius = ((tempInFahrenheit - 32) * (5/9)).toFixed(1);
  // Convert it back to a number to remove any unnecessary trailing zeros
  return Number(tempInCelsius);
};

const convertToFahrenheit = function(tempInCelsius) {
  let tempInFahrenheit = ((9/5) * tempInCelsius + 32).toFixed(1)

  return Number(tempInFahrenheit)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
