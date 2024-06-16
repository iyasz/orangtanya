import express from "express";
import {getUser,loginUser,logoutUser,registerUser } from '../controllers/AuthController.js'

const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.get('/getUser', getUser);

export default router;