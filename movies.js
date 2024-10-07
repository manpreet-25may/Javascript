// Write a program to prompt the user to enter a year (like 2011, 2012, 2010, etc). 
// Based on the value entered, display the movie that won the Oscars for that year. 
// Just write this for last 8 years. If he enters beyond last 8 years then alert 
// the user to enter between 2003-2012.
function movies() {
    let year = parseInt(prompt("Enter a year"));
    if (year == 2004) {
        alert("AB won the oscar");
    }
    else if (year == 2005) {
        alert("ABB won the oscar");

    }
    else if (year == 2006) {
        alert("BCC won the oscar");

    }
    else if (year == 2007) {
        alert("CCC won the oscar");

    }
    else if (year == 2008) {
        alert("DDD won the oscar");

    }
    else if (year == 2009) {
        alert("EEE won the oscar");

    }
    else if (year == 2010) {
        alert("FFF won the oscar");

    }
    else if (year == 2011) {
        alert("GGG won the oscar");

    }
    else {
        alert("enter year between 2003-2012");
    }
}
movies();