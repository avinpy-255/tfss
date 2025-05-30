import express from "express";
import dotenv from 'dotenv';
import test from "node:test";

dotenv.config
const app = express()
app.use(express.json())

app.get('/api/snippts', test)

app.get('/test', (_req, res) => {
  res.json({ message: 'This is a test API endpoint' });
});

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Snippet API running on http://localhost:${PORT}`);
  });
}

export default app;