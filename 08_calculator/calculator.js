const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(a) {
  let sum = 0
	for(let i = 0; i < a.length; i++){
    sum += a[i]
  }
  return sum
};

const multiply = function(a) { 
  let product = a[0]
  for(i = 1; i < a.length; i ++){
    product *= a[i]
  }
  return product
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(a) {
	let total = 1
  for(i = 1; i <= a; i++){
    total *= i
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
