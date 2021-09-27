const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};
let display = 0;
const operate = function (operators, a, b) {
  switch (operator) {
    case "add":
      add(a, b);
      break;
    case "subtract":
      subtract(a, b);
      break;
    case "multiply":
      multiply(a, b);
      break;
    case "divide":
      divide(a, b);
      break;
  }
};
