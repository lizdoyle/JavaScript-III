/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* The Four Principles of the "this" keyword are as follows:
* 1. Global/Window Binding - (in the browser / Window Binding)keeps the "this" keyword attached to the entire Window object of Javascript. 'This" is not actually pointing to one specific thing, and therefore points to everything (all of javascript inside of the Window object). Global Binding points to the actual nodejs. 
* 2. Implicit Binding - occurs when the "this" keyword is attached to a object. The object is is attached to is referenced before the dot (.). For example. "name.this" points to the function "name".
* 3. New Binding - attaches the THIS keyword to the object it is assigned to, and takes it out of global binding. Also, it is bound to the object EACH TIME it is referenced with the NEW keyword, allowing for variations of the function to be run multiple times.
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// console.log(this);


// Principle 2

// code example for Implicit Binding

// left of the dot

// Principle 3

// code example for New Binding

// function Game(name, type) {
//     this.gname = name;
//     this.type = type;
// }

// let newGame = new Game('monopoly', 'board');
// let oldGame = new Game('chess', 'board');

// console.log(newGame);
// console.log(oldGame);


// Principle 4

// code example for Explicit Binding

// call (calls immediately) apply or bind (saves for later)

