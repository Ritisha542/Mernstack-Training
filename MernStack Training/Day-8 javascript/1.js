// console.log("Hello");
// var let const
// var firstvar = 20;
// console.log(firstvar);
// datatypes -- primitive types, references type data type
// primitive types-- string,number,boolean,undefined,symbol,bigInt
//reference types-- array,object,Date,null
//var a = "Ritisha Sen";
//var a = "I'm a web developer";
//console.log(a);
//var a = true;
//console.log(a);
//console.log(typeof a);
//var str = "Hello";
//console.log(str);
//var a;
//console.log(a);
//var a = [10,20,false,"hi",undefined,[],[],{}];
//console.log(a);
//console.log(typeof a);
 //var a = {
    // firstname : "Raunak",
    // lastname : "tak"
//}
//console.log(a);
//var date = new Date();
// console.log(date);
// var a = null;
// console.log(typeof a);
// var,let,const
// ECMA script 
// version of js 2015-- ES06
// var b=20;
//  var b = 40;
//  // variables with var can be redeclared or can be reassigned
//  let c = 100;
//  c = 200;
//  //  variables with let can be reassigned but cannot be redeclared
//  const d = 2000;
//  //d=2000;
//  // variables with const cannot be redeclared or reassigned
// //Operators
// //Arithmatic Operator
// let a = 20;
// let b = 10;
// let sum = a + b;
// let sub = a / b;
// let div = a + b;
// let mul= a*b;
// let modulus = a%b;
// let exponential = a**b;
// console.log(sum,sub,div,mul,modulus,exponential);
// // addition operator
// let x=10;
// //x=x+20;
//  x += 20;
//  x -= 20;//same for every one like mul.div etc.
// console.log(x);


// comparison operator
// let num1 = 30;
// let num2 = 20;
// console.log(num1 <= num2); // or with >=,==,<,> if you can put add(+)sign on string variable than it convert into number like num2="20"
// //console.log(num1<= +num2); +num2 is type coersion
// console.log(num1 != num2);//type coersion
// console.log(num1 !== num2);
// console.log(5+'5');
// console.log(typeof(5+'5'));
// console.log(5-'5');
// console.log(5*'5');
// console.log(5/'5');
// console.log(firstname+" "+lastname);
// // logical Operators
// let isloggedin = true;
// let isadmin = true;

// console.log(isloggedin && isadmin);
// console.log(isloggedin || isadmin);

// short circuit implication topic is important for above two consloes for && and for ||
// agar or vale me ek bar bhi true ho gaya to vo break kar dega or value return kar dega or and vale me if any value is false then it will break 
// and if value is true then it will go to next value then check and return value.

// conditional statements //loops
//let count = 20;
// if(count===20){
//     console.log("count is 20");
// }else{
//     console.log("count is not 20");
// };
// if(count===20){
//     console.log("count is 20");
// }else if(count>20){
//     console.log("count is more than 20");
// }else{
//     console.log("count is less than 20");
// }
// let firstnum = prompt("enter first num");
// console.log("firstnum");
//prompt the user to enter their username and password.
//if username is "admin" and password is 123 in numbers.
//if both conditions is true then display "Auth Succesful" else"Auth failed.
// let username = prompt("enter the username");
// let password = +prompt("enter the password");
// if(password===123&&username==="admin"){
//     console.log("Auth Succesful");
// }else{
//     console.log("Auth failed");
// }
// if(username==="admin"){
//     if(password===123){
//         console.log("auth success");
//     }else{
//         console.log("invalid username");
//     }
// }else{
//     console.log("Invalid username");
// }
//ternary operator
// (username === "admin" && password===123) ? console.log("auth succesful") : console.log("auth failed");
// count===20 ? console.log("count 20") : count>20 ? console.log("count is greater than 20"): console.log("count is less than 20");
// if(count===20){
//     console.log("count is 20");
// }
// count===20?console.log("count is 20")
//switch cases
// let daynumber=3;
// let dayname;
// switch(daynumber){
//         case 1:
//         dayname="monday";
//         case 2:
//         dayname="tuesday";
//         case 3:
//         dayname="wednesday";
//         case 4:
//         dayname="thrushday";
//         case 5:
//         dayname="friday";
//         case 6:
//         dayname="saturday";
//         case 7:
//         dayname="sunday";
// }
// console.log(dayname);
//functions:- three types
// fuction declaration
//function expression
//function in arrows
// function sum(){
//     console.log("this is sum function");
// }
// sum();
// const sum = function(){
//     console.log("this is function sum");
// }
// sum();
// const sum = ()=>{
//     console.log("this is arrow function");
// }
// function sum(a,b){
//     console.log(a+b);
// }
//  let result=sum(3,4);
//  console.log(result);or console.log(sum(3,4));
//here a and b are parameters 3,4 are arguments
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(3,4));
// const add=(a,b)=>a+b;
// 2nd difference between var let const
//scope-global and localor functional scope
//es6-let,const,block scope
//var-global scope
//let,const-block scope
// function sum(){
//     var a=20;
//     console.log(a);
// }
// sum();
// //var--global scoe but in case
// var a=20;
// {
//     let a="raunak";
//     console.log(a);
// }
// console.log(a);
//array and objects
// let arr=[10,20,30,40,50];
// console.log(arr[arr.length-1]);
// arr[arr.lenght]="hello";
// console.log(arr);

