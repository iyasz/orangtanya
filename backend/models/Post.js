import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new mongoose.Schema({
    body: {
        type: String,
        required: [true, "Body tidak boleh kosong!"],
    },
    email: {
        type: String,
        required: [true, "Email tidak boleh kosong!"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password tidak boleh kosong!"],
        minLength: [6, "Password harus lebih dari 5 Huruf!"]
    },
    created_at: {
        type: String,
        required: [true, "created_at tidak boleh kosong!"],
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User tidak boleh kosong!"],
    },
}, {
    timestamps: true
})

const post = mongoose.model("Post", postSchema)

export default post;