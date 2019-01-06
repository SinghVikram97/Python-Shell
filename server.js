const {
  PythonShell
} = require('python-shell')

// PythonShell.runString('x=1+1;print(x)', null, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });
let options = {
  args: [2, 3]
};

PythonShell.run('main.py', options, (err, results) => {
  if (err) {
    throw err;
  }
  console.log('results', results)
})