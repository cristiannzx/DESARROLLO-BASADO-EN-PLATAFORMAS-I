const notas = [];

for (let i = 1; i <= 4; i++) {
    let nota;
    do {
    nota = parseFloat(prompt("Ingrese la nota Numero: " + i + " |solo de 0 a 20|"));
    } while (isNaN(nota) || nota < 0 || nota > 20);
    notas.push(nota);
}

const menor = Math.min(...notas);
const suma = notas.reduce((acumulado, nota) => acumulado + nota, 0);
const promedio = (suma - menor) / 3;

console.log(
    "Notas ingresadas: " + notas.join(", ") + "\n" +
    "Nota eliminada: " + menor + "\n" +
    "Promedio de prácticas: " + promedio.toFixed(2)
);