import mongoose from "mongoose";
import validator from 'validator';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nama tidak boleh kosong!"],
    },
    username: {
        type: String,
        required: [true, "Username tidak boleh kosong!"],
        unique: [true, "Username sudah terdaftar!"]
    },
    email: {
        type: String,
        required: [true, "Email tidak boleh kosong!"],
        unique: [true, "Email sudah terdaftar!"],
        validate: {
            validator: validator.isEmail,
            message: "Harus berupa email!"
        }
    },
    password: {
        type: String,
        required: [true, "Password tidak boleh kosong!"],
        minLength: [6, "Password harus lebih dari 5 Huruf!"]
    }
})

userSchema.pre("save", async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const user = mongoose.model("User", userSchema)

export default user;