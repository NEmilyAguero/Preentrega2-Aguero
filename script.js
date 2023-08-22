const productos = [
    {
        id: 1,
        nombre: "Bola de Catnip",
        descripcion: "Pelota de catnip, puede pegarse a la pared.",
        precio: 2000.00
    },
    {
        id: 2,
        nombre: "Juguete interactivo",
        descripcion: "Juguete interactivo para gatos.",
        precio: 3000.00
    },
    {
        id: 3,
        nombre: "Ratón peludo",
        descripcion: "Ratón peludo.",
        precio: 2000.00
    },
    {
        id: 4,
        nombre: "Zanahoria de juguete",
        descripcion: "Zanahoria de juguete para afilar uñas.",
        precio: 3000.00
    }
];

const carrito = [];

function agregarAlCarrito(id) {
    const producto = productos.find((p) => p.id === id);

    if (producto) {
        carrito.push(producto);
        mostrarCarrito();
    }
}

function mostrarCarrito() {
    const carritoLista = document.getElementById("carrito-lista");
    const carritoTotal = document.getElementById("carrito-total");

    carritoLista.innerHTML = "";

    let total = 0;

    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${producto.nombre} - $${producto.precio.toFixed(2)}`;
        carritoLista.appendChild(li);
        total += producto.precio;
    });

    carritoTotal.textContent = `$${total.toFixed(2)}`;
}

let nombreUsuario = prompt("Por favor, ingresa tu nombre:");

if (!nombreUsuario) {
    alert("Debes ingresar tu nombre para continuar.");
} else {
   
    document.querySelector("header h1").textContent = `¡Bienvenido, ${nombreUsuario}!`;
}
