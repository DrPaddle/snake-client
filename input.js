

const handleUserInput = function(key) {
  console.log("data event happened")
  //console.log(key);
  if (key === '\u0003') {
      console.log("You exited")
      process.exit();
    } 
  }

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin

}

setupInput();
module.exports = setupInput;
