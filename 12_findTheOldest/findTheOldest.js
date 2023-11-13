const findTheOldest = function(array) {
  let maxAge = 0;
  let currentOldest = null;
  const currentYear = new Date().getFullYear();

  for(let i = 0; i < array.length; i++) {
    let deathYear = array[i].yearOfDeath || currentYear; // Use currentYear if yearOfDeath is not provided
    let age = deathYear - array[i].yearOfBirth;

    if(age > maxAge) {
      maxAge = age;
      currentOldest = array[i];
    }
  }

  return currentOldest;
};



// Do not edit beloaw this line
module.exports = findTheOldest;
