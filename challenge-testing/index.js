//La clase debe tener los siguientes métodos:

//constructor(): Inicializa el carrito como un array vacío.
//agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
//calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
//aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

class CarritoCompra {
    constructor() {
        this.carrito = [];
    }

    agregarProducto(producto) {
        this.carrito.push(producto);
    }

    calcularTotal() {
        if (!this.carrito.length) {
            throw Error('Debe agregar al menos un producto');
        }

        let total = 0;
        for (let producto of this.carrito) {
            total += producto.cantidad * producto.precio;
        }
        return total;
    }

    aplicarDescuento(porcentaje) {
        const total = this.calcularTotal();
        const totalConDescuento = ((100-porcentaje)/100) * total;
        return totalConDescuento;
    }
}


module.exports = {CarritoCompra};