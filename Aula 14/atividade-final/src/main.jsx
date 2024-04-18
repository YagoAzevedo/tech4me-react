import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* configuração das rotas */}
    <App />
    {/* <Route path="/" element={<PaginaInicial />} /> */}

  </React.StrictMode>,
)
