import React from 'react';
import Layout from '@components/Layout';
import BarChart from '@components/BarChart';
import '@styles/features/Dashboard.css';

export default function Dashboard() {
    return (
        <Layout>
            <div className="dashboard-header">
                <h2>Dashboard</h2>
                <p>Welcome to the dashboard!</p>
            </div>
            <div className="dashboard-content">
                <div className="dashboard-sub-content">
                    <BarChart />

                </div>
                <div className="dashboard-sub-content">
                    <BarChart />

                </div>
            </div>
        </Layout>
    );
}