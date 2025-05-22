import React from 'react';
import '../../styles/features/auth/Login.css';

export default function SignIn() {
  return (
    <form className="login">
      <h1>ยินดีต้อนรับ</h1>
      <input type="text" placeholder="Username" />  
    </form>
  );
}