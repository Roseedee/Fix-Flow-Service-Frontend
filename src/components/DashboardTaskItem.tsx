import React from 'react';
import '@styles/components/DashboardTaskItem.css'

import taskIcon from "@assets/icons/task.png"

type DashboardTaskItemProps = {
    title: string;
    number: string;
    color: string;
    maxWidth?: number;
}

export default function DashboardTaskItem({title, number, color, maxWidth=1000} : DashboardTaskItemProps) {
    return (
        <div className="task-content card" style={{maxWidth: maxWidth}}>
            <div className="content">
                <div>
                    <img src={ taskIcon } alt="" />
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