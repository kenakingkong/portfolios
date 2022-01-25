import { Router, Request, Response } from 'express';
import { getHello } from '../controllers/hello';

const router = Router();

//router.get('/', getHello);
router.get('/', getHello)

// router.post('/');
// router.patch('/:id');
// router.delete('/:id');


export default router;