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
    let marks = parseInt(prompt('Please enter grades'))
    if (marks < 0 || marks > 100 || NaN(marks) ) {return "Invalid Input"}
    return gradingSystem(marks)
}





