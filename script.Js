// Date & Time Practice

// var now = new Date ();
// console.log(now)

// var now = new Date ();
// var currentHour = now.getHours();
// console.log(currentHour)

// var now = new Date ();
// var today = now.getDate();
// var month = now.getMonth() ;
// var year = now.getFullYear();

// console.log(today + " / " + month  + " / " + year)

// var myBirthday = new Date("September 27, 2002");
// console.log(myBirthday);

// var now = new Date ();
// var time = now.getHours();

// switch(true){
//     case (time < 12):
//     console.log("Good Morning");
//     break;

//     case (time == 12 ):
//     console.log("Good Afetrnoon")
//     break;

//     case (time > 18 ):
//         console.log("Good Evening");
//         break;
// }

// // Age checker
// var user = +prompt("Enter Your Birthyear");
// var currentYear = new Date ().getFullYear();
// var age = currentYear - user;

//  console.log("You're " + age + " Years Old")


// How many days left in next birthday
// var now = new Date();
// var nextBirthday = new Date("27 Sept , 2026");
// var diff = nextBirthday - now;
// var days = Math.floor(diff / (1000 * 60 * 60 * 24))

// console.log(days)

// current time mins sec
// var now = new Date();
// var hour = now.getHours();
// var mins = now.getMinutes();
// var sec = now.getSeconds();

// console.log(hour + " : " + mins + " : "  +sec)


// var today = new Date();
// today.setDate(today.getDate() + 100)

// console.log(today)

// var now = new Date();
// var hour = now.getHours();
// var mins = now.getMinutes();
// var sec = now.getSeconds();


// switch(true){
//     case (hour < 12):
//     console.log("Good Morning");
//     break;

//     case (hour < 18):
//     console.log("Good Afetrnoon")
//     break;

//     default:
//         console.log("Good Evening");
//         break;
// }
// console.log(hour + " : " + mins + " : " + sec)

// Qno1 Write a function that displays current date & time in your browser?

// function showDateTime() {
//     var now = new Date();                
//     var current = now.toString();        
//     console.log(current);                
//     alert("Current Date & Time:\n" + current); 
// }

// showDateTime()


// Qno2 Write a function that takes first & last name and then it greets the user using his full name?

// function greetUser() {
//     var firstName = prompt("Enter your first name:");
//     var lastName = prompt("Enter your last name:");

//     var fullName = firstName + " " + lastName;
//     var message = "Hello, " + fullName + "! Welcome.";

//     console.log(message);            
// }
// greetUser()


// Qno3 Write a function that adds two numbers (input by user) and returns the sum of two numbers?

// function addNumbers() {
//     var num1 = +prompt("Enter first number:");   
//     var num2 = +prompt("Enter second number:");

//     var sum = num1 + num2;   

//     console.log("Sum = " + sum);   
//     return sum;   
// }

// addNumbers()

// Qno4 Write a function that takes three inputs — num1, num2, and operator — then computes and shows the result.

// function calculator() {
//   var num1 = +prompt("Enter first number:");
//   var operator = prompt("Enter operator (+, -, *, /, %):");
//   var num2 = +prompt("Enter second number:");

//   var result;

//   if (operator === "+") {
//     result = num1 + num2;
//   } else if (operator === "-") {
//     result = num1 - num2;
//   } else if (operator === "*") {
//     result = num1 * num2;
//   } else if (operator === "/") {
//     result = num1 / num2;
//   } else if (operator === "%") {
//     result = num1 % num2;
//   } else {
//     alert("Invalid operator!");
//     return;
//   }

//   console.log(num1 + " " + operator + " " + num2 + " = " + result);
//   alert("Result: " + result);
//   return result;
// }

// calculator()



// function getInput() {
//   var numb1 = +prompt("Enter Number 1");
//   var op = prompt("Enter Operator ");
//   var numb2 = +prompt("Enter Number 2 ");
//   var checkNumb = checkInput(numb1, numb2); //check numbers input data sei 
//   if (checkNumb == true) {
//    var result = OperatorCheck(numb1,numb2,op) //operation
//    if(result!=null){
//     document.writeln("Number 1 : ",numb1)
//     document.writeln("Number 2 : ",numb2)
//     document.writeln(`Number 1Result : ${numb1}  ${op} ${numb2} : ${result}`)


//    }
//    else{
//     alert("enter correct operator")
//    }


//   } else {
//     alert("Please enter only number");
//   }
// }

