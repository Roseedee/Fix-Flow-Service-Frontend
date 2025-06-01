import React, {useState} from "react";
import '@styles/components/Sidebar.css';

import appIcon from '@assets/icons/app.png';
import arrowIcon from '@assets/icons/arrow.png';
import taskIcon from '@assets/icons/checklist.png';

export default function Sidebar() {
  const [sidebarMin, setSidebarMin] = useState(false);

  const toggleSidebar = () => {
    setSidebarMin(!sidebarMin);
  };

  return (
    <div className={`sidebar-container ${sidebarMin ? 'sidebar-container-min' : ''}`}>
      <div className="sidebar-content">
        <div className="sidebar-content-header">
          <img src={ appIcon } alt="" />
          <h3>FIX FLOW SERVICE</h3>
          <div className="button-toggle-sidebar-w" onClick={ toggleSidebar }>
            <img src={ arrowIcon } alt="" />
          </div>
        </div>
        <div className="sidebar-content-menu">
          <div className="sidebar-sub-menu">
            <h4>ทั่วไป</h4>
            <ul>
              <li className="sidebar-sub-menu-item">
                <img src={ taskIcon } alt="" />
                <span>แดชบอร์ดงานซ่อม</span>
              </li>
              <li className="sidebar-sub-menu-item">
                <img src={ taskIcon } alt="" />
                <span>แดชบอร์ดงานซ่อม</span>
              </li>
              <li className="sidebar-sub-menu-item">
                <img src={ taskIcon } alt="" />
                <span>แดชบอร์ดงานซ่อม</span>
              </li>
            </ul>
          </div>
          <div className="sidebar-sub-menu">
            <h4>ทั่วไป</h4>
            <ul>
              <li className="sidebar-sub-menu-item">
                <img src={ taskIcon } alt="" />
                <span>แดชบอร์ดงานซ่อม</span>
              </li>
              <li className="sidebar-sub-menu-item">
                <img src={ taskIcon } alt="" />
                <span>แดชบอร์ดงานซ่อม</span>
              </li>
              <li className="sidebar-sub-menu-item">
                <img src={ taskIcon } alt="" />
                <span>แดชบอร์ดงานซ่อม</span>
              </li>
            </ul>
          </div>
        
        </div>
        <div className="sidebar-content-company">
          <div className="company-profile">
            <img src={ appIcon } alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
