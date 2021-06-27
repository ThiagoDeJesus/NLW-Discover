const express = require('express');
const route = require('./route');
const path = require('path');
const roomDb = require('./controllers/RoomController');

const server = express();

server.set('view engine', 'ejs');

server.use(express.static('public'));

server.set('views', path.join(__dirname, 'views'));

server.use(express.urlencoded({extended: true}));

server.use(route);

server.listen(3000, () => console.log('Server On'));

roomDb.cleanOld();
// A cada 3 horas vai limpar o banco de dados
setInterval(() => {
  roomDb.cleanOld();
}, 60000 * 60 * 3);

