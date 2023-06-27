import { useState } from 'react'
//import './App.css'
import './styles.css'
import './scss/main.css'
import { Link, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import imagenes from "./imagenes";
import Contacto from './Contacto'
import Farmacias from './Farmacias'
import Home from './Home'
import Navbar from './Navbar';
import Favoritos from './Favoritos';
import Login from './Login';
import Medicamentos from './Medicamentos';
import Noencontrado from './Noencontrado';
import Noticias from './Noticias';
import Perfil from './Perfil';
import Producto from './Producto';
import Recuperarcontraseña from './Recuperarcontraseña';
import Redessociales from './Redessociales';
import Registrarse from './Registrarse';
import Sobrenosotros from './Sobrenosotros';
import Footer from './Footer';
import ListaFavoritos from './ListaFavoritos';
import { FavoritoContextProvider } from './context/FavoritoContext';

function App() {
  return (
    <FavoritoContextProvider>

      <div className='App'>

        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/farmacias' element={<Farmacias />} />
          <Route path='/Favoritos' element={<Favoritos />} />
          <Route path='/edit/:id' element={<Favoritos />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Medicamentos' element={<Medicamentos />} />
          <Route path='/sobrenosotros' element={<Sobrenosotros />} />
          <Route path='/Noencontrado' element={<Noencontrado />} />
          <Route path='/Noticias' element={<Noticias />} />
          <Route path='/Perfil' element={<Perfil />} />
          <Route path='/Producto' element={<Producto />} />
          <Route path='/Recuperarcontraseña' element={<Recuperarcontraseña />} />
          <Route path='/Redessociales' element={<Redessociales />} />
          <Route path='/Registrarse' element={<Registrarse />} />
          <Route path='/ListaFavoritos' element={<ListaFavoritos />} />
        </Routes>
        <Footer />
      </div>
    </FavoritoContextProvider>

  )
}

export default App
