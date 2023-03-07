const openProd = document.querySelectorAll('#selector-prod');
const modalContainer = document.querySelectorAll('#ventanaModal');
const cerrarProd = document.querySelectorAll('#cerrar');
console.log(modalContainer.parentNode);

openProd.forEach(prod => {
    prod.addEventListener('click', function(){
        console.log('wep');
        modalContainer.forEach(modal => {
            console.log('wep2');
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
})

