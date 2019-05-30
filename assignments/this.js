/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* The Four Principles of the "this" keyword are as follows:
* 1. Global/Window Binding - (in the browser / Window Binding)keeps the "this" keyword attached to the entire Window object of Javascript. 'This" is not actually pointing to one specific thing, and therefore points to everything (all of javascript inside of the Window object). Global Binding points to the actual nodejs. 
* 2. Implicit Binding - occurs when the "this" keyword is attached to a object. The object is is attached to is referenced before the dot (.). For example. "name.this" points to the function "name".
* 3. New Binding - attaches the THIS keyword to the object it is assigned to, and takes it out of global binding. Also, it is bound to the object EACH TIME it is referenced with the NEW keyword, allowing for variations of the function to be run multiple times.
* 4. Explicit Binding - occurs when using "call", "apply", or "bind" in order to bind "this" in conjunction with the new keyword, and often used to override existing constructor functions. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// COMPLETE!!


console.log(this);


// Principle 2

// code example for Implicit Binding

// left of the dot

// COMPLETE!!


const Neon = {
    color: 'green',
    type: 'clear',
    lightUp: function(light) {
        console.log(`${this.color} is the best of the ${this.type} neon lights`);
    }

}

Neon.lightUp();

// Principle 3

// code example for New Binding

// COMPLETE!!


function Game(name, type) {
    this.gname = name;
    this.type = type;
}

const newGame = new Game('monopoly', 'board');
const oldGame = new Game('chess', 'board');

console.log(newGame);
console.log(oldGame);


// Principle 4

// code example for Explicit Binding

// call (calls immediately) apply or bind (saves for later)

// COMPLETE!!

function FavoriteShow(tv) {
    this.name = tv.name;
    this.genre = tv.genre;
    this.year = tv.year;
    this.play = function() {
        console.log('This is working for both shows!');
         return `${this.name} is the best ${this.genre} show from ${this.year}!`;
    };
};

const show = new FavoriteShow({name:'Game of Thrones', genre: 'drama', year: 2019});
const stream = new FavoriteShow({name:'Hey Arnold', genre: 'cartoon', year: 1999});

// console.log(newShow);
// console.log(newStream);

show.play.call(stream);
stream.play.apply(show);

// show.play();
// stream.play();
