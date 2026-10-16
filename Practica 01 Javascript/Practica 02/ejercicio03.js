const n = Number(prompt("Ingrese un numero entero:"));

if (isNaN(n) || !Number.isInteger(n) || n < 0) {
    console.log("Error: el factorial no está definido para números negativos o decimales.");
} else {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
    factorial *= i;
    }

    let mensaje = n + "! = " + factorial;

    if (!Number.isSafeInteger(factorial)) {
    mensaje += "\nAdvertencia: el resultado supera Number.MAX_SAFE_INTEGER y puede no ser exacto.";
    }

    console.log(mensaje);
}