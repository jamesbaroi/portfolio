import mysql from 'mysql';

import {
  db_host,
  db_port,
  db_user,
  db_pass,
  db_name
} from './env.config.js';

const dbConnectionOptions = {
  host: db_host,
  port: db_port,
  user: db_user,
  password: db_pass,
  database: db_name
}

export const dbConnection = mysql.createPool(dbConnectionOptions);