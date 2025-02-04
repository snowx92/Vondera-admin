"use client"

import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TooltipItem } from "chart.js"
import ChartDataLabels, { Context } from "chartjs-plugin-datalabels"
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
          label: function (tooltipItem: TooltipItem<"pie">) {
            const label = tooltipItem.label || ""
            const value = (tooltipItem.raw as number) || 0
            const total = (tooltipItem.dataset.data as number[]).reduce(
              (a: number, b: number) => a + b,
              0
            )
            const percentage = ((value / total) * 100).toFixed(2) + "%"
            return `${label}: ${value} (${percentage})`
          },
        },
      },
      datalabels: {
        formatter: (value: number, context: Context) => {
          const dataset = context.dataset.data as number[]
          const total = dataset.reduce((a, b) => a + b, 0)
          return ((value / total) * 100).toFixed(2) + "%"
        },
        color: "#fff",
        font: {
          weight: "bold" as const,
        },
      },
    },
  }

  return <Pie data={data} options={options} />
}
