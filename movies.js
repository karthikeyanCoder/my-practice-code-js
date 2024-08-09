// let message = "karthi";
// console.log("karthi");

// const arr = ["karthi",[33],"vijay","barani"];
// console.log(arr)
// arr.toString();
// console.log(arr)

// //const num = prompt("enter your number ");
// num = 1;
// if (num % 2 == 0) {
//     console.log("the number is even = ",num)
// }
// else {
//     console.log("The number is odd.");
// }

// program to find the largest among three numbers

// take input from the user
// const num1 = parseFloat(prompt("Enter first number1: "));
// const num2 = parseFloat(prompt("Enter second number2: "));
// //const num3 = parseFloat(prompt("Enter third number3: "));
// const num3 = prompt("Enter third number3: ");
// let largest;//keyan

// // // check the condition
// // if(num1 >= num2 && num1 >= num3) {
// //     largest = num1;
// // }
// // else if (num2 >= num1 && num2 >= num3) {
// //     largest = num2;
// // } //variable name is value of a number
// // else {
// //     largest = num3;
// // }

// // // display the result
// // console.log("The largest number is " + largest);

// // if (num1>= num2 && num1>=num3 ){
// //     largest = num1;
// // // }
// // // else if (num2>=num1 && num2>=num3){
// // //     largest = num2;

// // // }
// // // else {
// // //     largest = num3;
// // // }
// // // // console.log("tha largest num "+largest)
// // // function btnclicked(){
// // //     console.log("button clicked");
// // // }

// // // let a =`karthithis is HTML + JAVA SCRIPT`;
// // // const b = a.slice(1,4);
// // // console.log(b)

// // // const person = new Object();

// // // person.age = 36;
// // // person.native = "mp"

// // // console.log(person.age);

// // // class car{
// // //     constructor(name){
// // //         this.name = name;
// // //     }
// // //     static bike(){
// // //         return "haii";
// // //     }
// // // }
// // // const myCar = new car("bmw");
// // // console.log(car.bike());
// // // console.log(myCar.name);

// // // const user = {
// // //     name : "demo",

// // //     native : "tamil nadu",
// // //     language : "tamil",
// // //     course : "javascript"
// // // };
// // // let txt = " ";
// // // for (x in user){
// // //     //console.log(x);
// // //     txt += user[x] + " " ;
// // // }
// // // console.log(txt);

// // const person = {
// //     name : "karthi",
// //     native : "tamil nadu",
// //     introduction: function () {
// //         console.log("this name is " + this.name + " ");
// //     },

// // };
// // const person2 = {
// //     language :"tamil",
// //     lastname : "keyan",
// // };

// // let results = person.introduction.bind(person2);
// // results();

// // // object definition
// // const student1 = {
// //     name: "Jack",
// //     grade: "5",
// //     introduction: function () {
// //       console.log(this.name + "studies in grade" + this.grade + ".");
// //     },
// //   };

// //   // object definition
// //   const student2 = {
// //     name: "Jimmy ",
// //     grade: " 6",
// //   };

// //   // the object student2 is borrowing introduction method from student1
// //   let result= student1.introduction.bind(student2);

// //   // invoking result() function
// //   result();  // Jimmy studies in grade 6.

// // // x = 55;
// // // function hai(){
// // //     let a = 3;
// // //      b = 6;
// // //     console.log(a)
// // //     console.log(x)
// // //     console.log(b)
// // // }
// // // hai();
// // // //console.log(a);

// class Person{
//     static Number = 0;
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//         User.Number ++;

//     }
//     greet(){
//         console.log(`hello${this.name} .`)
//     }
//     message(){
//         console.log("welcome person class")
//         return this
//     }

// }
// class User extends Person{
//     message(){
//         console.log("hai")
//     }
// }
// let obj = new Person("karthi,22");
// let User2 = new User("vijay",30);
// let obj2 = new User("barano]i",30);
// console.log(obj.name);
// obj.greet();
// User2.message();
// obj.message();
// console.log(User.Number)

// // let year =  prompt("wich year kadhel konden movie released?= ");

// // if (year == 2015){
// //     console.log("your answer is worng!!");
// // }
// // else if (year == 2003){
// //     console.log("correct ,weldone my boy;");
// // }
// // else {
// //     console.log("better luck next time");
// // }

// // //let age = prompt('age?', 18);

// // //let message = (age < 3) ? 'Hi, baby!' :
// //   //(age < 18) ? 'Hello!' :
// //   //(age < 100) ? 'Greetings!' :
// //   //'What an unusual age!';

// // //alert( message );

// // function getCusisine(prefix) {

// //      console.log(prefix + this.type);

// // }

// // let rice = {

// //     type: 'Rice'

// // };

// // let Noodles = {

// //     type: 'Noodles',

// //     //console,log(Typeof Noodles)

// // // };

// // // getCusisine.call(Noodles, "It's  ");

// // // getCusisine.call(rice, "It's  ");

// // let user = {
// //     name : "karthi",
// //     age : 40
// //  };
// //  txt = " " ;
// // for (x in user){
// //     txt += user[x]
// //     console.log(txt);
// //  }
// //  //console.log(txt);

// // product = { name: 'Laptop', price: 800 };
// // console.log(product);
// // //c = product.replace({price:800},{price:900});
// // let x = product.unshift()
// // // console.log(c);

// // let student = {
// //     name : "karthi",
// //     course : "javascript",
// //     native : "rasi",
// //     display : function(){
// //         return this.name + " " +"my name, " + this.course+ " " + "is learning course";
// //     }
// // };
// // //console.log(student.display());

