import express from 'express'
import { getUser, loginUser, registerUser } from '../controllers/user.controllers.js';
import isAuthenticated from '../middlewares/authMiddleware.js';


const userRouter = express.Router()

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/me', isAuthenticated, getUser);

// HW - Log out

export default userRouter