// console.log(arr[6]);
// let nestedarr=[10,20,30,[1,2,3,4],[20,30,40,["aaa","aab",[true,false]]]];
// let newarr1 = newarr[nestedarr.length-1];
// let newarr2 = newarr1[newarr1.length-1];

// let newarr3 = newdarr2[newarr2.length-1];
// let ele = newarr3[newarr3.length-1];
// console.log(ele);
// objects
// let obj={
//     "firstname": "raunak",
//     lastname: "tak"
// };
// obj.firstname="kriti"
// obj.section="fsd";
// let firstname="section"
// let keyname="address"
// obj[keyname]="udaipur"
// console.log(["firstname"]);
// loops, strict mode, console types, array methods
// while,do while, for loop
// let count =  1;
// while(count<=10){
//     console.log(count);
//     count++;
// }
// do{
//     console.log(count);
//     count++
// }while(count<10);
// for(let i = 0;i<10;i--){
//     console.log(i);
// }
// let arr=[10,20,30,40,50];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]*10);
// }
// for of and for in loop
// let arr =[10,20,30,40,50,60];
// for(let element of arr){
//     console,log(element);
// }
// for(let index in arr){
//     console.log(index);
// }
// let items = ["first","second",3,4,"fifth"];
// for(let item of items){
//     console.log(item);
// }
// strict mode
// let a = 20;
// b=30;
// console.log(b);
// function sum(a,a){
//     "use strict"
//     console.log("sum function")
// }
// sum();
// // types of console
// console.log("hello")
// console.error("this is error console");
// console.warn("this is warning");
// console.assert(5>10,"5 is not greater than 10");
// console.assert(10>5,"10 is not greater than 5");
// let person={
//     name:"raunak",
//     age:"**",
//     hobbies: ["riding"]
// }
// console.log(person);
// let data=[
//     {
//     name:"raunak",city:"udaipur",dept:"cs"
//     },
//     {
//         name:"raunak",city:"udaipur",dept:"cs"
//     },
//     {
//         name:"raunak",city:"udaipur",dept:"cs"
//     },
// ];
// console.table("group 1");
// console.log("message 1");
// console.log("message 2");
// console.groupEnd();
// console.count("counter");
// console.count("counter");
// console.count("counter");
// array methods
//let arr = [10,20,30,40,50];
//push,pop,shift,unshift
//  let result = arr.push(1000);
// console.log(result);
// console.log(arr);
// console.log(arr);
// console.log(arr.pop());
//shift,unshift
// arr.unshift(1000);
// console.log(arr);
// arr.shift();
// console.log(arr);
// let arr1=[10,20];
// let arr2=[30,40];
// let result = arr1.concat(arr2);
// console.log(result);
// console.log(arr1);
// console.log(arr2);
// // slice and splice
//let arr = [10,20,30,40,50];
// let slicedArr = arr.slice(2);// in slice index no. not include.
// console.log(slicedArr);
// console.log(arr);
//let result=arr.splice(2,2);//second index se two elements
// let result=arr.splice(2,2,0,"raunak","tak");
// console.log(result);
// console.log(arr);
// includes, reverse, join,flat
// let result = arr.includes(40);
// console.log(result);
// arr.reverse();
// console.log(arr);
// let joinedStr=arr.join("%");
// console.log(joinedStr);
// 10-07-2024 convert into 10/07/2024
//let arr = [10,20,[30,[40]]];
// let result=arr.flat(2);
// console.log(result);
// map,filter,reduce.foreach
// let arr=[10,20,30,40,50,60];
// let result = arr.map((item,index)=>{
//     if(item>30){
//     return item*10;
//     }
//     //return item*i;
// })
// console.log(result);
// console.log(arr);
//map return new array with the same length as original.
//callback function
//higher order function
// for each
// let newarr=arr.forEach((item)=>{
//     return item*10;
// })
// console.log(newarr);
// console.log(arr);
//let arr =[10,20,30,40,50,60];
// arr.filter((item)=>{
//     return item>20;
// })
// console.log(filterdArr);
// let sum=arr.reduce((acc,curr)=>{acc+curr
// },1000);
// acc curr for multiplication the first state is 1 else for 0
    // 0   10   10
    // 10  20   30
    // 30  30   60
    // 60  40   100
