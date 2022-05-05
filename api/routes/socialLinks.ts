import { Router } from 'express';
import { getAllSocialLinks } from '../controllers/socialLinks';

const router = Router();

router.get('/', getAllSocialLinks);

export default router;