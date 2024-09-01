// Please do not change the prewritten code

import http from "http";
import fs from "fs";
import path from "path";

const server = http.createServer((req, res) => {
  //  Write your code here

  // const chunk = '{"message": "Be yourself; everyone else is already taken."} ';
  if (req.method == 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    })
    req.on('end', () => {
      const filePath = path.resolve(__dirname, 'data.txt');
      try {
        fs.appendFileSync(filePath, body, 'utf-8');
        const msg = fs.readFileSync('data.txt', { encoding: 'utf-8' });
        console.log(msg)
        res.end("data received");
      } catch (error) {
        console.log(error);
      }
    })

  }
  else {
    res.end('request not found')
  }
});

export default server;
// import http from "http";
// import fs from "fs";
// const server = http.createServer((req, res) => {
//   if (req.method === "POST") {
//     let data = "";
//     req.on("data", (chunk) => {
//       data += chunk.toString();
//     });
//     req.on("end", () => {
//       fs.appendFileSync("data.txt", data);
//       console.log(fs.readFileSync("data.txt", "utf-8"));
//     });
//     res.end("data received");
//   }
// });

// export default server;