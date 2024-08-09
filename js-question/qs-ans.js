                                // whatsapp questions

// Check two given numbers and return true if one of the number is 50 or if their sum is 50

// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank. 

// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.







                           // incomplete questions

// Design a method to delete the duplicate elements from the array.

// Design a method to add unique elements and return from the array.

// Design a method to return nth smallest element.

// Design a method to merge two array element in zigzag manner.

// Design a method to merge two sorted array in the sorted form.

// Design a method to display number of occurrence of each element in the array.

// Design a method to find the first and second smallest element of the array.

// Design a method to swap two adjacent element

// Design a method to sort the elements of an array in ascending order

// Design a method to sort the elements of an array in descending order

// Design a method to Find 3rd Largest Number in an array

//  Write a program to find 2nd Largest Number in an array

// Design a method to Find Largest Number in an array

// Design a method to Find 2nd Smallest Number in an array

// Design a method to Find Smallest Number in an array

// Design a method to Remove Duplicate Element in an array


/* 

"Write a function that:
	A. Accepts one array of numbers as argument
	B. Finds all duplicate values in the array
	C. Inserts the duplicate values inside a new array
	C. Returns the new array
Ex: [100, 4, 6, 7, 15, 9, 15, 4, 100] => [100, 4, 15]"

*/



/* 

"Write a function that:
	A. Accepts one array of numbers as argument
	B. Converts each negative numbers into positive
	C. Inserts the converted numbers inside a new array
 D. Removes duplicate entries in the new array
	E. Returns the new array
Ex : [100, -4, 6, -7, -9, 15] => [4, 7, 9]
[5, -6, -8, 10, -6, 5] => [6, 8]
[""hi"", 5, -7, 5, 10] => [7]"

*/



/* 

"Write a function that:
	A. Accepts one number variable as argument
	B. Converts each digit in the number into its equivalent text value
	C. Concadinates all texts as a single string
	D. Returns the string
Ex:	152 => ""ONE FIVE TWO"""

*/



/* 

"Write a function that:
	A. Accepts one array of numbers as argument
	B. Finds the average of all numbers
	C. Returns the average
Ex: [4, 6, 11] => 7"

*/




/* 

Write a JavaScript program to check if a string contains a substring.

Write a JavaScript program to check if a number is divisible by another number.

Write a JavaScript program to check if a date is valid.

Write a JavaScript program to check if a time is valid.

Write a JavaScript program to check if a password is strong.

Write a JavaScript program to check if a credit card number is valid.



*/


// Design a method to calculate the sum of n elements in an array.
let a = [1,2,3,4,5];

function addsum(a){
   let b = 0;
   for(let k in a){
     b += a[k];
   }
   return b;

};
let bb = addsum(a);
console.log("the sum of array is ",bb);




// Design a method to calculate the average of n elements in an array.
let a = [100,200,700,200,300];

function avg(a){
   let b = 0;
   for(let k in a){
      b += a[k];
   }
   return b/a.length;
}
let bb = avg(a);
console.log("the average is",bb);





// Design a method to return how many even numbers in the passed array.
let a = [1,2,3,4,6,9,7,2,8,2,3,10,78,15];

function evens(a){
   let c = 0;
   for(let k in a){
    if(a[k]%2==0){
        c++;
    }
   }
   return c;
}
let bb = evens(a);
console.log(`There are about ${bb} even numbers in the array`);





// Design a method to return how many odd numbers in the passed array.
let a = [1,2,3,4,5,6,7,8,9,10];
 
function odds(a){
    let b = 0;
    for(let k in a){
        if(a[k]%2==1){
            b++;
        }
    }
    return b;
};
let bb = odds(a);
console.log(`There are ${bb} odd numbers...`);





// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank
let a = prompt('enter the city name :');

function city(a){
let b = "";
for(i=0;i<=2;i++){
    b += a[i];
}
if(b === "los" || b === "new"){
    return a;
}
else{
    return "";
}
};
let bb = city(a);
console.log(bb);





