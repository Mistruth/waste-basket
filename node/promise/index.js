const p = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('success')
  },1000)
  console.log('创建了一个新的Promise')
})

p.then(x=>{
  console.log(x)
})

