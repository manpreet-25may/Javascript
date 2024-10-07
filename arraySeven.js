/*Ask for a prompt, if I enter ‘Monday’, in console display-  Tuesday’,’Wednesday’,’Thursday’,’Friday’and ‘Saturday.
If I enter ‘Tuesday’,in console display ’Wednesday’,’Thursday’,’Friday’and ‘Saturday’.
If I enter ‘Wednesday’,in console display ’Thursday’,’Friday’and ‘Saturday’.
If I enter ‘Thursday’, in console- ‘Friday’and ‘Saturday’.
If I enter ‘Friday’, in console- ‘Saturday’.
If I enter ‘Saturday,in console –‘Sunday’.
If I enter ‘Sunday’, in console- it is the last day of the week.
 */
var daysOfWeek=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var day=prompt("Enter the day of the week");
var days=day.toUpperCase();
var index=daysOfWeek.indexOf(day);
if(index!== -1){
    var nextdays=daysOfWeek.slice(index+1);
    for(var i=0;i<nextdays.length;i++)
    {
        console.log(nextdays[i]);
    }
}
else{
    console.log('It is the last day of the week')
}