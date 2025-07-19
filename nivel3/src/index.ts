import express from 'express';
import tarefasRoutes from './routes/tarefas';

const app = express();
app.use(express.json());

app.get('/status', (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use('/tarefas', tarefasRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
