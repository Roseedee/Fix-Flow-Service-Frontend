import React from 'react';
import Layout from '@components/layout/Layout';
import '@styles/features/Dashboard.css';
import { ChartData } from 'chart.js';

import DashboardUsersList from '@components/DashboardUsersList';
import BarChart from '@components/BarChart';
import DashboardTaskItem from '@components/DashboardTaskItem'
import DashboardTaskList from '@components/DashboardTaskList';


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

const users = [
    {
        id: '1',
        img: imgUser_Test,
        name: 'รอซ๊ดี เจ๊ะแล๊ะ',
        position: 'พนักงานซ่อม',
    },
    {
        id: '2',
        img: imgUser_Test1,
        name: 'ซอลาฮุดิน เจ๊ะแล๊ะ',
        position: 'พนักงานหน้าร้าน',
    },
    {
        id: '3',
        img: imgUser_Test2,
        name: 'มูฮัมหมัด เจ๊ะแล๊ะ',
        position: 'พนักงานกล้องวงจรปิด',
    },
];

interface TaskData {
  id: string;
  time: string;
  name: string;
  taskType: string;
  taskBrand: string;
  detail: string;
}

function generateTestTasks(count: number = 10): TaskData[] {
  const taskTypes = ['Priter', 'Notebook', 'Macbook', 'Computer PC', 'Computer Brand'];
  const brands = ['Apple', 'Samsung', 'HP', 'Dell', 'Asus'];
  const names = ['สมชาย', 'วิภา', 'อดิศักดิ์', 'ปาริชาติ', 'มานพ', 'จันทร์เพ็ญ'];

  const tasks: TaskData[] = [];

  function getRandomTime(): string {
    const hour = String(Math.floor(Math.random() * 24)).padStart(2, '0');
    const minute = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    const second = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    return `${hour}:${minute}:${second}`;
  }

  for (let i = 0; i < count; i++) {
    const task: TaskData = {
      id: `000000${i + 1}`,
      time: getRandomTime(),
      name: names[Math.floor(Math.random() * names.length)],
      taskType: taskTypes[Math.floor(Math.random() * taskTypes.length)],
      taskBrand: brands[Math.floor(Math.random() * brands.length)],
      detail: `รายละเอียดงานที่ ${i + 1}`
    };
    tasks.push(task);
  }

  return tasks;
}

export default function Dashboard() {
    return (
        <Layout>
            <div className="dashboard-header">
                <h2>แดชบอร์ด</h2>
            </div>
            <div className="dashboard-content">
                <DashboardUsersList users={users} />
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
            <div className="dashboard-content">
                <h4>สถานะงานซ่อมหลัก</h4>
                <div className="status-task-list">
                    <DashboardTaskItem icon={taskIcon} title="งานซ่อมในระบบทั้งหมด" number="100" />
                    <DashboardTaskItem title="กำลังซ่อมอยู่" number="100" color='#a9c352' />
                    <DashboardTaskItem title="ซ่อมเสร็จแล้ว" number="100" color='#B9B39B' />
                    <DashboardTaskItem title="รับเครื่องแล้ว" number="100" color='#6C96FF' />
                    <DashboardTaskItem title="ยกเลิกงานซ่อม" number="100" color='#FF7878' />
                </div>
            </div>
            <div className="dashboard-content">
                <h4>สถานะงานซ่อมอื่นๆ</h4>
                <div className="status-task-list">
                    <DashboardTaskItem title="ส่งเคลมศูนย์" number="100" color='#D9D9D9' />
                    <DashboardTaskItem title="ส่งซ๋อมกับช่างยี" number="100" color='#a9c352' />
                    <DashboardTaskItem title="รออะไหล่" number="100" color='#B9B39B' />
                </div>
            </div>
            <div className="dashboard-content-row">
                <div className="dashboard-content">
                    <div className="row space-between">
                        <h4>งานซ๋อมที่เข้าระบบ</h4>
                        <select name="" id="" className='input-selector'>
                            <option value="1">วันนี้</option>
                            <option value="2">สัปดาห์นี้</option>
                            <option value="3">เดือนนี้</option>
                        </select>
                    </div>
                    <DashboardTaskList tasks={generateTestTasks(5)} />
                </div>
                <div className="dashboard-content">
                    <div className="row space-between">
                        <h4>งานซ๋อมที่เข้าระบบ</h4>
                        <select name="" id="" className='input-selector'>
                            <option value="1">วันนี้</option>
                            <option value="2">สัปดาห์นี้</option>
                            <option value="3">เดือนนี้</option>
                        </select>
                    </div>
                    <DashboardTaskList tasks={generateTestTasks(8)} />
                </div>
            </div>
        </Layout>
    );
}