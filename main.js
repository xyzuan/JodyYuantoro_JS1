// If Else
let numVal = 10;

if (numVal > 0) {
  console.log("Number is positive");
} else if (numVal < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

// Switch Case
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari Senin.");
    break;
  case "Selasa":
    console.log("Hari Selasa");
    break;
  default:
    console.log("Hari Hari ku");
}

// While & do while loop
let counter = 0;
while (counter < 5) {
  console.log("Count: " + counter);
  counter++;
}

let i = 0;
do {
  console.log("Counter: " + i);
  i++;
} while (i < 5);

// Function
function sayHi(nama) {
  return "Hi, " + nama + "!";
}

console.log(sayHi("Jody"));
