class TituloSeccion extends HTMLElement {
    constructor() {
        super();
        this.imgDirection = "./img/coccion/banner/banner-coccion.jpg";
        this.tituloDeLaSeccion = "coccion";
    }

    connectedCallback() {
        this.innerHTML = /* html */ `<div class="titulo-coccion">
                                        <img src="${this.imgDirection}">
                                        <div class="seccion-prod">
                                            <h2>${this.tituloDeLaSeccion}</h2>
                                        </div>
                                    </div>`;
        console.log(this.tituloDeLaSeccion);
        console.log(this.imgDirection);
    }
}

customElements.define('titulo-seccion', TituloSeccion);