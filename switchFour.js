// Write a program to prompt the user to enter the Grade of a student (like A+, A, A-, B etc).
//Based on the value entered, display terms like "Excellent", "Good Job", "Average" etc.
function abc(){
    let grades=prompt("enter grade");
    let grade=grades.toUpperCase();
    switch(grade){
        case "A+":
            alert("Excellent");
            break;
        case "A":
            alert("Good Job");
            break;
        case "B":
            alert("Average");
            break;
        default:
            alert("Work Hard");
    }
}
abc();