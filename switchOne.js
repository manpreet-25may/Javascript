// Write a program to prompt the user for age. If age is equal to 14, alert "coupon 1". 
// If age is equal to 21, alert "coupon 2". If age is equal to 30, alert "coupon 3". 
// If age is equal to 50, alert "coupon 4". Else alert "No coupon".
function coupon() {
    let age = parseInt(prompt("enter age"));
    switch (age) {
        case 14:
            alert("coupon 1");
            break;
        case 21:
            alert("coupon 2");
            break;
        case 30:
            alert("coupon 3");
            break;
        case 50:
            alert("coupon 4");
            break;
        default:
            alert("No coupon");
    }
}
coupon();