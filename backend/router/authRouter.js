import express from "express";
import {getUser,loginUser,logoutUser,registerUser } from '../controllers/AuthController.js'
import {authMiddleware} from "../middleware/authenticate.js";
import {onlyAdmin} from "../middleware/onlyAdmin.js";

const router = express.Router();


router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/logout', logoutUser);

router.get('/getUser', authMiddleware, getUser);

router.get('/permission', authMiddleware, onlyAdmin("1"), (req, res) => {
    res.send("berhasil")
});


export default router;