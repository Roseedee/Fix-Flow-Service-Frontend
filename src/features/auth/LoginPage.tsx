import React from 'react';
import '@styles/features/auth/Auth.css';

import iconShow from '@assets/icons/show.png';
import iconHide from '@assets/icons/hide.png';

export default function SignIn() {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const handleTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <form className="login-form">
      <div className="card">
        <h1>ยินดีต้อนรับ</h1>
        <label className="input-container">
          <input type="text" className="login-input" placeholder="Username" />
        </label>
        <label className="input-container">
          <input type={isPasswordVisible ? "text" : "password"} className="login-input" placeholder="Password" />
          <img src={isPasswordVisible ? iconHide : iconShow } alt="" onClick={handleTogglePassword} />
        </label>
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