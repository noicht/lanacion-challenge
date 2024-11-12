import * as dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.API_PORT || 4000;
export const DB_URI = <string>process.env.DB_URI;
export const PROJECT_NAME = process.env.PROJECT_NAME;
export const API_URL = process.env.API_URL;