import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./contexts/AuthContext";
import { MensagemProvider } from "./contexts/MensagemContext";
import { ConfirmProvider } from "./contexts/ConfirmContext";
import { TemaProvider } from "./contexts/TemaContext";
import MensagemGlobal from "./components/MensagemGlobal";

import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <MensagemProvider>
        <MensagemGlobal />
        <ConfirmProvider>
          <TemaProvider>
            <AppRoutes />
          </TemaProvider>
        </ConfirmProvider>
      </MensagemProvider>
    </AuthProvider>
  </BrowserRouter>
</React.StrictMode>
);