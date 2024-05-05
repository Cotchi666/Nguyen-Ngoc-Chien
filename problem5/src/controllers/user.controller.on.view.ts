// user.controller.ts
import { Request, Response } from "express";
import * as userService from "../services/user.service.on.view";

export const renderCreatePage = (req: Request, res: Response) => {
  res.render("index");
};

// Controller function to create a new user
export const createUser = async (req: Request, res: Response) => {
  const { first_name, last_name, email } = req.body;
  try {
    const newUser = await userService.createUser({ first_name, last_name, email });
    res.redirect("/read");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
};

// Controller function to get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsers();
    res.render("read", { records: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Error fetching users" });
  }
};

// Controller function to render the edit page
export const renderEditPage = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = await userService.getUserById(id);
    res.render("edit", { record: user });
  } catch (error) {
    console.error("Error rendering edit page:", error);
    res.status(500).json({ error: "Error rendering edit page" });
  }
};

// Controller function to update a user
export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { first_name, last_name, email } = req.body;
  try {
    const updatedUser = await userService.updateUser(id, { first_name, last_name, email });
    res.redirect("/read");
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Error updating user" });
  }
};

// Controller function to delete a user
export const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    await userService.deleteUser(id);
    res.redirect("/read");
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Error deleting user" });
  }
};
