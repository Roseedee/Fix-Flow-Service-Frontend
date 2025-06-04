import React from 'react';
import Layout from '@components/Layout';
import Chart from '@components/Chart';

export default function Dashboard() {
    return (
        <Layout>
            <div style={{ padding: '16px' }}>
                <h2>Dashboard</h2>
                <p>Welcome to the dashboard!</p>
                <Chart />
            </div>
        </Layout>
    );
}