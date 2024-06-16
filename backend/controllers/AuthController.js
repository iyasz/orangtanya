import User from '../models/User.js'
import jwt from 'jsonwebtoken'

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_KEY, {
        expiresIn: '6d'
    })
}

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user.id)

    const cookieOption = {
        expire: new Date(
            Date.now() * 6 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        security: false
    }

    res.cookie('jwt',token, cookieOption)

    user.password = undefined

    res.status(statusCode).json({
        data: user
    })
    
}

export const registerUser = async (req, res) => {
    try {
        const createUser = await User.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }) 

        createSendToken(createUser, 201, res)

    } catch (error) {
        return res.status(400).json({
            message: "Tidak dapat memuat data!",
            error
        })
    }
}

export const loginUser = (req, res) => {
    res.send("login berhasil")
}

export const logoutUser = (req, res) => {
    res.send("logout berhasil")
}

export const getUser = (req, res) => {
    res.send("get user berhasil")
}

