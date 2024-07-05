import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const UserChart = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  // Static data for user logins
  const data = {
    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر"],
    datasets: [
      {
        label: "تعداد ورود ها",
        data: [3, 2, 5, 1, 4, 2, 5],
        backgroundColor: "rgba(128, 128, 128, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `تعداد ورود :   ${user.name} ${user.familyName}`,
      },
    },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-4 relative">
        <button
          className="absolute top-2 left-5 my-1 rounded-full bg-gray-400 text-white p-0.5 transition duration-300  hover:bg-gray-600"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default UserChart;