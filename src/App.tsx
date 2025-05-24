import React from 'react';
import '@styles/app.css';
import img from '@assets/icons/show.png';

export default function App() {
  return (
    <div className="app">
      <h1>Fix Flow Service</h1>
      <p>ระบบงานซ่อมของคุณดี</p>
      <a href="/login">Login Form</a>
      <img src={ img } alt="" />
    </div>
  );
}