// 1. Melakukan Looping Menggunakan While
var count1 = 0
var count2 = 20

console.log('LOOPING WHILE PERTAMA')
while(count1 < 20) {
  count1 = count1 + 2
  console.log(count1 + ' - I love coding')
}

console.log('LOOPING WHILE KEDUA')
while(count2 > 0) {
  console.log(count2 + ' - I love coding')
  count2 = count2 - 2
}

// 2. Melakukan Looping Menggunakan For
console.log('LOOPING FOR PERTAMA')
for (var i = 1; i <= 20; i++) {
  console.log(i + ' - I love coding')
}

console.log('LOOPING FOR KEDUA')
for (var i = 20; i > 0; i--) {
  console.log(i + ' - I will become fullstack developer')
}

// 3. Angka Ganjil dan Genap
console.log('LOOPING GANJIL GENAP')
for (var i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + ' - GENAP')
  } else {
    console.log(i + ' - GANJIL')
  }
}

console.log('LOOPING KELIPATAN 3 (counter += 2)')
for (var i = 1; i <= 100; i += 2) {
  if (i % 3 === 0) {
    console.log(i + ' KELIPATAN 3')
  }
}

console.log('LOOPING KELIPATAN 6 (counter += 5)')
for (var i = 1; i <= 100; i += 5) {
  if (i % 6 === 0) {
    console.log(i + ' KELIPATAN 6')
  }
}

console.log('LOOPING KELIPATAN 10 (counter += 9)')
for (var i = 1; i <= 100; i += 9) {
  if (i % 10 === 0) {
    console.log(i + ' KELIPATAN 10')
  }
}
