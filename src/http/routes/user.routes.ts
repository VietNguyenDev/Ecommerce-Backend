import express from 'express';
import { getAllUser } from '../controller/User/getAllUser.controller';
import { getUserById } from '../controller/User/getUserById.controller';
import { updateUser } from '../controller/User/updateUser.controller';
import { deleteUser } from '../controller/User/deleteUser.controller';

const router = express.Router();

router.get('/user', getAllUser);
router.get('/user/:id', getUserById);
router.put('/user/:id', updateUser);
router.post('/user/:id', deleteUser);

export default router;
