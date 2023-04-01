//const fs = require('fs')
const divide = require('./divide.js')
function add(a, b) {
  return a + b
}
function multiply(a, b) {
  return a * b
}

console.log(add(5, 6))
export default multiply
export { add }
