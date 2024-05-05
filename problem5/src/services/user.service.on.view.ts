// user.service.ts
import pool from "../db";

// Function to create a new user
export const createUser = async (userData: { first_name: string, last_name: string, email: string }) => {
  try {
    const { first_name, last_name, email } = userData;
    const result = await pool.query(
      "INSERT INTO public.users (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *",
      [first_name, last_name, email]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
};

// Function to get all users
export const getUsers = async () => {
  try {
    const result = await pool.query("SELECT * FROM public.users");
    return result.rows;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Error fetching users");
  }
};

// Function to get a user by ID
export const getUserById = async (id: number) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Error fetching user");
  }
};

// Function to update a user
export const updateUser = async (id: number, userData: { first_name: string, last_name: string, email: string }) => {
  try {
    const { first_name, last_name, email } = userData;
    const result = await pool.query(
      "UPDATE users SET first_name = $1, last_name = $2, email = $3 WHERE id = $4 RETURNING *",
      [first_name, last_name, email, id]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Error updating user");
  }
};

// Function to delete a user
export const deleteUser = async (id: number) => {
  try {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Error deleting user");
  }
};
