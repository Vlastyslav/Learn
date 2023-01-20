/* -Create a car object, add a color property to it with the value equals 'black' */
const car = {
    color: "black",
}
console.log(car);

/* -Change the color property of the car object to 'green' */
car.color = "green";
console.log(car);

/* -Add the power property to the car object, which is a function and displays the engine power to the console */
car.power = power();
function power() {
    return "150HP";
}
console.log("Car engine power: ", car.power);

/* -Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples */
function peaAndApp(Pears, Apples) {
    result = Pears + Apples;
    return result;
}
peaAndApp(5,15);
console.log("Sum of fruits: ", result);

/* -Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name) */
function term(name) {
    if (name == "Name") {
        console.log("hello " + name);
    }
    else {
        console.log("there is no such name");
    }
}
term("Name");
term("notName");

/* -Write a function for calculating the type of argument and type output to the console */
function type(argument) {
    argument = typeof(argument)
    console.log("Type of argument is: ", argument);
}
type("Hello");
type(1);
type(true);

/* -Write a function that determines whether a number is prime or not */
function check(num) {
    if (num == 2 || num != 1 && num % 2 != 0) {
        console.log("Number is Prime")
    }
    else {
        console.log("Number is not Prime")
    }

}check(2);