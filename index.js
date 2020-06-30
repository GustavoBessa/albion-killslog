const killsLog = require('./killsLog');

killsLog.killsLog();

const minutes = 1; // minutos para que o código atualize

var the_interval = minutes * 60 * 1000;

setInterval(function() {
  killsLog.killsLog();
}, the_interval);