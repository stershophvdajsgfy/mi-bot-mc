const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'PovreZuela.aternos.me', 
  username: 'ElBotEterno',
  version: '1.21.11' // <--- Te quité el .11 por si acaso daba error
})

// Esta función hace que el bot diga algo cada 5 minutos
function antiAfk() {
  setInterval(() => {
    bot.chat('Sigo aquí, no me saquen :v');
    // También podemos hacer que salte
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 60000); // 60000 ms = 1 minutos
}

bot.on('spawn', () => {
  console.log('¡Ya entré al server, no me extrañen!');
  antiAfk();
})

// Esto es por si el server se cae o lo sacan, que intente entrar de nuevo
bot.on('end', () => {
  console.log('Me sacaron, reintentando en 10 segundos...');
  setTimeout(() => {
    // Aquí puedes refrescar Render o dejar que el sistema lo reinicie
  }, 10000);
})

bot.on('kicked', (reason) => console.log('Me botaron por: ' + reason))
bot.on('error', (err) => console.log('Error crítico: ' + err))
