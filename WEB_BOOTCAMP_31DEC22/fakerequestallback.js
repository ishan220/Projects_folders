const axios = require('axios')
// function fakerequestcallback(url, success, failure) {
//   const delay = Math.floor(Math.random() * 4500) + 500
//   setTimeout(() => {
//     if (delay > 4500) failure('Connection Timedout')
//     else success('Connection Success')
//   }, delay)
// }

// fakerequestcallback(
//   'book.com',
//   function () {
//     console.log('It worked')
//     fakerequestcallback(
//       'book.com',
//       function () {
//         console.log('It worked 2')
//       },
//       function () {
//         console.log('It failed 2')
//       }
//     )
//   },
//   function () {
//     console.log('Error from 1st Callback!!!')
//   }
// )

function fakeRequestPromise(url) {
  return new Promise((resolved, reject) => {
    const delay = Math.floor(Math.random() * 4500 + 500)
    setTimeout(() => {
      if (delay > 4500) reject('Connection Timed Out')
      else resolved('Connection Established')
    }, delay)
  })
}

// fakeRequestPromise('abcd.com')
//   .then(() => {
//     console.log('Success from request 1')
//     fakeRequestPromise('abcd.com')
//       .then(() => {
//         console.log('Success from Request 2')
//       })
//       .catch(() => {
//         console.log('Failure From Request 2')
//       })
//   })
//   .catch(() => {
//     console.log('Error from request 1')
//   })

fakeRequestPromise('abcd.com')
  .then(() => {
    console.log('Success from request 1')
    return fakeRequestPromise('abcd.com')
  })
  .then(() => {
    console.log('success from Request2 ')
  })
  .catch((msg) => {
    console.log(`${msg}`)
  })

const fetchap = async (e) => {
  const config = {
    params: { tvrage: 1 },
  }
  try {
    await axios.get('/lookup/shows?', config)
  } catch (err) {
    console.log(`${err}`)
  }
}
