// *Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);




// *Function expression
const calcAge2 = function(birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2)  // 46, 46




// *Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);    // 46

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'jonas'))  // jonas retires in 19 years
console.log(yearsUntilRetirement(1980, 'bob'))    // bob retires in 8 years




// * functions calling other functions
function cutFruitPieces(fruit){
  return fruit * 4
}

function fruitProcessor(apples, oranges){
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));  // Juice with 8 piece of apple and 12 pieces of orange.




