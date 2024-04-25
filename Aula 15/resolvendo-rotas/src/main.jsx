import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicial from './PaginaInicial'
import Sobre from './Sobre'
import Detalhes from './Detalhes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/asteroide/:id" element={<Detalhes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
