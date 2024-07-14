const {CarritoCompra} = require ("../index.js");

//Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.

describe ("La clase CarritoCompra", () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    it("Debe arrojar el error 'Debe agregar al menos un producto' al querer calcular el total con el carrito vacío", () => {        
        expect(() => carrito.calcularTotal()).toThrowError('Debe agregar al menos un producto');
    });

    it("Debe calcular el total en un carrito con un item", () => {
        carrito.agregarProducto({ producto: "A", precio: 10, cantidad: 2 });
        expect(carrito.calcularTotal()).toBe(20);
    });

    it("Debe calcular el total en un carrito con vaios items", () => {
        carrito.agregarProducto({ producto: "A", precio: 10, cantidad: 2 });
        carrito.agregarProducto({ producto: "B", precio: 5, cantidad: 3 });
        carrito.agregarProducto({ producto: "C", precio: 20, cantidad: 1 });
        expect(carrito.calcularTotal()).toBe(55);
    });

    it("Debe aplicar correctamente el porcentaje de descuento", () => {
        carrito.agregarProducto({ producto: "A", precio: 10, cantidad: 2 });
        carrito.agregarProducto({ producto: "B", precio: 5, cantidad: 3 });
        expect(carrito.aplicarDescuento(0)).toBe(carrito.calcularTotal());
        expect(carrito.aplicarDescuento(20)).toBe(carrito.calcularTotal() * 0.80);
    });
})