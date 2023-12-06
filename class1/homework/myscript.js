var phoneAmount = 30;
let phonePrice = 119.95;
const itemVat = 1.05;
var totalPrice = itemVat * phoneAmount * phonePrice;
console.log(totalPrice , "total price");

var minutesAmount = prompt("Please enter amount of minutes");
const secValue = minutesAmount * 60;
console.log(secValue , "minutes to seconds");
alert(secValue);

let inputNumber = prompt(" enter No. to increment");
const outputIncrement = ++inputNumber;
console.log(outputIncrement, "Number Increment");
alert(outputIncrement);

let tbase = prompt("Please enter triangle base value")
let theight = prompt("Please enter triengle height")
const triangleArea = tbase * theight * 0.5
console.log(triangleArea , "Triangle Area")
alert(triangleArea);

let recLenght = prompt("Enter rectangle lenght");
let recWidth = prompt("Enter rectangle width");
const recPerimeter = (recLenght + recWidth) * 2;
alert(recPerimeter);
console.log(recPerimeter , "Perimeter Value");

let radiusInput = prompt("Enter radius")
const squareRad = radiusInput * radiusInput
const piNo = 22/7
const circleArea = piNo * squareRad
console.log(circleArea , "Circle area")
alert(circleArea , 'Circle')




