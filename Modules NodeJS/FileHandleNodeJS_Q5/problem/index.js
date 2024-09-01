// Please don't change the pre-written code
// Import the necessary modules here
const { isUtf8 } = require('buffer');
const fs = require('fs');
const Solution = () => {
  // Write your code here
  fs.writeFileSync('notes.txt', "The world has enough coders")

  let data = fs.readFileSync('notes.txt', { encoding: 'utf-8' })
  console.log(data)

  fs.appendFileSync('notes.txt', " BE A CODING NINJA!")
  data = fs.readFileSync('notes.txt', { encoding: 'utf-8' })
  console.log(data)
};
Solution();
module.exports = Solution;
