import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/custom-widget.min.js'
import { ChartLine } from './components/charts'
import type { TagoWidget, TagoRealtimeData } from './types/tago'

// Tell TypeScript about Tago.io global variables
declare global {
  interface Window {
    TagoIO: {
      ready: () => void
      onStart: (callback: (widget: TagoWidget) => void) => void
      onRealtime: (callback: (data: TagoRealtimeData) => void) => void
    }
  }
}

export default function App() {
  const [widget, setWidget] = useState<TagoWidget | null>(null)
  const [data, setData] = useState<TagoRealtimeData | null>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Start communication with Tago.io
    window.TagoIO.ready()

    // Get widget information
    window.TagoIO.onStart((widget) => setWidget(widget))

    // Listen for realtime data
    // TODO: Append new data when received, update chart
    window.TagoIO.onRealtime((data) => {
      setData(data)
    })
  }, [])

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>

      <ChartLine data={data} />

      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className='card'>
        <label>
          <strong>Widget:</strong>
        </label>
        <pre>
          <code>{JSON.stringify(widget, null, 2)}</code>
        </pre>
        <label>
          <strong>Data:</strong>
        </label>
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div>
    </>
  )
}
