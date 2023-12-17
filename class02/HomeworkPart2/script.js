console.log("=========Homework class 02 ex 06 =========")
//Ne znaev dali marks treba kako score da bide od 0 do 100?

function calculateGrade() {
    let wrongInputAlert = "Enter a valid number from 0 to 100"
    let physics = parseFloat(prompt("Enter Physics marks: "));
    if (isNaN(physics) || (physics > 100)) {
      alert(wrongInputAlert);
      return;
    }
  
    let chemistry = parseFloat(prompt("Enter Chemistry marks: "));
    if (isNaN(chemistry) || (chemistry > 100)) {
      alert(wrongInputAlert);
      return;
    }
  
    let biology = parseFloat(prompt("Enter Biology marks: "));
    if (isNaN(biology) || (biology > 100 ) ) {
      alert(wrongInputAlert);
      return;
    }
  
    let mathematics = parseFloat(prompt("Enter Mathematics marks: "));
    if (isNaN(mathematics) || (mathematics > 100)) {
      alert(wrongInputAlert);
      return;
    }
  
    let computer = parseFloat(prompt("Enter Computer marks: "));
    if (isNaN(computer) || (computer > 100)) {
      alert(wrongInputAlert);
      return;
    }
  
    let totalMarks = physics + chemistry + biology + mathematics + computer;
    let percentage = (totalMarks / 500) * 100;
  
    let grade;
    if (percentage >= 90) {
      grade = "A";
    } else if (percentage >= 80) {
      grade = "B";
    } else if (percentage >= 70) {
      grade = "C";
    } else if (percentage >= 60) {
      grade = "D";
    } else if (percentage >= 40) {
      grade = "E";
    } else {
      grade = "F";
    }
  
    console.log(`Total Marks: ${totalMarks}`);
    console.log(`Percentage: ${percentage}%`);
    console.log(`Grade: ${grade}`);
  }
  calculateGrade();
  