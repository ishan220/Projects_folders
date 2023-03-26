//import  from '../node_modules/axios/dist/esm/axios.js'
let winningscore = 0
let winningscoreele = document.getElementById('dropdownscore')
winningscoreele.addEventListener('change', function () {
  winningscore = this.value
})

function firstvalInc() {
  console.log('yha to aa ja')

  console.log(winningscore)
  let ele = document.body.getElementById('firstVal')
  console.log(parseInt(ele.innerText) + 1)
  //  console.log(isNan(parseInt(ele.innerText)))
  if (!isNaN(parseInt(ele.innerText)) && parseInt(ele.innerText) < winningscore)
    ele.innerText = parseInt(ele.innerText) + 1
  //document.getElementById('firstVal').value = value
}

// const fetchap = async (e) => {
//   const config = {
//     params: { tvrage: 1 },
//   }
//   try {
//     await axios.get('/lookup/shows?', config)
//   } catch (err) {
//     console.log(`${err}`)
//   }
// }

window.document.getElementById('formButton').onclick = async function fetch(e) {
  const divcon = document.getElementById('imageContainer')
  console.log('Yha tak to aa rha hai chalo')
  e.preventDefault()
  let res
  const config = {
    params: {
      q: `${document.getElementById('addToList').elements.query.value}`,
    },
  }
  try {
    res = await axios.get('https://api.tvmaze.com/search/shows/', config)
  } catch (err) {
    console.log(`error from API:${err}`)
  }
  let ctr = 0
  const shows = res.data
  console.log(shows)
  if (shows != undefined) {
    console.log('yha bhi aa ra')
    for (let result of shows) {
      if (result.show.image) {
        console.log('yha aa ra kya')

        const newImg = document.createElement('IMG')
        newImg.src = result.show.image.medium
        newImg.style.width = '100px'
        newImg.style.height = '100px'
        console.log(newImg.src)
        divcon.appendChild(newImg)
      }
    }
  }
}
