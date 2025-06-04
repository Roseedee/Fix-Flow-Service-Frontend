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

// Register Chart.js components
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

export default function Chart() {
    return (
            <Bar data={data} options={options} />
    );
}

// const MyChart = () => {
//   return <Bar data={data} options={options} />;
// };

// export default MyChart;
