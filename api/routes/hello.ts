import { Router, Request, Response } from 'express';
import { getHello } from '../controllers/hello';

const router = Router();

//router.get('/', getHello);
router.get('/', (req: Request, res: Response) => {
  res.send('world');
})

// router.post('/');
// router.patch('/:id');
// router.delete('/:id');


export default router;