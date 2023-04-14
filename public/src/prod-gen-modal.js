// Función que inicializa la lógica del modal
function inicializarModal() {
    const openProd = document.querySelectorAll('.selector');
    const modalContainer = document.querySelectorAll('.ventana-modal-prod');
    const cerrarProd = document.querySelectorAll('.cerrar-prod');
  
    openProd.forEach(prod => {
      prod.addEventListener('click', function(){
        modalContainer.forEach(modal => {
          if(modal.parentNode == prod.parentNode) {
            modal.classList.add('mostrar');
          }
        })
      })
    });
  
    cerrarProd.forEach(cerrar => {
      cerrar.addEventListener('click', function(){
        modalContainer.forEach(modal => {
          modal.classList.remove('mostrar');
        })
      })
    });
  }
  
  // Función que trae los datos y los coloca en el HTML
  function traerDatos() {
    const xhttp = new XMLHttpRequest();
    const contenedorProductos = document.querySelector('.prodTemplate');
  
    xhttp.open('GET', '../data/productos.json', true);
  
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
            contenedorProductos.innerHTML += constructorProductos(item); 
          } 
        }
  
        // Llamar a la función que inicializa la lógica del modal después de cargar los datos
        inicializarModal();
      }
    }
  }

function constructorProductos(item) {
        
    var cuerpo = /*html*/ `<div class="producto">
                                <div class="nombre-producto">
                                    <p>${item.nombre}</p>
                                </div>
                                <div class="imagen-prod">
                                    <img src="${item.urlImagen}" alt="">
                                </div>
                                <div class="descripcion-corta">
                                    <a class="selector" id="selector-prod">${item.descripcionCorta}</a>
                                    <div class="ventana-modal ventana-modal-prod" id="ventanaModal">
                                        <div class="moda">
                                        <div class="contenedor-mod-gri">
                                            <div class="boton-titulo">
                                                <button class="cerrar cerrar-prod" id="cerrar"><i class="fa-sharp fa-solid fa-arrow-left"></i></button>
                                                <h3>${item.nombre}</h3>
                                            </div>
                                            <div class="img-modal"><img src="${item.urlImagen}"></div>

                                `;

    if(item.masDetalles){
        var masDetalles = item.masDetalles;    
        cuerpo += modalMaker(masDetalles);
    }
    
    
    cuerpo += '</div> </div> </div> </div> </div>'
    return cuerpo;
}

function modalMaker(masDetalles) {

    var cuerpoModal = '<div class="caracteristicas"><ul>';

    masDetalles.forEach(detalle => {
        for(let i in detalle ) {
            cuerpoModal += /*html*/`<li>${detalle[i]}</li>`;
        }
    });
    
    cuerpoModal += '</ul></div>';
    return cuerpoModal;
}
  
// Llamar a la función que trae los datos en el evento onload del objeto window
window.onload = function() {
    traerDatos();
};
  