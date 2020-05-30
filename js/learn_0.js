"use strict";
console.log('Welcome to the world of JavaScript!!');

let message = 'Hello!';
let name = 'Lakshmi Narasimhan';
console.log(message, name);

const BIRTHDAY = '05 Nov 1987';

const age = calcAge(BIRTHDAY);
console.log('Dont be shy!', age);

function calcAge(birthday) {
    return 38;
}

//DataTypes
let now = new Date();
console.log(`Today is ${ now }`)

console.log(typeof 1)
console.log(typeof 10n);
console.log(typeof 'ECMAScript');
console.log(typeof (4 > 3));
console.log(typeof Math);
console.log(typeof {});
console.log(typeof alert);

//let favActor = prompt("Who is your fav marvel character?", 'Tony Stark');
//console.log('My fav actor:', favActor);

//let like = confirm('Do you like me?');
//console.log('Like you?', like);

//Type Conversion
let numStr = String(12345);
console.log(typeof numStr);
console.log(typeof Number(numStr));

console.log("6" / "2");
console.log("6" * "2");
console.log("6" + "2");

console.log(Number(true));
console.log(Number(false));
console.log(Number(""));
console.log(Number("plharish"));

let fuckable; //undefined
console.log(printNum(fuckable));
fuckable = null;
console.log(printNum(fuckable));

//It seems functions will always need to return some value
function printNum(value) {
    console.log(value, Number(value));
    return 23;
}

console.log(Boolean(""));
console.log(Boolean("abcd"));