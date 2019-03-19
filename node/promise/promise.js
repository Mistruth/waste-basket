// 规范

// （1）"promise"是一个对象或者函数，该对象或者函数有一个then方法
// （2）"thenable"是一个对象或者函数，用来定义then方法
// （3）"value"是promise状态成功时的值
// （4）"reason"是promise状态失败时的值
class MyPromise {
  
  constructor(cb){
    this.status = 'pending'
    this.value = undefined
    this.reason = undefined
    try {
      cb(this.resolve,this.reject)
    }
    catch (e){
      throw new Error(e)
    }
  }

  resolve(value){
    if(this.status === 'pending'){
      this.status = 'resolved'
      this.value = value
    }
  }

  reject(reason){
    if(this.status === 'pending'){
      this.status = 'rejected'
      this.reason = reason
    }
  }

  then(onfullfilled,onrejected){
    if(this.status === 'resolved'){
      onfullfilled(this.value)
    }
    if(this.status === 'rejected'){
      onrejected(this.reason)
    }
  }

}