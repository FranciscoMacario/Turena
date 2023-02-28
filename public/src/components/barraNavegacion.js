class navBar extends HTMLElement {
    constructor() {
       super();
       this.cuerpo = /* html */ `
            <header>
                <nav class="header">
                    <div class="header-menu">
                        <div class="logo">
                            <img src="./img/logo-solo.png">
                        </div>
                        <button class="btn-desplegar" onclick="menuDesplegable()"><i class="fa-sharp fa-solid fa-circle-chevron-down"></i></button>
                    </div>
                    
                    <ul class="header-right">
                        <li><a href="./index.html" class="link">Inicio</a></li>
                        <li><a class="link">Productos</a>
                            <ul class="sub-menu">
                                <li><a href="./coccion.html" class="link prod-link" id="coccion.html">Cocción</a></li>
                                <li><a href="./calefaccion.html" class="link prod-link" id="calefaccion">Calefacción</a></li>
                                <li><a href="./aguacaliente.html" class="link prod-link" id="aguacaliente">Agua caliente</a></li>
                                <li><a href="./lavadosecado.html" class="link prod-link" id="lavadosecado">Lavado/Secado</a></li>
                                <li><a href="./heladerasfreezers.html" class="link prod-link" id="heladerasfreezers">Heladeras/Freezers</a></li>
                            </ul>
                        </li>
                        <li><a href="./about.html" class="link">Nosotros</a></li>
                        <li><a href="./contact.html" class="link">Contacto</a></li>
                        <li><a href="./puntosdeventa.html" class="link">Puntos de venta</a></li>
                    </ul>
                </nav>
            </header>`; 
    }

    connectedCallback() {
        this.innerHTML = this.cuerpo;
    }
}

window.customElements.define("nav-bar", navBar);

function menuDesplegable() {
    var boton_desplegar = document.querySelector('.btn-desplegar');
    var opciones = document.querySelector('.header-right');

    let result = (boton_desplegar.classList.contains('btn-rotate')) ? boton_desplegar.classList.remove('btn-rotate') : boton_desplegar.classList.add('btn-rotate');

    let result2 = (opciones.style.display == 'none') ? opciones.style.display = 'flex' : opciones.style.display = 'none';
}   
