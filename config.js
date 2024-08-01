const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "STRV 3.5"
global.ownerName = "STRV 3.5"
global.botNumber = "6287729182842"
global.devNumber = ["6287729182842"]

global.Auto_Typing = false // auto typing
global.Auto_Recording = true // auto recording
global.Auto_ReadPesan = true // auto read messages

global.domain = "https://rakapanel-privat.xin.biz.id" // Ganti Domain Lu
global.key_plta = "-ptla_ZqhNv51zoEzhPVoADnd90Xdr8z3z7y3L9tA3DNgn3qU" // Isi Apikey Plta Lu
global.key_pltc = "-ptlc_fr4aNoTOAl4nz5bCF0pTapOcitN3CVsogcU0rHba3A0" // Isi Apikey Pltc Lu
global.nama_host = "𝙁𝙀𝙇𝙓𝙕𝙊𝙁𝙁𝘾" // Ganti Nama Store Atau nama Host Lu

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})