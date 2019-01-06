const {
  PythonShell
} = require('python-shell')

// PythonShell.runString('x=1+1;print(x)', null, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

PythonShell.run('main.py', null, (err, results) => {
  if (err) {
    throw err;
  }
  console.log('results', results[0])
})