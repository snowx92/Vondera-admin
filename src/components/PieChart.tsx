"use client"

import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

import ChartDataLabels from 'chartjs-plugin-datalabels'
// Register plugins using the static `register` method
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

interface PieChartProps {
  data: {
    labels: string[]
    datasets: {
      data: number[]
      backgroundColor: string[]
    }[]
  }
}

export default function PieChart({ data }: PieChartProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: { label: string; raw: number; dataset: { data: number[] } }) {
            const label = context.label || ''
            const value = context.raw || 0
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0)
            const percentage = ((value / total) * 100).toFixed(2) + '%'
            return `${label}: ${value} (${percentage})`
          }
        }
      },
      datalabels: {
        formatter: (value: number, context: { dataset: { data: number[] } }) => {
          const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0)
          const percentage = ((value / total) * 100).toFixed(2) + '%'
          return percentage
        },
        color: '#fff',
        font: {
          weight: 'bold' as const,
        }
      }
    },
  }

  return <Pie data={data} options={options} />
}
