import pool from '../db';
import { snippts } from '../model';

export const getAllSnippets = async (): Promise<snippts[]> => {
  const result = await pool.query('SELECT * FROM snippets');
  return result.rows;
};

export const createSnippet = async (snippet: snippts): Promise<snippts> => {
  const { title, category, code, description } = snippet;

  const result = await pool.query(
    'INSERT INTO snippets (title, category, code, description) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, category, code, description]
  );

  return result.rows[0];
};
