import mongoose, { Document, Schema }  from "mongoose";
interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: string;
}

const userSchema: Schema <IUser>= new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
}, { timestamps: true })

const user = mongoose.model('User', userSchema);

export default user;