import 'regenerator-runtime/runtime'
import React from 'react'
import './global.css'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar'
import Zoo from './components/Zoo'
import getConfig from './config'
const { networkId } = getConfig("development");
import WellcomePage from './pages/WellcomePage'
import { ZOO_PAGE } from './routes/consts'
import Completed from './components/Completed'

export default function App() {
  if (!window.walletConnection.isSignedIn()) {
    return (
      <WellcomePage />
    )
  }

  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path={'/'} element={<Zoo/>}/>
        <Route path={'/completed'} element={<Completed/>}/>
        <Route path='*' element={<Navigate replace to={ZOO_PAGE} />} />
      </Routes>
    </BrowserRouter>
  )
}

