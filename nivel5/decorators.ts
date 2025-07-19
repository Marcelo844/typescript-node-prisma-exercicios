import { performance as nodePerformance } from 'perf_hooks';

function logTempoExecucao(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const inicio = nodePerformance.now();
    const resultado = metodoOriginal.apply(this, args);
    const fim = nodePerformance.now();
    console.log(`${propertyKey} executado em ${(fim - inicio).toFixed(2)} ms`);
    return resultado;
  };
  return descriptor;
}

class Carro {
  constructor(public modelo: string) {}

  @logTempoExecucao
  obterDetalhes() {
    return `Modelo: ${this.modelo}`;
  }
}

const carro = new Carro("Civic");
console.log(carro.obterDetalhes());
