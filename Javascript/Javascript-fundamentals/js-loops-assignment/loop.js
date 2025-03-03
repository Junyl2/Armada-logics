/* Tasks

1. Multiplication Table Generator

Instructions:

Create a variable number and assign it a value between 1 and 10.
Use a for loop to generate the multiplication table for the given number (from 1 to 10).
Print each line of the table in the format: number x i = result.
Example Output:  If number = 5, the output should be:
*/

let number = 3;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}  `);
}

/* 2. Sum of First N Natural Numbers

Instructions:

Create a variable n and assign it a value greater than 0.
Use a for loop to calculate the sum of the first n natural numbers.
Print the result in the format: The sum of the first n numbers is: result.
Example Output: If n = 5, the output should be: */

let n = 5;

let result = 0;
for (let i = 1; i <= n; i++) {
  result += i;
}
console.log(`The sum of the first ${n} is ${result}`);

/* 3. Array Elements Printer

Instructions:

Create an array of integers with at least 5 elements.
Use a for loop to iterate through the array and print each element.
Example Output:


 */

let array = [2, 4, 6, 8, 10];
for (let i = 0; i < array.length; i++) {
  console.log(`Array Element: ${array[i]}`);
}

/* 4. Pattern Printer

Instructions:

Use nested for loops to print the following pattern of stars (*): */

for (let i = 1; i <= 5; i++) {
  console.log(`*`.repeat(i));
}

let star = 5;
for (let i = 1; i <= star; i++) {
  let row = "";
  for (let r = 1; r <= i; r++) {
    row += "*";
  }
  console.log(row);
}

/* 5. Reverse Array Elements

Instructions:

Create an array of integers with at least 5 elements.
Use a for loop to print the elements of the array in reverse order.
Example Output: For the array [1, 3, 5, 7, 9], the output should be:  */

let numbers = [1, 3, 5, 7, 9];

for (let i = 4; i >= 0; i--) {
  console.log(`Reversed Element: ${numbers[i]}`);
}
