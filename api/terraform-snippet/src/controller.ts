import { Request, Response } from 'express';
import * as SnippetService from './services/snippet.service'; // 🆕 Service import
import { snippts } from './model';

export const getAllSnippets = async (_req: Request, res: Response) => {
  try {
    const snippets = await SnippetService.getAllSnippets();
    console.log('🟢 DB connected & queried successfully');
    res.json(snippets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const addSnippet = async (req: Request, res: Response): Promise<void> => {
  const { title, category, code, description } = req.body;

  if (!title || !category || !code) {
    res.status(400).json({ message: 'Missing required fields' });
    return;
  }

  const newSnippet: snippts = {
    title,
    category,
    code,
    description,
  };

  try {
    const created = await SnippetService.createSnippet(newSnippet);
    res.status(201).json(created);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add snippet' });
  }
};
