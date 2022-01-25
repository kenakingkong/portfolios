import { Router } from 'express';
import { getLastPlayedSong } from '../controllers/spotify';

const router = Router();

router.get('/', getLastPlayedSong)

export default router;