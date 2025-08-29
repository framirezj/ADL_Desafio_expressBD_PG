import pkg from "pg";
const { Pool } = pkg;

import dotenv from 'dotenv'
dotenv.config()


export const pool = new Pool({
  user: process.env.USER || "postgres",
  host: process.env.HOST || "localhost",
  database: process.env.DATABASE || "db_app_todo",
  password: process.env.PASSWORD || "postgres",
  port: process.env.PORTDB || 5432,
  allowExitOnIdle: true,
});

try {
    await pool.query("SELECT NOW()")
    console.log("Database Connected 😎")
} catch (error) {
    console.log(error)
}