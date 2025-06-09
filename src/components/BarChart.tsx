import React from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '@styles/components/BarChart.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type BarChartProps = {
    data: ChartData<'bar'>;
};

const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
        legend: { position: 'top' }
    },
    scales: {
        
    },
    datasets: {
    bar: {
        barThickness: 6,         // ความหนาของแท่ง
        categoryPercentage: 0.8, // ระยะห่างระหว่างกลุ่ม
        barPercentage: 0.5,      // ระยะห่างระหว่างแท่งในกลุ่ม
    },
  },
};

export default function BarChart({ data }: BarChartProps) {
    return (
        <Bar data={data} options={options} />
    );
}
