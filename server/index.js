const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');


const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on('connect', (socket) => {
  console.log('A user has connected')
  socket.on('join', ({ name, room }, callback) => {
    console.log(`${name} has joined room ${room}.`)

  

    const { error, user } = addUser({ id: socket.id, name, room: `room: ${room}` });

    io.to(user.id).emit('user', user)

    if (error) return callback(error);

    socket.join(user.room);

    let rooms = (io.of('/').adapter.sids);
    console.log('rooms: ', rooms)

    let list = [];
    const iterate = (rooms) => {
      Object.keys(rooms).forEach(key => {

        console.log(`key: ${key}`)
        list.push(key)

        if (typeof rooms[key] === 'object') {
          iterate(rooms[key])
        }
      })
    }
    iterate(rooms)
    console.log('list before filter: ', list);
    let roomlist = []
    list.map((room) => {
      if (room.includes('room:')) {
        console.log('room.splice(6): ', room.slice(6))
        roomlist.push(room.slice(6))
      }
      return roomlist;
    })
    console.log('list after filter: ', roomlist);
    socket.emit('roomList', `${[roomlist]}`)

    console.log('-----------------------')

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.` });
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
   // const user = getUser(socket.id);

   // io.to(user.room).emit('message', { user: user.name, text: message });

    //callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    console.log(`${socket.id} has disconnected`)

    if (user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  })
});


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));






