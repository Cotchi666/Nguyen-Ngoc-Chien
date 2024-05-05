import { Router } from 'express';
import { createUser, getUsers, updateUser, deleteUser, renderCreatePage ,renderEditPage} from '../controllers/user.controller.on.view';

const router = Router();

// CRUD  view routes
router.get('/create', renderCreatePage);
router.post('/create-new-user', createUser);

router.get('/read', getUsers);

router.get('/edit/:id', renderEditPage);
router.post('/update/:id', updateUser);

router.get('/delete/:id', deleteUser);

export default router;
