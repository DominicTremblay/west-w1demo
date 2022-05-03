// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// Extract the command line arguments
// filter out some of these
const args = process.argv.slice(2);
console.log('args:', args);

// Edge case: We need at least 2 arguments.
if (args.length < 2) {
  console.log(`Please enter at least 2 arguments`);
  process.exit();
}

// Loop through the numbers
// c-style for loop
// for of
// forEach
// for in

// do we need the index?

// accumulator
let total = 0;

// no index
// more readable
for (let nb of args) {
  // convert to a number => Typecasting
  const convertedNum = Number(nb);

  // Edge cases: if it's not a number => error message
  if (isNaN(convertedNum)) {
    // error
    console.log(`Error: please enter only integers`);
    process.exit();
  }

  // Edge cases: skip if it's not an integer
  if (Number.isInteger(convertedNum)) {
    total += convertedNum;
  }

  console.log(
    'convertedNum',
    convertedNum,
    'type:',
    typeof convertedNum,
    'Total:',
    total
  );
  // add the numbers
}

console.log('Total:', total);

// Check if the arguments are numbers?
