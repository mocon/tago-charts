import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import type { TagoRealtimeData } from '../../types/tago'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

/** Colors for datasets in the chart */
const colors = ['#E4D353', '#7CB2E9']

type ChartLineProps = {
  data: TagoRealtimeData | null
}

/** Line chart, rendering data from Tago.io */
export const ChartLine = ({ data }: ChartLineProps) => {
  const labels = data?.map((item) => item.result.map((item) => item.time))

  const chartData = {
    labels,
    datasets: data?.map((item, index) => ({
      label: item.result[0].metadata.label,
      data: data[index].result.map((item) => item.value) || [],
      borderColor: colors[index],
      borderWidth: 1,
      backgroundColor: 'transparent',
      pointStyle: false,
    })),
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  }

  if (!data) return null

  return (
    <div className='graph'>
      {/* @ts-expect-error TODO: Fix `chartData` typing */}
      <Line options={options} data={chartData} />
    </div>
  )
}
