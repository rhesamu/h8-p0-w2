var rows1 = 10
for (var i = 1; i <= rows1; i++) {
  console.log('*')
}

var rows2 = 10
var temp = ''

for(var i = 1; i <= rows2; i++) {
  temp = temp + '*'
}

for(var j = 1; j <= rows2; j++) {
  console.log(temp)
}

var rows3 = 5
var triangle = ''
for (var i = 1; i <= rows3; i++) {
  for (var j = i-1; j < i; j++) {
    triangle = triangle + '*'
  }
  console.log(triangle)
}
