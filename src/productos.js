const producto = document.getElementById('producto');
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');

//color.
const propiedadColor = producto.querySelector('#propiedad-color');

//funcionalidad thumbs
thumbs.addEventListener('click', (e) => {
    if (e.target.tagName == 'IMG') {
        const imagenSrc = e.target.src;
        
        //obtenemos la posicion del ultimo /
        const lastIndex = imagenSrc.lastIndexOf('/');

        // cortamos la cadena de texto para obtener la parte que nos interesa.
        const nombreImagen = imagenSrc.substring(lastIndex + 1);

        //cambiamos la ruta de la imagen del producto.
        productoImagen.src = `./img/tennis/${nombreImagen}`;
    }
})

//funcionalidad de la propiedad del color.
propiedadColor.addEventListener('click',(e => {
    if( e.target.tagName ==='INPUT'){
        productoImagen.src = `./img/tennis/${e.target.value}.jpg`;
    }
}))

//cantidad
const btnIncrementarCantidad = producto.querySelector('#incrementar-cantidad');
const btnDisminuirCantidad = producto.querySelector('#disminuir-cantidad');
const inputCantidad = producto.querySelector('#cantidad');

btnIncrementarCantidad.addEventListener('click', (e) =>{
    inputCantidad.value = parseInt(inputCantidad.value) + 1;
})

btnDisminuirCantidad.addEventListener('click', (e)=>{
    if(parseInt(inputCantidad.value) >1 ){
        inputCantidad.value = parseInt(inputCantidad.value) - 1;
    }
    
})