/* Have two divs side by side - lets call them "Form Div" and "View Div". 
a. The first div - "Form Div" should have a simple form with fields - first name, last name, gender, 
state (select box) and "Save" button.
b. The "View Div" should have a button called "EDIT" - but this button should be hidden by default.
c. When you click on the "Save" button, the user entered data should appear in the "View Div" -
 also the form input fields should be cleared out (should be empty).
d. The View Div should display form data in span tags or p tags or div tags but not as input tags. 
Also the "EDIT" button should now be visible.
e. When you click on the "EDIT" button, the form should be repopulated with the data so that you 
can make some changes and save again.
*/
function data() {
    var fn = document.getElementById('fname').value
    var ln = document.getElementById('lname').value
    var st = document.getElementById('state').value
    var nn = document.getElementById('n')
    var fna = document.getElementById('fnam')
    var states = document.getElementById('sta')
    var fm = document.getElementById('set')
    nn.innerHTML = fn
    fna.innerHTML = ln
    var ele = document.getElementsByName('gender');
    var g = document.getElementById('gend')
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            g.innerHTML = ele[i].value;
        }
    }
    states.innerHTML = st
    fm.reset()
    var bt = document.getElementById('btn')
    bt.style.visibility = 'visible'
}
function edit() {
    var nn = document.getElementById('n').innerHTML
    var fna = document.getElementById('fnam').innerHTML
    var states = document.getElementById('sta').innerHTML
    var fn = document.getElementById('fname')
    var ln = document.getElementById('lname')
    var st = document.getElementById('state')
    fn.value = nn
    ln.value = fna
    // var g = document.getElementById('gend')
    // var ele = document.getElementsByName('gender');
    //ele.value =g.innerHTML ;
    st.value = states
}

