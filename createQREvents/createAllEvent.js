mysql=require('mysql2')
cEvent=require('./createEvent.js')
cQR=require('./createQR.js')
function allEvents(nameEvent){
    cEvent.createEvent(nameEvent);
    cQR.createQR(nameEvent);
}

exports.allEvents=allEvents