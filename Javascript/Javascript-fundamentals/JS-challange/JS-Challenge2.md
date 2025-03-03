//1. inventory tracker
let inventory = ["apple", "banana", "cherry", "date", "elderberry"];
let inventoryCount = [10, 15, 5, 20, 7];

for (let i = 0; i < inventory.length; i++) {
// i = 0 < i < 5; i ++ = i = (i = 0, 1, 2, 3, 4)

console.log(`${inventory[i]}: ${inventoryCount[i]}`); //output: 'apple:10', 'banana: 15', 'cherry: 5', 'date: 20', 'elderberry: 7'
}

//2. Alphabetical Sorting

let words = ["zebra", "apple", "mango", "cherry", "banana"];

for (let i = 0; i < words.length; i++) { //0, 1, 2, 3, 4
for (let j = i + 1; j < words.length; j++) { // j = i (0)+ 1 ; j < words.length(5); j++ output: j = (1, 2, 3, 4), ( 2, 3, 4), ( 3, 4 ),( 4 )- this is the inner loop
if (words[i] > words[j]) { //compares alphabetically the words [i] > words [j]
let temp = words[i]; //store temporary variables in words[i]
words[i] = words[j]; //assign words[j] to words [i] (move the smaller word forward)
words[j] = temp; //Assign temp (original words[i]) to words[j] (swap complete)
}
}
}

console.log(words); //output ['apple', 'banana', 'cherry', 'mango', 'zebra']

//3. Unique Array Builder

let uniqueNumbers = [];

while (uniqueNumbers.length < 10) {
//runs until uniqueNumbers contain 10 unique numbers.
let randomNumber = Math.floor(Math.random() \* 20) + 1; //generates random integer between 1-20 and rounds it down.

// Check if the randomNumber already exists in the array
let exists = false;
for (let i = 0; i < uniqueNumbers.length; i++) {//loops through uniqueNumbers
if (uniqueNumbers[i] === randomNumber) {//check if randomNumber is already in the array
exists = true;//if found, set exit to true
break;//and break.
}
}

// If it doesn't exist, add it to the array
if (!exists) {
uniqueNumbers.push(randomNumber);//if randon number is not found in the array, it is added to uniqueNUmbers.
}
}

console.log(uniqueNumbers); //output: array(10) unique random numbers between 1- 20 eg.[6, 7, 16, 4, 9, 10, 2, 20, 13, 18]

/\* 4. Triangle Checker

Given the following code, determine if the sides form a valid triangle: \*/

let sideA = 7;
let sideB = 10;
let sideC = 5;

if (sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB) {
// 17 > 5 = true | 15 > 7 = true | 12 > 10 = true;
console.log(`The sides ${sideA}, ${sideB}, and ${sideC} form a valid triangle.` ); //output: `The slides 7, 10 and 5 form a valid triangle.`
} else {
console.log( `The sides ${sideA}, ${sideB}, and ${sideC} do not form a valid triangle.`); //this will run if one of the condition is false.
}
