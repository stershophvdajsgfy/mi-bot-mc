const mineflayer = require('mineflayer')
const http = require('http')

// EL ENGAÑO PARA RENDER (Obligatorio)
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Sistema Protegido\n');
}).listen(10000); 

const botArgs = {
  host: 'PovreZuela.aternos.me', 
  username: 'Santi_Miner_01', // <--- Pon un nombre de persona real aquí
  version: '1.21.11'
};

function createBot() {
  const bot = mineflayer.createBot(botArgs);

  bot.on('spawn', () => {
    console.log('¡Bot Camuflado Adentro!');
    
    // FUNCIÓN DE SALTO ALEATORIO (Anti-detección)
    function randomJump() {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
      
      // Vuelve a saltar en un tiempo aleatorio entre 40 y 80 segundos
      let nextJump = Math.floor(Math.random() * (80000 - 40000 + 1)) + 40000;
      setTimeout(randomJump, nextJump);
    }
    randomJump();
  });

  bot.on('end', () => {
    // Si lo sacan, esperamos 5 MINUTOS (300000 ms)
    // Esto es lo que más evita el ban de IP
    console.log('Esperando 5 minutos para que Aternos se olvide de mí...');
    setTimeout(createBot, 300000); 
  });

  bot.on('error', (err) => console.log('Error: ' + err));
}

createBot();
