import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';
import { setUsers, setMessages } from './ChatActions';
import { setMessage } from '../Input/InputActions';
import { setName, setRoom, setRoomList } from '../Join/JoinActions';


let socket;

const Chat = ({ location }) => {
  const roomList = useSelector(state => state.Join.roomList);
  const room = useSelector(state => state.Join.room);
  const users = useSelector(state => state.Chat.users);
  const message = useSelector(state => state.Input.message);
  const messages = useSelector(state => state.Chat.messages);


 // const ENDPOINT = 'https://chat-box-bpc.herokuapp.com/';
  const ENDPOINT = process.env.REACT_APP_ENDPOINT
  const name = useSelector(state => state.Chat.name);
  const dispatch = useDispatch();


  useEffect(() => {
    socket = io(ENDPOINT);
     socket.on('roomList', list => {
       console.log('typeof: ',typeof(list))
       console.log('list in join: ',list.split(','));
       dispatch(setRoomList(list.split(',')))
     });
 }, [roomList]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    console.log('room from location search: ',room )

    
    

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      dispatch(setMessages([...messages, message]));
    });
    
    socket.on("roomData", ({ users }) => {
      dispatch(setUsers(users));
    });
}, []);

 

  return (
    <div className="outerContainer">
      <div className="container">
          <InfoBar />
          <Messages messages={messages} name={name} />
          <Input />
      </div>
      <TextContainer users={users}/>
    </div>
  );
}

export default Chat;
