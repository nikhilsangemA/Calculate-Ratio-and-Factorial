const factorialOfNumber = require("../factorial/index.js");
const ratioOfTwoNumbers = require("../ratio/index.js");

const ratioAndFactorial = (a, b, c) => {
  const factorial = factorialOfNumber(c);
  const ratio = ratioOfTwoNumbers(a, b);
  return { factorial, ratio };
};

module.exports = ratioAndFactorial;
