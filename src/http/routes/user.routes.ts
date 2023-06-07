import express from 'express';
import { getAllUser } from '../controller/User/getAllUser.controller';
import { getUserById } from '../controller/User/getUserById.controller';
import { updateUser } from '../controller/User/updateUser.controller';
import { deleteUser } from '../controller/User/deleteUser.controller';
import { auth } from '../middleware/auth';

const router = express.Router();

router.get('/user', auth, getAllUser);
router.get('/user/:id', auth, getUserById);
router.put('/user/:id', auth, updateUser);
router.post('/user/:id', auth, deleteUser);

export default router;
