const R = parseFloat(prompt("Ingrese el radio R de la Primera circunferencia:"));

if (isNaN(R) || R <= 0) {
    console.log("Error. Ingresa un número válido mayor que cero.");
} else {
    const r1 = R;
  const r2 = 2 * R;
  const r3 = 3 * R;

  const longitudTotal = 2 * Math.PI * r1 + 2 * Math.PI * r2 + 2 * Math.PI * r3;
  const areaTotal = Math.PI * r1 ** 2 + Math.PI * r2 ** 2 + Math.PI * r3 ** 2;

    console.log(
    "Longitud total = " + longitudTotal.toFixed(2) + "\n" +
    "Area total = " + areaTotal.toFixed(2)
    );
}