import { Router } from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser, homeController } from '../controllers/user.controller';
import { editController } from '../controllers/editController';

const router = Router();

// CRUD routes
router.post('/create-new-user', createUser);
router.get('/create', homeController);

router.get('/read', getUsers);
router.get('/:id', getUserById);
router.get('/edit/:id', editController);
router.post('/update/:id', updateUser);
router.get('/delete/:id', deleteUser);

export default router;
