function writeCards(array,eventName) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    console.log(newArray)
  }
  return newArray
}

function countDown(integer) {
  while (integer >= 0)
  console.log(integer--)
}
