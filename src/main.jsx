import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import {HookApp} from './HookApp'
import { Counter } from './useState/Counter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
  </StrictMode>,
)
