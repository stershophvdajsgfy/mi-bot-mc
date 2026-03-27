const mineflayer = require('mineflayer')
const http = require('http')

// Mantenemos a Render feliz sin que se apague
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot Silencioso Operativo\n');
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
    // Ya no dice nada en el chat al entrar, solo sale en la consola de Render
    console.log('Bot en el server (Silencioso)');
    
    // Solo salta cada 1 minuto para que no lo saquen, pero SIN HABLAR
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 60000);
  });

  // Si lo sacan, esperamos 1 MINUTO entero antes de volver a entrar
  // Así no spamea el chat de "ElBotEterno se unió al juego" cada rato
  bot.on('end', () => {
    console.log('Salió del server, esperando 60 segundos...');
    setTimeout(createBot, 60000); 
  });

  bot.on('error', (err) => console.log('Error: ' + err));
}

createBot();
