/\* let score = 59;

if (score >= 90) {
console.log("Grade A");
} else if (score >= 80) {
console.log("Grade B");
} else if (score >= 70) {
console.log("Grade C");
} else if (score >= 60) {
console.log("Grade D");
} else {
console.log("Grade F");
} \*/

//TASK 1: Grading System using swtich case
let score = 40;

switch (true) {
case score >= 90:
console.log("Grade A");
break;
case score >= 80:
console.log("Grade B");
break;
case score >= 70:
console.log("Grade C");
break;
case score >= 60:
console.log("Grade D");
break;
default:
console.log("Grade F");
}
//TASK 2 :Weather advisor using switch case

let temparature = 16;

switch (true) {
case temparature > 30:
console.log("Its hot outside");
break;
case temparature >= 16:
console.log("The weather is nice enjoy!");
break;
case temparature >= 0:
console.log("it's cold outside");
break;
default:
console.log("its freezing outside! bundle up!");
}

// TASK 3: Eligibility Checker

let age = 13;

switch (true) {
case age >= 18:
console.log("You are eligible for this activity");
break;
case age >= 13:
console.log("you need parental permission.");
break;
default:
console.log("You are not eligible for this acitivity");
}

//Task 4: Ticket Price Calculator

let Age = 20;
let isMember = false;

let ticketFee;
switch (true) {
case Age < 12:
ticketFee = "Free";
break;
case Age >= 12 && isMember:
ticketFee = 10;
break;
case Age >= 12 && !isMember:
ticketFee = 15;
break;
}

console.log(`Ticket Fee for not a member above 12 years old is $${ticketFee}`);

let yourAge = 12;
let aMember = true;

let ticketPrice = yourAge < 12 ? "Free" : aMember ? 10 : 15;

console.log(`Ticket price for a member above 12 yrs old is $${ticketPrice}`);

//Task 5: Challenge Task (Optional): Leap Year Checker

function isLeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
return year + " " + "is a leap year";
} else {
return year + " " + "is not a leap year";
}
}
console.log(isLeapYear(2012));
console.log(isLeapYear(2025));
