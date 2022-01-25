import { Router } from 'express';
import { 
  createSocialLink, 
  getAllSocialLinks,
} from '../controllers/socialLinks';

const router = Router();

router.get('/', getAllSocialLinks);
router.post('/', createSocialLink);

export default router;