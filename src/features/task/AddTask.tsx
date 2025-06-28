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
                    <h4>ลูกค้า</h4>
                    <div className="row">
                        <div className="input-title">
                            <span>ชื่อ-นามสกุล*</span>
                            <input type="text" name="" id="" className="def-input" />
                        </div>
                        <div className="input-title">
                            <span>เบอร์โทร*</span>
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
                    <h4>อุปกรณ์</h4>
                    <div className="row">
                        <div className="input-title">
                            <span>ประเภทงานซ่อม*</span>
                            <select name="" id="" className="def-input">
                                <option value="1">Notebook</option>
                                <option value="1">Computer PC</option>
                                <option value="1">Printer</option>
                                <option value="1">Macbook</option>
                                <option value="1">UPS</option>
                            </select>
                        </div>
                        <div className="input-title">
                            <span>ยี่ห้อและรุ่น*</span>
                            <input type="text" name="" id="" className="def-input" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <div className="input-title">
                                <span>อาการที่ลูกค้าแจ้ง*</span>
                                <textarea name="" id="" className="def-input note"></textarea>
                            </div>
                        </div>
                        <div className="column">
                            <div className="input-title">
                                <span>Product Nubmer {'(PN)'}</span>
                                <input type="text" name="" id="" className="def-input" />
                            </div>
                            <div className="input-title">
                                <span>Serial Number {'(SN)'}*</span>
                                <input type="text" name="" id="" className="def-input" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <h4>รายละเอียดอื่นๆ</h4>
                    <div className="row">
                        <div className="input-title">
                            <span>ตำหนิ</span>
                            <input type="text" name="" id="" className="def-input" />
                        </div>
                        <div className="input-title">
                            <span>อุปกรณ์ที่ติดมาด้วย</span>
                            <input type="text" name="" id="" className="def-input" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-title">
                            <span>สีของอุปกรณ์</span>
                            <input type="text" name="" id="" className="def-input" />
                        </div>
                        <div className="input-title">
                            <span>รหัสผ่านอุปกรณ์</span>
                            <input type="text" name="" id="" className="def-input" />
                        </div>
                    </div>
                    <hr />
                    <h4>รายละเอียดการซ่อม</h4>
                    <div className="row">
                        <div className="input-title">
                            <span>วันที่เพิ่มงานซ่อม</span>
                            <input type="date" name="" id="" className="def-input" />
                        </div>
                        <div className="input-title">
                            <span>มัดจำเงินก่อนซ่อม</span>
                            <input type="text" name="" id="" className="def-input" placeholder="0"/>
                        </div>
                        <div className="input-title">
                            <span>ระยะเวลาในการซ่อม<span className="tag-warning">#วัน</span></span>
                            <input type="text" name="" id="" className="def-input" placeholder="1"/>
                        </div>
                        <div className="input-title">
                            <span>ราคาประเมิน</span>
                            <input type="text" name="" id="" className="def-input" placeholder="500-1000 บาท"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-title">
                            <span>หมายเหตุ</span>
                            <textarea name="" id="" className="def-input note" placeholder="หมายเหตุ"></textarea>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </Layout>
    )
}