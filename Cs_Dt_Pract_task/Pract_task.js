/* Perform addition of various types (string + boolean, string + number, number + boolean)*/
const a = 1;
const b = "Hello";
const c = true;
var bc = b + c;
var ac = a + c;
var ba = b + a;
console.log(bc + " " + ac + " " + ba);
/*Perform multiplication of various types (string * boolean, string * number, number * boolean)*/
var bc2 = b * c;
var ac2 = a * c;
var ba2 = b * a;
console.log(bc2 + " " + ac2 + " " + ba2);
/*Divide different types (string / boolean, string / number, number / Boolean)*/
var bc3 = b / c;
var ac3 = a / c;
var ba3 = b / a;
console.log(bc3 + " " + ac3 + " " + ba3);
/*Perform explicit conversion (number, string, boolean) */
var a2 = Number(a);
var b2 = Number(b);
var c2 = Number(c);
var a3 = String(a);
var b3 = String(b);
var c3 = String(c);
var a4 = Boolean(a);
var b4 = Boolean(b);
var c4 = Boolean(c);
console.log(a2 + " " + b2 + " " + c2);
console.log(a3 + " " + b3 + " " + c3);
console.log(a4 + " " + b4 + " " + c4);