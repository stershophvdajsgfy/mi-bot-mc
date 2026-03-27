const mineflayer = require('mineflayer')
const http = require('http')

// --- EL ENGAÑO PARA RENDER ---
// Esto crea una "página web" falsa para que Render no apague el bot
http.createServer((req, res) => {
  res.write('Bot encendido');
  res.end();
}).listen(8080);

const bot = mineflayer.createBot({
  host: 'PovreZuela.aternos.me', 
  username: 'ElBotEterno',
  version: '1.21.11' 
})

bot.on('spawn', () => {
  console.log('¡Bot en posición y saltando!');
  
  // Salto inicial
  bot.setControlState('jump', true);
  setTimeout(() => bot.setControlState('jump', false), 1000);

  // Cada 1 minuto salta y habla
  setInterval(() => {
    bot.chat('Sigo aquí vigilando... :v');
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 60000); 
})

bot.on('kicked', (reason) => console.log('Me botaron por: ' + reason))
bot.on('error', (err) => console.log('Error crítico: ' + err))
