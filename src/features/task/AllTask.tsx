import React from "react";
import Layout from "@components/layout/Layout";
import '@styles/features/task/AllTask.css';

//components
import SearchTaskItem from "@components/SearchTaskItem";

//icon
import arrowIcon from '@assets/icons/arrow.png';

type SearchTaskItemProps = {
    id: string;
    getter: string;
    cName: string;
    cPhone: string;
    taskType: string;
    brand: string;
    sn: string;
    pn: string;
    price: string;
    repairer: string;
    report: string;
}

const exampleTasks: SearchTaskItemProps[] = [
    {
        id: "1254687791",
        getter: "รอซีดี เจ๊ะแล๊ะ",
        cName: "มูฮัมหมัด เจ๊ะแล๊ะ",
        cPhone: "0630742165",
        taskType: "#Printer",
        brand: "Epson L3110",
        sn: "MP2FNXRY",
        pn: "LNVNB161216",
        price: "1000-1200",
        repairer: "ไม่มี",
        report: "Microsoft Word ใช้งานไม่ได้",
    },
    {
        id: "1254687792",
        getter: "สมศักดิ์ คงดี",
        cName: "ศิริพร ใจดี",
        cPhone: "0812345678",
        taskType: "#Notebook",
        brand: "Lenovo Ideapad 3",
        sn: "MP2AABBCC",
        pn: "LNVNB151234",
        price: "800-1000",
        repairer: "ช่างชัย",
        report: "เครื่องเปิดไม่ติด ต้องกดหลายครั้ง",
    },
    {
        id: "1254687793",
        getter: "สุภาพร แสงทอง",
        cName: "ประหยัด สุวรรณ",
        cPhone: "0898765432",
        taskType: "#PC",
        brand: "Acer Aspire",
        sn: "SN12345678",
        pn: "PN98765432",
        price: "1500-2000",
        repairer: "ช่างหนึ่ง",
        report: "มีเสียงดังผิดปกติจากพัดลม",
    },
];


export default function AllTask() {
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
                            <select name="" id="" className="def-input">
                                <option value="10">แสดง 10 รายการ</option>
                                <option value="20">แสดง 20 รายการ</option>
                                <option value="50">แสดง 50 รายการ</option>
                                <option value="100">แสดง 100 รายการ</option>
                            </select>
                        </div>
                        <div className="filter-item">
                            <select name="" id="" className="def-input">
                                <option value="">อินวอยส์</option>
                                <option value="">ชื่อ-นามสกุล</option>
                                <option value="">เบอร์โทร</option>
                            </select>
                            <input type="text" className="def-input" placeholder="ค้นหา" />
                        </div>
                        <div className="filter-item"></div>
                    </div>
                    <div className="alltask-sub-content task-list">
                        {
                            exampleTasks.map((item, index) => (
                                <SearchTaskItem task={item} />
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