import React from "react";
import "@styles/components/SearchTaskItem.css"

//icon
import fullSizeIcon from "@assets/icons/full-size-white.png"
import editIcon from "@assets/icons/edit-white.png"

interface Task {
    id: string;
    color: string;
    getter: string;
    cName: string;
    cPhone: string;
    taskType: string;
    brand: string;
    sn: string;
    pn: string;
    price: string;
    repairer: string;
    report: string;
}

interface SearchTaskItemProps {
    task: Task;
}

export default function SearchTaskItem({ task }: SearchTaskItemProps) {

    return (
        <div className="task-row">
            <div className="color-indicator" style={{backgroundColor: task.color}}></div>
            <div className="cell task-data-form-1">
                <span>รหัส</span>
                <p>{task.id}</p>
            </div>
            <div className="cell task-data-form-1">
                <span>ผู้รับงานซ่อม</span>
                <p>{task.getter}</p>
            </div>
            <div className="cell task-data-form-2">
                <strong>{task.cName}</strong>
                <p>{task.cPhone}</p>
            </div>
            <div className="cell task-data-form-3">
                <a>{task.taskType}</a>
                <p>{task.brand}</p>
            </div>
            <div className="cell task-data-form-2">
                <strong>{task.sn}</strong>
                <p>{task.pn}</p>
            </div>
            <div className="cell task-data-form-1">
                <span>ราคาประเมิน</span>
                <p>{task.price}</p>
            </div>
            <div className="cell task-data-form-1">
                <span>ผู้รับผิดชอบงานซ่อม</span>
                <p>{task.repairer}</p>
            </div>
            <div className="cell task-data-form-1">
                <span>อาการลูกค้าแจ้ง</span>
                <p>{task.report}</p>
            </div>
            <div className="action-buttons">
                <button><img src={fullSizeIcon} alt="ขยาย" /></button>
                <button><img src={editIcon} alt="แก้ไข" /></button>
            </div>
        </div>
    )
}