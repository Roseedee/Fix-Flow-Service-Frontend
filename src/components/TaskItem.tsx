import React from "react";
import "@styles/components/TaskItem.css"

//icon
import fullSizeIcon from "@assets/icons/full-size-white.png"
import editIcon from "@assets/icons/edit-white.png"

//model
import Task from "@model/task/Task"
import { TaskColor } from "@model/task/TaskStatus"

interface TaskItemProps {
    task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {

    const [isFullView, setIsFullView] = React.useState<boolean>(false);

    return (
        <>
            <div className="task-row">
                <div className="color-indicator" style={{ backgroundColor: TaskColor(task.status) }}></div>
                <div className="cell task-data-form-1">
                    <span>{task.date}</span>
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
                    <button onClick={() => setIsFullView(true)}><img src={fullSizeIcon} alt="ขยาย"/></button>
                    <button><img src={editIcon} alt="แก้ไข" /></button>
                </div>
            </div>


            {
                isFullView && (
                    <div className="overlay" onClick={() => setIsFullView(false)}>
                        <div className="popup" onClick={(e) => e.stopPropagation()}>
                            <h3>รายละเอียดงาน</h3>
                            <p><strong>ลูกค้า:</strong> {task.cName} ({task.cPhone})</p>
                            <p><strong>ประเภทงาน:</strong> {task.taskType} - {task.brand}</p>
                            <p><strong>SN/PN:</strong> {task.sn} / {task.pn}</p>
                            <p><strong>อาการ:</strong> {task.report}</p>
                            <p><strong>ราคาประเมิน:</strong> {task.price}</p>
                            <button onClick={() => setIsFullView(false)}>ปิด</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}