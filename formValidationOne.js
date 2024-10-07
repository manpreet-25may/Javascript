/*Create a form with First Name, Last Name, radio buttons for Gender (Male and Female), 
drop down menu for State, a check box for I ACCEPT and a submit button. At the click of submit button,
 the following should be validated.
1. If the First Name and Last Name fields are left blank or has a number, the background 
color of the text box should change to red color.
2. If the Gender is not selected, alert the user to select at least one option.
3. If the State is not selected, alert the user to select a state.
4. If the check box is not selected, alert the user to check the box.
 */
function validation() {
    var fn = document.getElementById('fname')
    if (fn.value == '' || fn.value == null || isNaN('fn')) {
        fn.style.backgroundColor = 'red'
    }
    var ln = document.getElementById('lname')
    if (ln.value == '' || ln.value == null || isNaN('ln')) {
        ln.style.backgroundColor = 'red'
    }
    var a = document.getElementById("male");
    var b = document.getElementById("female");
    if (a.checked == false && b.checked == false) {
        alert("select at least one option");
    }
    var st=document.getElementById('state')
    if(!st.value) {
        alert('Select a State!');
    }
    var chbox=document.getElementById('check')
    if(!chbox.checked){
        alert('Check the box')
    }
}
