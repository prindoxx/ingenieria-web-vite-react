import { useState } from 'react'
//import './App.css'
import './styles.css'
import './main.css'
import { Link, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import imagenes from "./imagenes";

import Contacto from './Contacto'
import Home from './Home'
import Navbar from './Navbar';



function App() {
  return (
    <div className='App'>

      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
    </div>
  )
}

export default App
