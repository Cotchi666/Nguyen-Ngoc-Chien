import pool from "../db";


interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export const createUser = async (userData: User): Promise<User> => {
  const { first_name, last_name, email } = userData;
  console.log(userData)
  const result = await pool.query(
    "INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *",
    [first_name, last_name, email]
  );
  return result.rows[0];
};

export const getUsers = async (): Promise<User[]> => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

export const getUserById = async (id: number): Promise<User | null> => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0] || null;
};

export const updateUser = async (id: number, userData: Partial<User>): Promise<User | null> => {
  const { first_name, last_name, email } = userData;
  const result = await pool.query(
    "UPDATE users SET first_name = $1, last_name = $2, email = $3 WHERE id = $4 RETURNING *",
    [first_name, last_name, email, id]
  );
  return result.rows[0] || null;
};

export const deleteUser = async (id: number): Promise<void> => {
  await pool.query("DELETE FROM users WHERE id = $1", [id]);
};
