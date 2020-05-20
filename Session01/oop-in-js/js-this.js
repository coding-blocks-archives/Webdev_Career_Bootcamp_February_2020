

function printThis() {
  console.log('this = ', this)
  return this
}

let obj1 = {
  a: 10,
  b: 20,
  fn: printThis
}
// obj1.fn ??

let obj2 = {
  p: 'asds',
  q: 'afadg',
  fun: printThis
}


let obj3 = {}
obj3.x = 12
obj3.y =  'asd'
obj3.z = true