// JavaScript: Check two given numbers and return true if one of the number is 50 or if their sum is 50
let a = [
    parseInt(prompt("enter first num")),
    parseInt(prompt('enter second num')),
  ];
  
  function afunc(a){
     if(a[0] + a[1] === 50 || a[0] === 50 || a[1] === 50){
      return a;
     }
  }
  let t = afunc(a)
  console.log(t);




// Design a method to delete the element at a particular index.
let a = [1,2,3,4,5,6,7,8,9,10];
let prom = parseInt(prompt(`${a} which one do you want to delete`));
 
function afunc(prom){
   for(i=0;i<a.length;i++){
     if(prom === a[i]){
        let  b = delete a[i];
        console.log(`${a} : => here the number ${prom} is deleted...`);
        }
     } 
  }
afunc(prom)




// Design a method to count how many digits in the array (digits not number).
let a = [1,5,6,78,12,5,7,9,0.4,4.5,76,2,1,3,4];
function digit(a){
                            // let st = ""; --->> wrong
let c = 0;
for(i=0;i<a.length;i++){
  let st = "";
  st += a[i];
  if(st.length <= 1){
     c++;
    }
  }
  console.log(c);

}
digit(a);




// Design a method to check how many numbers are divisible by either  3 or 4 or 5 in the array.
let a = [1,2,3,5,6,9,7,4,12,59,78,12,68,74,39,54,369,784];

function divisib(a){
   let c = 0;
   for(let k of a){
    if(k%3==0 || k%4==0 || k%5==0){
       c++;
    }
   }
    return c;
};
let bb = divisib(a);
console.log(bb);





// [own question] : Design a method to find the given number is perfect number  or not. 
let a = parseInt(prompt("Enter the number you want"));

function perfects(a){
  let add = 0;
  for(i=1;i<a;i++){
    if(a%i==0){
        add += i;
    }
  }
 if(add === a){
  console.log("perfect number", a);
 }
 else{
   console.log("Not a perfect number", a);
 }
}
perfects(a);




// Design a method to return how many perfect numbers are there in the array.
let a = [1,2,3,4,5,6,7,8,28,64,36,14,79,34];

function perfec(a){
   let c = 0;
   for(let k of a){
                      // let adds = 0; ==>> correct
     let adds = 0;
    for(i=1;i<k;i++){
      if(k%i==0){
        adds += i;
      }
    }
      if(k === adds){
       c++;
    }
  }
  return c;
}
let b = perfec(a);
console.log(`There are '${b}' perfect numbers in the array :` ,b);






// Design a method to combine two arrays.
let a1 = [1,2,3,4,5];
let a2 = [6,7,8,9,10];

function comb(a1,a2){
  let str = [];
  for(let i of a1){
                     //   str.push(i)  ===> correct
     str.push(i)
   }

  for(let j of a2){
     str.push(j)
  }

  return str;
};
let bb = comb(a1,a2)
console.log(bb);





// Write a JavaScript program to check if a year is a leap year.
let a = parseInt(prompt('enter the year'));

function years(a){
   let i = a*365.25;
   if(!Number.isInteger(i)){
      console.log(`${a} is a normal year`);
   }
   else{
    console.log(`${a} is a leap year`);
   }
}
years(a);






// Design a method to calculate the sum and average of the even element of the array.
let a = [1,9,8,7,6,398,45,68,14,79,32,1,6,7];

function sumavg(a){
   let counteven = 0;
   let adds = 0;
   for(let k of a){
    if(k%2==0){
      counteven++;
      adds += k
    }
  };
   let total = adds;
   let avg = total/counteven;
   console.log(`The sum of all even numbers are ${total}`);
   console.log(`The average of total of ${total} even numbers is ${avg}`);
};
sumavg(a)





// Design a method to reverse the elements of the array.
let a = ['a','b',1,2,3,4,5,6,7,8,9,10,'k','a','v','i','n'];

