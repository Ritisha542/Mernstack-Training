// console.log("Hello Ritisha welcome the journey to learn javascript");
// // alert("Hello TR-4");
// // var let const
// var firstVar=20;
// console.log(firstVar);
// // Datatypes-- Primitive types , Reference type data type
// // Primitive type - string number,boolean,undefined,symbol,bigInt
// // Reference type - Array , object , Date , null
// var a = "Ritisha Sen";
// console.log(a);

// var str = "I 'am a full stack learner";
// console.log(str);
// console.log(typeof str);

// var a = -20.11;
// console.log(typeof a);

// var a = undefined;
// console.log(typeof a);

// var a = [10,20,true,"Ritisha",undefined,[],[],{}];
// console.log(a);
// console.log(typeof a);
// // [{},{},{}] -- json--js object notation
// // console.log(a);

// var date = new Date();
// console.log(typeof date);

// var a = null;
// console.log(typeof a);

// // ECMA script

// var b=20;

// var b = 40;
// // variable with var can be redeclared or can be reassigned

// let c = 100;
// c = 200;
// // variables with let can be reassigned but cannot be redeclared

// const d = 2000;
// // d = 2000;
// // variables with const cannot be redeclared or reassigned

// // Operators
// // Arithmetic operator

// let a = 10;
// let b = 20;
// let sum = a + b;
// let sub = a - b;
// let mul = a*b;
// let div = a/b;
// let exp = a**b;
// let rem = a%b;
// console.log(sum , sub , mul , div , exp , rem);

// // Addition Assignment

// let x = 10;
// x += 20;
// x -= 20;
// x *= 20;
// x /= 20;
// x **= 20;
// x %= 20;
// console.log(x);

// // comparison operator

// let num1 = "50";
// let num2 = "50";
// // == and === differnce is that == only check number values whereas === check both values and data types
// console.log(num1 === +num2); // type coersion
// console.log(num1 !== num2);  // type coersion

// console.log(5-'5');

// let firstName = "Ritisha";
// let lastName = "Sen";
// console.log(firstName+" "+lastName);

// // logical operators

// let isLoggedIn = 10;
// let isAdmin = 20;
// // what is short circuit evaluation and how it works
// console.log("Is user loggedin and an admin?",isLoggedIn && isAdmin);
// console.log("Is user loggedin or an admin?",isLoggedIn || isAdmin);

// Conditional statements
let count = 20;

// if(count == 20)
//     console.log("count is 20");
// else if(count>20)
//     console.log("count is more than 20");
// else{
//     console.log("count is less than 20");
// }

// let firstNum = prompt("Enter first number");
// console.log(firstNum);
// Task-
// prompt the user to enter their username and password
// if username is admin and password is 123 in numbers
// if both condition is true then display "Auth Succesful else "Auth failed"

//  let username = prompt("Enter username");
//  let password = prompt("Enter password");

// if(username === "admin" && +password === 123)
// {
//     console.log("Auth successful");
// }
// else
// {
//     console.log("Auth failed");
// }

// Ternary operator

// (username === "admin" && +password === 123) ? console.log("Auth successful") : console.log("Auth Failed");

// count === 20 ? console.log("The count is 20") : count > 20 ? console.log("Count is greater than 20") : console.log("The count is less than 20");

// if(count === 20)
// {
//     console.log("count is 20");
// }
// count === 20 ? console.log("count is 20");

// Switch cases
let daynumber = 3;
let dayName;

switch (daynumber) {
    case 1: dayName = "monday";
        break;
    case 2: dayName = "Tuesday";
        break;
    case 3: dayName = "Wednesday";
        break;
    case 4: dayName = "Thursday";
        break;
    case 5: dayName = "Friday";
        break;
    case 6: dayName = "Saturday";
        break;
    case 7: dayName = "Sunday";
           break;
    default: dayname = "Invalid day";
             break;
}
console.log(dayName);


// let arr = [10,20,30,40,50];

// console.log(arr[arr.length-1]);

// arr[2] = "Techno";
// console.log(arr);

// let nestedArr = [10,20,30,[1,2,3,4],[20,30,40,["aaa","aab",""[true , false]]]];

// let newArr1 = nestedArr[nestedArr.length-1];
// let newArr2 = nestedArr[nestedArr1.length-1];
// let newArr3 = nestedArr[nestedArr2.length-1];
// let ele = newArr3[newArr3.length-1];
// console.log(ele);

// objects

let obj = {
    firstName : "Ritisha",
    lastName : "sen"
};

console.log(obj);









