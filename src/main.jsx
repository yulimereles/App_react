import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PersonajeProvider } from './context/Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonajeProvider>
      <App />
    </PersonajeProvider>
  </React.StrictMode>,
)