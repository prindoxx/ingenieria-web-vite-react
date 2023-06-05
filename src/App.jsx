import { useState } from 'react'
//import './App.css'
import './styles.css'
import { Link, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import imagenes from "./imagenes";

import Contacto from './Contacto'
import Home from './Home'



function App() {
  return (
    <div className='App'>
      <header>
        <nav>
          <ul id="navbar" className="topnav">
            <li id="header1"><Link to='/'><span className="material-symbols-outlined">
              home
            </span>Inicio</Link></li>

            <li id="header1"><Link to='/'><span className="material-symbols-outlined">
              pill
            </span>Medicamentos</Link></li>

            <li id="header1"><Link to='/contacto'><span className="material-symbols-outlined">
              contact_support
            </span>Contacto</Link></li>

            <li id="header1"><Link to='/'><span className="material-symbols-outlined">
              connect_without_contact
            </span>Redes Sociales</Link></li>

            <li id="header1"><Link to='/'><span className="material-symbols-outlined">
              location_on
            </span>Farmacias Cercanas</Link></li>

            <li id="header1"><Link to='/'><span className="material-symbols-outlined">
              medical_information
            </span>Noticias</Link></li>

            <li className="iconos-derecha" id="header1"><Link className="active1 rigth"
              to='/'><span className="material-symbols-outlined rigth">
                groups
              </span>Sobre Nosotros</Link></li>

            <li className="iconos-derecha" id="header1" ><Link className="active2 rigth" to='/'> <span
              className="material-symbols-outlined rigth">
              account_circle
            </span>Perfil</Link></li>

            <li className="iconos-derecha" id="header1" ><Link className="active3 rigth" to='/'> <span
              className="material-symbols-outlined rigth">
              account_circle
            </span>Log in</Link></li>
            <li id="header1" className="search-bar"><Link to='/'><span className="material-symbols-outlined lupa">
              search
            </span></Link><input className="barra" type="text" placeholder="Search.." /></li>
            <a href="javascript:void(0);" className="icon" onclick="hamburger()">
              <span className="material-symbols-outlined">
                menu
              </span>
            </a>
          </ul>
        </nav>
        
        {/*<nav>
          <ul>
            <l1><Link to='/'>Home</Link></l1>
            <l1><Link to='/contacto'>Contacto</Link></l1>
          </ul>
  </nav>*/}
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
    </div>
  )
}

export default App
