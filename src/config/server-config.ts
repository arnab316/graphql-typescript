import dotenv from 'dotenv'
dotenv.config()

interface Config {
    PORT?: string;
    DB_URL?: string;

}


export const config:Config = {
   PORT : process.env.PORT as string | undefined,
   DB_URL: process.env.DB_URL 
}