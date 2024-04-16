import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Sobre from "./Sobre.jsx";
import NaoEncontrada from "./NaoEncontrada";
import InformacoesUsuario from "./InformacoesUsuario";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicial from "./PaginaInicial.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/meu-app" element={<App />} />
        <Route path="/sobre" element={<Sobre />}>
          <Route path=":nomeDaUrl" element={<InformacoesUsuario />} />
        </Route>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
