import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Вклад коэффициентов в ненадежность ПП',
      },
    },
  };
  
  const labels = ['λ(КТ-параметры)', 'Δλ,термомех. напряжение', 'Δλ, цикличность', 'λΣ'];
    
  export const Chart=({bars})=> {
    const data = {
        labels,
        datasets: [
          {
            label: 'Значение коэффициента в %',
            data: bars,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
      };
    return <Bar options={options} data={data} />;
  }
  