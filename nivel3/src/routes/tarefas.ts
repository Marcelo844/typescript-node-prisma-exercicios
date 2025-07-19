import { Router } from 'express';
import validarTarefa from '../middleware/validarTarefa';

const router = Router();

router.post('/', validarTarefa, (req, res) => {
  const { titulo } = req.body;
  res.status(201).json({ message: "Tarefa criada com sucesso", titulo });
});

export default router;
