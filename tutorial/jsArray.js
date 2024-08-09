//Write a JavaScript program to find duplicate number from an array.
function a(arr) {
  const seens = new Set();
  const dupli = new Set();

  for (const num of arr) {
    if (seens.has(num)) {
      dupli.add(num);
    } else {
      seens.add(num);
    }
  }
  return Array.from(dupli);
}
const array = [0, 0, 0, 4, 4, 4, 5, 6, 8];
const b = a(array);
console.log(b);

function findDuplicates(arr) {
  // Object to keep track of numbers we've seen
  const seenNumbers = {};
  // Array to store duplicate numbers
  const duplicates = [];

  // Loop through each number in the array
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];

    // Check if the number is already in the object
    if (seenNumbers[number]) {
      // If it is, it's a duplicate, so add it to the duplicates array
      duplicates.push(number);
    } else {
      // If it isn't, add it to the object with a value of true
      seenNumbers[number] = true;
    }
  }

  return duplicates;
}
const duplicate = [1, 2, 3, 4, 5, 6, 2, 3, 7, 8, 9, 1, 33, 33, 44, 44];
// Call the function and print the result
console.log(findDuplicates(duplicate)); // Output: [ 2, 3, 1, 33, 44 ]

const a = () => {
  return console.log("hai");
};
a();

var x = 1;
a();
b();
function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}
