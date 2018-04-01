function konversiMenit(totalSeconds) {
  var minutes = Math.floor(totalSeconds / 60)
  var seconds = totalSeconds % 60

  if(seconds < 10) {
    return(minutes + ":0" + seconds)
  }
  else {
    return(minutes + ":" + seconds)
  }
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
