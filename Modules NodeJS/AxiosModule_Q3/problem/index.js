// Please do not change the prewritten code
const axios = require('axios')
const Solution = async () => {
  // Write your code here
  const response = await axios.get(`https://api.codingninjas.com/api/v3/event_tags`)
  const data = response.data;
  console.log(data)
};
Solution();
module.exports = Solution;
