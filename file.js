// let name = "karthi"
// console.log(name);

// let person = {
//     name : "karthi",
//     age : 22,
//     isAlive: true
// }
// console.log(person.name)


// let x = 100 + 50;

// // document.getElementById("demo").innerHTML = x;

// // function myFunction(){
// //     let name = "karthi";
// //     let msg = "hai" + name + "welcome to page";
// //     console.log(msg)
// // }

// // myFunction()

// // function school(name){
// //     let a = "welcome";
// //     console.log(a)

// // }
// // school("hai")

// //  function sub(number1 ,number2){
// //     console.log(number1 + number2)
// //  }
// //  sub(10,20)

// //  let a = 5;
// //  console.log(a == 5);


// const son = {
//      firstName : "karthi",
//      lastName :"keyan",
//      age : 22,
//      native : "rasipuram"
//   };
// console.log(son.age)

// // Object creation
// let student = {
// 	name: "Martin",
// 	class: "12th",
// 	section: "A",

// 	studentDetails: function () {
// 		return this.name + " " + this.class
// 			+ " " + this.section + " ";
// 	}
// };

// Display object data
// console.log( student.studentDetails()); 


// function btnClicked(){
// 	console.log("butten clicked so its calles events");
// }

// let name= "karthi";
// let age = 22;
// let city = "rasipuram";

// output +=  <hr>
// <table border ="1"> 
// <tr><th>name</th><td>${name}</td></tr></table></hr>;
// document.body.innerHTML=output;


// const a = [1,2,3,4,5,6,7,8,9,10];
// console.log(a);
// let c=a.splice(2,2);
// //console.log(c);
// let x=a.splice(2,2,60,70);
// console.log(x);
// console.log(a);


// let a = [2,4,6,7];
// let result =a.some((value)=>{
//     return value%2==0;

// });
// console.log(result);

// function checkEven(value){
//     return value%2==0; // odd or even find boolen.
// }
// result = a.some(checkEven);
// console.log(result);

// function add(a,b){
//     console.log(a/b)
// }
// add(30,50);

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a,b){return a-b});
// console.log(points);

// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
//   console.log(over18);
// }
// myFunction()
// console.log(over18);
// console.log(numbers);
 

 
//  function total(...args){
//     let total =0;
//     for(let i=0;i<args.length;i++){
//         total+=args[i];
//     }
//     return total;
//  }
//  console.log(total(20,30));


 

// let age = prompt("enter  a age = ");
// if(age!= null && age >=18){
//     console.log("yore eligible vote")
// }

 
// /*
// avg=87;
// 90-100 a grade
// 80-89 b grade
// 70-79 c grade
// 50 d grade
// */ 

// let mark = prompt("enter your mark =");
// if (mark>=90 && mark<=100)
// {
//     console.log(mark,"your mark A grade mark")
// }
// else if (mark<=89 && mark>=70)
// {
//     console.log(mark,"your mark b grade ")
// }
// else if (mark<=50 && mark>=60)
// {
//     console.log(mark,"c grade")

// }
// else{
//     console.log("fail")
// } 


// const cars = ["BMW", "Volvo", "Saab", "Ford","kjiu","uhb"];

// let i = 1;
// let len = cars.length;
// let text = "";

// for (i < len;) {
//   text += cars[i] ;
//   i++;
// }
// console.log(text);

// 6


// for (let i=1;i<=10;i++)
// {
//     if(i%2==1){
//         continue;
//     }
//     console.log(i);
// }

// let user =[
//     ["ram","karthi","room"],
//     ["kumar","tiya","sundar"],
//     ["rajesh","sara,","rahul"],
// ];
// for (let x of user)
// {
//     inner:
//     for (let y of x)
//     {
//         if (y.startsWith("r"))
//         {
//             console.log(y)
//             break inner;
//         }
    
//     }
// }

// const letters = new Set(["a","b","c"]);
// console.log(letters.size);

// const letter =  Set(["a","b","c"]);
// // console.log(letter.length);
 
// let user = {
//      name : "karthi",
//      age : 22,
//      place :"rasupuram",
//      education : "bsc"
// //  };
// // user.eyeColor ="blue";
// // console.log(user); //object variableoda declare panlam 
// // const x = user; // var ori object
// // x.education = "mca";
// // console.log(user)
// // console.log(user.eyeColor);
// // //console.log(typeof x)

 
// // const user= {
// //   name: "karthi",
// //   age: 20,//Using Built-In Methods
// //   city:"rasipuram",
// // };
// // user.detail = function(){
// //     return (this.name + " "+this.age+"   "+this.city).toUpperCase();
// // }
// // console.log(user.detail());


// // const person = {
// //     name: "vijay",
// //     age: 25,
// //     city: "salem" //Displaying the Object in a Loop
// // };
  
// let txt = "";
// for (let x in person) { 
// txt += person[x] + " ";
// };
// console.log(txt);

// const userDetail = {
//     fname : "karthi",
//     lname : "keyan",
//     native :"rasipuram",//JavaScript Setter (The set Keyword)
//     course : " ",
//     set cou(value){
//         this.course = value;
//     }
// };
// userDetail.cou = "python" ;
// console.log(userDetail);
// console.log(userDetail.course);



//  // constructor program 
//  function Detail(name, course, age) {
//     this.name = name;
//     this.course = course;
//     this.age = age;
    
// };
// //obj create constructor
// const  obj = new Detail("karthike","java script ",28);
// obj.education="msc";// add new property
// console.log(obj.name);
// console.log(obj.course);
// console.log(obj.education);

// //----------------------

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;//Adding Properties and Methods to Objects
//     this.age = age;//Prototype Inheritance
//     this.eyeColor = eye;
//   }
  
// Person.prototype.nationality = "English";
  
// const myFather = new Person("John", "Doe", 50, "blue");
// console.log(myFather.nationality);

// // Create a String
// const name = "W3Schools";
// // List all Elements
// let text = "";//object Iterating Over a String
// for (const x of name) {
//   text += x + " ";
// }
// console.log(text);


// let hello = "";

// hello = function() {
// //hello = () => { // arrow function =>
//   return "Hello 88World!";
// }
// console.log(hello());

// let age = prompt("enter  a age = ");
//  if(age!= null && age >=18){
//      console.log("yore eligible vote")
// }

// // program to check if a number is prime or not

// // take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }


// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }



// // program to check if the string is palindrome or not

// function checkPalindrome(string) {

//   // find the length of a string
//   const len = string.length;

//   // loop through half of the string
//   for (let i = 0; i < len / 2; i++) {

//       // check if first and last string are same
//       if (string[i] !== string[len - 1 - i]) {
//           return 'It is not a palindrome';
//       }
//   }
//   return 'It is a palindrome';
// }

// // take input
// const string = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(string);

// console.log(value);

// const number = prompt("enter your number positive or negative");
// if (number >0){
//   console.log("the number is positive ");
  
// }
// else if (number ==0){
//   console.log("the number is zero");
// }
// else{
//   console.log("the num is negative");
