const connect = require('connect')

const app = connect()

app.use('/',(req,res)=>{
  res.end('hello')
})

app.listen(3400)