/*Write a program to convert Fahrenheit temperature to Celsius. Here are the things that needs to 
be implemented as a part of this question:
a. Ask the input from the user for Fahrenheit using a text field
b. As soon as the user types in the Fahrenheit number in the text field, the result should display
\ immediately in the div below
c. Hence, there should not be any submit button
d. Hint: Use onkeyup event. Formula is :  C = (F - 32) * 5/9
e. Don't display the decimal values - but you should accept decimal values from the user
f. If the user enters any invalid values (strings) ) then you should make the input box border 
red and prompt user to enter correct values */


function temperature() {
    var F = document.getElementById('temp').value
    //    alert(typeof(F))
    if (isNaN(parseInt(F))) {
        //temp.style.borderColor ='red'
        document.getElementById("temp").style.borderColor = "20px solid red"
        alert('enter correct values')
     return
    }
    var C = parseInt((F - 32) * 5 / 9)
    document.getElementById('disp').innerHTML = C
}

