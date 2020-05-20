
let id = setInterval(() => {
  console.log('hello!', Date.now())
}, 1000)

setTimeout(() => {
  console.log('clearing', Date.now())
  clearInterval(id)
}, 5000)