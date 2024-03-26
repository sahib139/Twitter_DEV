import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const SALT = bcrypt.genSaltSync(10);
const Secrete_KEY = process.env.Secrete_kEY;
const AWS_S3_Bucket = process.env.AWS_S3_Bucket;
const AWS_Access_KEY = process.env.AWS_Access_KEY;
const AWS_Secret_KEY = process.env.AWS_Secret_KEY;

export{
    PORT,
    DB_URL,
    SALT,
    Secrete_KEY,
    AWS_Access_KEY,
    AWS_Secret_KEY,
    AWS_S3_Bucket,
}