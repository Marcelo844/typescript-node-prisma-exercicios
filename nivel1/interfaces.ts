interface Pessoa {
  nome: string;
  idade: number;
  email?: string;
}

const usuario: Pessoa = {
  nome: "Marcelo",
  idade: 25,
  email: "marcelo@email.com"
};

console.log("Usuário:", usuario);
