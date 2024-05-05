import { Router } from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/user.controller';

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.post("/create", createUser);
router.delete("/:id", deleteUser);

export default router;
