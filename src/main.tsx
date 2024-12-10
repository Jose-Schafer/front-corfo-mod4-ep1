import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import { routes } from '@/config/routes'
import Layout from './layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          <Route path={route.path} element={<Layout>{route.component}</Layout>} />
        })}
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
