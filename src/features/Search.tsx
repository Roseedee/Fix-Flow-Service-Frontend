import React from "react";
import Layout from "@components/layout/Layout";
import '@styles/features/Search.css'

//model
import TaskModel, { TaskDataEx } from "@model/task/Task";

//components
import TaskItem from "@components/TaskItem";

const exampleTasks: TaskModel[] = TaskDataEx;

export default function Search() {

    return (
        <Layout>
            <div className="search-header">
                <h2>ค้นหา</h2>
            </div>
            <div className="search-form card">
                <div className="search-form-input-container">
                    <input type="text" placeholder="ค้นหา" className="def-input" />
                    <select name="" id="" className="def-input">
                        <option value="1">อัฉริยะ</option>
                        <option value="1">รหัส</option>
                        <option value="1">ชื่อ-นามสกุล</option>
                        <option value="1">เบอร์โทร</option>
                        <option value="1">รหัสสินค้า</option>
                        <option value="1">รหัสเครื่อง</option>
                    </select>
                </div>
                <div className="search-form-input-container">
                    <div className="input-title">
                        <span>วันที่</span>
                        <input type="date" name="" id="" className="def-input" />
                    </div>
                    <div className="input-title">
                        <span>สถานะงานซ่อม</span>
                        <select name="" id="" className="def-input">
                            <option value="1">กำลังซ่อม</option>
                            <option value="1">ซ่อมเสร็จแล้ว</option>
                            <option value="1">รับเครื่องแล้ว</option>
                            <option value="1">ยกเลิกงานซ่อม</option>
                            <option value="1">งานซ่อมที่ถูกลบ</option>
                        </select>
                    </div>
                    <div className="input-title">
                        <span>ประเภทงานซ่อม</span>
                        <select name="" id="" className="def-input">
                            <option value="1">Notebook</option>
                            <option value="1">Notebook Gaming</option>
                            <option value="1">Computer PC</option>
                            <option value="1">Computer Brand</option>
                            <option value="1">Printer</option>
                            <option value="1">Macbook</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="search-result-list-content card">
                <h4>ผลการค้นหา 0 รายการ</h4>
                {/* <div className="search-filter-content">
                    <div className="search-filter-item">
                        <h5>ผู้รับผิดชอบงานซ่อม</h5>
                        <div className="filter-check-input-content">
                            <label>
                                <input type="checkbox" name="" id="" />
                                <span>รอซีดี เจ๊ะแล๊ะ</span>
                            </label>
                            <label>
                                <input type="checkbox" name="" id="" />
                                <span>มูฮัมหมัด เจ๊ะแล๊ะ</span>
                            </label>
                            <label>
                                <input type="checkbox" name="" id="" />
                                <span>ซอลาฮุดิน</span>
                            </label>
                        </div>
                    </div>
                    <div className="search-filter-item">
                        <h5>ระยะเวลาในการซ่อม</h5>
                        <div className="filter-check-input-content">
                            <label>
                                <input type="checkbox" name="" id="" />
                                <span>1 อาทิตย์</span>
                            </label>
                            <label>
                                <input type="checkbox" name="" id="" />
                                <span>1 เดือน</span>
                            </label>
                            <label>
                                <input type="checkbox" name="" id="" />
                                <span>1 เดือนขึ้นไป</span>
                            </label>
                        </div>
                    </div>
                </div> */}
                <div className="search-task-result-list">
                    {
                        exampleTasks.map((item, index) => (
                            <TaskItem task={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}