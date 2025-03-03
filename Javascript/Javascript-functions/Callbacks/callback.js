// Task 1. Create a custom filter function that uses a callback to filter elements in an array.

function customFilter(arr, callback) {
  //create a function that takes an array and a callback function as arguments
  let newArr = []; //create an empty array
  for (let i = 0; i < arr.length; i++) {
    //loop through the array
    if (callback(arr[i])) {
      //if the callback function returns true
      newArr.push(arr[i]); //push the element to the new array
    }
  }
  return newArr;
}
function isEven(num) {
  //create a function that takes a number as an argument
  return num % 2 === 0; //return true if the number is even
}

let numbers = [1, 2, 3, 4, 5, 6]; //create an array of numbers
let evens = customFilter(numbers, isEven); //call the customFilter function with the numbers array and the isEven function as arguments
console.log(evens); // [2,4,6,8,10]
//Task 2: Countdown Time , Create a countdown timer that uses a callback function to display numbers every second.

function countdown(start, callback) {
  // Your code here
  let timer = setInterval(() => {
    callback(start);
    start--;
    if (start < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function displayNumber(num) {
  console.log(num);
}

countdown(5, displayNumber); // Output: 5 4 3 2 1 0 (with 1-second delay between each)

//Task 3: Simple Event Listener Dynamically create a button, attach an event listener to it, and trigger a callback when it’s clicked.

function createButton(buttonText, callback) {
  //creates a function of a bettuon text and a callback function
  // Your code here
  let button = document.getElementById("btn"); //get the button element by its id
  button.innerHTML = buttonText;
  button.addEventListener("click", callback); //add an event listener to the button that listens for a click event and calls the callback function
}

function buttonClicked() {
  console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);

//task 4: Create a function that executes a series of tasks (functions) one by one, with a 1-second delay between each task.

function runTasks(tasks) {
  // Your code here
  let i = 0; //initialize 0 variable
  let timer = setInterval(() => {
    // set interval
    if (i < tasks.length) {
      //if less than the length of the (tasks array)
      tasks[i](); //call the function to the index, current index
      i++;
    } else {
      clearInterval(timer);
    }
  }, 1000); //delay 1 second
}

function task1() {
  console.log("Task 1 completed");
}

function task2() {
  console.log("Task 2 completed");
}

function task3() {
  console.log("Task 3 completed");
}

runTasks([task1, task2, task3]); //call the tasks with the functions as arguments
// Output: Task 1 completed (after 1 second), Task 2 completed (after 2 seconds), Task 3 completed (after 3 seconds)

//task 5 ask 5: Interactive Quiz Game (Extra Miles) Build a simple quiz game that uses callbacks to handle user responses and determine if they are correct.

function askQuestion(question, choices, correctAnswer, callback) {
  //fuction that takes a question, choices, correct answer and cb function as arguments.
  // Your code here
  console.log(question); //log the question "What is 2 + 2"
  for (let i = 0; i < choices.length; i++) {
    //loop throu the choices array / 4
    console.log(i + 1 + ". " + choices[i]); //log the index of the choices + 1 and the choices.
  }
  let answer = prompt("What is 2+2 ? Enter the correct answer:"); // add a pop up to enter the correct answer
  if (answer === correctAnswer) {
    // if the asnwer is correct
    callback(true); //call the cb function with true
  } else {
    callback(false); //call the cb function with false
  }
}

function checkAnswer(isCorrect) {
  //crreate a function that takes a boolean as an argument.
  if (isCorrect) {
    console.log("Correct!");
  } else {
    console.log("Wrong!");
  }
}

askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer); //call the askqestion with question, choices, coreectAnswer and check asnwer function as arguments.
