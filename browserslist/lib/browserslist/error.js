function BrowserslistError (message) {
  this.name = 'BrowserslistError'
  this.message = message
  this.browserslist = true
  if (Error.captureStackTrace) {
    // 把当前错误传进去，stack
    Error.captureStackTrace(this, BrowserslistError)
  }
}

// error的功能都给Browserslist
BrowserslistError.prototype = Error.prototype

module.exports = BrowserslistError
