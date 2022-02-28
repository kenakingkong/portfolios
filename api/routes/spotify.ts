import { Router } from 'express';
import { getHello } from '../controllers/hello';

const router = Router();

router.get('/', getHello)

export default router;