/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this = window
* 2. If used with 'new' keyword, this refers to the newly created object
* 3. left of dot if used in an object
* 4. 'this' is specified by user when used with .call, .apply, or .bind
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding
let testObj = {name: 'Dan', sayHi: function() {return `${this.name} says hi.`}}

console.log(testObj.sayHi());

// Principle 3

// code example for New Binding

let Fruit = function(size, color) {
    this.size = size;
    this.color = color;
}

let apple = new Fruit('L', 'red');
console.log(apple)

// Principle 4

// code example for Explicit Binding

let cockerSpaniel = {
    color: 'yellow',
    size: 'M',
    bark: function() {
        return `The ${this.color} dog barks!`
    }
};

let daschund = {
    color: 'black',
    size: 'L'
};

console.log(cockerSpaniel.bark.call(daschund));

