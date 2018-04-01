function xo(str) {
  var index = str.length - 1
  var countX = 0
  var countO = 0

  for(var i = 0; i <= index; i++) {
    if (str.charAt(i) === 'x') {
      countX++
    }
    else if (str.charAt(i) === 'o') {
      countO++
    }
  }

  if (countX === countO) {
    return true
  } else {
    return false
  }
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
