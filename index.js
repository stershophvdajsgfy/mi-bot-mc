const mineflayer = require('mineflayer')
const http = require('http')

// Esto es lo que mantiene a Render feliz y callado
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot Operativo\n');
}).listen(10000); 

const botArgs = {
  host: 'PovreZuela.aternos.me', 
  username: 'ElBotEterno',
  version: '1.21.11'
};

let bot;

function createBot() {
  bot = mineflayer.createBot(botArgs);

  bot.on('spawn', () => {
    console.log('¡Bot estable en el server!');
    bot.chat('Ya me instalé, no me saquen :v');
    
    // Rutina de movimiento cada 1 minuto
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 60000);
  });

  // Si lo sacan, esperamos 20 segundos antes de volver a entrar
  // Esto evita que entre y salga a lo loco
  bot.on('end', () => {
    console.log('Me sacaron, esperando 20 segundos para reintentar...');
    setTimeout(createBot, 20000);
  });

  bot.on('error', (err) => console.log('Error: ' + err));
}

createBot();
