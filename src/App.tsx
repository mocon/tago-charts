import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import Tago.io custom widget script
import './assets/custom-widget.min.js'

// Tell TypeScript about Tago.io global variables
declare global {
  interface Window {
    TagoIO: {
      ready: () => void
      onStart: (callback: (widget: unknown) => void) => void
    }
    widget: unknown
  }
}

// App
function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Start communication with Tago.io
    window.TagoIO.ready()

    // Get the widget information
    window.TagoIO.onStart((widget: unknown) => {
      console.log('🏀 widget =>', JSON.stringify(widget, null, 2))
      window.widget = widget
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
      </div>
    </>
  )
}

export default App
