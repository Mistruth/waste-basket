// 参数是一个脚本文件
const worker = new Worker('work.js')

worker.postMessage('Hello World')

worker.onmessage = (e) => {
  console.log(e.data)
  worker.terminate()
}

