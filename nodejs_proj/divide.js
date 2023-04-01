//const { module } = require('module')

function divide(a, b) {
  let res
  try {
    res = a / b
  } catch (err) {
    console.log('division not possible')
  }
  return res
}
module.exports = { divi: divide }
