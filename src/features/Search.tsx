import React from "react";
import Layout from "@components/layout/Layout";
import '@styles/features/Search.css'

export default function Search() {

    return (
        <Layout>
            <div className="search-header">
                <h2>Search</h2>
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

        </Layout>
    )
}