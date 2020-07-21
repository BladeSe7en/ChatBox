import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import io from "socket.io-client";

import './Join.css';
import { setName, setRoom, setRoomList } from './JoinActions';

let socket;
const ENDPOINT = process.env.REACT_APP_ENDPOINT
console.log('this is endpoint2: ',ENDPOINT)

export default function SignIn() {
const dispatch = useDispatch();

const name = useSelector(state => state.Join.name);
const room = useSelector(state => state.Join.room);
const roomList = useSelector(state => state.Join.roomList);
console.log('roomList in join: ',roomList)
useEffect(() => {
  socket = io(ENDPOINT);
    socket.on('roomList', list => {
      console.log('list in join: ',list);
      dispatch(setRoomList(list.split(',')))
    });
});

let rooms =
 [
{ room: 1, name: 1},
{ room: 2, name: 2},
{ room: 3, name: 3},
{ room: 4, name: 4}, 
{ room: 5, name: 5}]

console.log('rooms: ',rooms)

   return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => dispatch(setName(event.target.value))} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => dispatch(setRoom(event.target.value))} />
        </div>
        <label className='label' >Or Select A Current Room</label>
        <div className='dropdown' name='drop-down'>
        {rooms.length > 0 && rooms.map((room, i) => {
          console.log('room: ',room)
  return (
    <div key = {i}> 
      <Link onClick={e => (!room.name || !room.room) ? e.preventDefault() : null} to={`/chat?name=${room.name}&room=${room.room}`}>
         
         <button className={'button mt-20'} type='submit'>Join {room.name}</button>
        </Link>
    </div>
  )
})}
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type='submit'>Sign In</button>
        </Link>
      </div>
    </div>
  );
}


