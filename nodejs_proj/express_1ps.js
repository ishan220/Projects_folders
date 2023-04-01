const express = require('express')
const path = require('path')
const app = express()
const body = require('body-parser')
app.use('/', express.static(path.resolve(__dirname, './')))
app.use(body.json())
app.post('/some', (req, res) => {
  console.log('hey something is weird about this post')
  console.log(req.body)
  res.json({ status: 'ok' })
})

app.get('/', (req, res) => {
  console.log('comming here')
  res.send('response sent bck in fur way')
})
app.get('/dammit', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

app.listen(3000, () => {
  console.log('service listening')
})
//app.use('/', path.resolve(__dirname, './'))
