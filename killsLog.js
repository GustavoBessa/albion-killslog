const captureWebsite = require('capture-website');
const uuidv4 = require('uuid/v4');
function captureKill(eventId,cont){
  var baseUrl = 'https://albiononline.com/pt/killboard/kill/'+eventId;
  var filename = uuidv4()+'.png';
  (async () => {
    await captureWebsite.file(baseUrl, filename,{
      width: 1400,
      height:1400,
      delay : 15,
      hideElements: [
        '.header',
        '.killboard__search',
        '.killboard-navigation',
        '.kill__back',
        '.footer',
        '#cookie-warning'
      ]
    });
  })();
}

exports.killsLog = function() { 
  const querystring = require('querystring');
  const request = require('request');
  const idFenix = 'Qvo81E_PSReGzVTNfaGEwg';
  const idTest = 'an2NhYvESmuhzsm8iMr_5g';

  request({
      headers: {
        'Connection': 'keep-alive'
      },
      uri: 'https://gameinfo.albiononline.com/api/gameinfo/events/',
      method: 'GET'
    }, function (err, res, body) {
      // console.log(res.body);
      var obj = JSON.parse(body);
      var cont = 0;
      // console.log(obj[0].Victim.GuildId);
      console.log('Verificando kills ...');
      for (let i = 0; i < obj.length; i++) {
        // console.log(obj[0].Victim.GuildId);
        if(obj[i].Victim.GuildId == idTest){
          // console.log(obj[i].EventId);
          eventId = obj[i].EventId;
          cont +=1;
          console.log('tirando screenshot ...');
          captureKill(eventId,cont);
        }
      }
      if(cont == 0){
        console.log('Nenhuma kill foi encontrada');
      }
    
      
    });
  }