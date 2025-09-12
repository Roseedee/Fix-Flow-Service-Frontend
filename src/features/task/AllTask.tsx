import React, { use } from "react";
import Layout from "@components/layout/Layout";
import '@styles/features/task/AllTask.css';
import { useLocation } from "react-router-dom";

//model
import TaskModel, {TaskDataEx} from '@model/task/Task'
import TaskStatus from "@model/task/TaskStatus";

//components
import TaskItem from "@components/TaskItem";

//icon
import arrowIcon from '@assets/icons/arrow.png';

export default function AllTask() {

    //input state
    const [dataLimit, setDataLimit] = React.useState<number>(5);

    const localtion = useLocation().pathname.split('/');

    const [Tasks, setTasks] = React.useState<TaskModel[]>();

    const filterTasks = (item: TaskModel) => {
        const path = localtion[localtion.length - 1];
        // console.log(path)
        if (path === 'inprogress') {
            return item.status === TaskStatus.IN_PROGRESS;
        }else if (path === 'completed') {
            return item.status === TaskStatus.COMPLETED;
        }else if (path === 'delivered') {
            return item.status === TaskStatus.DELIVERED;
        }else if (path === 'cancelled') {
            return item.status === TaskStatus.CANCELLED;
        }else if (path === 'awaitingparts') {
            return item.status === TaskStatus.AWAITING_PARTS;
        }else {
            return item;
        }
    }

    React.useEffect(() => {
        setTasks(TaskDataEx.filter(item => filterTasks(item)).slice(0, dataLimit));
    }, []);

    const dataLimitOnChange = (newLimit: number) => {
        setDataLimit(newLimit);
        setTasks(TaskDataEx.filter(item => filterTasks(item)).slice(0, newLimit));
    }

    return (
        <Layout>
            <div className="alltask-content-header">
                <h2>งานซ่อมทั้งหมด</h2>
                <p>รายการงานซ่อมทั้งหมด</p>
            </div>
            <div className="alltask-content card task-list-container">
                <div className="alltask-sub-content">
                    <div className="alltask-sub-content-row">
                        <div className="filter-item">
                            <select name="" id="" className="def-input" onChange={(e) => dataLimitOnChange(parseInt(e.target.value)) }>
                                <option value="5">แสดง 5 รายการ</option>
                                <option value="10">แสดง 10 รายการ</option>
                                <option value="20">แสดง 20 รายการ</option>
                                <option value="100">แสดง 100 รายการ</option>
                            </select>
                        </div>
                        <div className="filter-item">
                            {/* <select name="" id="" className="def-input">
                                <option value="">อินวอยส์</option>
                                <option value="">ชื่อ-นามสกุล</option>
                                <option value="">เบอร์โทร</option>
                            </select> */}
                            <input type="text" className="def-input" placeholder="ค้นหา" />
                        </div>
                    </div>
                    <div className="alltask-sub-content task-list">
                        {
                            Tasks && Tasks.map((item, index) => (
                                <TaskItem task={item} key={index} />
                            ))
                        }
                    </div>
                </div>
                <div className="alltask-sub-content pagination-container">
                    <div className="pagination-item prev disabled"><img src={arrowIcon} alt="" /></div>
                    <div className="all-pagination">
                        <div className="pagination-item active">1</div>
                        <div className="pagination-item">2</div>
                        <div className="pagination-item">3</div>
                        <div className="pagination-item">4</div>
                    </div>
                    <div className="pagination-item next"><img src={arrowIcon} alt="" /></div>
                </div>
            </div>
        </Layout>
    );
}