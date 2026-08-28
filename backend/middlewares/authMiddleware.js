import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

const isAuthenticated = async (req, res, next) => {
    try{
        const token = req.cookies?.token

        if (!token){
            return res.status(400).json({message: "No token found."})
        }

        const decoded = jwt.verify(token, process.env.jwt_secret)
        const user = await User.findById(decoded.userId)

        if (!user) {
            return res.status(401).json({message: "User not found."})
        }

        req.user = user
        next()
        
    }
    catch(err){
        return res.status(401).json({message: "Invalid or expired token."})
    }
}

export default isAuthenticated;