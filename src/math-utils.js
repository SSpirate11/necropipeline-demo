const add = (a, b) => {
  const unusedVar = 1;
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide = (a, b) => {
  return a / b;
}

const complexCalculation = (a, b) => {
  const temp = a * a + b * b;
  return Math.sqrt(temp);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  complexCalculation
};