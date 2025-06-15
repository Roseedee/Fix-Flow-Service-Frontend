import React from "react";
import '@styles/components/layout/Header.css';

import headerIcon from '@assets/icons/task.png';
import searchIcon from '@assets/icons/search.png';
import notificationIcon from '@assets/icons/notification.png';
import notificationNotReadIcon from '@assets/icons/notification-not-read.png';

import imgUser_Test from '@assets/images/test.jpg';

export default function Header() {

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchValue = (event.target as HTMLFormElement).qsearch.value;
    alert("You searched for: " + searchValue);
  }

  return (
    <div className="header-container">
      <div className="header-content">
        <img src={ headerIcon } alt="" />
        <h3>ระบบจัดการงานซ่อม</h3>
      </div>
      <div className="header-content">
        <form onSubmit={ handleSearch }>
          <label className="header-input-search-container">
            <input type="text" name="qsearch" className="header-input" placeholder="Quick Search" autoComplete="off" />
            <button type="submit">
              <img src={ searchIcon } alt="" />
            </button>
          </label>
        </form>
      </div>
      <div className="header-content">
        <button className="header-button-notification">
          <img src={ notificationIcon } alt="" />
          <span>การแจ้งเตือน</span>
        </button>
        <div className="header-user-profile-container">
          <img src={ imgUser_Test } alt="" />
        </div>
      </div>
    </div>
  );
}