/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.the keyword "this" is in the global scope of a window object.


* 2. Whenever a function is called by a preceding dot, the object before that dot is this.

"This" references the object preceding a function when using dot notation. ie: object.function (here "object" is referenced by the "this" keyword)

* 3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.

We control what this references using .call(), .apply(), or .bind() methods.

* 4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.

When you use a constructor function, "this" refers to the object that is created by that constructor.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const skye = {
  name: "skye",
  age: 22,
  speak: function() {
    return this.name;
  }
};
skye.speak();

// Principle 3

// code example for New Binding

function Person(word) {
  this.word = word;
  this.speak = function() {
    return this.word;
  };
}

const Person2 = new Person("hi");

Person2.speak();

// Principle 4

// code example for Explicit Binding

function Me() {
  return this.age;
}

Me.call(skye);
Me();
