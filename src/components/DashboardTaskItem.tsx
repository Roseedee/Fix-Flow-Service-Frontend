import React from 'react';
import '@styles/components/DashboardTaskItem.css'

import taskIcon from "@assets/icons/task.png"

type DashboardTaskItemProps = {
    icon?: string;
    title: string;
    number: string;
    color?: string;
}

export default function DashboardTaskItem({icon=taskIcon, title, number, color="#D9D9D9"} : DashboardTaskItemProps) {
    return (
        <div className="task-content card">
            <div className="content">
                <div>
                    <img src={ icon } alt="" />
                </div>
                <div>
                    <h4>{title}</h4>
                    <h6>จำนวน <span style={{backgroundColor: color}}>{number}</span> เครื่อง</h6>
                </div>
            </div>
            <div className="content" style={{backgroundColor: color}}></div>
        </div>
    )
}