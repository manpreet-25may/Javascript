/*If you enter ‘1’ – it should print numbers between 1 to 11
If you enter ‘2’- it should print numbers between 2 to 12
If you enter ‘3’- it should print numbers between 3 to 13
If you enter ‘4’-it should print numbers between 4 to 14
If you enter ‘5’-it should print numbers between 5 to 15*/
var num = parseInt(prompt("Enter a number"));
for(i=num;i<=num+10;i++)
{
    console.log(i);
}