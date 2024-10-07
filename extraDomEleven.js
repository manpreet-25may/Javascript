/* Create a form, 3text fields, 2 radio buttons, 1 checkbox and 1 drop down. This is at the hit of 
each key.
a.  If you entering a number in the first text field, it should say ‘number’.
b. If you entering a character in the first text field, it should say ‘string’.
c.  If you enter nothing, it should say ‘null’.
After the user enters the total word(for e.g: – a number or a character), then it should display 
as a ‘number’ or ‘string’.  The moment you select a ‘radiobutton’, it should say ‘selected’.
The checkbox should show-
a.  If the option is checked- display ‘checked’.
b.  If the option is not checked- display ‘unchecked’.
When you hit on ‘submit’, it should alert ‘the form has been successfully submitted’.
*/ 
function frm(){
var n = document.getElementById('intxt1').value
    if (!isNaN(n)){
        document.getElementById('p1').innerHTML='It is a number'+n
    }
    var n2 = document.getElementById('intxt2').value
    if (isNaN(n2)){
        document.getElementById('p2').innerHTML='It is a string'+n2
    }
    var n3 = document.getElementById('intxt3').value
    if (n3==''){
        document.getElementById('p3').innerHTML='It is a null'+n3
    } 
    var ele = document.getElementById('gender');
    var pp=document.getElementById('p4')
    var b=document.getElementById('sub')
    if(ele.checked)
    {
        pp.innerHTML='Selected';

    }
    else{
        pp.textContent='Not Selected'
    }
    // for (var i = 0; i<= ele.length; i++) {
    //     if (ele[i].checked) {
    //         .textContent='selected'; 
    //     }
    // }
    // var st=document.getElementById('state')
    // if(!st.value) {
    //     alert('Select a State!');
    // }
    var chbox=document.getElementById('check')
    if(!chbox.checked){
        document.getElementById('p5').innerHTML='checked'+chbox
    }
}