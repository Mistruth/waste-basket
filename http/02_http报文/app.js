const app = require('express')()
const path = require('path')

app.get('/',(req,res)=>{
  res.set({
    'Set-Cookie': 'haha=123',
    'Cache-control': 'max-age=60,public'
  })
  res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(3300,()=>{
  console.log('哈哈哈')
})