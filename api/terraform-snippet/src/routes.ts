import { Router } from 'express';
import { addSnippet, getAllSnippets, getSnippets } from './controller';

const router = Router();

router.get('/all', getAllSnippets);
router.post('/', addSnippet);

export { router as snippetRoutes };
