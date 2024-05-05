import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER || "postgres.kjlbsgoewlgxrrlmqemj",
  host: process.env.DB_HOST || "aws-0-ap-southeast-1.pooler.supabase.com",
  database: process.env.DB_NAME || "postgres",
  password: process.env.DB_PASSWORD || "TwqiEFOUQz9bxJEa",
  port: 5432,
});

export default pool;
