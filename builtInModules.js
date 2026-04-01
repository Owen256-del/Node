// Built in modules in Node.js are modules that come already installed with Node-- so you do not install them with npm
// You use them directly with require().

// fs- file syatems (writter) : used to create, read, update and delete files
// os - operating system info :: gets computer/system information
// path - file path ;; used to build safe file paths
// http - create server ;; This how backend starts

// const os = require("os");

// //info about current user

// const user = os.userInfo();
// console.log(user);

// // method returns the system uptime in  seconds

// console.log(`The system Up  time is ${os.uptime()} seconds`);

// const currentOs = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };
// console.log(currentOs);

/************** Path ************************/

// const path = require("path");
// console.log(path.sep);

// const filePath = path.join("/Current", "subfolder", "text.txt");
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname, "Current", "subfolder", "text.txt");
// console.log(absolute);

//////////////////////////////////////////////////
/* ******************** FS **********************/
// const fs = require('fs') or destructure right away

/*
// synchronous way

const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./Current/first.txt", "utf8");
const second = readFileSync("./Current/subfolder/second.txt", "utf8");

//console.log(first, second);

writeFileSync(
  "./Current/written.txt",
  `here is the results ${first} ${second}`,
  { flag: "a" },
);
/// flag creates the duplicate of the file. rather creates a similar repeated text
*/

// ASYNCHRONOUS WAY

// const { readFile, writeFile } = require("fs");

// readFile("./Current/first.txt",'utf-8', (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile("./Current/subfolder/second.txt",'utf-8', (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile(
//       "./Current/written.txt",
//       `here is the results: ${first} ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result);
//       },
//     );
//   });
// });


//////////////////////////////////////////////////////
//Difference between synchronous and asynchronous is that synchronous blocks the code execution until the task is completed, while asynchronous allows other tasks to run while waiting for the task to complete. In the example above, the synchronous way will read and write files one after another, while the asynchronous way will allow other tasks to run while waiting for the file operations to complete.  

// ////////////  HTTP //////////////////////////////
//http module is used to create a server in Node.js. It allows you to handle HTTP requests and responses, making it possible to build web applications and APIs. With the http module, you can create a server that listens for incoming requests and sends back responses based on the request data. This is how backend development starts in Node.js, as it provides the foundation for building web servers and handling client-server communication. 
// const http = require("http");
// ////////////////////////////////