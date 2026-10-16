const L1 = parseFloat(prompt("Ingrese la longitud del lado L1:"));
const L2 = parseFloat(prompt("Ingrese la longitud del lado L2:"));
const L3 = parseFloat(prompt("Ingrese la longitud del lado L3:"));

if (isNaN(L1) || isNaN(L2) || isNaN(L3) || L1 <= 0 || L2 <= 0 || L3 <= 0) {
    console.log("Error. Ingrese numeros mayores que cero.");
} else if (L1 + L2 <= L3 || L1 + L3 <= L2 || L2 + L3 <= L1) {
    console.log("Aviso. Los lados ingresados no forman un triángulo.");
} else {
    const SP = (L1 + L2 + L3) / 2;
  const area = Math.sqrt(SP * (SP - L1) * (SP - L2) * (SP - L3));
    console.log("El area del triangulo = " + area.toFixed(2));
}