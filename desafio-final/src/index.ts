import express from 'express';
import livrosRoutes from './routes/livros';

const app = express();
app.use(express.json());
app.use('/livros', livrosRoutes);

app.listen(3003, () => {
  console.log("Servidor de biblioteca rodando na porta 3003");
});
