import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { LikesProvider } from './context/LikesContext'
import './styles/tokens.css'
import './index.css'
import './styles/ui.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LikesProvider> 
        <App />
      </LikesProvider>
    </BrowserRouter>
  </StrictMode>,
)
