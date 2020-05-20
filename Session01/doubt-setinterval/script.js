

let intervalId
let runCount = 0
function sayHello() {
  console.log('entry', runCount,  Date.now())
  runCount++
  if (runCount > 5) {
    clearInterval(intervalId)
  }
  console.log('Hello!')
  console.log('exit', runCount, Date.now())
}

intervalId = setInterval(sayHello, 1000)