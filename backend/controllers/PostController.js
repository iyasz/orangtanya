import Post from "../models/Post.js"
import mongoose from 'mongoose';
import asyncHandler from '../middleware/asyncHandler.js'


export const CreatePost = asyncHandler( async (req, res) => {

    const { body } = req.body

    const newPost = await Post.create({
        body,
        userId: req.user._id
    })

    return res.status(201).json({
        message: "Post berhasil dibuat!",
        daat: newPost
    })
})

export const PostAll = asyncHandler( async (req, res) => {
    const PostsData = await Post.find()

    return res.status(200).json({
        message: "data berhasil ditampilkan",
        data: PostsData
    })
})

export const PostDetail = asyncHandler( async (req, res) => {
    const postId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).json({
            message: "Pertanyaan tidak ditemukan"
        });
    }

    const getPost = await Post.findById(postId);

    if (!getPost) {
        return res.status(404).json({
            message: "Pertanyaan tidak ditemukan"
        });
    }

    return res.status(200).json({
        message: "Pertanyaan berhasil ditemukan",
        data: getPost
    });


})


export const PostUpdate = (req, res) => {
    res.send("Update Post")
}

export const PostDelete = (req, res) => {
    res.send("Delete Post")
}