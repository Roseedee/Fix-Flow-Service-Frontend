import React, { useState } from 'react';
import '@styles/features/auth/Auth.css';
import { RememberUser } from '@model/sessions/rememberUser';

import iconShow from '@assets/icons/show.png';
import iconHide from '@assets/icons/hide.png';
import iconCancel from '@assets/icons/cancel.png'
import iconClose from '@assets/icons/close.png'

//unit test
import imgUser_Test from '@assets/images/test.jpg';
import imgUser_Test1 from '@assets/images/test1.jpg';
import imgUser_Test2 from '@assets/images/test2.jpg';

export default function SignIn() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberUserSelected, setRememberUserSelected] = useState<RememberUser | null>(null)
  const [rememberUsers, setRememberUsers] = useState<RememberUser[]>(
    [
      {
        id: '1',
        name: 'Roseedee Cehlaeh',
        img: imgUser_Test,
        username: 'docdee',
        token: 'abc123token',
        last: new Date('2025-05-24T10:00:00'),
        autoLogin: true,
      },
      {
        id: '2',
        name: 'ซอลาฮุดิน เจ๊ะแล๊ะ',
        img: imgUser_Test2,
        username: 'da123',
        token: 'token456def',
        last: new Date('2025-05-23T15:30:00'),
        autoLogin: false,
      },
      {
        id: '3',
        name: 'มูฮัมหมัด เจ๊ะแล๊ะ',
        img: imgUser_Test1,
        username: 'chatgpt',
        last: new Date('2025-05-25T08:15:00'),
        autoLogin: true,
      },
    ]
  )

  const handleTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const handleSelectUserRemember = (user: RememberUser) => {
    setRememberUserSelected(user)
    console.log(rememberUserSelected)
  }

  const handleClearSelectedRememberUser = () => {
    setRememberUserSelected(null)
  }

  return (
    <form className="login-form">
      <div className="card">
        <h1>ยินดีต้อนรับ</h1>
        <div className="input-username-container">
          {
            rememberUserSelected ? (
              <div className="user-remember-selected">
                <img src={rememberUserSelected?.img} alt="" />
              </div>
            ) : null
          }
          <label className="input-container">
            <input type="text" className="login-input" placeholder="Username" disabled={false} value={rememberUserSelected ? rememberUserSelected.name : null} />
            {
              rememberUserSelected ? (
                <img className='button-in-input' src={iconClose} alt="" onClick={handleClearSelectedRememberUser} />
              ) : null
            }
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
          rememberUsers.map((item) => (
            <div className="user-remember-item" key={item.id} onClick={() => handleSelectUserRemember(item)}>
              <div className="button-cancel-remember">
                <img src={iconCancel} alt="" onClick={() => {alert("are you sure")}}/>
              </div>
              <div className="user-remember-item-img">
                <img src={item.img} alt="" />
              </div>
              <h5>{item.name}</h5>
            </div>
          ))
        }
      </div>
    </form>
  );
}