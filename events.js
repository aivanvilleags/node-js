const EventEmitter = require('events')
const celeb = new EventEmitter();


// SUbscribers

celeb.on('race', (res) => {
   if (res === 'win') {
       console.log('COngrats');
   }else{
       console.log('Boooo!');
   }
})



celeb.emit('race', 'win')
celeb.emit('race', 'lost')
