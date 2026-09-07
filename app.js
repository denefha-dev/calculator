const readline = require('node:readline/promises')
const { stdin: input, stdout: output } = require('node:process')

// local modules
const { tambah } = require('./services/tambah.js')
const { kurang } = require('./services/kurang.js')

const rl = readline.createInterface(
  {
    input, output
  }
)


// main function
async function calculator() {
  try {
    const a = Number(await rl.question('Masukan angaka pertama: '))
    const b = Number(await rl.question('Masukan angka kedua: '))
    const c = await rl.question('Metode [+, -, /, *]: ')

    // error message
    if (Number.isNaN(a) || Number.isNaN(b)) {
      throw new Error('hanya bisa memasukan angka!!')
    }

    // metode menghitung
    if (c === "+") {
      await tambah(a, b)
    } else if (c === "-") {
      await kurang(a, b)
    }

  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
  // close program
  rl.close()
}

calculator()
