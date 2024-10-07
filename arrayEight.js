/*. Ask for a prompt, if I enter ‘Monday’, in console display ‘Tuesday’,’Wednesday’,’Thursday’,’Friday’,‘Saturday’ ,’Sunday’and ‘Monday’.
When I enter ‘Tuesday’, in console display ’Wednesday’,’Thursday’,’Friday’,‘Saturday’ ,’Sunday’ ‘Monday’ and ‘Tuesday’.
When I enter ‘Wednesday’, in console display ’Thursday’,’Friday’,‘Saturday’ ,’Sunday’, ‘Monday’,’Tuesday’ and ‘Wednesday’.
When I enter ‘Thursday’, in console display ’Friday’,‘Saturday’ ,’Sunday’,‘Monday’, ‘Tuesday’ and ‘Wednesday’.
When I enter ‘Friday’, in console display ‘Saturday’ ,’Sunday’,‘Monday’, ‘Tuesday’ ,‘Wednesday’,’Thursday’ and ‘Friday’.
When I enter ‘Saturday’, in console display ‘Sunday’,‘Monday’, ‘Tuesday’ ,‘Wednesday’,’Thursday’ and ‘Friday’ and ‘Saturday’.
When I enter ‘Sunday’, in console display ‘Monday’, ‘Tuesday’ ,‘Wednesday’,’Thursday’, ‘Friday’and ‘Saturday’.
 */
var daysOfWeek=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var day=prompt("Enter the day of the week");
var days=day.toLowerCase();
var index=daysOfWeek.indexOf(day);
if(index!== -1){
    var nextdays=daysOfWeek.slice(index+1).concat(daysOfWeek.slice(0,index +1));
    for(var i=0;i<nextdays.length;i++)
    {
        console.log(nextdays[i]);
    }
}
