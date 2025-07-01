import React, { useEffect } from "react";
import Layout from "@components/layout/Layout";
import '@styles/features/task/AddTask.css'

//icon
import photoIcon from '@assets/icons/camera.png';
import uploadImageIcon from '@assets/icons/upload.png';
import saveIcon from '@assets/icons/save.png';
import closeIcon from '@assets/icons/close-white.png';

//unit test
import qrImage from '@assets/images/qr.png';
import imgTest1 from '@assets/images/test.jpg';
import imgTest2 from '@assets/images/test1.jpg';
import imgTest3 from '@assets/images/test2.jpg';
// import imgTest4 from '@assets/images/test3.jpeg';

export default function AddTask() {

    //image upload state
    const [imagesUpload, setImagesUpload] = React.useState<File[]>([]);


    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setImagesUpload(files);
        console.log("Uploaded files:", files);
    }

    React.useEffect(() => {
        console.log("imageFiles (updated):", imagesUpload);
    }, [imagesUpload]);

    return (
        <Layout>
            <div className="add-task-header">
                <h2>เพิ่มงานซ่อม</h2>
            </div>
            <div className="addtask-content card">
                <div className="addtask-sub-content">
                    <div className="column">
                        <h4>ลูกค้า</h4>
                        <div className="row">
                            <div className="input-title">
                                <span>ชื่อ-นามสกุล*</span>
                                <input type="text" name="" id="" className="def-input" />
                            </div>
                            <div className="input-title">
                                <span>เบอร์โทร*</span>
                                <input type="text" name="" id="" className="def-input" placeholder="0800000000"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-title">
                                <span>อีเมล</span>
                                <input type="text" name="" id="" className="def-input" placeholder="example@gmail.com"/>
                            </div>
                            <div className="input-title">
                                <span>รหัสบัตรประชาชน</span>
                                <input type="text" name="" id="" className="def-input" />
                            </div>
                        </div>
                    </div>
                    <hr className="hr" />
                    <div className="column">
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
                                    <textarea name="" id="" className="def-input note" placeholder="เปิดติดไม่ขึ้นภาพ"></textarea>
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
                    </div>
                    <hr className="hr" />
                    <div className="column">
                        <h4>รายละเอียดอื่นๆ</h4>
                        <div className="row">
                            <div className="input-title">
                                <span>ตำหนิ</span>
                                <input type="text" name="" id="" className="def-input" placeholder="มีรอยแตกที่บอดี้หลังเครื่อง"/>
                            </div>
                            <div className="input-title">
                                <span>อุปกรณ์ที่ติดมาด้วย</span>
                                <input type="text" name="" id="" className="def-input" placeholder="สายชาร์จ กระเป๋า"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-title">
                                <span>สีของอุปกรณ์</span>
                                <input type="text" name="" id="" className="def-input" placeholder="ดำ ขาว"/>
                            </div>
                            <div className="input-title">
                                <span>รหัสผ่านอุปกรณ์</span>
                                <input type="text" name="" id="" className="def-input" placeholder="1234"/>
                            </div>
                        </div>
                    </div>
                    <hr className="hr" />
                    <div className="column">
                        <h4>รายละเอียดการซ่อม</h4>
                        <div className="row">
                            <div className="input-title">
                                <span>วันที่เพิ่มงานซ่อม</span>
                                <input type="date" name="" id="" className="def-input" />
                            </div>
                            <div className="input-title">
                                <span>มัดจำเงินก่อนซ่อม</span>
                                <input type="text" name="" id="" className="def-input" placeholder="0" />
                            </div>
                            <div className="input-title">
                                <span>ระยะเวลาในการซ่อม<span className="tag-warning">#วัน</span></span>
                                <input type="text" name="" id="" className="def-input" placeholder="1" />
                            </div>
                            <div className="input-title">
                                <span>ราคาประเมิน</span>
                                <input type="text" name="" id="" className="def-input" placeholder="500-1000 บาท" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-title">
                                <span>หมายเหตุ</span>
                                <textarea name="" id="" className="def-input note" placeholder="หมายเหตุ"></textarea>
                            </div>
                        </div>
                    </div>
                    <hr className="hr" />
                    <div className="column">
                        <h4>รูปภาพ</h4>
                        <div className="image-upload-container">
                            <div className="image-button-group">
                                <input type="file" id="image-upload" accept="image/*" multiple className="def-button d-none" onChange={(e) => handleImageUpload(e)} />
                                <button className="def-button" onClick={() => document.getElementById('image-upload')?.click()} ><img src={uploadImageIcon} alt="" />อัพโหลดรูปภาพ</button>
                                <button className="def-button"><img src={photoIcon} alt="" />ถ่ายรูป</button>
                            </div>
                            <div className="image-list">
                                {
                                    imagesUpload.map((file, index) => (
                                        <div className="image-item" key={index}>
                                            <div className="img">
                                                <img src={URL.createObjectURL(file)} alt={`Uploaded ${index + 1}`} />
                                            </div>
                                            <button onClick={() => {
                                                const newFiles = imagesUpload.filter((_, i) => i !== index);
                                                setImagesUpload(newFiles);
                                            }}><img src={closeIcon} alt="" /></button>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <hr className="hr" />
                    <div className="row-end">
                        <button className="denger-button"><img src={closeIcon} alt="" />ล้างข้อมูล</button>
                        <button className="def-button"><img src={saveIcon} alt="" />เพิ่มงานซ่อมเข้าระบบ</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}