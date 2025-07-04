import React, { useEffect } from "react";
import Layout from "@components/layout/Layout";
import Today, {getCurrentTime} from "@util/DateTime";

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

    //input
    const [input, setInput] = React.useState({
        name: 'asdf',
        phone: 'asdf',
        email: 'asdf',
        idCard: 'asdf',
        deviceType: 'Printer',
        brandModel: 'asdf',
        symptoms: 'asdf',
        productNumber: 'asdf',
        serialNumber: 'asdf',
        defects: 'asdf',
        accessories: 'asdf',
        color: 'asdf',
        password: 'asdf',
        taskDate: Today(),
        deposit: '0',
        repairTime: '2',
        estimatedPrice: '1000',
        notes: 'asdf'
    });

    //image upload state
    const maxImageUpload: number = 5;
    const [imagesUpload, setImagesUpload] = React.useState<File[]>([]);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (imagesUpload.length < maxImageUpload && (imagesUpload.length + files.length) <= maxImageUpload) {
            if (imagesUpload.length > 0) {
                console.log("push files to imagesUpload");
                setImagesUpload([...imagesUpload, ...files]);
            } else {
                console.log("set imagesUpload");
                setImagesUpload(files);
            }
        } else {
            console.log(`cannot upload more than ${maxImageUpload} images`);
            alert(`ไม่สามารถอัพโหลดรูปภาพได้เกิน ${maxImageUpload} รูป`);
        }
    }

    React.useEffect(() => {
        console.log(imagesUpload.length + " files images uploaded");
    }, [imagesUpload]);

    React.useEffect(() => {
        console.log("input changed", input);
    }, [input])

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setInput((prev) => ({ ...prev, [name]: value }));
    }

    const handleResetForm = () => {
        if(confirm("คุณต้องการล้างข้อมูลทั้งหมดหรือไม่?")) {
            setInput({
                name: '',
                phone: '',
                email: '',
                idCard: '',
                deviceType: 'Notebook',
                brandModel: '',
                symptoms: '',
                productNumber: '',
                serialNumber: '',
                defects: '',
                accessories: '',
                color: '',
                password: '',
                taskDate: Today(),
                deposit: '0',
                repairTime: '1',
                estimatedPrice: '',
                notes: ''
            });
            setImagesUpload([]);
        }
    }

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
                                <input type="text" name="name" className="def-input" onChange={handleInputChange} value={input.name}/>
                            </div>
                            <div className="input-title">
                                <span>เบอร์โทร*</span>
                                <input type="text" name="phone" className="def-input" placeholder="0800000000" onChange={handleInputChange} value={input.phone}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-title">
                                <span>อีเมล</span>
                                <input type="text" name="email" className="def-input" placeholder="example@gmail.com" onChange={handleInputChange} value={input.email}/>
                            </div>
                            <div className="input-title">
                                <span>รหัสบัตรประชาชน</span>
                                <input type="text" name="idCard" id="" className="def-input" onChange={handleInputChange} value={input.idCard}/>
                            </div>
                        </div>
                    </div>
                    <hr className="hr" />
                    <div className="column">
                        <h4>อุปกรณ์</h4>
                        <div className="row">
                            <div className="input-title">
                                <span>ประเภทงานซ่อม*</span>
                                <select name="deviceType" className="def-input" onChange={handleInputChange} value={input.deviceType}>
                                    <option value="Notebook">Notebook</option>
                                    <option value="Computer PC">Computer PC</option>
                                    <option value="Printer">Printer</option>
                                    <option value="Macbook">Macbook</option>
                                    <option value="UPS">UPS</option>
                                </select>
                            </div>
                            <div className="input-title">
                                <span>ยี่ห้อและรุ่น*</span>
                                <input type="text" name="brandModel" className="def-input" onChange={handleInputChange} value={input.brandModel}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <div className="input-title">
                                    <span>อาการที่ลูกค้าแจ้ง*</span>
                                    <textarea name="symptoms" className="def-input note" placeholder="เปิดติดไม่ขึ้นภาพ" onChange={handleInputChange} value={input.symptoms}></textarea>
                                </div>
                            </div>
                            <div className="column">
                                <div className="input-title">
                                    <span>Product Nubmer {'(PN)'}</span>
                                    <input type="text" name="productNumber" className="def-input" onChange={handleInputChange} value={input.productNumber}/>
                                </div>
                                <div className="input-title">
                                    <span>Serial Number {'(SN)'}*</span>
                                    <input type="text" name="serialNumber" id="" className="def-input" onChange={handleInputChange} value={input.serialNumber}/>
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
                                <input type="text" name="defects" className="def-input" placeholder="มีรอยแตกที่บอดี้หลังเครื่อง" onChange={handleInputChange} value={input.defects}/>
                            </div>
                            <div className="input-title">
                                <span>อุปกรณ์ที่ติดมาด้วย</span>
                                <input type="text" name="accessories" className="def-input" placeholder="สายชาร์จ กระเป๋า" onChange={handleInputChange} value={input.accessories} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-title">
                                <span>สีของอุปกรณ์</span>
                                <input type="text" name="color" className="def-input" placeholder="ดำ ขาว" onChange={handleInputChange} value={input.color} />
                            </div>
                            <div className="input-title">
                                <span>รหัสผ่านอุปกรณ์</span>
                                <input type="text" name="password" className="def-input" placeholder="1234" onChange={handleInputChange} value={input.password} />
                            </div>
                        </div>
                    </div>
                    <hr className="hr" />
                    <div className="column">
                        <h4>รายละเอียดการซ่อม</h4>
                        <div className="row">
                            <div className="input-title">
                                <span>วันที่เพิ่มงานซ่อม</span>
                                <input type="date" name="taskDate" className="def-input" onChange={handleInputChange} value={input.taskDate}/>
                            </div>
                            <div className="input-title">
                                <span>มัดจำเงินก่อนซ่อม</span>
                                <input type="text" name="deposit" className="def-input" placeholder="0" onChange={handleInputChange} value={input.deposit}/>
                            </div>
                            <div className="input-title">
                                <span>ระยะเวลาในการซ่อม<span className="tag-warning">#วัน</span></span>
                                <input type="text" name="repairTime" className="def-input" placeholder="1" onChange={handleInputChange} value={input.repairTime}/>
                            </div>
                            <div className="input-title">
                                <span>ราคาประเมิน</span>
                                <input type="text" name="estimatedPrice" className="def-input" placeholder="500-1000 บาท" onChange={handleInputChange} value={input.estimatedPrice}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-title">
                                <span>หมายเหตุ</span>
                                <textarea name="notes" className="def-input note" placeholder="หมายเหตุ" onChange={handleInputChange} value={input.notes}></textarea>
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
                        <button className="denger-button" onClick={handleResetForm}><img src={closeIcon} alt="" />ล้างข้อมูล</button>
                        <button className="def-button"><img src={saveIcon} alt="" />เพิ่มงานซ่อมเข้าระบบ</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}