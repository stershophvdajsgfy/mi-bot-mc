const mineflayer = require('mineflayer')
const http = require('http')

// --- EL TRUCO PARA QUE RENDER NO SE APAGUE ---
// Creamos un servidor web falso en el puerto 10000 (el que Render busca)
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot vivo y saltando\n');
}).listen(10000); 

const bot = mineflayer.createBot({
  host: 'PovreZuela.aternos.me', 
  username: 'ElBotEterno',
  version: '1.21.11' 
})

bot.on('spawn', () => {
  console.log('¡Bot en posición y saltando!');
  bot.chat('¡Ya llegué, dejen de llorar!');
  
  // Salto inicial para confirmar que vive
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
