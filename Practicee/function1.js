//Challenge 1:

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    // let i = 0; i < 4; i++ = 0, 1, 2, 3, 4
    sum += arr[i]; //0+1 = 1, 1+2 = 3, 3+3 = 6, 6+4 = , 10;
    }
    return sum; //return sum = (10)
    }
    
    let numbers = [1, 2, 3, 4];
    console.log("Sum:", calculateSum(numbers)); //called the function and argument numbers, output: Sum: 10
    
    //challenge 2
    function isEven(num) {
    if (num % 2 === 0) {
    //if num divided by 2 has no remainder = even, if has ramainder odd
    return true; //log true if its even number
    } else {
    return false; //if not, log false
    }
    }
    
    console.log(isEven(4)); //output: true
    console.log(isEven(7)); //output: false
    console.log(isEven(0)); //output: true
    
    //challenge 3
    function greet(name) { //argument value = name
    return "Hello, " + name + "!"; // 'hello ,' name + '!';
    }
    
    function personalizedGreeting(names) {//function is called below with argument (friends)
    for (let i = 0; i < names.length; i++) {//let i = 0; i < 3; i++ is equals to = 0, 1, 2.
    console.log(greet(names[i])); //or greet(names[0, 1, 2]) output: "hello," "Alice", "!", "hello," "Bob", "!", "hello," "Charlie", "!"
    }
    }
    
    let friends = ["Alice", "Bob", "Charlie"]; //array of friends is equals to 3 elements so names.length = 3
    personalizedGreeting(friends); //argument is now (friends) ,
    
    //challenge 4
    
    function reverseArray(arr) {// after returned, argument is now (arr[2, 1, 0])
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) { // i= 2; >=0; i--; = [2, 1, 0]
    reversed.push(arr[i]); //reversed(arr[2, 1, 0])
    }
    return reversed; //stoped and executes [2, 1, 0]
    }
    
    let originalArray = [10, 20, 30];
    console.log(reverseArray(originalArray)); //when the function reverseArray is called with argument (originalArray), it will return the reversed value from the returned argument of reverseArry. the output is now: [30, 20, 10]
    console.log(originalArray); //prints the orignal array [10, 20, 30]
    
    //challenge 5
    
    function multiplyMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) { //i= 0; i < 2; i++ = ( 0, 1 )
    for (let j = 0; j < matrix[i].length; j++) { //j = 0 < 2; j++ = (0, 1)
    matrix[i][j] *= 2; //multiply the value from matrix index 0, 1 to *2. output: i = 0[2 , 4 ], i = 1[6, 8]
    }
    }
    return matrix; //return the final result [2, 4], [6, 8].
    }
    
    let matrix = [
    [1, 2],
    [3, 4],
    ];
    console.log(multiplyMatrix(matrix)); //print the returned result of the matrix, output: [2, 4], [6, 8]
    