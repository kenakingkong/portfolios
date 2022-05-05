import { Router } from 'express';
import { getAllUpdates } from '../controllers/updates';

const router = Router();

router.get('/', getAllUpdates);

export default router;