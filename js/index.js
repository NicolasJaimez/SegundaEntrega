let productoSelec = parseInt(prompt('Que producto desea 1.Remera 2.Pantalon 3.Buzo 4.Zapatilla'));
let seguirComprando = true;
let compraTotal = 0;
let decision;
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

while (seguirComprando === true) {
    const producto = productArray.find((producto) => productArray.id === productoSelec);
    if (producto) {
        carrito.push(producto);
    }
    decision = parseInt(prompt('Quiere seguir comprando? 1.Si 2.No '));
    if (decision === 1) {
        productoSelec = parseInt(prompt('Que producto desea 1.Remera 2.Pantalon 3.Buzo 4.Zapatilla'));
    } else {
        seguirComprando = false
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

compraTotal = carrito.map(producto => producto.price).reduce((a, b) => a + b)
console.log(carrito);
console.log(compraTotal);

//alert(`El total es de ${compraTotal}`);

function descuento() {
    let descuento = 0;
    if (compraTotal >= 1000) {
        descuento = 10;
    }

    let valorDescuento = compraTotal * (descuento / 100);
    let valorFinal = compraTotal - valorDescuento;
    return valorFinal;
}

const totalCompraConDescuento = descuento(compraTotal);

final = alert(`el total de su compra es ${totalCompraConDescuento}`);