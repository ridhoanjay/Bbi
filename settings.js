const fs = require('fs')
const chalk = require('chalk')

// BOT-INFO
global.botName = "ALIEF BUG"
global.ownerName = "ALIEF N-D"
global.botNumber = "6282372194158"
global.devNumber = ["6282372194158"]

// BOT-SETTING
global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = false // auto read messages

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})