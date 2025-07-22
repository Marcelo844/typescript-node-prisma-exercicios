# Exercícios Progressivos - TypeScript, Node.js, Express e Prisma

Este repositório contém uma sequência de exercícios organizados por níveis de dificuldade para praticar conceitos fundamentais e avançados de **TypeScript**, **Node.js**, **Express** e **Prisma**.

---

## 📁 Estrutura dos Exercícios

- `nivel1/`: Fundamentos de TypeScript
- `nivel2/`: Programação Orientada a Objetos (POO)
- `nivel3/`: Integração com Express
- `nivel4/`: Uso de Prisma com banco de dados
- `nivel5/`: Conceitos avançados (Generics, Middleware Global, Decorators)
- `desafio-final/`: Projeto de API para gerenciamento de biblioteca

---

## 🚀 Como executar os exercícios

### Pré-requisitos

- Node.js
- npm ou yarn
- TypeScript (`npm install -g typescript`)
- ts-node (`npm install -g ts-node`)
- Prisma (`npm install -g prisma`)

### Instalar dependências

```bash
npm install
```

### Prisma (nível4 e desafio-final)

- Gerar cliente Prisma:
```bash
npx prisma generate
```

- Rodar migrações e banco:
```bash
npx prisma migrate dev
```

---

## 🧪 Testando o projeto final

### Inicie o servidor do desafio:

```bash
cd desafio-final
npx ts-node src/index.ts
```

Acesse as rotas no navegador ou via Postman:
- `POST /livros`
- `GET /livros`
- `PATCH /livros/:id/emprestar`

---

## ✅ Checklist de funcionalidades

- [x] Tipos básicos e funções tipadas
- [x] Interfaces e objetos tipados
- [x] Classes e herança
- [x] API com Express
- [x] Middlewares
- [x] Integração com Prisma
- [x] Soft delete
- [x] Generics e Decorators
- [x] Middleware global de erro
- [x] Projeto integrado com SQLite

---

## 🧠 Autor

Feito por **Marcelo Rangel Barros** aluno da Escola Técnica Estadual Monteiro Lobato(Cimol)
