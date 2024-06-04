// for (let num = 0; num <= 5; num++) {
//   alert(num);
// }

// let x = [];
// for (var num = 0; num <= 5; num++) {
//   x.push(num);
// }
// alert(x);

// for (let i = 0; i <= 20; i++) {
//   if (i % 3 == 0) alert(i);
// }

// while (true) {
//   number = prompt("Please enter a number in the range 0 to 100:");
//   if (number >= 0 && number <= 100) {
//     break;
//   } else {
//     alert("Error: The number must be in the range 0 to 100. Please try again.");
//   }
// }

let number = prompt("Please enter an integer:");

let sum = 0;

for (let i = 0; i <= number; i++) {
  sum += i;
}

alert("The sum of integers from 0 to " + number + " is: " + sum);
console.log("The sum of integers from 0 to " + number + " is: " + sum);

// calculateSum();
