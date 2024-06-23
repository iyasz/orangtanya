import jwt from "jsonwebtoken";
import User from "../models/User.js";  

const onlyAdmin = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)){
            return next(res.status(403).json({
                message: "Role hanya untuk admin"
            }))
        }

        next()
    }
} 

export default onlyAdmin;