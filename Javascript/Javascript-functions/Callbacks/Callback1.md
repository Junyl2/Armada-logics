//challenge 1
function calculate(num1, num2, operation) {
return operation(num1, num2);
}
function subtract(a, b) {
return a - b;
}
function divide(a, b) {
return a / b;
}
console.log(calculate(50, 20, subtract));
console.log(calculate(20, 5, divide));

//challenge 2
//Your Turn! Modify delayedMessage to accept a second callback that runs before the delay starts.
function delayedMessage(message, delay, beforeDelay, afterDelay) {
beforeDelay(message);

setTimeout(() => {
afterDelay(message);
}, delay);
}
delayedMessage(
"hello word",
2000,
function (msg) {
console.log("before delay:", msg);
},
function (msg) {
console.log("after delay:", msg);
}
);

//challenge 3
/_ document.getElementById("btn").addEventListener("click", function () {
alert("Button clicked!");
}); _/

//challenge 4 Write a function repeatTask that takes a number and a callback function, then runs the callback function that many times.

function repeatTask(times, callback) {
for (let i = 0; i < times; i++) {
callback(i);
}
}
repeatTask(3, function (i) {
console.log("iteration:", i);
});

//Your Turn! Modify repeatTask to stop early if the callback returns false.

function repeatTask(times, callback) {
for (let i = 0; i < times; i++) {
let iteration = callback(i);
if (iteration === false) {
break;
}
}
}

repeatTask(5, function (i) {
console.log("Iteration:", i);
if (i === 2) return false;
});
