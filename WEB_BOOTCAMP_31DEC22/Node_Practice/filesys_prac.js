const filesystem = require('fs')
console.log('Hmm Printing')
//console.log(process.argv)
const direc = process.argv[2]
// if (dir) {
//   filesystem.mkdir(`${dir}/Dogs`, { recursive: true }, (err) => {
//     if (err) {
//       console.log('Error aa gya bhai')
//     }
//   })
// }

filesystem.mkdirSync(direc)
filesystem.writeFileSync(`${direc}/index.html`, 'Kuch bhi')
filesystem.writeFileSync(`${direc}/index1.html`, 'Kuch bhi2')
filesystem.writeFileSync(`${direc}/index2.html`, 'Kuch bhi3')
