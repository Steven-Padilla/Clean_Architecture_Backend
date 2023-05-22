import * as dotenv from "dotenv";
dotenv.config();
export const config = {
  server: {
    port: process.env["PORT"],
  },
  db: {
    db_name : process.env["DB_NAME"],
    db_user : process.env["DB_USER"],
    db_password : process.env["DB_PASSWORD"],
    db_host : process.env["DB_HOST"],
    db_dialect : process.env["DB_DIALECT"],
  }
};