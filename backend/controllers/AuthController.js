import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import asyncHandler from '../middleware/asyncHandler.js'

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

export const registerUser = asyncHandler (async (req, res) => {

    const createUser = await User.create({
        name: req.body.name.toLowerCase(),
        username: req.body.username.toLowerCase(),
        email: req.body.email.toLowerCase(),
        password: req.body.password.toLowerCase(),
    }) 

    createSendToken(createUser, 201, res)

})

export const loginUser = asyncHandler (async (req, res) => {
    // validasi required 
    if(!req.body.email || !req.body.password){
        res.status(400)
        throw new Error("Email dan Password tidak boleh kosong!")
    }

    // check email 
    const userData = await User.findOne({
        email: req.body.email
    })

    if(userData && (await userData.comparePassword(req.body.password))){
        createSendToken(userData, 200, res)
    } else {
        res.status(400)
        throw new Error("Akun tidak terdaftar")
    }   

})

export const logoutUser = (req, res) => {
    res.cookie('jwt', '', {
        expire: new Date(0),
        httpOnly: true,
        security: false
    })

    res.status(200).json({
        message: "Anda berhasil logout!"
    })
}

export const getUser = async (req, res) => {
    const user = await User.findById(req.user.id).select({password: 0})

    if(user){
        return res.status(200).json({
            user
        })
    }

    return res.status(400).json({
        message: 'User tidak valid!'
    })
}

