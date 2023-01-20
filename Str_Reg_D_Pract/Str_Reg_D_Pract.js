/* Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b' */
let str1 = 'ahb acb aeb aeeb adcb axeb';
let result1 = str1.match(/a.b/gi);
console.log(result1);
/* Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest */
let str2 = '2 + 3 223 2223';
let result2 = str2.match(/2...3/g);
console.log(result2);
/* Get the day, month and year of the current date and output it to the console separately */
let year = new Date();
console.log(year.getDate());
console.log(year.getMonth());
console.log(year.getFullYear());