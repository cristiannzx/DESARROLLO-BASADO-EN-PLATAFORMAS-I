const metros = parseFloat(prompt("Ingrese el numero en metros:"));

if (isNaN(metros)) {
    console.log("Error. Numero invalido");
} else {
    const pulgadas = metros / 0.0254;
    console.log(pulgadas.toFixed(2) + " pulgadas");
}