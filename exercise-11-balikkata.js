function balikKata(kata) {
  var index = kata.length - 1;
  var reversed = ''

  while(index >= 0) {
    reversed = reversed + kata[index]
    index = index - 1
  }

  return reversed
}

var name = "Rhesa Utomo"
console.log(balikKata(name))
