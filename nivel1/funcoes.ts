function calcularIMC(peso: number, altura: number): number {
  return peso / (altura * altura);
}

function classificarIMC(imc: number): string {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 25) return "Peso normal";
  if (imc < 30) return "Sobrepeso";
  return "Obesidade";
}

const peso = 70;
const altura = 1.75;
const imc = calcularIMC(peso, altura);
const classificacao = classificarIMC(imc);

console.log("Peso:", peso);
console.log("Altura:", altura);
console.log("IMC:", imc.toFixed(2));
console.log("Classificação:", classificacao);
