const fs = require('fs')

fs.writeFile('hello.txt', 'Atmanirbhar Bano', (err) => {
  if (err) throw err 
  console.log('file written')
})

fs.readFile('hello.txt', (err, data) => {
  if (err) throw err 
  console.log(data.toString())
})