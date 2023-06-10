import express from 'express';
import { getAllUser } from '../controller/User/getAllUser.controller';
import { getUserById } from '../controller/User/getUserById.controller';
import { updateUser } from '../controller/User/updateUser.controller';
import { deleteUser } from '../controller/User/deleteUser.controller';
import { auth } from '../middleware/auth';
import permission from '../middleware/permission';

const router = express.Router();

router.get('/user', auth, permission, getAllUser);
router.get('/user/:id', auth, permission, getUserById);
router.put('/user/:id', auth, updateUser);
router.post('/user/:id', auth, permission, deleteUser);

export default router;
