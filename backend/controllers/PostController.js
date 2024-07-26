import Post from "../models/Post.js"


export const CreatePost = (req, res) => {

    const { body } = req.body

    const newPost = Post.create({
        body,
        userId: req.user.id
    })

    return res.status(201).json({
        message: "Post berhasil dibuat!",
        daat: newPost
    })
}

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