import mongoose from "mongoose";
import {config} from './server-config'

const db_uri: string = config.DB_URL as string

export const connect = ():void=>{
    mongoose.connect(db_uri)
       .then(() => console.log('MongoDB Connected...'))
       .catch(err => console.log(err));
}