
// Example One

let i = 10;
let j = 20;
console.log(i + j);

function first() {
  console.log("Hello First");
}

function second() {
  first();
  console.log("Hello Second");
}

second();

// Example Two

window.setTimeout(() => console.log("Last"), 1000);
console.log("One");
window.setTimeout(() => console.log("Two"), 0);
console.log("Three");

// Example Three

window.setTimeout(() => console.log(myVariable), 0);

let myVariable = 100;

myVariable += 200;