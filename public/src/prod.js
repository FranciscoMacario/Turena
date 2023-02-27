// const bannerCategoria = document.querySelector('titulo-seccion');

// if(bannerCategoria) {
//     bannerCategoria.imgDirection = "./img/coccion/banner/banner-coccion.jpg";
//     bannerCategoria.tituloDeLaSeccion = 'Holaaa';
// } else {
//     console.log('aiuda');
// }


const contenedorProductos = document.querySelector('.prodTemplate');
console.log(contenedorProductos);
contenedorProductos.addEventListener('afterprint', traerDatos());

function traerDatos() {
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', '../data/productos.json', true);

    xhttp.send();

    var page = window.location.pathname;


    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let subCategoria;
            var bandera = 0;

            if(page == '/coccion.html') {
                bandera = 1;
            } else if(page == '/calefaccion'){ 
                bandera = 2;
            } else if(page == '/aguacaliente'){ 
                bandera = 3;
            } else if(page == '/lavadosecado'){ 
                bandera = 4;
            }else if(page == '/heladerasfreezers'){ 
                bandera = 5;
            }

            for(let item of datos) {
                if(subCategoria != item.subCategoria){
                    subCategoria = item.subCategoria;
                    contenedorProductos.innerHTML += `<h3>${subCategoria}</h3>`
                }
              
                contenedorProductos.innerHTML += /* html */ 
                `<div class="producto">
                    <div class="nombre-producto">
                        <p>${item.nombre}</p>
                    </div>
                    <div class="imagen-prod">
                        <img src="${item.urlImagen}" alt="">
                    </div>
                    <div class="descripcion-corta">
                        <a>${item.descripcionCorta}</a>
                    </div>
                </div>`
                
            }
        }
    }
}








    

