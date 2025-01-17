import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App/>}>
    
  </Route>
  </Routes>
  </BrowserRouter>
  </StrictMode>,
)
