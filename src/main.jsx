import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ClickSpark from './components/ClickSpark/ClickSpark.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ClickSpark
        sparkColor='#000000'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <App />
      </ClickSpark>
    </BrowserRouter>
  </StrictMode>,
)
