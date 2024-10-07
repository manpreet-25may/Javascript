/*There is a link: http://www.pro-tekconsulting.com/main/navigate/about&us/contactus/email/your
info.jsp
a. Alert- ‘contact us’
b. Alert- ‘your info’
c. Have two text fields- Replace ‘navigate’ , ‘contact’ with whatever the user 
enters in the text
field and hits ‘submit’
 */
function link(){
    var str="http://www.pro-tekconsulting.com/main/navigate/about&us/contactus/email/yourinfo.jsp"
    var a=str.split('/')
    var b=str.replace('navigate','contact')
    console.log(a)
    console.log(b)
    alert(a)



    // var text1=document.getElementById('textfield1').value
    // alert(text1)
    // alert('your info')
}



