import { useState } from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import Login from './components/Login'

function App() {
  return (
    <>
      <Header />
      <Login />
    </>
  )
}

export default App;