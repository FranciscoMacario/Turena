const contenedorProductos = document.querySelector('.prodTemplate');

contenedorProductos.addEventListener('afterprint', traerDatos());

function traerDatos() {
    const xhttp = new XMLHttpRequest();
	//'../data/productos.json'
    xhttp.open('GET', '/Turena/data/productos.json', true);

    xhttp.send();

    var page = window.location.pathname;


    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let subCategoria;
            var bandera = 0;
           

            if(page == '/coccion.html') {
                bandera = 'coccion';
            } else if(page == '/calefaccion.html'){ 
                bandera = 'calefaccion';
            } else if(page == '/aguacaliente.html'){ 
                bandera = 'agua';
            } else if(page == '/lavadosecado.html'){ 
                bandera = 'lavado';
            }else if(page == '/heladerasfreezers.html'){ 
                bandera = 'heladeras';
            }

            for(let item of datos) {

                if(subCategoria != item.subCategoria && item.categoria == bandera){
                    subCategoria = item.subCategoria;
                    titulo = subCategoria;
                    titulo = titulo[0].toUpperCase() + titulo.substring(1);
                    contenedorProductos.innerHTML += `<div class="subtitulo"><h3>${titulo}</h3></div>`
                }

                if(bandera == item.categoria ) {
                    contenedorProductos.innerHTML += constructorProductos(item.nombre, item.urlImagen, item.descripcionCorta); 
                } 
            }
        }
    }
}

function constructorProductos(nombre, imagen, descripcion) {
        
     var cuerpo = /* html */`<div class="producto">
                        <div class="nombre-producto">
                            <p>${nombre}</p>
                        </div>
                        <div class="imagen-prod">
                            <img src="${imagen}" alt="">
                        </div>
                        <div class="descripcion-corta">
                            <a class="desc-link">${descripcion}</a>
                        </div>
                    </div>`;
    return cuerpo;
}




    

