import express from "express";
import { CreatePost, PostAll, PostDetail, PostUpdate, PostDelete } from '../controllers/PostController.js'
// import {getUser,loginUser,logoutUser,registerUser } from '../controllers/AuthController.js'
// import { authMiddleware } from "../middleware/authenticate.js";
// import onlyAdmin from "../middleware/onlyAdmin.js";

const router = express.Router();

// CRUD Route 

// -- Create
router.post('/', CreatePost);

// -- Read & Show
router.get('/', PostAll);
router.get('/:id', PostDetail);

// -- Update
router.put('/:id', PostUpdate);

// -- Delete
router.delete('/:id', PostDelete);


export default router;