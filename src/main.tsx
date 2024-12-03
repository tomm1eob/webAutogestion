import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBarComp from './components/progressBarComp/progressBarComp';
import HeaderComp from './components/headerComp/headerComp';
import { AppComp } from './components/appComp/appComp';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppComp></AppComp>
  </StrictMode>,
)
