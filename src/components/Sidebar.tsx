import React from "react";
import '@styles/components/Sidebar.css';

import appIcon from '@assets/icons/app.png';

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <div className="sidebar-content-header">
          <img src={ appIcon } alt="" />
          <h2>Fix Flow Service</h2>
        </div>
      </div>
    </div>
  );
}
