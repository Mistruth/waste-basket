

function MyPromise(cb){
  let self = this
  self.status = 'pending'
  self.value = undefined
  self.reason = undefined

  function resolve(value){
    if(self.status === 'pending'){
      self.value = value
      self.status = 'resolved'
    }
  }

  function reject(reason){
    if(self.status === 'pending'){
      self.reason = reason
      self.status = 'rejected'
    }
  }

  try {
    cb(resolve,reject)
  } catch(e){
    reject(e)
  }

}

MyPromise.prototype.then = function(onfullfilled,onrejected){
  const self = this
  if(self.status === 'resolved'){
    onfullfilled(self.value)
  }
  if(self.status === 'rejected'){
    onrejected(self.reason)
  }
}