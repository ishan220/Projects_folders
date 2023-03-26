const express = require('express')
const app = express()
console.dir(app)

app.get('/search', (req, res) => {
  console.log(req.query)
  res.send(req.query)
})
app.get('/search1/:param1', (req, res) => {
  console.log(req.params)
  res.send(req.params)
})
app.use((req, res) => {
  console.log('Listening to 3000 port Again!')
  res.send(`<h1>Yeah!! Its Hitting the Url</h1>`)
})
//app.get('/search', (req, res) => {
//console.log(req.query)
//})

app.listen(4000, () => {
  console.log('Listening to 3000 Port')
})
