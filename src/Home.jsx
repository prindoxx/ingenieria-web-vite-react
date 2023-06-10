import React from "react";
import { Link } from "react-router-dom";
import imagenes from "./imagenes";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";

function Home() {
    const casa = '/'
    return (
        <>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                {/*<!-- Indicators -->*/}
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                    <li data-target="#myCarousel" data-slide-to="4"></li>

                </ol>

                {/*<!-- Wrapper for slides -->*/}
                <div className="carousel-inner">
                    <div className="item active">
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="producto.html">
                                <img src={imagenes.medi1} />
                            </a>
                        </div>
                    </div>

                    <div className="item">
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="producto.html">
                                <img src={imagenes.vitamin2} />
                            </a>
                        </div>
                    </div>

                    <div className="item">
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="producto.html">
                                <img src={imagenes.vitamin3} />
                            </a>
                        </div>
                    </div>

                    <div className="item">
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="producto.html">
                                <img src={imagenes.vitamin} />
                            </a>
                        </div>
                    </div>

                    <div className="item">
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="producto.html">
                                <img src={imagenes.hot} />
                            </a>
                        </div>
                    </div>

                </div>

                {/*<!-- Left and right controls -->*/}
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div class="container">
                <div>
                    <h1 id="titulo">Productos mas Vendidos</h1>
                </div>
                <div id="div-catalogo">
                    <div class="row justify-content-center">


                        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">


                            <a href="producto.html">
                                <img id="xd" src={imagenes.medi1} />
                            </a>

                            <p>
                                <div class="desc-producto">
                                    <span>Titulo</span>
                                    <span class="material-symbols-outlined" id="iconos">
                                        favorite
                                    </span>
                                    <br />
                                    <span>Descripcion</span>
                                </div>
                            </p>
                        </div>


                        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">


                            <a href="producto.html">
                                <img id="xd" src={imagenes.vitamin} />
                            </a>
                            <p>
                                <div class="desc-producto">
                                    <span>Titulo</span>
                                    <span class="material-symbols-outlined" id="iconos">
                                        favorite
                                    </span>

                                    <br />
                                    <span>Descripcion</span>
                                </div>
                            </p>
                        </div>

                        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">


                            <a href="producto.html">
                                <img id="xd" src={imagenes.hot} />
                            </a>
                            <p>
                                <div class="desc-producto">
                                    <span>Titulo</span>
                                    <span class="material-symbols-outlined" id="iconos">
                                        favorite
                                    </span>

                                    <br />
                                    <span>Descripcion</span>
                                </div>
                            </p >
                        </div>

                        <div class="col-sm-6 col-md-6 col-lg-3 col-xl-2" id="catalogo-li">


                            <a href="producto.html">
                                <img id="xd" src={imagenes.vitamin2} />
                            </a>
                            <p>
                                <div class="desc-producto">
                                    <span>Titulo</span>
                                    <span class="material-symbols-outlined" id="iconos">
                                        favorite
                                    </span>

                                    <br />
                                    <span>Descripcion</span>
                                </div>
                            </p >
                        </div>


                        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">


                            <a href="producto.html">
                                <img id="xd" src={imagenes.vitamin3} />
                            </a>
                            <p>
                                <div class="desc-producto">
                                    <span>Titulo</span>
                                    <span class="material-symbols-outlined" id="iconos">
                                        favorite
                                    </span>

                                    <br />
                                    <span>Descripcion</span>
                                </div>
                            </p >
                        </div>
                    </div >
                    <div class="row justify-content-center my-30" id="mapa">

                        <div class="col-sm-12 col-md-6">

                            <div class="descripcion">
                                <h2>Mapa</h2>
                                <p>Es común que en ocasiones necesitemos acudir a una farmacia de manera urgente, ya sea para conseguir un
                                    medicamento que nos han recetado, para comprar productos de cuidado personal o para atender alguna
                                    emergencia médica. En estos casos, es fundamental saber cuál es la farmacia más cercana a nuestra
                                    ubicación. </p>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 my-4">


                            <a href="farmacias.html">
                                <img src={imagenes.mapa} alt="Descripción de la imagen" class="img-fluid" />
                            </a>

                        </div>

                    </div>
                    <div>
                        <h1 id="titulo">Ofertas</h1>
                    </div>
                    <div class="row">



                        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">

                            <a href="producto.html">
                                <img id="xd" src={imagenes.hipoglos} />
                            </a>
                            <p>
                                <div class="desc-producto">
                                    <span>Titulo</span>
                                    <span class="material-symbols-outlined" id="iconos">
                                        favorite
                                    </span>

                                    <br />
                                    <span>Descripcion</span>
                                </div>
                            </p>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">


                            <a href="producto.html">
                                <img id="xd" src={imagenes.medi3} />
                            </a>
                            <p>
                                <div class="desc-producto">
                                    <span>Titulo</span>
                                    <span class="material-symbols-outlined" id="iconos">
                                        favorite
                                    </span>

                                    <br />
                                    <span>Descripcion</span>
                                </div>
                            </p>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">


                            <a href="producto.html">
                                <img id="xd" src={imagenes.centrum} />
                            </a>
                            <p>
                                <div class="desc-producto">
                                    <span>Titulo</span>
                                    <span class="material-symbols-outlined" id="iconos">
                                        favorite
                                    </span>

                                    <br />
                                    <span>Descripcion</span>
                                </div>
                            </p >
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">


                            <a href="producto.html">
                                <img id="xd" src={imagenes.medi2} />
                            </a>
                            <p>
                                <div class="desc-producto">
                                    <span>Titulo</span>
                                    <span class="material-symbols-outlined" id="iconos">
                                        favorite
                                    </span>

                                    <br />
                                    <span>Descripcion</span>
                                </div>
                            </p >
                        </div>

                        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">


                            <a href="producto.html">
                                <img id="xd" src={imagenes.panales} />
                            </a>
                            <p>
                                <div class="desc-producto">
                                    <span>Titulo</span>
                                    <span class="material-symbols-outlined" id="iconos">
                                        favorite
                                    </span>

                                    <br />
                                    <span>Descripcion</span>
                                </div>
                            </p >
                        </div>
                    </div>
                </div >
            </div >
            <Footer/>

        </>
    )
}

export default Home;