function rever(a){
  let rev = [];
  for(i=a.length-1;i>=0;i--){
    rev.push(a[i]);
  };
  return rev;
};
let b = rever(a);
console.log(b);




// Write a JavaScript program to check if a password is strong.
let a = prompt('enter password');

function strgnpass(a){
    let lengths = 8;
    if(a.length < lengths){
      return a = false
    }

    let lower = /[a-z]/.test(a);
    let upper = /[A-Z]/.test(a);
    let number = /[0-9]/.test(a);
    let symbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?`~]/.test(a);

    return a.length >= lower && upper && number && symbol;

};
let x = strgnpass(a)
console.log(x);





// Design a method to return how many palindrome are there in the array.
let a = ['coffee','mom','tea','malayalam','palindrom','teret','sos'];

function palincount(a){
   let coun = 0;
    for(let k of a){
      let main = "";
      let sub = "";
      main += k
                            // console.log(main);
      for(i=k.length-1;i>=0;i--){
        sub += k[i]
      }
                          //   console.log(sub);
     if(main === sub){
        coun++;
      }
  }
    return coun;
}
let x = palincount(a);
console.log(x);





// Write a JavaScript program to check if a number is greater than 100.
let a = parseInt(prompt('Enter the number'))

function check(a){
   if(a > 100){
    return `${a} Greater than 100, reduce ${a-100}`
   }
   else{
     return `${a} its below 100 `
   }

};
let x = check(a)
console.log(x);



// Write a JavaScript program to check if a number is less than 100
let a = parseInt(prompt('Enter the number'))

function check(a){
   if(a < 100){
    return `${a} Lesser than 100 `
   }
   else{
     return `${a} its below 100, reduce it to ${a-100}`
   }

};
let x = check(a)
console.log(x);




//  Write a JavaScript program to check if a number is between 100 and 200.
let a = parseInt(prompt('Enter the number between 100 and 200'));

function btw(a){
   if(a > 100 && a < 200){
    return `The given number ${a} is in between 100 and 200`
   }
   else if(a < 100){
    return `The given number ${a} is less than 100`
   }
   else{
    return `The given number ${a} is greater than 200`
   }
};
let x = btw(a);
console.log(x);



// Write a JavaScript program to check if a number is even or odd.
let a = parseInt(prompt('Enter the number'));

function evenodd(a){
  if(a % 2 == 0){
    return `The given number ${a} is even`
  }
  else if(a % 2 == 1){
    return `The given number ${a} is odd`
  }
  else{
    return `The given prompt is Not a Number`
  }
};
let x = evenodd(a);
console.log(x);



// Write a JavaScript program to check if a number is positive or negative.
let a = parseInt(prompt('Enter the number'));

function posnegnum(a){
   if(a < 0){
    return `The given number is negative`
   }
   else if(a > 0){
    return `The given number is positive`
   }
   else if(a === 0){
    return `The given number is Zero`
   }
   else{
    return `The given Prompt is Not a Number`
   }
};
let x = posnegnum(a);
console.log(x);




// Write a JavaScript program to check if a number is prime.
let a = parseInt(prompt('Enter the Number'));

function primes(a){
  count = 0;
for(i=1;i<=a;i++){
  if(a % i == 0){
      count += 1;
    }
   }
   if(a === 1){
    return `The given number ${a} is not a Prime number or Composite number`
   }
   else if(count > 2){
    return `The given number ${a} is Composite number`
   }
   else{
    return `The given number ${a} is a Prime number`
   }
};
let x = primes(a);
console.log(x);




// Write a JavaScript program to check if a string is a palindrome.
let a = prompt('Enter the Word');

function palins(a){
  let st = "";
  for(i=a.length-1;i>=0;i--){
    st += a[i]
  }
   if(a === st){
    return `The Given String "${a}" is Palindrom`
   }
   else{
    return `Its not a Plaindrom`
   }
};
let x = palins(a);
console.log(x);
















