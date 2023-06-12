import React from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import imagenes from "./imagenes";


function Noticias(){
    return(
        <>
        <div class="container">
      <div class="row justify-content-center">
        
        <div class="col-sm-12 " >
          <div class="jumbotron">
            <img src={imagenes.noticia} alt="Descripción de la imagen" class="imagen-derecha"/>
            <h1 class="display-4">Ayahuasca, la próxima droga psicodélica que puede tener utilidad para la salud mental</h1>
            <p class="lead">La bebida alucinógena de los pueblos amazónicos puede ser útil para tratar la depresión o las adicciones, pero mejoraría su eficacia si se estudiara con método científico</p>
            <hr class="my-4"/>
            <p class="lead">
              <a class="btn btn-primary btn-lg" href="https://elpais.com/salud-y-bienestar/2023-04-01/ayahuasca-la-proxima-droga-psicodelica-que-puede-tener-utilidad-para-la-salud-mental.html" role="button">Saber más</a>
            </p>
          </div>
        </div>
       
      </div>
      <div class="row justify-content-center">
        

           
            <div class="col-sm-6 col-md-4 col-lg-3 " >

              <div class="card">
                <img class="card-img-top" src={imagenes.noti} alt="Card image cap"/>
                <div class="card-body">
                  
                  <p class="card-text">La agencia del medicamento de EE UU aprueba la venta sin receta de un antídoto para las sobredosis de opiáceos.</p>
                  <a href="https://elpais.com/sociedad/2023-03-29/la-agencia-del-medicamento-de-ee-uu-aprueba-la-venta-sin-receta-de-un-antidoto-para-las-sobredosis-de-opiaceos.html" class="btn btn-primary">Saber más</a>
                </div>
              </div>
              
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3 ">
              <div class="card" >
              <img class="card-img-top" src={imagenes.ozem} alt="Card image cap"/>
              <div class="card-body">
                
                <p class="card-text">Ozempic, las inyecciones que prometen acabar con la obesidad y que arrasan en el mercado negro.</p>
                <a href="https://elpais.com/salud-y-bienestar/2023-03-29/ozempic-las-inyecciones-que-prometen-acabar-con-la-obesidad-arrasan-en-el-mercado-negro.html" class="btn btn-primary">Saber más</a>
              </div>

        </div>
      </div>
        <div class="col-sm-6 col-md-4 col-lg-3 ">
        <div class="card" >
          <img class="card-img-top" src={imagenes.opioide} alt="Card image cap"/>
          <div class="card-body">
            
            <p class="card-text">La Cofepris autoriza 23 nuevos medicamentos en medio del desabasto de psicofármacos y opioides.</p>
            <a href="https://elpais.com/mexico/2023-03-28/la-cofepris-autoriza-23-nuevos-medicamentos-en-medio-del-desabasto-de-psicofarmacos-y-opioides.html" class="btn btn-primary">Saber más</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 ">
        <div class="card" >
          <img class="card-img-top" src={imagenes.pills} alt="Card image cap"/>
          <div class="card-body">
            
            <p class="card-text">La EMA rechaza la comercialización del primer tratamiento oral contra la covid por falta de eficacia.</p>
            <a href="https://elpais.com/sociedad/2023-02-24/la-ema-rechaza-la-comercializacion-del-primer-tratamiento-oral-contra-la-covid-por-falta-de-eficacia.html" class="btn btn-primary">Saber más</a>
          </div>
        </div>
      </div>
    
    </div>  
      
      
    <div class="row justify-content-center">
        

           
        <div class="col-sm-6 col-md-4 col-lg-3 " >

              <div class="card">
                <img class="card-img-top" src={imagenes.noti} alt="Card image cap"/>
                <div class="card-body">
                  
                  <p class="card-text">La agencia del medicamento de EE UU aprueba la venta sin receta de un antídoto para las sobredosis de opiáceos.</p>
                  <a href="https://elpais.com/sociedad/2023-03-29/la-agencia-del-medicamento-de-ee-uu-aprueba-la-venta-sin-receta-de-un-antidoto-para-las-sobredosis-de-opiaceos.html" class="btn btn-primary">Saber más</a>
                </div>
              </div>
              
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3 ">
              <div class="card" >
              <img class="card-img-top" src={imagenes.ozem} alt="Card image cap"/>
              <div class="card-body">
                
                <p class="card-text">Ozempic, las inyecciones que prometen acabar con la obesidad y que arrasan en el mercado negro.</p>
                <a href="https://elpais.com/salud-y-bienestar/2023-03-29/ozempic-las-inyecciones-que-prometen-acabar-con-la-obesidad-arrasan-en-el-mercado-negro.html" class="btn btn-primary">Saber más</a>
              </div>

        </div>
      </div>
        <div class="col-sm-6 col-md-4 col-lg-3 ">
        <div class="card" >
          <img class="card-img-top" src={imagenes.opioide} alt="Card image cap"/>
          <div class="card-body">
            
            <p class="card-text">La Cofepris autoriza 23 nuevos medicamentos en medio del desabasto de psicofármacos y opioides.</p>
            <a href="https://elpais.com/mexico/2023-03-28/la-cofepris-autoriza-23-nuevos-medicamentos-en-medio-del-desabasto-de-psicofarmacos-y-opioides.html" class="btn btn-primary">Saber más</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 ">
        <div class="card" >
          <img class="card-img-top" src={imagenes.pills} alt="Card image cap"/>
          <div class="card-body">
            
            <p class="card-text">La EMA rechaza la comercialización del primer tratamiento oral contra la covid por falta de eficacia.</p>
            <a href="https://elpais.com/sociedad/2023-02-24/la-ema-rechaza-la-comercializacion-del-primer-tratamiento-oral-contra-la-covid-por-falta-de-eficacia.html" class="btn btn-primary">Saber más</a>
          </div>
        </div>
      </div>

</div>  
    
<div class="row justify-content-center">
      <nav class="navegacion">
        <ul class="pagination justify-content-center">
          <ul class="pagination pagination-lg ">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="/Noticias">1</a></li>
            <li class="page-item"><a class="page-link" href="/Noticias">2</a></li>
            <li class="page-item"><a class="page-link" href="/Noticias">3</a></li>
            <li class="page-item"><a class="page-link" href="/Noticias">Next</a></li>
          </ul>
        </ul>
      </nav>
      
    </div>
  </div> 
        </>
    )
}
export default Noticias;