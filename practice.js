// function promiseFunction(){
//     return new Promise((resolve,reject)=>{
//     const number = true;
//     if (number){
//      resolve('succes')
//    }else {
//     reject('failure')
//    }
// });
// }
// promiseFunction()
//    .then((result)=>{
//       console.log(result)
//    })
//     .catch((error)=>{
//        console.log(error)
//      })
 
class Calculator {
   add(a, b) {
       if (b === undefined) {
           
           return a + 10;
       } else {
           
           return a + b;
       }
   }
}

const calc = new Calculator();
console.log(calc.add(5));    
console.log(calc.add(5, 3)); 
