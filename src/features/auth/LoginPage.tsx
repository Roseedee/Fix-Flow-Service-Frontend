import React from 'react';
import '../../styles/features/auth/Auth.css';

export default function SignIn() {
  return (
    <form className="login-form">
      <div className="card">
        <h1>ยินดีต้อนรับ</h1>
        <div className="input-container">
          <input type="text" className="login-input" placeholder="Username" />
        </div>
        <div className="input-container">
          <input type="password" className="login-input" placeholder="Password" />
        </div>
        <div className="button-container">
          <button type="submit" className="login-button">Login</button>
          <h3>-- or --</h3>
          <div className="sub-button-container">
            <a href='/' className="">Google</a>
            <a href='/' className="">Facebook</a>
          </div>
        </div>
        <a href="/">Back Home</a>
      </div>
    </form>
  );
}