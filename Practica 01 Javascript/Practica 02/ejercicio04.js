const numero = Number(prompt("Ingrese un numero entero positivo:"));

if (isNaN(numero) || !Number.isInteger(numero) || numero <= 0) {
    console.log("Error. Ingresa un numero valido.");
} else {
let copia = numero;
let sumaWhile = 0;
while (copia > 0) {
sumaWhile += copia % 10;
copia = Math.trunc(copia / 10);
}
let sumaTexto = 0;
for (const cifra of String(numero)) {
    sumaTexto += Number(cifra);
}

console.log(
    "Número: " + numero + "\n" +
    "Suma de dígitos (while): " + sumaWhile + "\n" +
    "Suma de dígitos (for...of): " + sumaTexto
);
}