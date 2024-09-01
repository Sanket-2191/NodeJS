// Import required module
const readline = require('readline')
const { stdin: input, stdout: output } = require('node:process');
const Solution = () => {
  // Write your code here
  let qInterface = readline.createInterface(
    process.stdin, process.stdout);
  // { input: process.stdin, output: process.stdout }
  qInterface.question("Enter the first number: ", (num1) => {
    qInterface.question("Enter the second number: ", (num2) => {
      let numA = Number(num1)
      let numB = Number(num2)
      let max = Math.max(numA, numB)
      console.log("Maximum of the two numbers is: ", max);
      qInterface.close();
    })
  });

};

Solution();
module.exports = Solution;
