let a = 5;
let b = 10;
let c = 15;
let d = 20;

a += 2;
b -= 4;
c *= 3;
d /= 10;
console.log(a, b, c, d);

const pricePerItem = 3500;
const orderedQuantity = 4;
// можна з дужками const totalPrice = (pricePerItem * orderedQuantity);
const totalPrice = pricePerItem * orderedQuantity; 
console.log(totalPrice);


const age = 16;
const isAdult = 18 <= age;
console.log(isAdult);

const correctPassword = "jqueryismyjam";
const userPassword = "mangodab3st";
const isValid = correctPassword === userPassword;
console.log(isValid);

