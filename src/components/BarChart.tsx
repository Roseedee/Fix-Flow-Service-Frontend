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
        legend: {
            position: 'bottom',
            labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                boxHeight: 10,
                boxWidth: 10,
            }
        }
    },
    scales: {
        x: {
            grid: { display: false },
        },
        y: {
            ticks: {
                autoSkip: true,
                maxTicksLimit: 10,
            },
            grid: { display: false },
        }
    },
    datasets: {
        bar: {
            barPercentage: 0.8,
            categoryPercentage: 0.4,
            borderRadius: 5,
        },
    },
};

export default function BarChart({ data }: BarChartProps) {
    return (
        <Bar data={data} options={options} />
    );
}
