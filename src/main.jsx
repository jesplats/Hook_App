import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import {SimpleForm} from './UseEfect/SimpleForm'
//import {CounterWithCustomHook} from './useState/CounterWithCustomHook'
//import {HookApp} from './HookApp'
//import { Counter } from './useState/Counter'
//import {FormWithCustomHook} from './UseEfect/FormWithCustomHook'
//import { MultipleCustomHook } from './example/MultipleCustomHook'
//import { FocusScreen } from './useRef/FocusScreen'
//mport { Layout } from './useLoyaurEfecct/Layout'
import {CallbackHook} from './memos/CallbackHook'
//import { Memorize } from './memos/Memorize'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CallbackHook />
  </StrictMode>,
)
