const {
  PythonShell
} = require('python-shell')

PythonShell.runString('x=1+1;print(x)', null, function (err, result) {
  if (err) throw err;
  console.log(result);
});