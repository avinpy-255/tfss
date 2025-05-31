import { Router } from 'express';
import { addSnippet, getAllSnippets } from './controller';

const router = Router();

router.get('/all', getAllSnippets);
router.post('/post', addSnippet);

export { router as snippetRoutes };
