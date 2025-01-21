import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { Router, routes } from './routes/route'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <RouterProvider router={routes} />

  )
}

export default App
