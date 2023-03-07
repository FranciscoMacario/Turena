class TituloSeccion extends HTMLElement {
    constructor() {
        super();
        this.srcImg;
        this.titulo = '';
    }

    static get observedAttributes() {
        return['titulo', 'srcImg'];
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {
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
        this.innerHTML = `<div class="titulo-coccion">
                                        <img src="">
                                        <div class="seccion-prod">
                                            <h2>${this.titulo}</h2>
                                            ${this.srcImg}
                                        </div>
                                    </div>`;                                            
    }
}

customElements.define('titulo-seccion', TituloSeccion);