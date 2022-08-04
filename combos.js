function saludar() {
    alert("Bienvenidos a CodigoVegano, para continuar presione el boton 'Aceptar'");
}

function saludar2() {
    alert("Gracias por su compra <3 Hasta luego!");
}

saludar();

class objeto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const objeto1 = new objeto("Combo Completo", 1000)
const objeto2 = new objeto("Combo con Papas", 850)
const objeto3 = new objeto("Mega Boom Simple", 700)
const objeto4 = new objeto("Combo Napolitano", 1200)
const objeto5 = new objeto("Combo Doble Cheddar", 900)

const combo = [objeto1, objeto2, objeto3, objeto4, objeto5]

let opcion;

function multiplicacion(objetoPrecio) {
    let cantidad = parseFloat(prompt("Ingrese la cantidad de combos que desee"))

    let resultado = objetoPrecio * cantidad;
    alert(`Su pedido es de $${resultado}`)
}


do {
    opcion = parseInt(prompt('Ingrese el combo que desea:\n\n1 - Combo Completo\n2 - Combo con Papas\n3 - Mega Boom Simple\n4 - Combo Napolitano\n5 - Combo Doble Cheddar \n6 - Salir'))

    switch (opcion) {
        case 1:
            parseFloat(alert(`El precio es de $${objeto1.precio} cada uno`));

            multiplicacion(objeto1.precio)
            break;
        case 2:
            parseFloat(alert(`El precio es de $${objeto2.precio} cada uno`));

            multiplicacion(objeto2.precio)
            break;
        case 3:
            parseFloat(alert(`El precio es de $${objeto3.precio} cada uno`));

            multiplicacion(objeto3.precio)
            break;
        case 4:
            parseFloat(alert(`El precio es de $${objeto4.precio} cada uno`));

            multiplicacion(objeto4.precio)
            break;
        case 5:
            parseFloat(alert(`El precio es de $${objeto5.precio} cada uno`));

            multiplicacion(objeto5.precio)
            break;
        case 6:
            break;
        default: {
            if (isNaN(opcion)) {
                alert("Ingrese una opcion valida")
            } else {
                multiplicacion(objetoPrecio)
            }
        }
        break;

    }
} while ((isNaN(opcion)))

saludar2()