import dotenv from 'dotenv'
dotenv.config()

interface Config {
    PORT?: string ;
}


export const config:Config = {
   PORT : process.env.PORT,
}