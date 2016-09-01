// Functions that can take other functions as arguments are called higher-order functions.
//
// One of the easiest example for higher order functions:

const numbers = [2, 4, 1, 5, 4];

function isBiggerThanTwo(num) {
  return num > 2;
}

numbers.filter(isBiggerThanTwo);

// In the example above we pass in a function to the filter function.
// This way we can define the filtering logic.
//
// This is how callbacks were born: if you pass a function to another function
// as a parameter, you can call it within the function when you are finished
// with your job. No need to return values, only calling another
// function with the values.