//console.log(sum);
//let arr =[10,20,30,40,50,60];
// let foundItem = arr.find((item)=>item>30);
// console.log(foundItem);
//let foundItemIndex = arr.findIndex((item)=>item===30);
//console.log(foundItemIndex);
// let arr =[11,21,31,41,51,61];
// let hasEven=arr.some((item)=>item%2===0);
// console.log(hasEven);
// let everyEven=arr.every((item)=>item%2===0);
// console.log(everyEven);
// object methods
//  let obj = {
//     firstname: "raunak",
//      lastname: "tak"
//  }
// let keys=Object.keys(obj);
// console.log(obj);
// let values=Object.values(obj);
// console.log(values);
// let entries=Object.entries(obj);
// console.log(entries);
// Object.freeze(obj);
// obj.firstname="vibha";
// obj.address = "udaipur";
// console.log(obj);
// const num=20;
// num=30;
//console.log(num);
// Object.seal(obj);
// obj.firstname="vibha";
// obj.address="jaipur";
// console.log(obj);
//console.log(obj.hasOwnproperty("address"));
// string methods
// let str="Hello World";
// let char=str.charAt(6);
// console.log(char);
// let newStr=str.concat(" Techno");
// console.log(newStr);
// let hasStr = str.includes("World");
// console.log(hasStr);
// let index=str.lastIndexOf("l");
// console.log(index);
// let newStr=str.slice(4,8);// it will count negative values
// console.log(newStr);
// let newStr1=str.substring(4,8);//it does not count negative values
// console.log(newStr1);
// econsole.log(str);
// let newStr=strtoUpperCase();
// console.log(newStr);
// let splittedstr=str.split(" ");
// console.log(splittedstr);
// let str1="   Hello    World   ";
// console.log(str1.length);
// let trimmedStr=str.trim();
// console.log(trimmedStr.length);
// console.log(trimmedStr);
// let newStr= str.replace("world", "Techno");
// console.log(newStr);

// let newStr1=str.repeat(3);
// console.log(newStr1);

// Date methods
// let date = new Date();
// console.log(typeof date);

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getTime());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getFullYear());
// console.log(date.getMonth());

// let date = new Date();
// console.log(date.toLocaleTimeString());

// Math object

// let num = Math.random();  // 0 - 0.9999999
// console.log(num);

// let floatNum = 10.234;
// console.log(Math.floor(floatNum));
// console.log(Math.ceil(floatNum));
// console.log(Math.round(floatNum));

// console.log(Math.pow(2,5));
// console.log(Math.sqrt(16));
// console.log(Math.min(100,20,40,500));
// console.log(Math.max(100,20,40,500));

// let otp = Math.floor(1000 + Math.random()*9000); // 1000 - 9999
// console.log(otp);

// Desdtructuring

let arr = [10,100];
// const [num1, ...num2 ] = arr;
const [num1, num2=30 ] = arr;
// ...=rest operator
console.log(num1 , num2);

// Obj












