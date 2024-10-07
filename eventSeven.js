/* Create 10 check boxes and 2 buttons. First button is select All, and second button is unselect All. 
When you click a button called "Select All" - all the check boxes should be checked. When you click 
on unselect All, all check boxes should be unselected.
 */
function selectAll(){
    var check=document.getElementsByClassName('chk');
    for(var i=0;i<check.length;i++){
        check[i].checked=true;
    }

}
function unselectAll(){
    var uncheck=document.getElementsByClassName('chk');
    for(var i=0;i<uncheck.length;i++){
        uncheck[i].checked=false;
    }

}