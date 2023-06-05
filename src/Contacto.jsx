import React from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";


function Contacto() {
    return (
        <>
        <section class="contact-box">
            <div class="contact-form">
                <h2>Contáctanos</h2>
                <form id="contacto">
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" name="name" required />

                    <label for="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" required />

                    <label for="message">Mensaje:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Contacto;