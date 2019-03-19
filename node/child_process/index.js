const cp = require('child_process')

// 有安全性问题
cp.exec('echo hello world',function(err,stdout){
  console.log(stdout)
})

cp.execFile('echo',['hello','world'],(err,stdout)=>{
  console.log(stdout)
})

