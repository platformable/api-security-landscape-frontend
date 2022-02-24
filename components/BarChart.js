import React from 'react'
import {Bar, Pie} from 'react-chartjs-2';


export default function BarChart({positionsPastYear,positionThisYearq1}) {

console.log("positionThisYearq1",positionThisYearq1)

    const data = {
        labels: ['Q4 2021', 'Q1 2022'],
        datasets: [
          {
            label: '# of posts',
            data: [parseInt(positionsPastYear) || 0, parseInt(positionThisYearq1) || 0],
            backgroundColor: [
              '#5A0C78',
              '#5A0C78',
            ],
            borderRadius: 10,
          },
          
        ],

      };
      
      const options = {
        indexAxis: 'y',
        barThickness:20,
          responsive: true,
          plugins: {
            legend: {
              display: false
            }
           /*  title: {
              display: true,
              text: 'Grid Line Settings'
            } */
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
                drawOnChartArea: false,
                drawTicks: false,
              },
              color:"#5A0C78",
            },
            y: {
              grid: {
                display: true,
                drawBorder: false,
                drawOnChartArea: true,
                drawTicks: true,
              },
              suggestedMin: 0,
              suggestedMax: 50

            }
   
        },
      };

    return (
 
            <Bar data={data} options={options} />

    )
}
