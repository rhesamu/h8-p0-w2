var tanggal = 21;
var bulan = 4;
var tahun = 1994;

switch(bulan) {
  case 1: bulan = "Januari"; break;
  case 2: bulan = "Februari"; break;
  case 3: bulan = "Maret"; break;
  case 4: bulan = "April"; break;
  case 5: bulan = "Mei"; break;
  case 6: bulan = "Juni"; break;
  case 7: bulan = "Juli"; break;
  case 8: bulan = "Agustus"; break;
  case 9: bulan = "September"; break;
  case 10: bulan = "Oktober"; break;
  case 11: bulan = "November"; break;
  case 12: bulan = "Desember"; break;
  default: bulan = "Salah bulan"; break;
}

console.log(tanggal + ' ' + bulan + ' ' + tahun)

/*
var name = 'Bob Saget'
var count = 0

// .length -> count the characters

console.log(name.length)

while (count < name.length) {
  if(name[count].toLowerCase() === 'b') {
    console.log(name[count])
  }
  count++
} // Prints 'B' and 'b'
*/

/* Balik kata
var name = 'Bob Saget'
var count = name.length - 1
var i = 0
var reversed = ''

while(count >= 0) {
  reversed = reversed + name[count]
  count = count - 1
  i = i + 1
}

console.log(reversed)
*/
