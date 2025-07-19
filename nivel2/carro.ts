// Classe base
class Carro {
  constructor(
    public marca: string,
    public modelo: string,
    public ano: number
  ) {}

  obterDetalhes(): string {
    return `${this.marca} ${this.modelo}, ano ${this.ano}`;
  }
}

// Instância da classe Carro
const carro = new Carro("Toyota", "Corolla", 2022);
console.log("Detalhes do carro:", carro.obterDetalhes());


// Classe derivada com herança
class CarroEletrico extends Carro {
  constructor(
    marca: string,
    modelo: string,
    ano: number,
    public autonomiaBateria: number
  ) {
    super(marca, modelo, ano);
  }

  // Sobrescrevendo o método
  obterDetalhes(): string {
    return `${super.obterDetalhes()}, autonomia: ${this.autonomiaBateria} km`;
  }
}

// Instância da classe CarroEletrico
const tesla = new CarroEletrico("Tesla", "Model 3", 2023, 500);
console.log("Detalhes do carro elétrico:", tesla.obterDetalhes());
