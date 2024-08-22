// let arr = [10,20,30,40,50,60];
// let filteredArr = arr.filter(item=>item>20);
// console.log(filteredArr);
let arr = [10,20,30,40,50,60];
// let sum = arr.reduce((acc,curr)=>acc +curr);
// acc=accumulator , curr=current.
// console.log(sum);
 let sum = arr.reduce((acc,curr)=>{
    return acc+curr;
 } , 1000);