// Write a program to prompt the user to enter the Grade of a student 
// (like A+, A, A-, B etc). Based on the value entered, display terms like 
// "Excellent", "Good Job", "Average" etc.

function abc(){
    let grade=prompt("Enter grade");
    let grades = grades.toLowerCase();
    if(grade=="A+"){
        alert("Excellent");
    }
    else if(grade=="A" || grade=="A-")
    {
        alert("Good Job");
    }
    else if(grade=="B"){
        alert("Average");
    }
    else{
        alert("Fail");
    }
}
abc();
