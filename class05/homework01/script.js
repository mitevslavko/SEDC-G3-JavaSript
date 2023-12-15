console.log("============Homework===========");

let slavkoChange = document.getElementById("myTitle");
slavkoChange.style.color ="red";
slavkoChange.innerText = "Now It\'s not cool ";
let paragraphChange = document.getElementsByClassName("paragraph");
console.log(`This is selected for change:${paragraphChange[0].innerText}`);
paragraphChange[0].innerText = "New change to the paragraph";
let divArt = document.getElementsByTagName("div")[1];
divArt.style.background = "yellow";
divArt.style.border = "2px solid black";

let paragraph2Change = document.getElementsByClassName("second");
console.log(paragraph2Change[0].innerText);
paragraph2Change[0].innerText = "Text is changed from JS";
let textElementChange = document.getElementsByTagName("text");
console.log(textElementChange[0].innerText);
textElementChange[0].innerText = "Text selected and changed from JS";
let secondH1 = document.getElementsByTagName("h1")[1];
console.log(secondH1.innerText)
secondH1.innerText  = "JS made change";
let changeH3text = document.getElementsByTagName("h3")[0];
console.log(changeH3text.innerText);
changeH3text.innerText += " is changed from javascript";

