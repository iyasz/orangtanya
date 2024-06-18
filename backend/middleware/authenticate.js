import jwt from "jsonwebtoken";
import User from "../models/User.js";  

export const authMiddleware = async (req, res, next) => {
    let token;

    token = req.cookies.jwt

    if(!token){
        return next(
            res.status(401).json({
                message: "Silahkan Login Terlebih Dahulu"
            })
        )
    }

    let decoded;

    try {
        decoded = await jwt.verify(token, process.env.JWT_KEY)
    } catch (error) {
        return next(
            res.status(401).json({
                message: "Invalid Token"
            })
        )
    }

    const currentUser = await User.findById(decoded.id)
    
    if(!currentUser){
        return next(
            res.status(401).json({
                message: "User Tidak Ditemukan"
            })
        )
    }

    req.user = currentUser

    next()

}