let items = []

let input = prompt('What would you like to do')
loop1: while (input) {
  switch (input.toLowerCase()) {
    case 'list':
      for (let item of items) {
        console.log(item)
      }
      break
    case 'add':
      let item = prompt('Enter the item to add')
      items.push(item)
      break
    case 'delete':
      items.pop()
      break
    case 'quit':
      break loop1
  }
  input = prompt('What would you like to do')
}

// WRITE YOUR CODE IN HERE:
const ele = document.getElementsbyTagName('body')
const newele = document.createElement('div')
newele.style.width = '1%'
newele.style.height = '1%'
newele.innerHTML =
  '<button style="position:absolute;width:100%;height:100%;backgroundColor:red;">Some</button>'
for (let i = 1; i <= 100; i++) {
  document.body.appendChild(newele)
}
