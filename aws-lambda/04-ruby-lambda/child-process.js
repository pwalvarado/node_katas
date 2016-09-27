// http://nodejs.org/api.html#_child_processes
var exec = require('child_process').exec;

// executes `pwd`
exec('pwd', function (error, stdout, stderr) {
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});

//execute ls
// or more concisely
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { console.log(stdout); }

exec('ls -la', puts);
