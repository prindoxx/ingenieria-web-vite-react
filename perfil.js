let datos;
let index = 0;

document.querySelector('#boton').addEventListener('click', traerDatos);
document.querySelector('#botonSiguiente').addEventListener('click', mostrarSiguienteDato);

function traerDatos() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'perfil.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            datos = JSON.parse(this.responseText);
            mostrarSiguienteDato();
        }
    };
}

function mostrarSiguienteDato() {
    if (index < datos.length) {
        let item = datos[index];
        let res = document.querySelector('#res');
        res.innerHTML = '';

        res.innerHTML += `
                    
            
            <div class="info-perfil" id="res">
                <div class="clase-perfil ">
                    <div class="imagen-perfil">
                        <img src=${item.foto}>
                    </div>

                    <h1 id="res-nombre">${item.nombre}</h1>
                </div>
        
                <div class="clase-info-perfil">
                    <div class="info">
                        <span>Correo:</span>
                    </div>
                    
                    <div class="edit">
                        <p>${item.correo}</p>
                        <span class="material-symbols-outlined" id="editar">edit</span>
                    </div>
                </div>
        
                <div class="clase-info-perfil">
                    <div class="info ">
                        <span>Número de contacto:</span>
                    </div>
                    
                    <div class="edit">
                        <p>${item.numero}</p>
                        <span class="material-symbols-outlined" id="editar">edit</span>
                    </div>
                </div>
            
                <div class="clase-info-perfil">
                    <div class="info">
                        <span>Edad:</span>
                    </div>
            
                    <div class="edit">
                        <p>${item.edad} años </p>
                        <span class="material-symbols-outlined" id="editar">edit</span>
                    </div>
                </div>
            
                <div class="clase-info-perfil">
                    <div class="info">
                        <span>Sexo:</span>
                    </div>
                    
                    <div class="edit">
                        <p>${item.sexo}</p>
                        <span class="material-symbols-outlined" id="editar">edit</span>
                    </div>
                </div>
            
                <div class="clase-info-perfil">
                    <div class="info">
                        <span>Fecha de nacimiento:</span>
                    </div>
                    
                    <div class="edit">
                        <p>${item.nacimiento}</p>
                        <span class="material-symbols-outlined" id="editar">edit</span>
                    </div>
                </div>
            
                <div class="clase-info-perfil">
                    <div class="info">
                        <span>Nacionalidad:</span>
                    </div>
                    
                    <div class="edit">
                        <p>${item.nacionalidad}</p>
                        <span class="material-symbols-outlined" id="editar">edit</span>
                    </div>
                </div>
            
            </div>
            
            `

        index++;
    }
}