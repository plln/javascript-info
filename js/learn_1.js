'use strict';

//Operator Precendence
console.log('We are going to learn operator precedence');

let apples = "2";
let oranges = "3";
console.log(apples + oranges);
console.log(typeof +apples);
console.log(typeof +oranges); //With the + unary operator, string is converted to number
console.log(+apples + +oranges);