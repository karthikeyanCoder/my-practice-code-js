// try{
//     console("kjhiuj");
// }
// catch (err){
//     console.log(err);
//}

// function geekFunc() {
//     let a = 10;
//     try {
//         console.log("Value of variable a is : " + a);
//     }
//     catch (e) {
//         console.log("Eor: " + e.description);
//     }
//     finally{
//         console.log("finaly bolck");
//     }
// }
// geekFunc();

// function myFunction(){
//     const y = 10;
//     try{
//         console.loe("value  is local variable:",y);//error
//     }
//     catch(err){
//         console.log("error: ", err.message);//
//     }
//     finally{
//         console.log("kjbd");
//     }
// }
// myFunction();

// var is_array = function(input) {
//     if (toString.call(input) === "[object Array]")
//       return true;
//     return false;
//       };
//   console.log(is_array('w3resource'));
//   console.log(is_array([1, 2, 4, 0]));

// var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, -19,1];
// x =  arr1.sort();
// console.log(x);

// arr1.sort(function(a,b){
//   return a-b
// });
// console.log(arr1.join(","));

// let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// console.log(a);
// for (let i in a){
//     console.log("rows:",i);
//     for (let j in i[a]){
//         console.log(" ",a[i][j]);

//     }
// }

// function validate(number){
//     if (number.isInteger(number)){
//         throw new error("input is not a integer:");
//     }
// }

// try{
//     validate(22);

//     validate(2.3);

// }

// catch(err){
//     console.log(err.message);
// }
// finally{
//     console.log("ok")
// }

// for (let i = 0; i < 5; i++){

// }

// //const number = prompt("Enter your number: ");

// // if (number > 0) {
// //     console.log(" positive");
// // }

// // else if (number == 0) {
// //   console.log("numb  0");
// // }

// // else {
// //     console.log(" negative");
// // }

// // for (let i = 0;i<=10;i++){

// //     if (i == 5){
// //         continue
// //     }
// //     console.log(i);
// // }
// // //console.log(i);

// class Book{
//     constructor(title,author,year){
//         this.name = name;
//         this.author = author;
//         this.year = year;

//     }
//     display(){
//         console.log(`"title:"+${this.name}`);
//         console.log(`author:${this.author}`);
//         console.log(`year: ${this.year}`);
//     }
// }
// class myBook extends Book{
//     constructor(price,name,author,year){
//         super(name,author,year);
//         this.price = price;
//     }
//     display(){
//         console.log(`price: ${this.price}`);
//     }
// }

// // const obj = new myBook ("karthi","keyanauthor",2023);
// // obj.display();

// // Callback Function Example
// function greet(name, myFunction) {
//     console.log('Hello world');

//     // callback function
//     // executed only after the greet() is executed
//     myFunction(name);
// }

// // callback function
// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function after 2 seconds
// setTimeout(greet, 3000, 'John', sayName);

// class person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
// const obj = new person("karthi",44);
// console.log(obj);

// let i = 0;
// while (i<=10){
//    connsole.log(i);
//     i++;
// }

// const table = 1;limit = 10; i=2;
// do{
//     console.log(table + "x" +i+ +"=" +(table*i));
//     i++;
// }while(i<=limit);

// const num = 5;
// for(i = 1;i<=num;i++){
//     console.log(i,"hai",num)
// }

// const number = prompt("enter num:");

// for (i = 1;i<=10;i++){ //create table

//     const result = number * i; //i multiplay pandrom

//     console.log(`${number} * ${i} = ${result}`) //result display

// }

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

// fruits.set("apples", 200);

// console.log(fruits);

// class person{

//     static a = "55";
//    constructor(name,age){
//      this.name = name;
//      this.age = age;
//  }

//      con(){
//         return console.log(`${this.name}"welcome"`);
//         //this.name = "welcome;"
//      }

//     }

// class user extends person{
//     constructor(name,age){
//         super(name,age)
//     }

//     msg(){
//         console.log(`hai ${this.name} your age ${this.age}`)
//         //console
//     }
// // }

