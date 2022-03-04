import { Router } from 'express';
import { 
  getLastPlayedSong, 
  getSpotifyTest 
} from '../controllers/spotify';

const router = Router();

router.get('/', getSpotifyTest)

router.get('/lastPlayedSong', getLastPlayedSong);


export default router;