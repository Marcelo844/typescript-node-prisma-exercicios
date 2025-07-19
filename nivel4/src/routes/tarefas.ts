import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const { concluida } = req.query;

  const tarefas = await prisma.tarefa.findMany({
    where: {
      concluida: concluida === 'true',
      deletadoEm: null
    }
  });

  res.json(tarefas);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const tarefa = await prisma.tarefa.update({
    where: { id: Number(id) },
    data: { deletadoEm: new Date() }
  });

  res.json({ message: "Tarefa marcada como deletada", tarefa });
});

router.post('/', async (req, res) => {
  const { titulo } = req.body;

  if (!titulo || typeof titulo !== 'string') {
    return res.status(400).json({ error: "Título inválido" });
  }

  const tarefa = await prisma.tarefa.create({
    data: {
      titulo,
    }
  });

  res.status(201).json(tarefa);
});

export default router;
