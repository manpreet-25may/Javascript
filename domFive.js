
/* Have an image and two buttons, PREV and NEXT. Have 10 images in an array. 
When you click on NEXT, the next picture should display and when you click on PREV,
 the previous image should display.
*/
var arrimages=['car1.gif','car2.jpg','car3.jpg','car4.gif','car6.gif','car7.gif']      
let i=0;
function next() {
    if (i != arrimages.length - 1) {
        i++;
        image.src=arrimages[i]
    }
}
function previous() {
    if (i != 0) {
        i--;
        image.src=arrimages[i]
    }        
}
