import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Layout from './layout.tsx'
import Home from '@/views/home'
import MedicalTeam from '@/views/medical-team'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<Home />} />} />
        <Route path="/equipo-medico" element={<Layout children={<MedicalTeam />} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
