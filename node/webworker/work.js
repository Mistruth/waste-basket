self.addEventListener('message',(e)=>{
  self.postMessage('you said' + e.data)
  self.close()
})
