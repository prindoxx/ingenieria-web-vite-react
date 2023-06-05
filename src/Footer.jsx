import React from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <p><Link to='/contacto'>CONTACTANOS </Link></p>
        </footer>
    )
}

export default Footer;