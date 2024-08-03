import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new mongoose.Schema({
    body: {
        type: String,
        required: [true, "Isi content tidak boleh kosong!"],
    },
    is_blocked : {
        type: String,
        enum: [1, 2],
        default: 2
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