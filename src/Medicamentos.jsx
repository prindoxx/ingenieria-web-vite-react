import React from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
import imagenes from "./imagenes";

function Medicamentos(){
    return(
        <>
            <div class="container">
                <div>
                    <h1 id="titulo-navbar">Medicamentos</h1>
                </div>
                <div id="div-catalogo">
                    <div class="row justify-content-center">
                        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">
                            <a href="producto.html">
                                <img id="xd" src={imagenes.medi1}/>
                            </a>
                            <p>
                                <div class="desc-producto">
                                    <span>Titulo</span>
                                    <span class="material-symbols-outlined" id="iconos">
                                        favorite
                                    </span>
                                    <br/>
                                    <span>Descripcion</span>
                                </div>
                            </p>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">
                            <a href="producto.html">
                                <img id="xd" src={imagenes.vitamin}/>
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
                                <img id="xd" src={imagenes.hot}/>
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
                                <img id="xd" src={imagenes.vitamin2}/>
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
                                <img id="xd" src={imagenes.vitamin3}/>
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
                            
                    

                        <div class="row justify-content-center">
                            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">
                                <a href="producto.html">
                                    <img id="xd" src={imagenes.medi2}/>
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
                                    <img id="xd" src={imagenes.medi3}/>
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
                                    <img id="xd" src="images/274648-hot-lubricante-de-40-ml.jpg"/>
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
                                    <img id="xd" src="images/288110-comprimido-berries-20-unidades.jpg"/>
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
                                    <img id="xd" src="images/295823-vitamin-c--20-tabletas-efervecentes-sabor-limon-1000-mg (1).jpg"/>
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
                        </div>
                    </div>
                    </div>

                    <div>
                        <h1 id="titulo-navbar">Cuidado personal</h1>
                    </div>
                    <div id="div-catalogo">
                        <div class="row justify-content-center">
                            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">
                                <a href="producto.html">
                                    <img id="xd" src={imagenes.medi1}/>
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
                                    <img id="xd" src={imagenes.vitamin}/>
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
                                    <img id="xd" src={imagenes.vitamin2}/>
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
                                    <img id="xd" src={imagenes.hot}/>
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
                                    <img id="xd" src={imagenes.centrum}/>
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
                                
                        

                            <div class="row justify-content-center">
                                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">
                                    <a href="producto.html">
                                        <img id="xd" src={imagenes.vitamin3}/>
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
                                        <img id="xd" src={imagenes.medi3}/>
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
                                        <img id="xd" src={imagenes.medi2}/>
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
                                        <img id="xd" src={imagenes.medi3}/>
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
                                        <img id="xd" src={imagenes.vitamin3}/>
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
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 id="titulo-navbar">Sexualidad</h1>
                    </div>
                    <div id="div-catalogo">
                        <div class="row justify-content-center">
                            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">
                                <a href="producto.html">
                                    <img id="xd" src="images/259839-vantux-max-capsula-60-unidades-biotina-015-mg.jpg"/>
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
                                    <img id="xd" src="images/213062-capsulas-vitamina-e-30-unidades.jpg"/>
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
                                    <img id="xd" src="images/274648-hot-lubricante-de-40-ml.jpg"/>
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
                                    <img id="xd" src="images/288110-comprimido-berries-20-unidades.jpg"/>
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
                                    <img id="xd" src="images/295823-vitamin-c--20-tabletas-efervecentes-sabor-limon-1000-mg (1).jpg"/>
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
                                
                        

                            <div class="row justify-content-center">
                                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">
                                    <a href="producto.html">
                                        <img id="xd" src="images/259839-vantux-max-capsula-60-unidades-biotina-015-mg.jpg"/>
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
                                        <img id="xd" src="images/213062-capsulas-vitamina-e-30-unidades.jpg"/>
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
                                        <img id="xd" src="images/274648-hot-lubricante-de-40-ml.jpg"/>
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
                                        <img id="xd" src="images/288110-comprimido-berries-20-unidades.jpg"/>
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
                                        <img id="xd" src="images/295823-vitamin-c--20-tabletas-efervecentes-sabor-limon-1000-mg (1).jpg"/>
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
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 id="titulo-navbar">Belleza</h1>
                    </div>
                    <div id="div-catalogo">
                        <div class="row justify-content-center">
                            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">
                                <a href="producto.html">
                                    <img id="xd" src="images/259839-vantux-max-capsula-60-unidades-biotina-015-mg.jpg"/>
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
                                    <img id="xd" src="images/213062-capsulas-vitamina-e-30-unidades.jpg"/>
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
                                    <img id="xd" src="images/274648-hot-lubricante-de-40-ml.jpg"/>
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
                                    <img id="xd" src="images/288110-comprimido-berries-20-unidades.jpg"/>
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
                                    <img id="xd" src="images/295823-vitamin-c--20-tabletas-efervecentes-sabor-limon-1000-mg (1).jpg"/>
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
                                
                        

                            <div class="row justify-content-center">
                                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">
                                    <a href="producto.html">
                                        <img id="xd" src="images/259839-vantux-max-capsula-60-unidades-biotina-015-mg.jpg"/>
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
                                        <img id="xd" src="images/213062-capsulas-vitamina-e-30-unidades.jpg"/>
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
                                        <img id="xd" src="images/274648-hot-lubricante-de-40-ml.jpg"/>
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
                                        <img id="xd" src="images/288110-comprimido-berries-20-unidades.jpg"/>
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
                                        <img id="xd" src="images/295823-vitamin-c--20-tabletas-efervecentes-sabor-limon-1000-mg (1).jpg"/>
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
                            </div>
                        </div>
                    </div>
                </div>
                
        </>
    )
}

export default Medicamentos;