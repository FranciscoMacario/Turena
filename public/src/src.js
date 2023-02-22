
function menuDesplegable() {
    var boton_desplegar = document.querySelector('.btn-desplegar');
    var opciones = document.querySelector('.header-right');

    let result = (boton_desplegar.classList.contains('btn-rotate')) ? boton_desplegar.classList.remove('btn-rotate') : boton_desplegar.classList.add('btn-rotate');

    let result2 = (opciones.style.display == 'none') ? opciones.style.display = 'flex' : opciones.style.display = 'none';
}   

var linkProd = document.querySelectorAll('.prod-link');

linkProd.forEach(prodA => {
    prodA.addEventListener('click', (e) => {
        e.preventDefault();
        var pagina = window.location.pathname;
        var categoria = prodA.id;
        if(pagina != 'productos.html') {
            elegirCatProducto(categoria);
            window.location.href = '/productos.html';
        }
        console.log(prodA.id);
       
    })
})

function elegirCatProducto(catElegida) {
    switch(catElegida) {
        case('coccion'):
            console.log('construir coccion');
            break;
        case('calefaccion'):
            console.log('construccion calefaccion');
            break;
        default:
            alert('No selecciono una categoria valida')
    }

}

function construirCoccion () {}

