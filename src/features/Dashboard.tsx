import React from 'react';
import Layout from '@components/Layout';
import BarChart from '@components/BarChart';
import '@styles/features/Dashboard.css';
import { ChartData } from 'chart.js';
import { Chart } from 'react-chartjs-2';

const data: ChartData<'bar'> = {
    labels: [],
    datasets: []
};

function generateExampleChartData(): typeof data {
    const labels = ['02-05', '03-05', '04-05', '05-05', '06-05', '07-05'];

    function randomData(length: number, min: number = 1, max: number = 20): number[] {
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
                <p>Welcome to the dashboard!</p>
            </div>
            <div className="dashboard-content">
                <div className="dashboard-sub-content">
                    <BarChart data={ generateExampleChartData() } />

                </div>
                <div className="dashboard-sub-content">
                    <BarChart data={ generateExampleChartData() } />

                </div>
            </div>
        </Layout>
    );
}