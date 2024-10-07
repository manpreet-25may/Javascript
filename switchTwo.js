// Write a program to prompt the user to enter a day (like Monday, Tuesday, Wednesday, etc). 
// Based on the value entered by the user, display a special dish. 
// For example, if the user enters Monday then alert "Mondays, We serve Pasta". 
// If the user enters Friday then alert "Fridays, we serve Tacos".
function abc() {
    let days = prompt("enter a day");
    let day = days.toLowerCase();
    switch (day) {
        case "monday":
            alert("Mondays, we serve Pasta");
            break;
        case "tuesday":
            alert("Tuesdays,we serve burritos");
            break;
        case "wednesday":
            alert("Wednesdays,we serve noodles");
            break;
        case "thursday":
            alert("Thursdays, we serve burgers");
            break;
        case "friday":
            alert("Fridays, we serve tacos");
            break;
        default:
            alert("We are closed");
    }
}
abc();