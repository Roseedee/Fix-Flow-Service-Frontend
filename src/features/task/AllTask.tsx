import React, { use } from "react";
import Layout from "@components/layout/Layout";
import '@styles/features/task/AllTask.css';
import { useLocation, useSearchParams } from "react-router-dom";

//model
import TaskModel, { TaskDataEx } from '@model/task/Task'
import TaskStatus from "@model/task/TaskStatus";

//components
import TaskItem from "@components/TaskItem";

//icon
import arrowIcon from '@assets/icons/arrow.png';

export default function AllTask() {

    const localtion = useLocation().pathname.split('/');
    const [searchParams, setSearchParams] = useSearchParams();
    let page: number = parseInt(searchParams.get('page') || '1');

    //input state
    const [dataLimit, setDataLimit] = React.useState<number>(() => {
        const stored = localStorage.getItem('task-dataLimit');
        return stored ? parseInt(stored) : 5;
    });

    //task state
    const [tasks, setTasks] = React.useState<TaskModel[]>(TaskDataEx.filter(item => filterTasks(item)));
    let tasksLenght: number = TaskDataEx.filter(item => filterTasks(item)).length;
    let pageNumber: number = Math.ceil(tasksLenght / dataLimit);

    function filterTasks(item: TaskModel) {
        const path = localtion[localtion.length - 1];
        // console.log(path)
        if (path === 'inprogress') {
            return item.status === TaskStatus.IN_PROGRESS;
        } else if (path === 'completed') {
            return item.status === TaskStatus.COMPLETED;
        } else if (path === 'delivered') {
            return item.status === TaskStatus.DELIVERED;
        } else if (path === 'cancelled') {
            return item.status === TaskStatus.CANCELLED;
        } else if (path === 'awaitingparts') {
            return item.status === TaskStatus.AWAITING_PARTS;
        } else {
            return item;
        }
    }

    React.useEffect(() => {
        pageNumber = Math.ceil(tasksLenght / dataLimit)
        setTasks(TaskDataEx.filter(item => filterTasks(item)).slice((page - 1) * dataLimit, page * dataLimit));
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [dataLimit, page]);


    const dataLimitOnChange = (newLimit: number) => {
        setDataLimit(newLimit);
        localStorage.setItem('task-dataLimit', String(newLimit));
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
                            <select name="" id="" className="def-input" onChange={(e) => dataLimitOnChange(parseInt(e.target.value))} value={dataLimit}>
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
                            tasks && tasks.map((item, index) => (
                                <TaskItem task={item} key={index} />
                            ))
                        }
                    </div>
                </div>
                <div className="alltask-sub-content pagination-container">
                    <button className="pagination-item prev" disabled={page === 1}  onClick={() => setSearchParams({ page: (page - 1).toString() })}><img src={arrowIcon} alt="" /></button>
                    <div className="all-pagination">
                        {
                            Array.from({ length: pageNumber }, (_, i) => (
                                <div
                                    key={i}
                                    className={`pagination-item ${i + 1 === page ? "active" : ""}`}
                                    onClick={() => setSearchParams({ page: (i + 1).toString() })}>
                                    {i + 1}
                                </div>
                            ))
                        }
                        {/* <div className="pagination-item active">1</div>
                        <div className="pagination-item">2</div>
                        <div className="pagination-item">3</div>
                        <div className="pagination-item">4</div> */}
                    </div>
                    <button className="pagination-item next" disabled={page === pageNumber} onClick={() => setSearchParams({ page: (page + 1).toString() })}><img src={arrowIcon} alt="" /></button>
                </div>
            </div>
        </Layout>
    );
}