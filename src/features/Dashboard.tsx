import React from 'react';
import Layout from '@components/Layout';
import BarChart from '@components/BarChart';

export default function Dashboard() {
    return (
        <Layout>
            <div style={{ padding: '16px' }}>
                <h2>Dashboard</h2>
                <p>Welcome to the dashboard!</p>
                <BarChart />
            </div>
        </Layout>
    );
}