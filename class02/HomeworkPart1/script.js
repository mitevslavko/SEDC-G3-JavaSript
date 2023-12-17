let num1Input = prompt("Enter a number");
let num2Input = prompt("Enter another number");

let num1 = parseInt(num1Input);
let num2 = parseInt(num2Input);

if(num1 > num2) {
    console.log(num1 + " is bigger than " + num2)
} else if(num1 < num2) {
    console.log(num2 + " is the MAX No.")
} else if(num1 == num2) {
    console.log("Both numbers are equal")
} else {
    console.log("please enter valid input?")
}

// Vtora zadacha
console.log("============Vtora zaacha =============")
let number1Input = prompt("Enter a number");
let number2Input = prompt("Enter another number");
let number3Input = prompt("Enter the third");

let number1 = parseInt(number1Input);
let number2 = parseInt(number2Input);
let number3 = parseInt(number3Input);

console.log(Math.max(number1, number2, number3));

//treta zadacha
console.log("===========Treta zadacha============");

let numbercheck =prompt("To check type enter No.");

if(isNaN(numbercheck)) {
    console.log("Invalid input. Enter number");
    alert("Wrong entry! Enter valid imput!")
} else {
    numbercheck = Number(numbercheck);
    if (numbercheck > 0) {
        console.log("The number is positive")
        alert("Positive number");
    } else if (numbercheck < 0) {
        console.log("Number is negative")
        alert("Negative No.")
    } else {
        console.log("The number is zero")
    }
}

//zadcha 4
console.log("===========zadacha 4 so switch=============");

let dayPrompt = prompt("Enter week day (1-7)")
let day = parseInt(dayPrompt)
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input value");
        break;
}

// Zadacha 5
console.log(" ========= zadacha 5 ============")

let inputNumPrompt = prompt("Enter Value to check if its Number")
function checkNumber(inputNumPrompt) {
    return !isNaN(parseFloat(inputNumPrompt)) && isFinite(inputNumPrompt);
}
console.log(checkNumber(inputNumPrompt));


