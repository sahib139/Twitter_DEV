import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const SALT = bcrypt.genSaltSync(10);
const Secrete_KEY = process.env.Secrete_kEY;

export{
    PORT,
    DB_URL,
    SALT,
    Secrete_KEY,
}