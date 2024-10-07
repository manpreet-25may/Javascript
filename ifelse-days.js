// Write a program to prompt the user to enter a day (like Monday, Tuesday, Wednesday, etc). 
// Based on the value entered by the user, display a special dish. 
// For example, if the user enters Monday then alert "Mondays, We serve Pasta". 
// If the user enters Friday then alert "Fridays, we serve Tacos".
function abc() {
    let days = prompt("Enter day");
    //debugger;
    let day = days.toLowerCase();
    if (day == "monday") {
        alert("Mondays, We serve Pasta.");
    }
    else if (day == "tuesday") {
        alert("Tuesdays, We serve Burritos");
    }
    else if (day == "wednesday") {
        alert("Wednesdays, We serve Burgers");
    }
    else if (day == "thursday") {
        alert("Thursdays, We serve Noodles");
    }
    else if (day == "friday") {
        alert("Fridays, We serve Tacos");
    }else{
        alert("we are not available");
    }
}
abc();
