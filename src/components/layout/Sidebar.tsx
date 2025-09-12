import React, { useState } from "react";
import '@styles/components/layout/Sidebar.css';
import { Navigate, NavigationType, useLocation, useNavigate } from "react-router-dom";

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
import systemReportIcon from '@assets/icons/bar-chart.png';

import brandIcon_Test from '@assets/images/brand.png';

import TaskStatus, { TaskColor } from "@model/task/TaskStatus";

//test
import { TaskDataEx } from "@model/task/Task";

export default function Sidebar() {

  const [sidebarMin, setSidebarMin] = useState<boolean>(() => {
    const stored = localStorage.getItem('sidebar-min');
    return stored === 'true' ? true : false;
  });


  const location = useLocation().pathname.split('/');
  const navigate = useNavigate();

  React.useEffect(() => {
    resizeLayout()
  }, [])

  const resizeLayout = () => {
    const sidebarMaxW = getComputedStyle(document.documentElement).getPropertyValue('--sidebar-max-width').trim();
    const sidebarMinW = getComputedStyle(document.documentElement).getPropertyValue('--sidebar-min-width').trim();

    document.documentElement.style.setProperty('--layout-container-pad-left', !sidebarMin ? sidebarMaxW : sidebarMinW);
  }

  const toggleSidebar = () => {
    setSidebarMin(!sidebarMin);
  };
  
  //onchange sidebar minimized 
  React.useEffect(() => {
    resizeLayout()
    localStorage.setItem('sidebar-min', String(sidebarMin))
  }, [sidebarMin]);

  // React.useEffect(() => {
  //   console.log(location)
  // }, [location])

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
                <li className={`sidebar-sub-menu-item ${location[1] === 'dashboard' ? 'active' : ''}`}>
                  <img src={dashboardIcon} alt="" />
                  <span>แดชบอร์ดงานซ่อม</span>
                </li>
              </a>
              <a href="/search">
                <li className={`sidebar-sub-menu-item ${location[1] === 'search' ? 'active' : ''}`}>
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
                <li className={`sidebar-sub-menu-item ${location[1] === 'addtask' ? 'active' : ''}`}>
                  <img src={addIcon} alt="" />
                  <span>เพิ่มงานซ่อม</span>
                </li>
              </a>
              <li className={`${location[1] === 'task' ? 'sidebar-sub-menu-item-expand' : 'sidebar-sub-menu-item-collapse'} `} onClick={() => navigate('/task/alltask')}>
                <div className="menu-item-header">
                  <img src={taskIcon} alt="" />
                  <span>คลังงานซ่อมทั้งหมด</span>
                </div>
                <ul className="menu-expand-list">
                  <a href="/task/alltask">
                    <li className={`menu-expand-item ${location[2] === 'alltask' ? 'active' : ''}`}>
                      <div className="indicator"></div>
                      <span>ทั้งหมด</span>
                      <span className="noti-number">{TaskDataEx.length}</span>
                    </li>
                  </a>
                  <a href="/task/inprogress">
                    <li className={`menu-expand-item ${location[2] === 'inprogress' ? 'active' : ''}`}>
                      <div className="indicator" style={{backgroundColor: TaskColor(TaskStatus.IN_PROGRESS)}}></div>
                      <span>กำลังซ่อม</span>
                      <span className="noti-number">{TaskDataEx.filter(i => i.status === TaskStatus.IN_PROGRESS).length}</span>
                    </li>
                  </a>
                  <a href="/task/awaitingparts">
                    <li className={`menu-expand-item ${location[2] === 'awaitingparts' ? 'active' : ''}`}>
                      <div className="indicator" style={{backgroundColor: TaskColor(TaskStatus.AWAITING_PARTS)}}></div>
                      <span>รออะไหล่</span>
                      <span className="noti-number">{TaskDataEx.filter(i => i.status === TaskStatus.AWAITING_PARTS).length}</span>
                    </li>
                  </a>
                  <a href="/task/completed">
                    <li className={`menu-expand-item ${location[2] === 'completed' ? 'active' : ''}`}>
                      <div className="indicator" style={{backgroundColor: TaskColor(TaskStatus.COMPLETED)}}></div>
                      <span>ซ่อมเสร็จแล้ว</span>
                      <span className="noti-number">{TaskDataEx.filter(i => i.status === TaskStatus.COMPLETED).length}</span>
                    </li>
                  </a>
                  <a href="/task/delivered">
                    <li className={`menu-expand-item ${location[2] === 'delivered' ? 'active' : ''}`}>
                      <div className="indicator" style={{backgroundColor: TaskColor(TaskStatus.DELIVERED)}}></div>
                      <span>รับเครื่องแล้ว</span>
                      <span className="noti-number">{TaskDataEx.filter(i => i.status === TaskStatus.DELIVERED).length}</span>
                    </li>
                  </a>
                  <a href="/task/cancelled">
                    <li className={`menu-expand-item ${location[2] === 'cancelled' ? 'active' : ''}`}>
                      <div className="indicator" style={{backgroundColor: TaskColor(TaskStatus.CANCELLED)}}></div>
                      <span>ยกเลิกซ่อม</span>
                      <span className="noti-number">{TaskDataEx.filter(i => i.status === TaskStatus.CANCELLED).length}</span>
                    </li>
                  </a>
                </ul>
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
              <li className="sidebar-sub-menu-item">
                <img src={systemReportIcon} alt="" />
                <span>รายงานของระบบ</span>
                <span className="noti-number" style={{backgroundColor: 'red'}}>2</span>
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
