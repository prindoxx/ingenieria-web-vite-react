import React from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import imagenes from "./imagenes";


function Sobrenosotros() {
    return (
        <>
            <div class="container">

                <div>
                    <h1 id="titulo">Sobre Nosotros</h1>
                </div>

                <div id="div-catalogo">

                    <div class="row justify-content-center">

                        <div class="col-sm-6 col-md-6 col-lg-3 col-xl-2" id="catalogo-li">

                            <img id="xd" src={imagenes.darien} />
                            <p>
                                <div class="desc-producto">
                                    <span>Darien Pacheco</span>
                                    <a href="https://www.instagram.com/darienone/"><span class="material-symbols-outlined">
                                        person
                                    </span></a>
                                    <br />
                                </div>
                            </p>

                        </div>

                        <div class="col-sm-6 col-md-6 col-lg-3 col-xl-2" id="catalogo-li">

                            <img id="xd" src={imagenes.brevis} />
                            <p>
                                <div class="desc-producto">
                                    <span>Nicolás Brevis</span>
                                    <a href="https://www.instagram.com/ni.brevis/"><span class="material-symbols-outlined">
                                        person
                                    </span></a>
                                    <br />
                                </div>
                            </p>
                        </div>

                        <div class="col-sm-6 col-md-6 col-lg-3 col-xl-2" id="catalogo-li">

                            <img id="xd" src={imagenes.pablo} />
                            <p>
                                <div class="desc-producto">
                                    <span>Pablo Ortiz</span>
                                    <a href="https://www.instagram.com/pablox__4/"><span class="material-symbols-outlined">
                                        person
                                    </span></a>
                                    <br />
                                </div>
                            </p>
                        </div>

                        <div class="col-sm-6 col-md-6 col-lg-3 col-xl-2" id="catalogo-li">

                            <img id="xd" src={imagenes.ivan} />
                            <p>
                                <div class="desc-producto">
                                    <span>Iván Galaz</span>
                                    <a href="https://www.instagram.com/_igalaz_23/"><span class="material-symbols-outlined">
                                        person
                                    </span></a>
                                    <br />
                                </div>
                            </p>
                        </div>
                        <div>
                            <h1 id="titulo">Somos un equipo de trabajo conformado por cuatro estudiantes de Ingeniería Civil Informática de la PUCV que buscan, a través de esta página web, agilizar la búsqueda de información acerca de farmacias y medicamentos. En nuestra plataforma de búsqueda de farmacias y medicamentos, nos comprometemos a ayudarte a encontrar la farmacia más cercana y conveniente para ti, proporcionándote información actualizada y detallada sobre horarios, productos y servicios ofrecidos en cada establecimiento y de cada medicamento.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sobrenosotros;