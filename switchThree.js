//  Write a program to prompt the user to enter a year (like 2011, 2012, 2010, etc). 
// Based on the value entered, display the movie that won the Oscars for that year.
//  Just write this for last 8 years. If he enters beyond last 8 years then alert the 
//  user to enter between 2003-2012.
function movies(){
    let year= parseInt(prompt("enter year"));
    switch(year){
        case 2004:
            alert("AB won the oscar");
            break;
            case 2005:
                alert("BB won the oscar");
                break;
            case 2006:
                alert("CC won the oscar");
                break;
            case 2007:
                alert("DD won the oscar");
                break;
            case 2008:
                alert("EE won the oscar");
                break;
            case 2009:
                alert("FF won the oscar");
                break;
            case 2010:
                alert("GG won the oscar");
                break;
            case 2011:
                alert("HH won the oscar");
                break;
                default:
                    alert("enter year between 2003-2012");
    }
    }
movies();