import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.getElementById("navbar");
          const sticky = navbar.offsetTop;
    
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
          } else {
            navbar.classList.remove("sticky");
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    const [responsive, setResponsive] = useState(false);

    const handleHamburgerClick = () => {
        setResponsive(!responsive);
    };

    return (
        <nav>
            <ul id="navbar" className={`topnav ${responsive ? 'responsive' : ''}`}>

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
                <a href="javascript:void(0);" className="icon" onClick={handleHamburgerClick}>
                    <span className="material-symbols-outlined">menu</span>
                </a>

                {/* Resto de tu contenido del navbar */}
            </ul>

        </nav>
    );
}

export default Navbar;