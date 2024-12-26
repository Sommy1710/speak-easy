import {Router} from 'express';
import { registerUser } from '../app/services/auth.service.js';
const router = Router();

router.post('/register', registerUser);


export const authRouter = router;