import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MemoryPlay from './pages/memory/MemoryPlay.tsx'
import QAPlay from './pages/qa/QAPlay.tsx'
import MemoryRules from './pages/memory/MemoryRules.tsx'
import QARules from './pages/qa/QARules.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/memory-rules',
    element: <MemoryRules />
  },
  {
    path: '/memory-play',
    element: <MemoryPlay />
  },
  {
    path: '/qa-rules',
    element: <QARules />
  },
  {
    path: '/qa-play',
    element: <QAPlay />
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
