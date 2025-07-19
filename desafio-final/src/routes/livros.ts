import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  const { titulo, autor, anoPublicacao } = req.body;
  const anoAtual = new Date().getFullYear();
  if (anoPublicacao > anoAtual) {
    return res.status(400).json({ error: "Ano de publicação não pode ser futuro" });
  }
  const livro = await prisma.livro.create({ data: { titulo, autor, anoPublicacao } });
  res.status(201).json(livro);
});

router.get('/', async (req, res) => {
  const { autor, disponivel } = req.query;
  const filtro: any = { where: {} };
  if (autor) filtro.where.autor = String(autor);
  if (disponivel) filtro.where.disponivel = disponivel === "true";
  const livros = await prisma.livro.findMany(filtro);
  res.json(livros);
});

router.patch('/:id/emprestar', async (req, res) => {
  const { id } = req.params;
  const livro = await prisma.livro.findUnique({ where: { id: Number(id) } });
  if (!livro?.disponivel) {
    return res.status(400).json({ error: "Livro já está emprestado" });
  }
  const atualizado = await prisma.livro.update({
    where: { id: Number(id) },
    data: { disponivel: false }
  });
  res.json(atualizado);
});

export default router;
