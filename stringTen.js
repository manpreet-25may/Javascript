/*Find the number of times the string "not" appears in this sentence - 
a. " Javascript notation %^&* notes that structure rules and not context for nothing"
b. Now, for the above problem, create an array with texts before and after "not" occurrences.*/
let str="Javascript notation %^&* notes that structure rules and not context for nothing";
let n="not";
let times=str.split(n).length-1;
console.log(times)
let arr=str.split("not")
console.log(arr)
