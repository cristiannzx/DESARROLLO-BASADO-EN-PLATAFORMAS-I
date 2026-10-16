const monto = parseFloat(prompt("Ingrese el monto de la compra:"));
const cliente = (prompt("Ingrese el tipo de cliente (G = General, A = Afiliado):") || "").trim().toUpperCase();
const pago = (prompt("Ingrese la forma de pago (C = Contado, P = Plazos):") || "").trim().toUpperCase();

let porcentaje = null;
let etiqueta = "";

if (!isNaN(monto) && monto > 0) {
    switch (cliente) {
    case "G":
        switch (pago) {
        case "C": porcentaje = 15; etiqueta = "Descuento"; break;
        case "P": porcentaje = 10; etiqueta = "Recargo"; break;
        }
        break;
    case "A":
        switch (pago) {
        case "C": porcentaje = 20; etiqueta = "Descuento"; break;
        case "P": porcentaje = 5; etiqueta = "Recargo"; break;
        }
        break;
    }
}

if (porcentaje === null) {
console.log("Error. Dato no válido");
} else {
    const ajuste = monto * porcentaje / 100;
    const total = etiqueta === "Descuento" ? monto - ajuste : monto + ajuste;

console.log(
    `${etiqueta} ${porcentaje} %: ${ajuste.toFixed(2)}\n` +
    `Total a pagar: ${total.toFixed(2)}`
);
}