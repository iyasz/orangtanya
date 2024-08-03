import Post from "../models/Post.js"
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

export const PostAll = (req, res) => {
    res.send("Show All Post")
}

export const PostDetail = (req, res) => {
    res.send("Detail Post")
}

export const PostUpdate = (req, res) => {
    res.send("Update Post")
}

export const PostDelete = (req, res) => {
    res.send("Delete Post")
}