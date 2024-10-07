/* Have two buttons - "CHECK URL" and "ADD LINK". The button "ADD LINK"  adds the given link the 
list of anchor links. Now on a click of "CHECK URL" button, check to see if
 "http://www.pro-tekconsulting.com" is included in these 5 anchors tags or not.
  If NO, then enable "ADD LINK" button. When you click on this "ADD LINK" button, 
  Pro-Tek website link should be added to the DOM.
*/
function add_Link()
{
  // var list=document.getElementsByClassName('l').value
  // document.write(list)
}
function checkLink(){
 var linkToCheck="http://www.pro-tekconsulting.com"
  var Ulist=document.getElementById('l')
  console.log(Ulist)
  var linkAlreadyPresent=false
  for(var i=0;i<Ulist.length;i++){
    if(linkToCheck==Ulist[i]){
     linkAlreadyPresent=true
    //  return
    }
  }
  if(!linkAlreadyPresent){
    
    // console.log('new link')
    alert('Link  not  present')
    var bt = document.getElementById('addLink')
    bt.style.visibility = 'visible'
  }
  else{
    alert('Link already present')
  }

}
function addLink(){
  var ull=document.getElementById('l')
  ull.push('ba')
}