// function checkInput(a, b) {
//   if (isNaN(a) || isNaN(b) || a == "" || b == "") {
//     return false;
//   } else {
//     return true;
//   }
// }

// function OperatorCheck(a, b, op) {
//   if (op == "+") {
//     return Add(a, b);
//   } else if (op == "-") {
//     return Sub(a, b);
//   } else if (op == "*") {
//     return Multiply(a, b);
//   } else if (op == "/") {
//     return Div(a, b);
//   } else {
//     return null;
//   }
// }

// function Add(a, b) {
//   return a + b;
// }
// function Sub(a, b) {
//   return a - b;
// }
// function Multiply(a, b) {
//   return a * b;
// }
// function Div(a, b) {
//   return a / b;
// }

// getInput();

// Qno6
// function factorial() {
//     var input = prompt("Enter a num to find factorial")
//     if(input === null) return;

//     var num = parseInt(input);

//     if(isNaN(num) || num < 0){
//         alert("Please enter a non-negative integer!");
//         return;
//     }

//     var result = 1;
//     for(var i = 1; i <= num; i++){
//         result = result * i;
//     }

//     alert("Factorial of " + num + " is: " + result);
//     return result;
// }
// factorial()

// Qno7

// function showCounting(){
//     var startNo = parseInt(prompt("Enter 1st Number "))
//     var lastNo = parseInt(prompt("Enter Ending Number "))

//     if(isNaN(startNo) || isNaN(lastNo)){
//         alert("Plz Enter valid num")
//         return;
//     }

//     if(startNo > lastNo){
//         alert("Start number should be smaller than end number!");
//         return;
//     }
//     for(var i = startNo; i <= lastNo; i++){
//         document.writeln(i + "<br>");
//     }
// }showCounting()

// Qno8
// function calculateHypotenuse() {
//   var base = parseFloat(prompt("Enter base of triangle:"));
//   var perp = parseFloat(prompt("Enter perpendicular of triangle:"));

//   if (isNaN(base) || isNaN(perp)) {
//     alert("Please enter valid numbers!");
//     return;
//   }

//   function calculateSquare(num) {
//     return num * num;
//   }

//   var baseSquare = calculateSquare(base);
//   var perpSquare = calculateSquare(perp);

//   var hypoSquare = baseSquare + perpSquare;
//   var hypotenuse = Math.sqrt(hypoSquare); 


//   alert(
//     "Base: " + base +
//     "\nPerpendicular: " + perp +
//     "\nHypotenuse: " + hypotenuse
//   );

//   console.log("Hypotenuse =", hypotenuse);
//   return hypotenuse;
// }


// calculateHypotenuse();

// Qno9

// function rectangleArea(width, height) {
//   return width * height;
// }

// let userWidth = parseFloat(prompt("Enter width of rectangle:"));
// let userHeight = parseFloat(prompt("Enter height of rectangle:"));


// if (isNaN(userWidth) || isNaN(userHeight)) {
//   alert("Please enter valid numbers!");
// } else {

//   let area = rectangleArea(userWidth, userHeight);

//   alert(`The area of rectangle is: ${area}`);
//   console.log("Rectangle Area =", area);
// }
// rectangleArea()

// Qno10
// function isPalindrome(word) {
//     word = word.toLowerCase();
//     word = word.replace(/\s/g, "");

//     let reversed = word.split("").reverse().join("");

//     return word === reversed
// }
// console.log(isPalindrome("Madam"));
// console.log(isPalindrome("Hello"));
// console.log(isPalindrome("nurses run")); 

// Qno11

// function capitalizeFirstLetter(sentence) {
  
//   let words = sentence.split(" "); 


//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }

//   return words.join(" "); 
// }

// let example = 'the quick brown fox';
// console.log(capitalizeFirstLetter(example)); 

// Qno12
// function findLongestWord(sentence) {
//   let words = sentence.split(" "); 


//   let longest = words[0];

//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//       longest = words[i]; 
//     }
//   }

 
//   return longest;
// }

// let example = 'Web Dev Tutorial';
// console.log(findLongestWord(example)); 

// Qno13
// function countLetter(string, letter) {
//   let count = 0; 

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === letter) {
//       count++; 
//     }
//   }

//   return count; 
// }


// let exampleString = prompt("enter string");
// let exampleLetter = prompt("enter letter");
// console.log(countLetter(exampleString, exampleLetter)); 

// Qno14
