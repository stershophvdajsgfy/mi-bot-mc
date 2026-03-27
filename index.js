const mineflayer = require('mineflayer')
const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot Operativo\n');
}).listen(10000); 

const botArgs = {
  host: 'PovreZuela.aternos.me', 
  username: 'ElBotEterno',
  version: '1.21.11'
};

function createBot() {
  const bot = mineflayer.createBot(botArgs);

  bot.on('spawn', () => {
    console.log('¡Bot adentro y estable!');
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 60000);
  });

  bot.on('end', () => {
    console.log('Salió, esperando 2 minutos para no molestar...');
    setTimeout(createBot, 120000); 
  });

  bot.on('error', (err) => console.log('Error de conexión: ' + err));
}

createBot();
