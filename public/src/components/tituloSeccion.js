class tituloSeccion extends HTMLElement {
    constructor() {
        super();
        this.cuerpo = /* html */ `
            <div class="titulo-coccion">
                <img src="./img/coccion/banner/banner-coccion.jpg">
                <div class="seccion-prod">
                    <h2>Cocción</h2>
                </div>
            </div>`;
    }

    connectedCallback() {
        this.innerHTML = this.cuerpo;
    }
}

window.customElements.define('titulo-seccion', tituloSeccion);