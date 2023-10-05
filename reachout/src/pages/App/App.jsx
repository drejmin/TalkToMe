//App.js
import "./App.css";
import {Routes, Route} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import NavBar from "../../components/NavBar/NavBar";
import HomePage from '../HomePage/HomePage';
import RoomPage from '../RoomPage/RoomPage';
import ChatPage from '../ChatPage/ChatPage';

export default function App() {


  return (
    <main className="App">
       user ?
        <>
        <NavBar user={user} />
        <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage 
            user={user} 
            setUser={setUser} 
            room={room}
            setRoom={setRoom}
            socket={socket} />} />
            <Route path="/chat/room" element={<RoomPage />} />
            <Route path='/chat' element={<ChatPage user={user} room={room} socket={socket} />}/>
        </Routes>
        </>
        </main>
        );
      }
    
      
