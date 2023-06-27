import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    const [responsive, setResponsive] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);

    if (!showNavbar) {
        return null; // Si showNavbar es false, no se muestra el componente
    }
    
    const handleHamburgerClick = () => {
      setResponsive(!responsive);
    };
  
    useEffect(() => {
      const navbar = document.getElementById("navbar");
      const offsetTop = navbar.offsetTop;
  
      const handleScroll = () => {
        setSticky(window.pageYOffset >= offsetTop);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <nav>
            <ul  id="navbar" className={`topnav ${responsive ? 'responsive' : ''} ${sticky ? 'sticky' : ''}`}>

                <li id="header1"><Link to='/'><span className="material-symbols-outlined">
                    home
                </span>Inicio</Link></li>

                <li id="header1"><Link to='/Medicamentos'><span className="material-symbols-outlined">
                    pill
                </span>Medicamentos</Link></li>

                <li id="header1"><Link to='/contacto'><span className="material-symbols-outlined">
                    contact_support
                </span>Contacto</Link></li>

                <li id="header1"><Link to='/Redessociales'><span className="material-symbols-outlined">
                    connect_without_contact
                </span>Redes Sociales</Link></li>

                <li id="header1"><Link to='/farmacias'><span className="material-symbols-outlined">
                    location_on
                </span>Farmacias Cercanas</Link></li>

                <li id="header1"><Link to='/noticias'><span className="material-symbols-outlined">
                    medical_information
                </span>Noticias</Link></li>

                <li className="iconos-derecha" id="header1"><Link className="active1 rigth"
                    to='/sobrenosotros'><span className="material-symbols-outlined rigth">
                        groups
                    </span>Sobre Nosotros</Link></li>

                <li className="iconos-derecha" id="header1" ><Link className="active2 rigth" to='/Perfil'> <span
                    className="material-symbols-outlined rigth">
                    account_circle
                </span>Perfil</Link></li>

                <li className="iconos-derecha" id="header1" ><Link className="active3 rigth" to='/Login'> <span
                    className="material-symbols-outlined rigth">
                    account_circle
                </span>Log in</Link></li>
                <li id="header1" className="search-bar"><Link to='/Noencontrado'><span className="material-symbols-outlined lupa">
                    search
                </span></Link><input className="barra" type="text" placeholder="Search.." /></li>
                <a href="javascript:void(0);" className="icon" onClick={handleHamburgerClick}>
                    <span className="material-symbols-outlined">menu</span>
                </a>

            
            </ul>

        </nav>
    );
}

export default Navbar;
