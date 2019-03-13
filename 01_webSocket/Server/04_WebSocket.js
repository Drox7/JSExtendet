


let server = require('ws').Server;
let s = new server({port: '8787'});

s.on('connection', (ws) => {
        ws.on('message', (mess) => {
            console.log('Recieved:', mess);
            ws.send('From server: '+mess);
        });
       
        ws.on('close', () => {
            console.log('I have lost my client!')
        });
        console.log('One more client connected!')
    }
        

    
);

