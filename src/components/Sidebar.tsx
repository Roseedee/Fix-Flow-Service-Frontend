import React from "react";
import '@styles/components/Sidebar.css';

import appIcon from '@assets/icons/app.png';
import arrowIcon from '@assets/icons/arrow.png';

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <div className="sidebar-content-header">
          <img src={ appIcon } alt="" />
          <h3>FIX FLOW SERVICE</h3>
          <div className="button-toggle-sidebar-w">
            <img src={ arrowIcon } alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
