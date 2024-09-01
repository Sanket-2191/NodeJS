// Note:  Please do not change the pre-written code

// import the required module here
const m = require('./math')
const Solution = () => {
    const nums = [1, 2, 3, 4, 5];
    // write your code here to Display the results of the calculations on the console.
    let sum = m.sum(nums)
    let mean = m.mean(nums)

    console.log(sum)
    console.log(mean)
};
Solution();
module.exports = Solution;
