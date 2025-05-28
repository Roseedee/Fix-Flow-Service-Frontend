import React from "react";
import '@styles/components/Header.css';

import headerIcon from '@assets/icons/task.png';
import searchIcon from '@assets/icons/search.png';

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <img src={ headerIcon } alt="" />
        <h3>ระบบจัดการงานซ่อม</h3>
      </div>
      <div className="header-content">
        <form action="">
          <label className="header-input-search-container">
            <input type="text" name="qsearch" className="header-input" placeholder="Quick Search" />
            <img src={ searchIcon } alt="" />
          </label>
        </form>
      </div>
      <div className="header-content">
        <img src={ headerIcon } alt="" />
        <img src={ headerIcon } alt="" />
      </div>
    </div>
  );
}