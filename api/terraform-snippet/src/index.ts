import express from "express";
import dotenv from 'dotenv';
import { snippetRoutes } from './routes'; 

dotenv.config
const app = express()
app.use(express.json())

app.use('/snippts', snippetRoutes)

app.get('/test', (_req, res) => {
  res.json({ message: 'This is a test API endpoint' });
});

if (process.env.NODE_ENV !== 'test') {
  const PORT = 8000
  app.listen(PORT, () => {
    console.log(`🚀 Snippet API running on http://localhost:${PORT}`);
  });
}

export default app;