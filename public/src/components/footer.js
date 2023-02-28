class footer extends HTMLElement {
    constructor() {
        super();
        this.cuerpo = /* html */ `
            <div class="container">
                <footer class="py-5">
                    <div class="row" style="gap: 15px;">
                        <div class="col-6 col-md-2 mb-3">
                            <h5>Productos</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="./coccion.html" class="nav-link p-0 text-muted">Cocción</a></li>
                                <li class="nav-item mb-2"><a href="./calefaccion.html" class="nav-link p-0 text-muted">Calefacción</a></li>
                                <li class="nav-item mb-2"><a href="./aguacaliente.html" class="nav-link p-0 text-muted">Agua caliente</a></li>
                                <li class="nav-item mb-2"><a href="./lavadosecado.html" class="nav-link p-0 text-muted">Lavado/Secado</a></li>
                                <li class="nav-item mb-2"><a href="./heladerasfreezers.html" class="nav-link p-0 text-muted">Heladeras/Freezers</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-md-2 mb-3">
                            <h5>Volver a ver</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="./index.html" class="nav-link p-0 text-muted">Inicio</a></li>
                                <li class="nav-item mb-2"><a href="./about.html" class="nav-link p-0 text-muted">Nosotros</a></li>
                                <li class="nav-item mb-2"><a href="./contacto.html" class="nav-link p-0 text-muted">Contacto</a></li>
                                <li class="nav-item mb-2"><a href="./puntosdeventa.html" class="nav-link p-0 text-muted">Puntos de venta</a></li>
                            </ul>
                        </div>
                        <div class="col-md-5 offset-md-1 mb-3 ">
                            <h5>Contacto</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="" class="nav-link p-0 text-muted"><i class="fa-solid fa-envelope"></i> info@turena.com.ar</a></li>
                                <li class="nav-item mb-2"><a href="" class="nav-link p-0 text-muted"><i class="fa-solid fa-phone"></i> 0237-4654660 / 0237-4654666</a></li>
                                <li class="nav-item mb-2"><a href="" class="nav-link p-0 text-muted"><i class="fa-solid fa-location-dot"></i> Buenos Aires Argentina.</a></li>
                                <li class="nav-item mb-2"><a href="" class="nav-link p-0 text-muted"> juan, Int. Don Juan Lumbreras, B1748 Gral. Rodríguez, Provincia de Buenos Aires</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© 2023 Turena, Inc. All rights reserved.</p>
                        <ul class="list-unstyled d-flex">
                            <li class="ms-3"><a href="" class="linl-dark link-foot-social"><i class="fa-brands fa-facebook"></i></a></li>
                            <li class="ms-3"><a href="" class="linl-dark link-foot-social"><i class="fa-brands fa-instagram"></i></a></li>
                            <li class="ms-3"><a href="" class="linl-dark link-foot-social"><i class="fa-brands fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </footer>
            </div>`
    }

    connectedCallback() {
        this.innerHTML = this.cuerpo;
    }
}
window.customElements.define("custom-footer", footer);
