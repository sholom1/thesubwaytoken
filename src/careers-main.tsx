import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CareersApp from './CareersApp.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CareersApp />
  </StrictMode>,
)
