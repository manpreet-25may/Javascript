/*Write a program to print numbers from 12 to 33 and also at the end print 
the sum of all these numbers.*/
var sum = 0;
for (var i = 12; i <= 33; i++) {
    console.log(i);
     sum = sum + i;
}
console.log('The sum of numbers is:', sum);