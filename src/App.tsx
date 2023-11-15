import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/custom-widget.min.js'
import type { TagoWidget } from './types/tago'

// Tell TypeScript about Tago.io global variables
declare global {
  interface Window {
    TagoIO: {
      ready: () => void
      onStart: (callback: (widget: TagoWidget) => void) => void
      onRealTime: (callback: (data: unknown) => void) => void
    }
  }
}

export default function App() {
  const [widget, setWidget] = useState<TagoWidget | null>(null)
  const [count, setCount] = useState(0)

  // Start communication with Tago.io, get widget information
  useEffect(() => {
    window.TagoIO.ready()
    window.TagoIO.onStart((widget) => setWidget(widget))
    window.TagoIO.onRealTime((data) => {
      console.info('🏀 onRealTime data =>', JSON.stringify(data, null, 2))
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
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <pre>
          <code>{JSON.stringify(widget, null, 2)}</code>
        </pre>
      </div>
    </>
  )
}