// // const obj = new person("karthi",22);
// // const obj2 = new user("vinoth",44);
// // console.log(obj.name);
// // console.log(person.a);
// // obj2.msg();
// // obj.con();
// // console.log(obj.name);
// class Person {
//     constructor(firstName, lastName) {
//       this._firstName = firstName; // Using an underscore convention to indicate it's a private property
//       this._lastName = lastName;
//     }

//     // Getter method for firstName
//     get firstName() {
//       return this._firstName;
//     }

//     // Setter method for firstName
//     set firstName(newFirstName) {
//       if (typeof newFirstName === 'string') {
//         this._firstName = newFirstName;
//       } else {
//         console.error('First name must be a string.');
//       }
//     }

//     // Getter method for lastName
//     get lastName() {
//       return this._lastName;
//     }

// // Setter method for lastName
// set lastName(newLastName) {
//   if (typeof newLastName === 'string') {
//     this._lastName = newLastName;
//     //   } else {
//     //     console.error('Last name must be a string.');
//     //   }
//     // }

//     // Custom method to get the full name
//     getFullName() {
//       return `${this._firstName} ${this._lastName}`;
//     }
//   }

//   // Create an instance of the Person class
//   const person = new Person('John', 'Doe');

//   // Access properties using getters
//   console.log(person.firstName); // Output: 'John'
//   console.log(person.lastName);  // Output: 'Doe'

//   // Use setters to update properties
//   person.firstName = 'Alice';
//   person.lastName = 'Smith';

//   // Access properties again to see changes
//   console.log(person.firstName); // Output: 'Alice'
//   console.log(person.lastName);  // Output: 'Smith'

//   // Custom method to get the full name
//   console.log(person.getFullName()); // Output: 'Alice Smith'

// // Base class
// class Person {
//     constructor(firstName, lastName) {
//       this._firstName = firstName;
//       this._lastName = lastName;
//     }

//     // Getter method for full name
//     get fullName() {
//       return `${this._firstName} ${this._lastName}`;
//     }
//   }

//   // Derived class (inherits from Person)
//   class Employee extends Person {
//     constructor(firstName, lastName, jobTitle) {
//       super(firstName, lastName); // Call the constructor of the base class
//       this._jobTitle = jobTitle;
//     }

//     // Getter method for job title
//     get jobTitle() {
//       return this._jobTitle;
//     }

//     // Override the fullName getter from the base class
//     get fullName() {
//       return `${super.fullName}, ${this._jobTitle}`;
//     }
//   }

//   // Create an instance of the Employee class
//   const employee = new Employee('Alice', 'Smith', 'Manager');

//   // Access properties using getters
//   console.log(employee.fullName); // Output: 'Alice Smith, Manager'
//   console.log(employee.jobTitle);  // Output: 'Manager'

// constructor function
/* 
const user ={
  name :"karthi",
  age : 30,
  course:"javascript",

};
let key = prompt ("what you want to know about user data?=","name","age","course");
console.log(user[key]);

function Karthi(name){
  this.name=name;
}
const dog = new Karthi("hao buddy");
console.log(dog instanceof Karthi);

const x = null;
if(x == undefined){
  function x(y){
    console.log(y);
  }
  x(10);
}

var n = 11;
function myFun(n){
  if(n < 1){
//     return n
//   }
//   return console.log(n);
// }
// myFun(16);*/

// class user{
//   constructor(name,age,course ){
//     this.name = name;
//     this.age=age;
//     this.course=course;
//     //this.native=native;
//   }
//   message(){
//     console.log(`name is ${this.name}`)
//     console.log(`age is ${this.age}`)
//     console.log(`course is ${this.course}`)
//   }
// }
// class person extends user{
//   //super(name,age,course)
//   hai(){
//      return console.log(`${this.native}`)
//   }
// };
// let obj = new person("karthi",30,"python");
// console.trace(obj.name);
// console.trace(obj.course);
// console.trace(obj.native);

