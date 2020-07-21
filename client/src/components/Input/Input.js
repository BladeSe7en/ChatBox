import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";

import './Input.css';
import { setMessage } from './InputActions';

let socket;

const Input = () => {
  const message = useSelector(state => state.Input.message);
  const dispatch = useDispatch();
  console.log('this is message state in input: ',message)

  useEffect(() => {
    const ENDPOINT = process.env.REACT_APP_ENDPOINT
    socket = io(ENDPOINT);
 }, []);



  const sendMessage = (event) => {
    
    event.preventDefault();
    if(event => event.key === 'Enter' && message) {
      console.log('socket.id in send message: ',socket.id)
      socket.emit('sendMessage', message);
    }
  }

  return (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => dispatch(setMessage(value))}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
)
  }

export default Input;