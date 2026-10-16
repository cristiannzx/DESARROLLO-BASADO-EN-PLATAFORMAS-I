const numero = parseInt(prompt("Solo puede ingrese un número entero positivo de 4 cifras:"));

if (isNaN(numero) || numero < 1000 || numero > 9999) {
    console.log("Error. Ingresa un número entero de 4 cifras.");
} else {
    const unidades = numero % 10;
    const decenas = Math.trunc(numero / 10) % 10;
    const centenas = Math.trunc(numero / 100) % 10;
    const millares = Math.trunc(numero / 1000);

    const suma = millares + centenas + decenas + unidades;

    console.log(millares + " + " + centenas + " + " + decenas + " + " + unidades + " = " + suma);
}