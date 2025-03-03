let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors.length);

//array is an object
//array is a data structure that we use to represent a list of items.
//array container to let us manage data easily.
//we can store diff type in arrays - number , string ,boleans,objects . it is dynamic
//index or positon [0,1,2,3]

//practice

let dailyTasks = ["practice", "exercise", "play", "watch movie", "skate"];
console.log(dailyTasks);

let removeTask = dailyTasks.pop();
console.log(dailyTasks);
console.log(removeTask);

let addTask = dailyTasks.push("rest");
console.log(dailyTasks);
console.log(addTask);

let addFirstTask = dailyTasks.unshift("tootbrush");
console.log(dailyTasks);
console.log(addFirstTask);

let removeFirstTask = dailyTasks.shift();
console.log(dailyTasks);
console.log(removeFirstTask);

//While arrays help with lists, objects provide a way to model and structure information about entities. Let’s dive into how they work!

//Objects can store various data types, including numbers, strings, arrays, and even functions (methods).
//You can access object properties using dot notation or bracket notation Bracket notation is particularly useful when property names contain special characters or are dynamic..

//Objects are mutable, meaning you can add, update, or remove properties after creation.
/* 
let car = {
    brand: "Ford",
    model: "Focus",
    year: 2018,
};

for (let key in car) {
    console.log(key + ": " + car[key]);
} */

let shoes = {
  brand: "nike",
  year: 2022,
  price: 1000,
};
for (let key in shoes) {
  console.log(key + ":" + shoes[key]);
}
