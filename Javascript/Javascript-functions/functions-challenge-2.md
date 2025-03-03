function generatePattern() {
let result = "";
for (let i = 1; i <= 3; i++) {
//i= 1, 2, 3
for (let j = 1; j <= i; j++) {
//j= 1, 2, 3
result += j + " "; //result = / 1, 2, 3 + ""
}
result += "\n"; //result = 1, 2, 3 , the string will go down, "\n" > means break the line.
}
return result; //result 1, 2, 3 string below line of 1, 2, 3 > below the line ("")
}

console.log(generatePattern()); //result = 1, 2, 3 string below
//my answer was wrong, returned result += "\n" means every loop iteration will break the line and start counting until the end point of the compared number is reached, example:
/_ 1
1, 2
1, 2, 3
loop stops at 3 because end point number is <= (3) _/

//Challenge 2

function swapFirstLast(arr) { array is now the variable named 'number' = [10, 20, 30, 40]
let first = arr.shift(); // arr.shift means remove first index array value ,removed[10]
let last = arr.pop(); //.pop means remove last index value of the array removed[40]
arr.unshift(last); //add the removed value of variable named 'last'[40], add it to the first index of the array.
arr.push(first); //add the removed number of the variable named 'first' [10] , add it to the last index of the array.
return arr; //output: [40, 20, 30, 10]
}

let numbers = [10, 20, 30, 40];
console.log(swapFirstLast(numbers)); //output: [40, 20, 30, 10]
console.log(numbers); //output: [10, 20, 30, 40]
/_ challenged 2 mistakes:
console.log(numbers); [10, 20, 30, 40]
I was wrong here because I thought i was just logging the copy of the numbers value.
I realized that when passing a reference to the same array, any modifications made to array(numbers) inside
the functions will directly affect the original array(numbers)
_/

//challenge 3
function filterPassingGrades(grades) {
//argument 'grade' value will be the value from array 'scores'[85, 45, 90, 60]
let passing = [];
for (let grade of grades) {
if (grade >= 70) {
passing.push(grade); //push = add value in last index of array passing, = [85, 90]
} else {
passing.unshift(grade); //unshift = first index in passing array [60, 45]
}
}
return passing; //return passing = [60, 45, 85, 90]
}

let scores = [85, 45, 90, 60];
console.log(filterPassingGrades(scores)); // a function is called and the output should be the returned value of the function thats called, any modifications made to array inside the function will affect the original array, thats why the output will be the returned value: [60, 45, 85, 90]

//challenge 4
function updateStatus(tasks) {
for (let task of tasks) {
task.completed = !task.completed; //task = not completed
}
return tasks; //return task = not completed or reversed of the original condition eg, if 'true' it will become 'false'
}

let taskList = [
{ id: 1, completed: false }, //
{ id: 2, completed: true }, //
];

console.log(updateStatus(taskList)); //output: [{id: 1, completed: true}, {id: 2, completed: false}]
console.log(taskList); //output will be the returned condition inside function = [{id: 1, completed: true},{id: 2, completed: false}]

//challenge 5

function findValue(arr, target) {
for (let i = 0; i < arr.length; i++) {
// i= 0; i < 5; i++ = 0, 1, 2, 3, 4
if (arr[i] === target) {
//arr[i] will be the 'target' argument from the findValue parameter()
return `Found at index ${i}`; //return "Found at index" ${i};
}
}
return "Not found"; //return not found
}

let data = [5, 12, 8, 130, 44];
console.log(findValue(data, 12)); //the second argument is the returned value inside function which is the 'target' ,it returns ('Found at index' ${i}), final output: 'Found at index [1]' , because 12 is at index [1] of the arrays
console.log(findValue(data, 100)); //returned value 'Not found' because 100 value is not found inside the index of array
