// function a(reverse) {
//   return reverse.split("").reverse("").join("");
// }
// console.log("karthi");
// console.log(a("karthi"));

// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }
// console.log(isPalindrome("jj"));

// async function fetchUserData() {
//   try {
//     const response = await fetch("https://api.example.com/users"); // Fetch data from API
//     if (!response.ok) {
//       throw new Error("Failed to fetch user data");
//     }
//     const userData = await response.json(); // Parse response as JSON
//     return userData; // Return the user data
//   } catch (error) {
//     console.error("Error fetching user data:", error.message);
//     return null; // Return null if an error occurs
//   }
// }

// // Example usage:
// async function getUserData() {
//   const userData = await fetchUserData(); // Call the fetchUserData function
//   if (userData) {
//     console.log("User data:", userData);
//   } else {
//     console.log("Failed to fetch user data");
//   }
// }

// getUserData(); // Call the getUserData function to fetch user data

// async function code() {
//   return new Promise((resolve, reject) => {
//     setInterval(() => {
//       resolve("ok succes");
//     }, 2000);
//   });
// }
// code().then((result) => {
//   console.log(result);
// });


// const myPromise = new Promise((resolve,reject)=>{
//     const succes = true;

//     if(succes){
//         resolve("ok succes")
//     }else{
//         reject('rejected ')
//     }
// })
// myPromise.then((result)=>{
//     console.log('succes',result)
// })
// .catch((error)=>{
//     console.log('error',error)
// })


// Constructor function for creating Person objects
// function Person(name, age) {
//   // Properties
//   this.name = name;
//   this.age = age;

//   // Method
//   this.sayHello = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   };
// }

// // Creating instances of the Person object using the constructor
// const person1 = new Person('John', 30);
// const person2 = new Person('Alice', 25);

// // Calling the method on each instance
// person1.sayHello(); // Output: Hello, my name is John and I am 30 years old.
// person2.sayHello(); // Output: Hello, my name is Alice and I am 25 years old.
// console.log(x)
// var x= 5;

// console.log(y)
// const y =7;

// console.log(a)
// let a = 10;

let i=1;
while(1<=10){
  console.log(i)
  i++;
}