// console.log('Hi there how are you')
// const fs = require('fs')
// fs.readFile('hello.txt', 'utf-8', function (error, data) {
//   if (error) console.log('error in importing the file')
//   else console.log(data)
// })
// console.log(process.argv[0])
document.getElementById('submit').onclick = () => {
  let username = document.getElementById('name').value
  console.log(username)
  console.log('Yha aa rha hai kya')
  fetch('/some', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: username,
    }),
  })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
    })
}
