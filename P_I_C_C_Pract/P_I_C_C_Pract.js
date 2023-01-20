/* Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal */
let animal = {
    move: "run",
}

let cat = {
    name: "Puss",
    __proto__: animal,
}
console.log(`${cat.name} ${cat.move}`);
 
/* Or with the help of class */
class animal2 {
    constructor(name, move) {
        this.name = name;
        this.move = move;
    }
}
let cat2 = new animal2("Smally", "run");
console.log(`${cat2.name} ${cat2.move}`);