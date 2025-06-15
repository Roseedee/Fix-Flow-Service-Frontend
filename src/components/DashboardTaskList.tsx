import React from "react";
import '@styles/components/DashboardTaskList.css'

interface TaskData {
    id: string;
    time: string;
    name: string;
    taskType: string;
    taskBrand: string;
    detail: string;
}

interface TaskDataListProps {
    tasks: TaskData[];
}

export default function DashboardTaskList({ tasks }: TaskDataListProps) {
    return (
        <div className="dashboard-task-list card">
            {
                tasks.map((task, index) => (

                    <div className="task-item">
                        <div className="number"><h5>{index + 1}</h5></div>
                        <div className="task-item-content">
                            <div className="task-item-start-content">
                                <div className="column">
                                    <h5>{task.id}</h5>
                                    <span>{task.time}</span>
                                </div>
                                <hr />
                                <div className="column">
                                    <h5>{task.name}</h5>
                                    <span><a href="">#{task.taskType}</a> {task.taskBrand}</span>
                                </div>
                            </div>
                            <div className="task-item-end-content">
                                <div className="column">
                                    <span>รายละเอียด</span>
                                    <p>{task.detail}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
