/*. Have an image.
a. On click of a button, replace the image with another image.
b. On click of a button, hide the image
c. On click of a button, show the image
 */
function imageChange() {
    var image = document.getElementById('image');
    image.src = 'car2.jpg';
    }
  
  function imageShowHide() {
    var a = document.getElementById("image");
    if (a.style.display == "none") {
      a.style.display = "block";
    } 
    else {
      a.style.display = "none";
    }
  }

  