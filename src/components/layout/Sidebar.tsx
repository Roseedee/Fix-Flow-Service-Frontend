import React, { useState } from "react";
import '@styles/components/layout/Sidebar.css';

import appIcon from '@assets/icons/app.png';
import arrowIcon from '@assets/icons/arrow.png';

import dashboardIcon from '@assets/icons/dashboard.png';
import searchIcon from '@assets/icons/search.png';
import addIcon from '@assets/icons/add.png';
import taskIcon from '@assets/icons/checklist.png';
import recycleBinIcon from '@assets/icons/recycle-bin.png';
import taskStatusIcon from '@assets/icons/task-status.png';
import taskTypeIcon from '@assets/icons/task-type.png';
import taskBrandIcon from '@assets/icons/device.png';

import brandIcon_Test from '@assets/images/brand.png';

export default function Sidebar() {
  const [sidebarMin, setSidebarMin] = useState(false);

  const toggleSidebar = () => {
    const sidebarMaxW = getComputedStyle(document.documentElement).getPropertyValue('--sidebar-max-width').trim();
    const sidebarMinW = getComputedStyle(document.documentElement).getPropertyValue('--sidebar-min-width').trim();

    document.documentElement.style.setProperty('--layout-container-pad-left', sidebarMin ? sidebarMaxW : sidebarMinW);
    setSidebarMin(!sidebarMin);
  };

  return (
    <div className={`sidebar-container ${sidebarMin ? 'sidebar-container-min' : ''}`}>
      <div className="sidebar-content">
        <div className="sidebar-content-header">
          <img src={appIcon} alt="" />
          <h3>FIX FLOW SERVICE</h3>
          <div className="button-toggle-sidebar-w" onClick={toggleSidebar}>
            <img src={arrowIcon} alt="" />
          </div>
        </div>
        <div className="sidebar-content-menu">
          <div className="sidebar-sub-menu">
            <h4>เมนูทั่วไป</h4>
            <ul>
              <a href="/dashboard">
                <li className="sidebar-sub-menu-item">
                  <img src={dashboardIcon} alt="" />
                  <span>แดชบอร์ดงานซ่อม</span>
                </li>
              </a>
              <a href="/search">
                <li className="sidebar-sub-menu-item">
                  <img src={searchIcon} alt="" />
                  <span>ค้นหางานซ่อม</span>
                </li>
              </a>
            </ul>
          </div>
          <div className="sidebar-sub-menu">
            <h4>เมนูงานซ่อม</h4>
            <ul>
              <a href="/addtask">
                <li className="sidebar-sub-menu-item">
                  <img src={addIcon} alt="" />
                  <span>เพิ่มงานซ่อม</span>
                </li>
              </a>
              <li className="sidebar-sub-menu-item">
                <img src={taskIcon} alt="" />
                <span>คลังงานซ่อมทั้งหมด</span>
              </li>
              <li className="sidebar-sub-menu-item">
                <img src={recycleBinIcon} alt="" />
                <span>งานซ่อมที่ลบ</span>
              </li>
            </ul>
          </div>
          <div className="sidebar-sub-menu">
            <h4>เมนูจัดการ</h4>
            <ul>
              <li className="sidebar-sub-menu-item">
                <img src={taskStatusIcon} alt="" />
                <span>สถานะงานซ่อม</span>
              </li>
              <li className="sidebar-sub-menu-item">
                <img src={taskTypeIcon} alt="" />
                <span>ประเภทงานซ่อม</span>
              </li>
              <li className="sidebar-sub-menu-item">
                <img src={taskBrandIcon} alt="" />
                <span>ยี่ห้อและรุ่นงานซ่อม</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="sidebar-content-company">
          <div className="company-profile">
            <img src={brandIcon_Test} alt="" />
            <div className="company-name">
              <h3>YALANETCOM</h3>
              <span>@roseedee2002</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