// // const obj = Object.create(student); // obj ku instance create
// // obj.name ="vijay";
// // obj.course = "python";

// // console.log(obj.display());

// let product = {
//     name: 'Laptop',
//     price: 800,
//     display:function (){
//         return this.price + " " + this.name;

//     }
// };
// //console.log(product.display());
// var objt = Object.create(product);
// objt.price = 900;
// console.log(objt.display());
// console.log(objt.display());

// let book = {
//     title: 'Pride and Prejudice'
//   };//ques 1.Add properties author with value 'Jane Austen' and year with value 1813 to the object book = { title: 'Pride and Prejudice' }.

//   // Adding properties to the book object
//   book.author = 'Jane Austen';
//   book.year = 1813;

//   console.log(book);
// console.log(delete book.year);
// console.log(book);

// let a = 5;
// const b = 8;
// result = a>b;
// // alert(result);
// let text1 = "20";
// let text2 = "5";
// let result = text1 < text2;

// let person = {
//     name: 'John',
//     age: 30
// };

// let address = {
//     street: '123 Main St',
//     city: 'New York'
// };
// // Adding the address object as a property to the person object using dot notation
// person.address = address;
// console.log(person);

// for (let i = 0; i<=5;i++ ){
// //     if (i==3)
// //     continue
// //     console.log(i);
// // }

// //console.log(a);

// //2.Given an object fruit = { name: 'Apple', color: 'Red' }, create a function that takes the object and returns an array of its property names.
// // function getPropertyNames(obj) {
// //     return Object.keys(obj);
// //   }

// //   const fruit = {
// //     name: 'Apple',
// //     color: 'Red'
// //   };

// //   const propertyNames = getPropertyNames(fruit);
// //   console.log(propertyNames); // Output: ['name', 'color']

//   const product = {
//     name: 'Milk',
//     price: 2.99,
//     expired: true
//   };
// console.log(product);

//   if (product.expired) {
//     delete product.expired;
//   }

//   console.log(product);

// //Create a prototype object vehicle with properties type and wheels. Create a car object that inherits from vehicle and sets its own brand property.
//   function Person(name) {
//     this.name = name;
//   }

//   Person.prototype.greet = function() {
//     console.log(`Hello, my name is ${this.name}`);
//   };

//   const john = new Person('John');
//   john.greet(); // Outputs: "Hello, my name is John"

// function creat(){
//    let s = 20;
//     console.log(s);
// }
// creat();
// //console.log(s);

// function hello(name){
//     console.log(`my name${this.name}`);
// }
// function myFunction(hello){
//     let name = "karthi";

// }
// myFunction();

// let num = [3, 6, 7, 12, 18, 23, 44, 62, 81];

// let even_num = num.filter(function(item){

//   return item % 2 == 0; });

// console.log(even_num);
// console.log(num);

// const button = document.getElementById('button');
// function callback(){
// console.log("Hello world");
// }

// button.addEventListener('click',callback);

// let ticketBook = new Promise((Resolve,Reject) =>  {
//   const bookingSuccess =true
//   if (bookingSuccess)
//        Resolve()
//     else
//         Reject()
//     })

// ticketBook.then(success)
// .catch(failure)

// function success(){
//     console.log("successfully booked");
// }
// function failure(){
//     console.log("error not booked");
// }

//  program that shows the delay in execution

// function greet() {
//     console.log('Hello world');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(greet, 2000);
// sayName('John');

//callback function

// function greet(){
//     console.log("hai"+" " );
//     //callback();
// }
// function callMe(){
//     console.log("hai calback function");

// }
// setTimeout(greet ,3000);
// // callMe("karthi");

// function varScoping(){
//     var x = 4;
//     if(true){
//         var x = 2;
//         console.log(x)
//     }
//     console.log(x)
// }
// varScoping();

// fruits = ['apple', 'banana', 'cherry'];
// fruits[2] = 'grape';
// console.log(fruits);

// let a = "  webdeveloper";
// //console.log(a.slice(2,4));
// //console.log(a.indexOf(""));
// console.log(a.lastIndexOf("d"));
// console.log(a.trim("d")) //space trim panum

// const num = [5,7,8,9,3,77,68];
// const min = Math.min(...num);
// const max = Math.max(...num);
// console.log(min);
// console.log(max);

// function outerFunction() {
//     function innerFunction(){
//         console.trace("jh");
//     }
//     innerFunction();
// }
// outerFunction();

// const person = {
//     name: 'Sam',
//     age: 30,
//     // using function as a value
//     greet: function() { console.log('hello'); }
// };
// //person.name;
// person.greet(); // hello
// console.log(person.name);

// let user = {
//   native: "rasipuram",
//   course: "javascript",
//   welcome: function () {
//     console.log(` ${this.native} hai ${this.course}`);
//   },
// };
// console.log(user.course);
// console.log(user);

// console.assert("hai");

// //every && some
// const User = [
//   { name: "karthi", age: 22 },
//   { name: "vijay", age: 10 },
//   { name: "barabi", age: 13 },
// ];

// function isEligible(element) {
//   return element.age >= 18;
// }

// User.forEach((person) => {
//   console.log(`${person.name} is eligible: ${isEligible(person)}`);
// });

// const Names = [
//     { name: "karthi", age: 20 },
//     { name: "vijay", age: 30 }
// ];

// Names.app = function() {
//     this.forEach(person => {
//         console.log(`${person.name} ${person.age}`);
//     });
// }

// Names.app();

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
console.log(per1);
console.log(per2);

x = 55;
function hai() {
  let a = 3;
  b = 6;
  console.log(a);
  console.log(x);
  console.log(b);
}
hai();
console.log(a);


