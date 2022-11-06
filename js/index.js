const productArray = [];
const carrito = [];

class ProductoNuevo {
    constructor(id, name, price, talle) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.talle = talle;
    }
}

const remera = new ProductoNuevo(1, 'Nike', 2500, 'S');
productArray.push(remera);
const pantalon = new ProductoNuevo(2, 'Adidas', 4600, 'M');
productArray.push(pantalon);
const buzo = new ProductoNuevo(3, 'King', 5000, 'XL');
productArray.push(buzo);
const zapatilla = new ProductoNuevo(4, 'Puma', 10300, 'L');
productArray.push(zapatilla);

const selecProducto = document.querySelector('.lista');

productArray.forEach((elemento) => {
    const opcionProd = document.createElement('option');
    opcionProd.innerHTML = `${elemento.name}: $${elemento.price}`;
    opcionProd.setAttribute('id', `${elemento.id}`);
    selecProducto.append(opcionProd);
});

const botonIngresar = document.querySelector('.botonIngresar');
const botonFinalizar = document.querySelector('.finalizarCompra');

botonIngresar.onclick = () => {
    const indexProd = selecProducto.selectedIndex;
    const productoSeleccionado = productArray[indexProd];
    carrito.push(productoSeleccionado); 
}

botonFinalizar.onclick = () => {
    let total = 0 
    carrito.forEach((prod) => {
        total = total + prod.price
    })
    alert (`Tenes en tu carrito ${carrito.length} productos. El total es de ${total}`)
}