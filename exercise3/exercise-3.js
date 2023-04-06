const sum =  (a, b) => {
  return a + b;
}

const subtract =  (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide =  (a, b) => {
  return a / b;
}

const log =  (value) => {
  console.log(value);
}

let sum1 = sum(2,4);
let sum2 = sum(5,2);
let product = multiply(sum1,sum2);
let menus = subtract (product,2);
let rest = divide(menus,5);

log(rest);