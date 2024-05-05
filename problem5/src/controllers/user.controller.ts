// user.controller.ts
import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Error fetching users" });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id, 10);
  try {
    const user = await userService.getUserById(id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Error fetching user" });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id, 10);
  try {
    const updatedUser = await userService.updateUser(id, req.body);
    if (!updatedUser) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json(updatedUser);
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Error updating user" });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id, 10);
  try {
    await userService.deleteUser(id);
    res.sendStatus(204);
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Error deleting user" });
  }
};
