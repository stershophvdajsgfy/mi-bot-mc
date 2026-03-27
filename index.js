const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'PovreZuela.aternos.me', // <--- CAMBIA ESTO POR TU IP REAL
  username: 'ElBotEterno',
  version: '1.21.11' // <--- Asegúrate que sea la misma versión de tu server
})

bot.on('spawn', () => {
  console.log('¡Ya entré al server, no me extrañen!')
})

bot.on('kicked', (reason) => console.log('Me botaron por: ' + reason))
bot.on('error', (err) => console.log('Error crítico: ' + err))
