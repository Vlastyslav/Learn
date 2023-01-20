/* Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console */
const arrMov = ["Bonnie and Clyde", "Reservoir Dogs", "Rocky", "Braveheart"];
console.log(arrMov[0]);
console.log(arrMov[1]);
console.log(arrMov[2]);
console.log(arrMov[3]);
/* Given an array of car manufacturers, convert the array to a string and back to an array */
const arrCar = ["Renault", "Ford", "BMW", "Audi"];
console.log(String(arrCar));
console.log(arrCar[0]);
console.log(arrCar[1]);
console.log(arrCar[2]);
console.log(arrCar[3]);
/* Given an array of the names of your friends, add the words hello to each element of the array */
const arrFri = ["Vadim", "Gleb", "Oleg", "Igor"];
arrFri.forEach((name, index, array) => {
    console.log(`hello ${name}`);
  });
/* Convert numeric array to Boolean */
const arrNum1 = [1,2,3,4,5];
console.log(Boolean(arrNum1));
/* Sort the array [1,6,7,8,3,4,5,6] in descending order */
const arrNum2 = [1,6,7,8,3,4,5,6];
arrNum2.sort(function(a, b){return b-a});
console.log(arrNum2);
/* Filter array [1,6,7,8,3,4,5,6] by value > 3 */
const arrNum3 = [1,6,7,8,3,4,5,6];
let val = arrNum3.filter(vaue => vaue > 3);
console.log(val);
/* Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number */
const arrNum4 = [1,6,7,8,3,4,5,6];
arrNum4.forEach((number,arr) => {
    return console.log(`Number: ${number} Index: ${arr}`)
});
/* Implement a loop that will print the number 'a' until it is less than 10 */
let a = 0;
while (a < 10) {
    a++;
    console.log(a);
}
/* Implement a loop that prints prime numbers to the console */
function check(num) {
    if (num == 2 || num !== 1 && num % 2 != 0) {
       return true;
    }
    else {
        return false;
    }

}
var num = 6;
for(i = 1; i <= num; i++) {  
    if(check(i)) {
        console.log( i );
    }
}
/* Implement a loop that prints odd numbers to the console */
function odd(numb) {
    if (numb % 2 == 1) {
       return true;
    }
    else {
        return false;
    }

}
var numb = 6;
for(i = 1; i <= numb; i++) {  
    if(odd(i)) {
        console.log( i );
    }
}