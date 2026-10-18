const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(nums) {
  return nums.reduce((total, current) => total + current, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, current) => total * current, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
  let fract = 1;
  for (let i=1; i<=num; i++){
    fract *= i;
  }
  return fract;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
