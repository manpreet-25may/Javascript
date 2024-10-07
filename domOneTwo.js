/*Have a paragraph. On click of a button, alert the text in the paragraph.*/
function paragraph() {
    var content = document.getElementById("para").innerHTML;
    alert(content);
  }

  /*Have a paragraph. On click of a button, change the backgroundColor and 
  text color of the paragraph.*/
  function p2(){
    var a=document.getElementById('para2')
    a.style.color='red'
    a.style.backgroundColor='green'
  }
