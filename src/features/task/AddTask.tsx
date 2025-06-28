import React, {useEffect} from "react";
import Layout from "@components/layout/Layout";
import '@styles/features/task/AddTask.css'

export default function AddTask() {

    useEffect(() => {
        
    }, []);

    return (
        <Layout>
            <div className="add-task-header">
                <h2>Add Task</h2>
            </div>
            <div className="addtask-content card">
                <div className="addtask-sub-content">
                    <div className="row">
                        <div className="input-title">
                            <span>ชื่อ-นามสกุล</span>
                            <input type="text" name="" id="" className="def-input" />
                        </div>
                        <div className="input-title">
                            <span>เบอร์โทร</span>
                            <input type="text" name="" id="" className="def-input" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-title">
                            <span>อีเมล</span>
                            <input type="text" name="" id="" className="def-input" />
                        </div>
                        <div className="input-title">
                            <span>รหัสบัตรประชาชน</span>
                            <input type="text" name="" id="" className="def-input" />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="input-title">
                            <span>ประเภทงานซ่อม</span>
                            <select name="" id="" className="def-input">
                                <option value="1">Notebook</option>
                                <option value="1">Computer PC</option>
                                <option value="1">Printer</option>
                                <option value="1">Macbook</option>
                                <option value="1">UPS</option>
                            </select>
                        </div>
                        <div className="input-title">
                            <span>ยี่ห้อเครื่อง</span>
                            <input type="text" name="" id="" className="def-input" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}