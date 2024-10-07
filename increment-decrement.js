let a = 20;
let b = 40;
let sum;
function add() {
  ++a;
  console.log(a);
  sum = a + b;
  console.log(sum);
}
add();
function sub() {
  --a;
  console.log(a);
  console.log(a - b);
}
sub();
