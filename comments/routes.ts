import express from 'express';
import { getAllComments, getOneComments } from './controllers';

const router = express.Router();

router.get('/', getAllComments);
router.get('/:id', getOneComments);

export default router;
