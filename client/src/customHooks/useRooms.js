import { useState, useEffect } from 'react';
import io from "socket.io-client";
let socket;
const ENDPOINT = process.env.REACT_APP_ENDPOINT

export default function useRooms() {
    const [ rooms, setRooms] = useState([])


        socket = io(ENDPOINT);


    var clients = socket.clients()
console.log('clients: ',clients)
    let allSockets = (io.of('/').adapter.sids);
    console.log('allSockets: ', allSockets)

    let list = [];
    const iterate = (allSockets) => {
      Object.keys(allSockets).forEach(key => {

        console.log(`key: ${key}`)
        list.push(key)

        if (typeof allSockets[key] === 'object') {
          iterate(allSockets[key])
        }
      })
    }
    iterate(allSockets)
    console.log('list before filter: ', list);
    let filtered = []
    list.map(name => {
      if (name.includes('room:')) {
        filtered.push(name.slice(6))
      }
    })
    socket.emit('roomList', `${rooms}`)
   
        console.log('inside useRooms hook')
        socket = io(ENDPOINT);
        socket.on('getRooms', list => {
            console.log('list from socket')
          let roomList = list.split(',')
          console.log('roomList in hook')
          let filtered = []
          roomList.map(name => {
            if (name.includes('room:')) {
              filtered.push(name.slice(6))
            }
          })
          setRooms(filtered)
        });
console.log('rooms ins hook: ',rooms)
      return rooms;
}

