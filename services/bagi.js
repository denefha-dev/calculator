async function bagi(a, b) {
  if (a === 0 || b === 0) {
    return console.log('Pembagian tidak bisa dengan angka noll')
  } else {
    return console.log(`\nPembagian ${a} : ${b} = ${a / b}`)
  }
}

module.exports = { bagi }
