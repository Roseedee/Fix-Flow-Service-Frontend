import React from 'react';
import Layout from '@components/Layout';
import BarChart from '@components/BarChart';
import '@styles/features/Dashboard.css';
import { ChartData } from 'chart.js';
import DashboardTaskItem from '@components/DashboardTaskItem'


import taskIcon from '@assets/icons/task.png'

import imgUser_Test from '@assets/images/test.jpg';
import imgUser_Test1 from '@assets/images/test1.jpg';
import imgUser_Test2 from '@assets/images/test2.jpg';


const data: ChartData<'bar'> = {
    labels: [],
    datasets: []
};

function generateExampleChartData(): typeof data {
    const labels = ['02-05', '03-05', '04-05', '05-05', '06-05', '07-05'];

    function randomData(length: number, min: number = 1, max: number = 10): number[] {
        return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    }

    return {
        labels,
        datasets: [
            {
                label: 'นำเข้าระบบ',
                data: randomData(labels.length),
                backgroundColor: 'rgba(117, 253, 83, 0.86)',
            },
            {
                label: 'ซ่อมเสร็จแล้ว',
                data: randomData(labels.length),
                backgroundColor: 'rgb(109, 155, 97)',
            },
            {
                label: 'รับเครื่องแล้ว',
                data: randomData(labels.length),
                backgroundColor: 'rgb(137, 131, 217)',

            },
        ]
    };
}

export default function Dashboard() {
    return (
        <Layout>
            <div className="dashboard-header">
                <h2>Dashboard</h2>
            </div>
            <div className="dashboard-content">
                <div className="dashboard-sub-content user-loged-in-list">
                    <div className="user-card card">
                        <div className="user-card-img">
                            <img src={ imgUser_Test } alt="" />
                        </div>
                        <h5>รอซ๊ดี เจ๊ะแล๊ะ</h5>
                        <span>พนักงานซ่อม</span>
                    </div>
                    <div className="user-card card">
                        <div className="user-card-img">
                            <img src={ imgUser_Test1 } alt="" />
                        </div>
                        <h5>ซอลาฮุดิน เจ๊ะแล๊ะ</h5>
                        <span>พนักงานหน้าร้าน</span>
                    </div>
                    <div className="user-card card">
                        <div className="user-card-img">
                            <img src={ imgUser_Test2 } alt="" />
                        </div>
                        <h5>มูฮัมหมัด เจ๊ะแล๊ะ</h5>
                        <span>พนักงานกล้องวงจรปิด</span>
                    </div>
                </div>
            </div>
            <div className="dashboard-content-row">
                <div className="dashboard-sub-content card">
                    <h4>งานซ่อม 7 วันย้อนหลัง</h4>
                    <BarChart data={generateExampleChartData()} />
                </div>
                <div className="dashboard-sub-content card">
                    <h4>งานซ่อม 6 เดือนย้อนหลัง</h4>
                    <BarChart data={generateExampleChartData()} />
                </div>
            </div>
            {/* <div className="dashboard-content">
                <div className="dashboard-sub-content card">
                    <h4>งานซ่อม 7 วันย้อนหลัง</h4>
                    <BarChart data={generateExampleChartData()} />
                </div>
                <div className="dashboard-sub-content card">
                    <h4>งานซ่อม 6 เดือนย้อนหลัง</h4>
                    <BarChart data={generateExampleChartData()} />
                </div>
            </div>
            <div className="dashboard-content">
                <div className="dashboard-sub-content card">
                    <h4>งานซ่อม 7 วันย้อนหลัง</h4>
                    <BarChart data={generateExampleChartData()} />
                </div>
                <div className="dashboard-sub-content card">
                    <h4>งานซ่อม 6 เดือนย้อนหลัง</h4>
                    <BarChart data={generateExampleChartData()} />
                </div>
            </div> */}
            <div className="dashboard-content">
                <h4>สถานะงานซ่อมหลัก</h4>
                <div className="status-task-list">
                    <DashboardTaskItem title="งานซ่อมในระบบทั้งหมด" number="100" color='#D9D9D9' />
                    <DashboardTaskItem title="กำลังซ่อมอยู่" number="100" color='#a9c352' />
                    <DashboardTaskItem title="ซ่อมเสร็จแล้ว" number="100" color='#B9B39B' />
                    <DashboardTaskItem title="รับเครื่องแล้ว" number="100" color='#6C96FF' />
                    <DashboardTaskItem title="ยกเลิกงานซ่อม" number="100" color='#FF7878' />
                </div>
            </div>
            <div className="dashboard-content">
                <h4>สถานะงานซ่อมอื่นๆ</h4>
                <div className="status-task-list">
                    <DashboardTaskItem title="ส่งเคลมศูนย์" number="100" color='#D9D9D9' maxWidth={300} />
                    <DashboardTaskItem title="ส่งซ๋อมกับช่างยี" number="100" color='#a9c352' maxWidth={300} />
                    <DashboardTaskItem title="รออะไหล่" number="100" color='#B9B39B' maxWidth={300} />
                </div>
            </div>
        </Layout>
    );
}