import dotenv from "dotenv";

dotenv.config();

// App-env
export const nodenv = process.env.NODE_ENV;
export const host = process.env.HOST;
export const port = process.env.PORT;
export const url = process.env.URL;

// MySQL
export const db_host = process.env.DB_HOST;
export const db_port = process.env.DB_PORT;
export const db_user = process.env.DB_USER;
export const db_pass = process.env.DB_PASS;
export const db_name = process.env.DB_NAME;
