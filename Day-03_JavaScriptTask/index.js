// Merge 3 array.
// Remove 2 nd element from array.
// Replace 1st element of array with new value.
// Find max and min number from array.
// Sort array in descending order.
// "Hello World !" . replace World with "ABC".
// "Hello XYZ, " add "How are you" at the end of the string.
// Declare one array with number and sum all the number.




console.log("<<---------------------(1)--------------------->>")
var a = [1,2,3,4];
var b = [5,6,7,8];
var c = [9,10];

// const merge = (a, b) => {
//     for(let i=0; i<b.length; i++) {
//       a.push(b[i]);
//     }
//     return a;
//   }

let d = (a.concat(b)).concat(c);
console.log(d);

console.log("<<---------------------(2)--------------------->>")

console.log(d);

const index = d.indexOf(2);
if (index > -1) {
  d.splice(index, 1); 
}

console.log(d);


console.log("<<---------------------(3)--------------------->>")
d[0]=100;
console.log(d);


console.log("<<---------------------(4)--------------------->>")

console.log("Maximum:",Math.max(...d));
console.log("Minimum:",Math.min(...d));

console.log("<<---------------------(5)--------------------->>")
// const e=[1,3,2,5,4,6,9,7,8,11,23,45];
d.sort(function(a, b){return b-a});

console.log(d);


console.log("<<---------------------(6)--------------------->>");
let s="Hello World !";
ns= s.replace("World","ABC");
console.log(s);
console.log(ns);

console.log("<<---------------------(7)--------------------->>");

let s1="Hello XYZ, ";
let s2="How are you";

s3= s1.concat(s2);
console.log(s3);

console.log("<<---------------------(8)--------------------->>");

let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr.reduce((a, b) => a + b, 0));

