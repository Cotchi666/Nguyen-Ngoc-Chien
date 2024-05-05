import { Request, Response } from "express";
import pool from "../db";
// Function to create a new user
export const homeController = (req: Request, res: Response) => {
  res.render("index");
};

// Function to create a new user
export const createUser = async (req: Request, res: Response) => {
  const { first_name, last_name,email } = req.body;
  console.log(req.body);
  try {
    const result = await pool.query(
      "INSERT INTO public.users (first_name, last_name, email) VALUES ($1, $2 , $3) RETURNING *",
      [first_name,last_name, email]
    );
    // res.status(201).json(result.rows[0]);
    res.redirect("/api/users/read");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
  // res.render("index");
};

// Function to get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM public.users");
    // res.json(result.rows);
    if (result) {
      res.render("read", { records: result.rows });
    } else {
      res.render("read");
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Error fetching users" });
  }
  // res.render('index')
};

// Function to get a user by ID
export const getUserById = async (req: Request, res: Response) => {
  //   const id = parseInt(req.params.id);
  //   try {
  //     const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  //     if (result.rows.length === 0) {
  //       res.status(404).json({ error: "User not found" });
  //     } else {
  //       res.json(result.rows[0]);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user:", error);
  //     res.status(500).json({ error: "Error fetching user" });
  //   }
};

// Function to update a user
export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { first_name, last_name, email } = req.body;
  console.log(id, req.body);
  try {
    const result = await pool.query(
      "UPDATE users SET first_name = $1, email = $2, last_name = $4 WHERE id = $3 RETURNING *",
      [first_name, email, id, last_name]
    );

    if (result.rows.length !== 0) {
      res.redirect("/api/users/read");
      // res.redirect('index')

      // res.status(404).json({ error: "User not found" });
    } else {
      // res.redirect("/api/users/edit/id");
      // res.render("edit", { record: result.rows[0] });
      // res.json(result.rows[0]);
      res.status(404).json({ error: "User not found" });

    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Error updating user" });
  }
};

// Function to delete a user
export const deleteUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
      await pool.query("DELETE FROM users WHERE id = $1", [id]);
      // res.sendStatus(204);
      res.redirect("/api/users/read");

    } catch (error) {
      console.error("Error deleting user:", error);
      // res.status(500).json({ error: "Error deleting user" });
      res.redirect('/api/users/')

    }
};
