class EventEmitter {
  constructor() {
    this.handlers = {}
  }

  on(name,cb){
    if(!this.handlers){
      this.handlers = {}
    }
    if(!this.handlers[name]){
      this.handlers[name] = []
    }
    this.handlers[name].push(cb)
  }

  emit(name,...arg){
    if(this.handlers[name]){
      for(let i = 0;i < this.handlers[name].length;i++){
        this.handlers[name][i](...arg)
      }
    }
  }
}

const e = new EventEmitter()
e.on('a',(arg)=>{
  console.log(arg)
})
e.emit('a','sdaaf')