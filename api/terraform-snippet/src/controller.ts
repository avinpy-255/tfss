import { Request, Response } from 'express';
import pool  from "./db";

export const getSnippets = async (req: Request, res: Response) => {
  const result = await pool.query('SELECT * FROM snippets');
  res.json(result.rows);
};

export const addSnippet = async (req: Request, res: Response) => {
  const { title, category, code, description } = req.body;
  const result = await pool.query(
    'INSERT INTO snippets (title, category, code, description) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, category, code, description]
  );
  res.status(201).json(result.rows[0]);
};

export const getAllSnippets = async (_req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM snippets');
    console.log('🟢 DB connected & queried successfully');
    res.json(result.rows); // <-- this should return an array
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}