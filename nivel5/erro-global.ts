import express, { Request, Response, NextFunction } from 'express';

const app = express();
app.use(express.json());

app.get('/erro', (req, res) => {
  throw new Error("Erro proposital para teste");
});

// Middleware global de erro
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Erro capturado:", err.message);
  res.status(500).json({ error: err.message, code: 500 });
});

app.listen(3005, () => {
  console.log("Servidor com tratamento de erro na porta 3005");
});
