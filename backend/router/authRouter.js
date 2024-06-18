import express from "express";
import {getUser,loginUser,logoutUser,registerUser } from '../controllers/AuthController.js'
import { authMiddleware } from "../middleware/authenticate.js";

const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.get('/getUser', authMiddleware, getUser);

export default router;