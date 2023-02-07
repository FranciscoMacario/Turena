
function menuDesplegable() {
    var boton_desplegar = document.querySelector('.btn-desplegar');
    var opciones = document.querySelector('.header-right');

    let result = (boton_desplegar.classList.contains('btn-rotate')) ? boton_desplegar.classList.remove('btn-rotate') : boton_desplegar.classList.add('btn-rotate');

    let result2 = (opciones.style.display == 'none') ? opciones.style.display = 'flex' : opciones.style.display = 'none';
}   


