import express from 'express';
import { getAllPost, getOnePost } from './controllers';

const router = express.Router();

router.get('/', getAllPost);
router.get('/:id', getOnePost);

export default router;
