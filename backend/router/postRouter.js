import express from "express";
import { authMiddleware } from '../middleware/authenticate.js'
import adminPermission from '../middleware/onlyAdmin.js'
import { CreatePost, PostAll, PostDetail, PostUpdate, PostDelete } from '../controllers/PostController.js'


const router = express.Router();

// CRUD Route 

// -- Create
router.post('/', authMiddleware, CreatePost);

// -- Read & Show
router.get('/', PostAll);
router.get('/:id', PostDetail);

// -- Update
router.put('/:id', authMiddleware, PostUpdate);

// -- Delete
router.delete('/:id', PostDelete);


export default router;