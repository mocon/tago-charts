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

type ChartLineProps = {
  data: TagoRealtimeData | null
}

/** Line chart, rendering data from Tago.io */
export const ChartLine = ({ data }: ChartLineProps) => {
  console.log('🏀 data =>', JSON.stringify(data, null, 2))

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ]

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [0, 10, 5, 2, 20, 30, 45],
        borderColor: '#E4D353',
        borderWidth: 1,
        backgroundColor: 'transparent',
        pointStyle: false,
      },
      {
        label: 'Dataset 2',
        data: [10, 15, 25, 30, 32, 40, 50],
        borderColor: '#7CB2E9',
        borderWidth: 1,
        backgroundColor: 'transparent',
        pointStyle: false,
      },
    ],
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

  return (
    <div className='graph'>
      {/* @ts-expect-error TODO: Fix this */}
      <Line options={options} data={chartData} />
    </div>
  )
}
