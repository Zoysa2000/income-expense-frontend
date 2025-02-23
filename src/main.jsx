import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Dashboard/>
  </StrictMode>,
)
