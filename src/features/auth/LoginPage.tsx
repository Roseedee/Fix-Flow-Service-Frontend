import React, { useState } from 'react';
import '@styles/features/auth/Auth.css';
import { RememberUser } from '@model/sessions/rememberUser';

import iconShow from '@assets/icons/show.png';
import iconHide from '@assets/icons/hide.png';
import iconCancel from '@assets/icons/cancel.png'
import iconClose from '@assets/icons/close.png'
import imgUser_Test from '@assets/images/test.jpg';

export default function SignIn() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberUsers, setRememberUsers] = useState<RememberUser[]>(
    [
      {
        userId: 'u123456',
        username: 'docdee',
        name: 'Roseedee Cehlaeh',
        token: 'abc123token',
        last: new Date('2025-05-24T10:00:00'),
        autoLogin: true,
      },
      {
        userId: 'u654321',
        username: 'da123',
        name: 'ซอลาฮุดิน เจ๊ะแล๊ะ',
        token: 'token456def',
        last: new Date('2025-05-23T15:30:00'),
        autoLogin: false,
      },
      {
        userId: 'u789012',
        username: 'chatgpt',
        name: 'มูฮัมหมัด เจ๊ะแล๊ะ',
        last: new Date('2025-05-25T08:15:00'),
        autoLogin: true,
      },
    ]
  )

  const handleTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <form className="login-form">
      <div className="card">
        <h1>ยินดีต้อนรับ</h1>
        <div className="input-username-container">
          <div className="user-remember-selected">
            <img src={imgUser_Test} alt="" />
          </div>
          <label className="input-container">
            <input type="text" className="login-input" placeholder="Username" disabled value={"Roseedee Cehlaeh"} />
            <img className='button-in-input' src={iconClose} alt="" />
          </label>
        </div>
        <label className="input-container">
          <input type={isPasswordVisible ? "text" : "password"} className="login-input" placeholder="Password" />
          <img className='button-in-input' src={isPasswordVisible ? iconHide : iconShow} alt="" onClick={handleTogglePassword} />
        </label>
        <div className="button-container">
          <button type="submit" className="login-button">Login</button>
          <h3>-- or --</h3>
          <div className="sub-button-container">
            <a href='/' className="">Google</a>
            <a href='/' className="">Facebook</a>
          </div>
        </div>
      </div>
      <div className="card users-remember-list">
        {
          rememberUsers.map((item, i) => (
            <div className="user-remember-item" key={i}>
              <div className="button-cancel-remember">
                <img src={iconCancel} alt="" />
              </div>
              <div className="user-remember-item-img">
                <img src={imgUser_Test} alt="" />
              </div>
              <h5>{item.name}</h5>
            </div>
          ))
        }
      </div>
    </form>
  );
}