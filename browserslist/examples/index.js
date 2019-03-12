const browserslist = require('../lib/browserslist/index')

const  a = browserslist("last 3 version and >0.5% and not dead",{})

console.log(a)