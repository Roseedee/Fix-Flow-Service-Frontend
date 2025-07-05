import React from "react";
import Layout from "@components/layout/Layout";
import '@styles/features/task/AllTask.css';


export default function AllTask() {
    return (
        <Layout>
            <div className="all-task-container">
                <div className="all-task-header">
                    <h2>งานซ่อมทั้งหมด</h2>
                </div>
                <div className="all-task-content">
                    {/* Content for all tasks will go here */}
                    <p>แสดงรายการงานซ่อมทั้งหมดที่นี่</p>
                </div>
            </div>

        </Layout>
    );
}