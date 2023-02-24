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
                                <li><a href="#coccion" class="link prod-link" id="coccion">Cocción</a></li>
                                <li><a href="#calefaccion" class="link prod-link">Calefacción</a></li>
                                <li><a href="#agua" class="link prod-link">Agua caliente</a></li>
                                <li><a href="#lavado" class="link prod-link">Lavado/Secado</a></li>
                                <li><a href="#heladeras" class="link prod-link">Heladeras/Freezers</a></li>
                            </ul>
                        </li>
                        <li><a href="./about.html" class="link">Nosotros</a></li>
                        <li><a href="./contact.html" class="link">Contacto</a></li>
                        <li><a href="" class="link">Puntos de venta</a></li>
                    </ul>
                </nav>
            </header>`; 
    }

    connectedCallback() {
        this.innerHTML = this.cuerpo;
    }
}

window.customElements.define("nav-bar", navBar);