//Matches marks with Grade
function gradingSystem (marks){
if (marks < 0 || marks > 100 ) {return "Invalid Input"}
    else if (marks > 79) {return "A";}
    else if (marks >= 60 && marks <= 79) {return "B";}
    else if (marks > 49 && marks <= 59) {return "C";}
    else if (marks >= 40  && marks <=49) {return "D";}
    else {return "E";}
}
//Prompts user to input marks
function inputSystem (){
    let marks = parseInt(prompt('Please enter grades')) // Turns string value to integer
    if (marks < 0 || marks > 100 || NaN(marks) ) {return "Invalid Input"} // Returns "Invalid Input" for invalid inputs
    return gradingSystem(marks) // Grades valid inputs
}
//Examples
console.log(gradingSystem(70))
console.log(gradingSystem(50))
console.log(gradingSystem(200))
console.log(gradingSystem(45))
console.log(gradingSystem(85))
console.log(gradingSystem(35))

