var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

const readInput = (input) => {
  return new Promise((resolve) => {
    rl.question(`${input}: `, (answer) => {
      resolve(answer);

    });
  });
};

function startOverOptions(str, arr) {
  return arr.some((el) => el === str);
}

module.exports = {
  readInput,
  startOverOptions,
};
