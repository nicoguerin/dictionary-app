import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ThemeProvider from './context/Theme.jsx'
import './index.css'
import DictionaryProvider from './context/Dictionary.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <DictionaryProvider>
      <App />
    </DictionaryProvider>
  </ThemeProvider>
)