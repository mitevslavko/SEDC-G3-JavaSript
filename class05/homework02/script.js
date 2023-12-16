console.log("======Homework Class05 exercise 02==========");
let numArray = [4, 5, 77, 211];
let listOne = document.getElementsByClassName("listOfNumbers");
console.log(listOne.innerHTML)
listOne[0].innerText = numArray[0];
listOne[1].innerText = numArray[1];
listOne[2].innerText = numArray[2];
listOne[3].innerText = numArray[3];

/*const sumOFArray = numArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0); */

let sumOFArray = 0;
for (let i = 0; i < numArray.length; i++) {
  sumOFArray += numArray[i];
};

paragraphSum.textContent = `The sum of all numbers is ${sumOFArray}.`;
console.log(paragraphSum.innerText);

