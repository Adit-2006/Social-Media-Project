import User from "../models/user.model.js"
import bcrypt from 'bcrypt' 
import genToken from "../utils/genToken.js"

const cookieOption = {
    httpOnly: true
}

export const registerUser = async(req, res) => {
    const {name, username, email, password} = req.body

    // Validation

    try {
        if(!username || !name || !email || !password){
            return res.status(422).json({message: "All fields are Required."})
        }

        // is username repeating?
        const user = await User.findOne({username})

        if (user){
            return res.status(400).json({message: "Username already exists"});
        }

        const emailExists = await User.findOne({email})

        if (emailExists){
            return res.status(400).json({message: "Email already exists"});
        }

        if (password.length <= 6){
            return res.status(400).json({message: "Password length should be greater than 6."})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        //Generate genToken
        const newUser = await User.create({name, username, email, password : hashedPassword})

        const token = genToken(newUser._id)

        res.cookie("token", token, cookieOption); 

        res.status(201).json(newUser)

    }
    catch(err) {
        res.status(500).json({message: "Unable to register user." + err})
    }
}

export const loginUser = async(req, res) => {
    // login the user
    try {
        const {email, password} = req.body
        if (!email || !password){
            return res.status(422).json({message: "Email or password is missing"})
        }
        const userExists = await User.findOne({email})

        if (!userExists){
            return res.status(404).json({message: "User not found"})
        }
        const correctPassword = bcrypt.compareSync(password, userExists.password)

        if (!correctPassword){
            return res.status(401).json({message: "Invalid password"})
        }

        const token = genToken(userExists._id)
        res.cookie("token", token, cookieOption);         

        res.status(200).json({message: "Login Successful",
            user: userExists
        })
    }
    catch(err){
        res.status(500).json({message: err + " occured"})
    }
}

export const getUser = (req, res) => {
    console.log(req.user)

    res.status(200).json(req.user)
}