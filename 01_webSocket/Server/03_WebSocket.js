
// Серверный код можно писать на любой платформе. В нашем случае это будет Node.JS, с использованием модуля ws:


let server = require('ws').Server;// Поиск модуля
let s = new server({port: '8787'});// Установка нового сервера с портом
// Событие сработает каждый раз, как клиент подключится к серверу
s.on('connection', (ws) => {
     // ws - websocket соединение

        ws.on('message', (mess) => {
            console.log('Recieved:', mess); 
            ws.send('From server: '+mess);
            

        });
        // когда пользователь уходит из соединения
        ws.on('close', () => {
            console.log('I have lost my client!')
        });
        // Когда произошло новое соединение
        console.log('One more client connected!')
    } 
);

