import React from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ChartOptions
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '@styles/components/BarChart.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
        {
            label: 'Votes',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(75,192,192,0.6)',
        }
    ]
};

const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
        legend: { position: 'top' }
    }
};

export default function BarChart() {
    return (
        <Bar data={data} options={options} />
    );
}
