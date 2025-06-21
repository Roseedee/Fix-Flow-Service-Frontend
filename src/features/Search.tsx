import React from "react";
import Layout from "@components/layout/Layout";
import '@styles/features/Search.css'

//icon
import fullSizeIcon from "@assets/icons/full-size-white.png"
import editIcon from "@assets/icons/edit-white.png"

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
            <div className="search-result-list-content card">
                <h4>ผลการค้นหา 0 รายการ</h4>
                <div className="search-filter-content">
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
                </div>
                <div className="search-task-result-list">
                    <div className="task-item">
                        <div className="task-item-start-content">
                            <p className="task-color round-vsm"></p>
                            <div className="task-data-form-1">
                                <span>รหัส</span>
                                <p>1254687791</p>
                            </div>
                            <div className="task-data-form-1">
                                <span>ผู้รับงานซ่อม</span>
                                <p>รอซีดี เจ๊ะแล๊ะ</p>
                            </div>
                            <div className="task-data-form-2">
                                <p>มูฮัมหมัด เจ๊ะแล๊ะ</p>
                                <p>0630742165</p>
                            </div>        
                            <div className="task-data-form-3">
                                <a>#Notebook</a>
                                <p>Lenovo Ideapad 3</p>
                            </div>        
                            <div className="task-data-form-2">
                                <p>MP2FNXRY</p>
                                <p>LNVNB161216</p>
                            </div>       
                            <div className="task-data-form-1">
                                <span>อาการลูกค้าแจ้ง</span>
                                <p>Microsoft Word ใช้งานไม่ได้</p>
                            </div>
                            <div className="task-data-form-1">
                                <span>ราคาประเมิน</span>
                                <p>500-1200</p>
                            </div>
                            <div className="task-data-form-1">
                                <span>ผู้รับผิดชอบงานซ่อม</span>
                                <p>ไม่มี</p>
                            </div> 
                        </div>
                        <div className="task-item-end-content">
                            <button><img src={fullSizeIcon} alt="" /></button>
                            <button><img src={editIcon} alt="" /></button>
                        </div>
                    </div>
                    <div className="task-item">
                        <div className="task-item-start-content">
                            <p className="task-color round-vsm"></p>
                            <div className="task-data-form-1">
                                <span>รหัส</span>
                                <p>1254687791</p>
                            </div>
                            <div className="task-data-form-1">
                                <span>ผู้รับงานซ่อม</span>
                                <p>รอซีดี เจ๊ะแล๊ะ</p>
                            </div>
                            <div className="task-data-form-2">
                                <p>เอบีซี ดีเอฟจี</p>
                                <p>0630742165</p>
                            </div>        
                            <div className="task-data-form-3">
                                <a>#Printer</a>
                                <p>Epson L3110</p>
                            </div>        
                            <div className="task-data-form-2">
                                <p>MP2FNXRY</p>
                                <p>LNVNB161216</p>
                            </div>       
                            <div className="task-data-form-1">
                                <span>อาการลูกค้าแจ้ง</span>
                                <p>Microsoft Word ใช้งานไม่ได้</p>
                            </div>
                            <div className="task-data-form-1">
                                <span>ราคาประเมิน</span>
                                <p>1000-1200</p>
                            </div>
                            <div className="task-data-form-1">
                                <span>ผู้รับผิดชอบงานซ่อม</span>
                                <p>ไม่มี</p>
                            </div> 
                        </div>
                        <div className="task-item-end-content">
                            <button><img src={fullSizeIcon} alt="" /></button>
                            <button><img src={editIcon} alt="" /></button>
                        </div>
                    </div>
                    <div className="task-item">
                        <div className="task-item-start-content">
                            <p className="task-color round-vsm"></p>
                            <div className="task-data-form-1">
                                <span>รหัส</span>
                                <p>546849764</p>
                            </div>
                            <div className="task-data-form-1">
                                <span>ผู้รับงานซ่อม</span>
                                <p>มูฮัมหมัด เจ๊ะแล๊ะ</p>
                            </div>
                            <div className="task-data-form-2">
                                <p>ชื่อตัวอย่าง เทส</p>
                                <p>0652568546</p>
                            </div>        
                            <div className="task-data-form-3">
                                <a>#Notebook</a>
                                <p>Lenovo Ideapad 3</p>
                            </div>        
                            <div className="task-data-form-2">
                                <p>MP2FNXRY</p>
                                <p>LNVNB161216</p>
                            </div>       
                            <div className="task-data-form-1">
                                <span>อาการลูกค้าแจ้ง</span>
                                <p>เครื่องช้าๆ ต้องการโปรแกรม - autocad - photoshop</p>
                            </div>
                            <div className="task-data-form-1">
                                <span>ราคาประเมิน</span>
                                <p>500-1200</p>
                            </div>
                            <div className="task-data-form-1">
                                <span>ผู้รับผิดชอบงานซ่อม</span>
                                <p>ไม่มี</p>
                            </div> 
                        </div>
                        <div className="task-item-end-content">
                            <button><img src={fullSizeIcon} alt="" /></button>
                            <button><img src={editIcon} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}