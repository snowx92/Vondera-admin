"use client"

import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
} from "chart.js"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
import { Chart, registerables } from 'chart.js';
import { Filler } from 'chart.js';

Chart.register(...registerables, Filler);

interface DataPoint {
  x: string
  y: number
  count?: number // Add count as an optional property
}

interface Dataset {
  label: string
  data: DataPoint[]
  borderColor: string
  backgroundColor: string
  fill?: boolean | string // Add fill property
}

interface AreaChartWithTooltipProps {
  title: string
  datasets: Dataset[]
}

export default function AreaChartWithTooltip({ title, datasets }: AreaChartWithTooltipProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
      },
      tooltip: {
        mode: "nearest" as const, // Change to 'nearest'
        intersect: true, // Change to true
        callbacks: {
          label: function (tooltipItem: TooltipItem<"line">) {
            const label = tooltipItem.dataset.label || ""
            const value = tooltipItem.parsed.y
            const count = (tooltipItem.raw as DataPoint)?.count // Access the count property

            // Return an array of strings to display on separate lines
            if (count !== undefined) {
              return [`${label}: ${value}`, `Count: ${count}`]
            } else {
              return `${label}: ${value}`
            }
          },
        },
      },
      // Explicitly disable datalabels plugin for this chart
      datalabels: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          display: true,
        },
      },
      y: {
        ticks: {
          display: true,
        },
      },
    },
  }

  const data = {
    labels: datasets[0].data.map((d) => d.x),
    datasets: datasets.map((dataset) => ({
      ...dataset,
      fill: "origin", // Fill the area under the line
      tension: 0.4, // Add a slight curve to the line for a smoother area chart
    })),
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <Line options={options} data={data} />
        </div>
      </CardContent>
    </Card>
  )
}