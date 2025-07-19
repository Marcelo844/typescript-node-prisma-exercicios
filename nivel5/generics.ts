function retornarPrimeiro<T>(arr: T[]): T {
  return arr[0];
}

// Testes
console.log("Primeiro número:", retornarPrimeiro([10, 20, 30]));
console.log("Primeira string:", retornarPrimeiro(["JS", "TS", "Node"]));
