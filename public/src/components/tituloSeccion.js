class TituloSeccion extends HTMLElement {
    constructor() {
        super();
        this.srcImg;
        this.titulo;
    }

    static get observedAttributes() {
        return['srcImg', 'titulo'];
    }

    attributeChangeCallback(nameAtr, oldValue, newValue) {
        switch(nameAtr) {
            case "srcImg":
                this.srcImg = newValue;
            break;
            case "titulo":
                this.titulo = newValue;
            break;
        }
    }

    connectedCallback() {
        this.innerHTML = /* html */ `<div class="titulo-coccion">
                                        <img src="${this.srcImg}">
                                        <div class="seccion-prod">
                                            <h2>${this.titulo}</h2>
                                        </div>
                                    </div>`;
    }
}

customElements.define('titulo-seccion', TituloSeccion);