// let globalVar = "Hello, World";

// function changeGlobalVar() {
//     let globalVar = "Hello, Mars";
// // }

// console.trace(globalVar); // outputs: "Hello, World"
// changeGlobalVar();
// console.trace(globalVar); // outputs: "Hello, Mars"

// const b = new Array('10','20','30');
// console.log(b);
// console.log(array);

// const user={
//   name : "karthi",
// };
// console.log(user);
// for (let key in user){
//   console.log(`${key}:${key[user]}`)
// }

// for (let a= 0;a<10;a++){
//   console.log(a);
// }

// let num = 2;
// switch (num){
//   case 1:
//     console.log("1");
//     break;
//   case 2:
//     console.log("2");
//     break;
//   case 3:
//     console.log("3");
//     break;

// };

// let i = 0;
// while (i <= 10){
//   console.log(i);
//   i++;
// }

// const user={
//      name : "karthi",
//      age:22,
//      course:" ",
//      get hai(){
//       return `${this.name}`;
//      },
//     };
// //    console.log(user.hai)

// // const person1 = {
// //   firstName:"John",
// //   lastName: "Doe"
// // }
// // const person2 = {
// //   firstName:"Mary",
// //   lastName: "Doe"
// // }
// // const person = {
// //   fullName: function() {
// //     return this.firstName + " " + this.lastName;
// //   }
// // }
// // console.log(person.fullName.call(person2));

// let bookticket = new Promise(Resolve,Reject);
// const booking = true;
// if (booking){
//   Resolve()
// }
// else{
//   Reject()
// }

// bookticket.then(succes)
// .Catch(failure)
// function Resolve(){
//   console.log("thanks");
// }
// function Reject(){
//   console.log("failure")
// }
// Resolve();
// Reject();

// function karthi(name,callback){
//   console.log("hai" +" " +name)
//   callback();
// }
// function srini(){
//   console.log("srini function is call back function");
// }
// karthi("karthikeyan",srini);
// setTimeout(karthi,41000,"kkk",srini);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "enge",
//   get hai(){
//     return this.language;
//   }
// };
// console.log(person.hai);

// function person(){
//   this.name="karthi";
//   this.age=22;
//   this.greet = function() {
//       return  " hai ,"+ this.name + "    welcome" + " age is "+ this.age + " " ;

//   }

// };
// const newPerson = new person()
// console.log(newPerson.greet());

// function greet(name) {
//   console.log("Hello, " + name);
// }

// function welcome() {
//   console.log("Welcome to the program!");
// }

// function main() {
//   let userName = "karthi";
//   greet(userName);
//   welcome();
// }

// main();

// const k = () => {
//   return "hai";
// };
// console.log(k());

// function btn() {
//   console.log("okok");
// }
class Person {
  constructor(name, section, rollno, city) {
    this.name = name;
    this.section = section;
    this.rollno = rollno;
    this.city = city;
  }
  static nameandrollno(name, rollno) {
    return new Person(name, "", rollno, "");
  }
  static sectionandcity(section, city) {
    return new Person("", section, "", city);
  }
}
let per1 = Person.nameandrollno("Ram", 1);
let per2 = Person.sectionandcity("A", "Delhi", "KARTHI");
const pert3 = Person.nameandrollno("karthi", 51, "Z", "NAMAKKAL");
console.log(pert3);
// console.log(per1);
// console.log(per2);
// const number = prompt("Enter your number: ");

// if (number === null) {
//   console.log("User cancelled the prompt.");
// } else if (number === "") {
//   console.log("You entered nothing.");
// } else if (number > 0) {
//   console.log("Positive");
// } else if (number == 0) {
//   console.log("Number is 0");
// } else {
//   console.log("Negative");
// }
function fetchData() {
  return new promise((resolve, reject) => {
    setTimeout(() => {
      if (fetchData) {
        resolve("fetching data");
      } else {
        reject(new Error("failed"));
      }
    }, 2000);
  });
}
fetchData()
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });


let a =19;
a= 19;
 