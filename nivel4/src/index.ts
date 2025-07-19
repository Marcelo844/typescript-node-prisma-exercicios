import express from 'express';
import tarefasRoutes from './routes/tarefas';

const app = express();
app.use(express.json());

app.use('/tarefas', tarefasRoutes);

app.listen(3001, () => {
  console.log("API rodando na porta 3001");
});
