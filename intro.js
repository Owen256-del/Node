const amount = 12;
if (amount < 10) {
  console.log("small number");
} else {
  console.log("large number");
}

console.log("hey it is my first node app");
/// we run this code in node using the terminal by 'node intro.js' command.

// Commonly used terms

// GLOBALS -NO WINDOW !!!

// __dirname - path to current directory
// __filename - file name
//  require   - function to use modules(Common js )
//  module    - info about current module (file)
//  process   - info about env where the program is being executed

console.log(__dirname);

console.log(__filename);

setInterval(() => {
  console.log("hello world");
}, 1000);
