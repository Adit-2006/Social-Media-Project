import User from "../models/user.model.js"

export const registerUser = async(req, res) => {
    const {name, username, email, password} = req.body

    // Validation

    try {
        if(!username || !name || !email || !password){
            return res.status(422).json({message: "All fields are Required."})
        }

        // is username repeating?
        const userNameExists = await User.findOne({username})

        if (userNameExists){
            return res.status(400).json({message: "Username already exists"});
        }

        const emailExists = await User.findOne({email})

        if (emailExists){
            return res.status(400).json({message: "Email already exists"});
        }

        if (password.length <= 6){
            return res.status(400).json({message: "Password length should be greater than 6."})
        }


        const newUser = await User.create({name, username, email, password})

        res.status(201).json(newUser)

    }
    catch(err) {
        console.error(err)
        res.status(500).json({message: "Unable to register user."})
    }
}