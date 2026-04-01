///NPM  Node Package Manager
//npm is a package manager for JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. npm consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website.

//npm allows users to install and manage packages (libraries or modules) that are available in the npm registry. It also allows users to create and publish their own packages to the registry, making it easier for other developers to use and share their code. npm is widely used in the JavaScript community and has become an essential tool for managing dependencies in modern web development projects.

//To use npm, you need to have Node.js installed on your computer. Once you have Node.js installed, you can use the npm command line interface to install packages, manage dependencies, and publish your own packages to the npm registry. Some common npm commands include:
//npm install <package-name> - Installs a package from the npm registry
//npm init - Initializes a new Node.js project and creates a package.json file
//npm publish - Publishes a package to the npm registry
//npm update - Updates all installed packages to their latest versions
//npm uninstall <package-name> - Uninstalls a package from your project
//Overall, npm is a powerful tool that simplifies the process of managing dependencies and sharing code in the JavaScript ecosystem. It has become an essential part of modern web development and is widely used by developers around the world.

// global depenndency - use it in any project
// npm install -g <package-name>
// sudo npm install -g <package-name>  (for linux and macOS)

// local dependency - use it in a specific project
// npm install <package-name>

// package.json - manifest file (stores important info about project/package)
// - name
// - version
// - description
// - main (entry point of the project)
// - scripts (commands that can be run using npm)
// - dependencies (packages required for the project to run)
// - devDependencies (packages required for development only)

// To create a package.json file, you can use the following command in your terminal:
// npm init
// This command will prompt you to enter information about your project, such as the name, version, description, entry point, and more. Once you have provided the necessary information, npm will generate a package.json file for you in the current directory. You can then use this file to manage your project's dependencies and scripts.
// init -y(everything default)

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
