import express from 'express';
import { signIn } from '../controller/Auth/signIn.controller';
import { logIn } from '../controller/Auth/logIn.controller';

const router = express.Router();

router.post('/sign-in', signIn);
router.post('/log-in', logIn);

export default router;