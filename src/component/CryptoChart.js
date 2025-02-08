import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const CryptoChart = ({ coins }) => {
  const data = {
    labels: coins.map((coin) => coin.name),
    datasets: [
      {
        label: "Price (USD)",
        data: coins.map((coin) => coin.current_price),
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderWidth: 3,
        pointBackgroundColor: "#007bff",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#007bff",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: {
        ticks: { color: "#333" },
        grid: { color: "rgba(0, 0, 0, 0.1)" },
      },
      y: {
        ticks: { color: "#333" },
        grid: { color: "rgba(0, 0, 0, 0.1)" },
      },
    },
  };

  return (
    <div className="container mt-4">
      <h4 className="text-center text-primary mb-4">📈 Market Trend</h4>
      <div className="p-3 bg-white shadow-lg rounded-lg">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default CryptoChart;
