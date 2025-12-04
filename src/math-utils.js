// INTENTIONAL LINT ERRORS:
// - Missing semicolons
// - Unused variables
// - Wrong quotes

function add(a, b) {
  const result = a + b
  const unusedVar = 42  // Unused variable
  return result
}

function subtract(a, b) {
  return a - b  // Missing semicolon
}

function multiply(a, b) {
  const temp = "temporary"  // Double quotes instead of single
  return a * b
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero")  // Double quotes
  }
  return a / b  // Missing semicolon
}

module.exports = {
  add,
  subtract,
  multiply,
  divide
}  // Missing semicolon
