/*If I enter an even number, I want previous 5 even numbers to be printed. 
If I enter an odd number, I want previous 5 odd numbers to be printed.*/
var num = parseInt(prompt('Enter a number'));
if (num % 2 == 0) {
    console.log("It is  an even number and 5 previous even numbers are:");
    for (var i = 1; i <= 5; i++) {
        num = num - 2;
        console.log(num);
    }
}
else {
    console.log("It's an odd number and 5 previous odd numbers are:");
    for (var i = 1; i <= 5; i++) {
        num = num - 2;
        console.log(num);
    }
}