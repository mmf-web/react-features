import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import App from './problem'
// import App from './straightforward'
// import App from './props'
// import App from './children'
// import App from './context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
